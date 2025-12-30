#!/usr/bin/env python3
"""
Bible Study App Dashboard
=========================
Live monitoring dashboard for the Bible Study App and its autonomous agents.
Shows real-time status, logs, and embeds the app preview.
"""

import os
import json
import subprocess
import threading
import time
from datetime import datetime
from pathlib import Path
from flask import Flask, render_template, jsonify, Response
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'bible-study-dashboard-secret'
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')

# Paths
PROJECT_DIR = Path("/home/jonathan/sandbox/bible-study-app")
LOG_DIR = PROJECT_DIR / "logs"
SUMMARIES_FILE = PROJECT_DIR / "src/data/bible-chapter-summaries.ts"

# Agent PID files
MAIN_AGENT_PID = PROJECT_DIR / ".clopus.pid"
QA_MONITOR_PID = PROJECT_DIR / ".qa_monitor.pid"
QA_STATE_FILE = PROJECT_DIR / ".qa_state.json"

# App preview port (Next.js dev server)
APP_PREVIEW_PORT = 3000


def get_process_status(pid_file: Path) -> dict:
    """Check if a process is running from its PID file."""
    if not pid_file.exists():
        return {"running": False, "pid": None}

    try:
        pid = int(pid_file.read_text().strip())
        # Check if process is running
        result = subprocess.run(["ps", "-p", str(pid)], capture_output=True)
        running = result.returncode == 0
        return {"running": running, "pid": pid if running else None}
    except:
        return {"running": False, "pid": None}


def get_summary_stats() -> dict:
    """Get statistics about chapter summaries."""
    if not SUMMARIES_FILE.exists():
        return {"total": 0, "books": 0}

    content = SUMMARIES_FILE.read_text()
    summary_count = content.count("bookId:")
    book_count = content.count("bookName:")
    case_count = content.count("case '")

    return {
        "total_summaries": summary_count,
        "books_in_export": book_count,
        "switch_cases": case_count
    }


def get_qa_state() -> dict:
    """Get QA monitor state."""
    if not QA_STATE_FILE.exists():
        return {
            "checks_run": 0,
            "issues_found": 0,
            "issues_fixed": 0,
            "last_check": None
        }

    try:
        with open(QA_STATE_FILE) as f:
            return json.load(f)
    except:
        return {"checks_run": 0, "issues_found": 0, "issues_fixed": 0}


def tail_log(log_file: Path, lines: int = 50) -> list:
    """Get last N lines from a log file."""
    if not log_file.exists():
        return []

    try:
        result = subprocess.run(
            ["tail", "-n", str(lines), str(log_file)],
            capture_output=True,
            text=True
        )
        return result.stdout.strip().split('\n') if result.stdout else []
    except:
        return []


def run_health_check() -> dict:
    """Run a quick health check."""
    results = {}

    # TypeScript check
    try:
        result = subprocess.run(
            "npx tsc --noEmit 2>&1 | head -5",
            shell=True,
            cwd=PROJECT_DIR,
            capture_output=True,
            text=True,
            timeout=30
        )
        results["typescript"] = {
            "ok": "error" not in result.stdout.lower(),
            "output": result.stdout[:200]
        }
    except:
        results["typescript"] = {"ok": False, "output": "Check failed"}

    # Lint check
    try:
        result = subprocess.run(
            "npm run lint 2>&1 | tail -5",
            shell=True,
            cwd=PROJECT_DIR,
            capture_output=True,
            text=True,
            timeout=30
        )
        has_errors = "error" in result.stdout.lower() and "0 errors" not in result.stdout.lower()
        results["lint"] = {
            "ok": not has_errors,
            "output": result.stdout[:200]
        }
    except:
        results["lint"] = {"ok": False, "output": "Check failed"}

    return results


@app.route('/')
def index():
    """Main dashboard page."""
    return render_template('index.html')


