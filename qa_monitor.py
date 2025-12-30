#!/usr/bin/env python3
"""
Bible Study App QA Monitor
===========================
Lightweight continuous monitoring agent that runs alongside the main
chapter summaries agent. Detects and fixes bugs in real-time.

Uses Claude Code to fix issues when detected.
"""

import subprocess
import time
import json
import os
import sys
import signal
import logging
from datetime import datetime
from pathlib import Path
from typing import Optional, List, Tuple

# Configuration
PROJECT_DIR = Path("/home/jonathan/sandbox/bible-study-app")
LOG_DIR = PROJECT_DIR / "logs"
LOG_FILE = LOG_DIR / "qa_monitor.log"
STATE_FILE = PROJECT_DIR / ".qa_state.json"
SUMMARIES_FILE = PROJECT_DIR / "src/data/bible-chapter-summaries.ts"

# Monitoring intervals
CHECK_INTERVAL = 120  # seconds between checks
FIX_TIMEOUT = 300     # max seconds for Claude to fix an issue

# Ensure directories
LOG_DIR.mkdir(parents=True, exist_ok=True)

# Logging setup
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s',
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


class QAState:
    """Track QA monitoring state."""

    def __init__(self):
        self.state = self._load()

    def _load(self) -> dict:
        if STATE_FILE.exists():
            with open(STATE_FILE) as f:
                return json.load(f)
        return {
            "checks_run": 0,
            "issues_found": 0,
            "issues_fixed": 0,
            "last_check": None,
            "last_issue": None,
            "last_fix": None
        }

    def save(self):
        with open(STATE_FILE, "w") as f:
            json.dump(self.state, f, indent=2, default=str)

    def record_check(self):
        self.state["checks_run"] += 1
        self.state["last_check"] = datetime.now().isoformat()
        self.save()

    def record_issue(self, issue: str):
        self.state["issues_found"] += 1
        self.state["last_issue"] = issue
        self.save()

    def record_fix(self, fix: str):
        self.state["issues_fixed"] += 1
        self.state["last_fix"] = fix
        self.save()


class HealthChecker:
    """Run health checks on the Bible Study App."""

    def __init__(self):
        self.project_dir = PROJECT_DIR

    def run_command(self, cmd: str, timeout: int = 60) -> Tuple[bool, str]:
        """Run a command and return (success, output)."""
        try:
            result = subprocess.run(
                cmd,
                shell=True,
                cwd=self.project_dir,
                capture_output=True,
                text=True,
                timeout=timeout
            )
            output = result.stdout + result.stderr
            return result.returncode == 0, output
        except subprocess.TimeoutExpired:
            return False, "Command timed out"
        except Exception as e:
            return False, str(e)

    def check_typescript(self) -> Tuple[bool, str]:
        """Check for TypeScript errors."""
        logger.info("Running TypeScript check...")
        success, output = self.run_command("npx tsc --noEmit 2>&1")
        if not success and "error TS" in output:
            # Extract just the errors
            errors = [line for line in output.split('\n') if 'error TS' in line]
            return False, f"TypeScript errors:\n" + "\n".join(errors[:10])
        return True, "TypeScript OK"

    def check_lint(self) -> Tuple[bool, str]:
        """Check for ESLint errors."""
        logger.info("Running lint check...")
        success, output = self.run_command("npm run lint 2>&1")
        if not success:
            return False, f"Lint errors:\n{output[-1000:]}"
        return True, "Lint OK"

    def check_build(self) -> Tuple[bool, str]:
        """Check if the project builds."""
        logger.info("Running build check...")
        success, output = self.run_command("npm run build 2>&1", timeout=120)
        if not success:
            return False, f"Build failed:\n{output[-1500:]}"
        return True, "Build OK"

    def check_structure(self) -> Tuple[bool, str]:
        """Check bible-chapter-summaries.ts structure."""
        logger.info("Checking file structure...")

        if not SUMMARIES_FILE.exists():
            return False, "bible-chapter-summaries.ts not found!"

        content = SUMMARIES_FILE.read_text()
        issues = []

        # Count summaries
        summary_count = content.count("bookId:")

        # Check for common issues
        if "case 'romans':" not in content and "ROMANS_CHAPTERS" in content:
            issues.append("Romans missing from switch statement")

        if "{ bookId: 'romans'" in content and "bookName: 'Romans'" not in content:
            issues.append("Romans missing from ALL_CHAPTER_SUMMARIES export")

        # Check for syntax issues
        if content.count('[') != content.count(']'):
            issues.append("Mismatched brackets")

        if content.count('{') != content.count('}'):
            issues.append("Mismatched braces")

        if issues:
            return False, "Structure issues:\n" + "\n".join(issues)

        return True, f"Structure OK ({summary_count} summaries)"

    def run_all_checks(self) -> List[Tuple[str, bool, str]]:
        """Run all health checks."""
        results = []

        # Quick checks first
        results.append(("structure", *self.check_structure()))
        results.append(("typescript", *self.check_typescript()))
        results.append(("lint", *self.check_lint()))

        # Only run build if other checks pass
        if all(r[1] for r in results):
            results.append(("build", *self.check_build()))

        return results