@app.route('/api/status')
def api_status():
    """Get current status of all agents and app."""
    main_agent = get_process_status(MAIN_AGENT_PID)
    qa_monitor = get_process_status(QA_MONITOR_PID)
    summary_stats = get_summary_stats()
    qa_state = get_qa_state()

    # Check if Next.js dev server is running
    try:
        result = subprocess.run(
            f"lsof -i :{APP_PREVIEW_PORT} | grep LISTEN",
            shell=True,
            capture_output=True
        )
        app_running = result.returncode == 0
    except:
        app_running = False

    return jsonify({
        "timestamp": datetime.now().isoformat(),
        "main_agent": main_agent,
        "qa_monitor": qa_monitor,
        "app_preview": {
            "running": app_running,
            "port": APP_PREVIEW_PORT,
            "url": f"http://localhost:{APP_PREVIEW_PORT}"
        },
        "summary_stats": summary_stats,
        "qa_state": qa_state
    })


@app.route('/api/logs/<log_type>')
def api_logs(log_type):
    """Get logs for a specific agent."""
    log_files = {
        "main": LOG_DIR / "clopus.log",
        "qa": LOG_DIR / "qa_monitor.log"
    }

    if log_type not in log_files:
        return jsonify({"error": "Invalid log type"}), 400

    lines = tail_log(log_files[log_type], 100)
    return jsonify({"lines": lines})


@app.route('/api/health')
def api_health():
    """Run health checks."""
    return jsonify(run_health_check())


@app.route('/api/start-app')
def api_start_app():
    """Start the Next.js dev server."""
    try:
        subprocess.Popen(
            "npm run dev",
            shell=True,
            cwd=PROJECT_DIR,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        return jsonify({"success": True, "message": "App starting..."})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


def log_watcher(log_file: Path, event_name: str):
    """Watch a log file and emit new lines via WebSocket."""
    if not log_file.exists():
        return

    with open(log_file, 'r') as f:
        # Seek to end
        f.seek(0, 2)

        while True:
            line = f.readline()
            if line:
                socketio.emit(event_name, {"line": line.strip()})
            else:
                time.sleep(0.5)


@socketio.on('connect')
def handle_connect():
    """Handle WebSocket connection."""
    emit('connected', {'status': 'Dashboard connected'})


@socketio.on('subscribe_logs')
def handle_subscribe_logs(data):
    """Subscribe to log updates."""
    log_type = data.get('type', 'main')
    log_files = {
        "main": LOG_DIR / "clopus.log",
        "qa": LOG_DIR / "qa_monitor.log"
    }

    if log_type in log_files:
        # Send initial log content
        lines = tail_log(log_files[log_type], 50)
        emit('log_history', {'type': log_type, 'lines': lines})


# Background task to periodically emit status updates
def status_broadcaster():
    """Broadcast status updates every 5 seconds."""
    while True:
        try:
            main_agent = get_process_status(MAIN_AGENT_PID)
            qa_monitor = get_process_status(QA_MONITOR_PID)
            summary_stats = get_summary_stats()
            qa_state = get_qa_state()

            socketio.emit('status_update', {
                "timestamp": datetime.now().isoformat(),
                "main_agent": main_agent,
                "qa_monitor": qa_monitor,
                "summary_stats": summary_stats,
                "qa_state": qa_state
            })
        except Exception as e:
            print(f"Status broadcast error: {e}")

        time.sleep(5)


if __name__ == '__main__':
    # Start background status broadcaster
    socketio.start_background_task(status_broadcaster)

    # Start log watchers
    socketio.start_background_task(log_watcher, LOG_DIR / "clopus.log", "main_log")
    socketio.start_background_task(log_watcher, LOG_DIR / "qa_monitor.log", "qa_log")

    print("=" * 60)
    print("BIBLE STUDY APP DASHBOARD")
    print("=" * 60)
    print(f"Dashboard: http://localhost:5050")
    print(f"App Preview: http://localhost:{APP_PREVIEW_PORT}")
    print("=" * 60)

    socketio.run(app, host='0.0.0.0', port=5050, debug=False, allow_unsafe_werkzeug=True)