class IssueFixer:
    """Use Claude Code to fix detected issues."""

    def __init__(self):
        self.project_dir = PROJECT_DIR

    def fix_issue(self, issue_type: str, issue_details: str) -> bool:
        """Launch Claude Code to fix an issue."""
        logger.info(f"Attempting to fix {issue_type} issue...")

        prompt = f"""You are the QA Monitor for the Bible Study App.

An issue was detected that needs to be fixed:

**Issue Type:** {issue_type}
**Details:**
{issue_details}

**Your task:**
1. Analyze the error/issue
2. Fix it in the codebase
3. Verify the fix by running the appropriate check command
4. Do NOT add new chapter summaries - only fix bugs

**Key file:** src/data/bible-chapter-summaries.ts

**Common fixes:**
- Missing comma between array elements
- Unclosed string (unescaped quotes in text)
- Missing book in switch statement
- Missing book in ALL_CHAPTER_SUMMARIES export
- TypeScript type errors in ChapterSummary objects

Fix this issue now. Be surgical - only change what's necessary.
"""

        try:
            result = subprocess.run(
                ["claude", "--dangerously-skip-permissions", "-p", prompt],
                cwd=self.project_dir,
                capture_output=True,
                text=True,
                timeout=FIX_TIMEOUT
            )

            if result.returncode == 0:
                logger.info(f"Claude completed fix attempt for {issue_type}")
                return True
            else:
                logger.error(f"Claude fix failed: {result.stderr[:500]}")
                return False

        except subprocess.TimeoutExpired:
            logger.error("Claude fix timed out")
            return False
        except Exception as e:
            logger.error(f"Error running Claude: {e}")
            return False


class QAMonitor:
    """Main QA monitoring loop."""

    def __init__(self):
        self.running = False
        self.project_dir = PROJECT_DIR
        self.state = QAState()
        self.checker = HealthChecker()
        self.fixer = IssueFixer()

        # Handle signals
        signal.signal(signal.SIGINT, self._handle_signal)
        signal.signal(signal.SIGTERM, self._handle_signal)

    def _handle_signal(self, signum, frame):
        logger.info(f"Received signal {signum}, stopping...")
        self.running = False

    def run_once(self) -> bool:
        """Run a single check cycle. Returns True if all healthy."""
        logger.info("=" * 50)
        logger.info("Running health checks...")

        self.state.record_check()
        results = self.checker.run_all_checks()

        all_healthy = True
        for check_name, success, message in results:
            status = "✓" if success else "✗"
            logger.info(f"  {status} {check_name}: {message[:100]}")

            if not success:
                all_healthy = False
                self.state.record_issue(f"{check_name}: {message[:200]}")

                # Attempt fix
                logger.info(f"Attempting to fix {check_name} issue...")
                if self.fixer.fix_issue(check_name, message):
                    self.state.record_fix(f"Fixed {check_name}")
                    logger.info(f"Fix attempted for {check_name}")
                else:
                    logger.warning(f"Could not fix {check_name}")

        if all_healthy:
            logger.info("All checks passed!")

        return all_healthy

    def run(self):
        """Main monitoring loop."""
        self.running = True

        logger.info("=" * 60)
        logger.info("BIBLE STUDY APP QA MONITOR STARTING")
        logger.info(f"Project: {self.project_dir}")
        logger.info(f"Check interval: {CHECK_INTERVAL}s")
        logger.info("=" * 60)

        while self.running:
            try:
                self.run_once()

                if not self.running:
                    break

                logger.info(f"Next check in {CHECK_INTERVAL}s...")
                time.sleep(CHECK_INTERVAL)

            except Exception as e:
                logger.error(f"Monitor error: {e}")
                time.sleep(30)  # Brief pause on error

        logger.info("QA Monitor stopped")
        self._print_summary()

    def _print_summary(self):
        logger.info("=" * 60)
        logger.info("QA MONITOR SUMMARY")
        logger.info(f"Checks run: {self.state.state['checks_run']}")
        logger.info(f"Issues found: {self.state.state['issues_found']}")
        logger.info(f"Issues fixed: {self.state.state['issues_fixed']}")
        logger.info("=" * 60)


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Bible Study App QA Monitor")
    parser.add_argument("command", choices=["start", "check", "status"],
                       help="Command to run")
    args = parser.parse_args()

    if args.command == "start":
        monitor = QAMonitor()
        monitor.run()

    elif args.command == "check":
        monitor = QAMonitor()
        monitor.run_once()

    elif args.command == "status":
        state = QAState()
        print("\n=== QA Monitor Status ===")
        print(f"Checks run: {state.state['checks_run']}")
        print(f"Issues found: {state.state['issues_found']}")
        print(f"Issues fixed: {state.state['issues_fixed']}")
        print(f"Last check: {state.state['last_check']}")
        print(f"Last issue: {state.state['last_issue']}")
        print(f"Last fix: {state.state['last_fix']}")
        print()


if __name__ == "__main__":
    main()
