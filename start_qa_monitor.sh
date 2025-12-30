#!/bin/bash
# start_qa_monitor.sh - Clopus-02 QA Monitor for Bible Study App
# Runs alongside main agent to continuously test and fix bugs

PROJECT_DIR="/home/jonathan/sandbox/bible-study-app"
AUTONOMOUS_DIR="/home/jonathan/autonomous-claude"
CONFIG_FILE="$AUTONOMOUS_DIR/config/bible_study_qa.json"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/.qa_monitor.pid"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

export AUTONOMOUS_PROJECT="bible_study_qa"
export AUTONOMOUS_CONFIG="$CONFIG_FILE"
export WORKING_DIR="$PROJECT_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

show_help() {
    echo -e "${CYAN}Clopus-02 QA Monitor - Bible Study App${NC}"
    echo ""
    echo "Usage: ./start_qa_monitor.sh [command]"
    echo ""
    echo "Commands:"
    echo "  (none)    Start in foreground (see output)"
    echo "  daemon    Start as background daemon"
    echo "  status    Check if running and show health"
    echo "  stop      Stop the monitor"
    echo "  logs      Tail the log file"
    echo "  test      Run a quick health check now"
    echo "  help      Show this help message"
    echo ""
    echo "This monitor runs alongside the main chapter summaries agent."
    echo "It continuously tests the app and fixes any bugs found."
}

run_health_check() {
    echo -e "${CYAN}=== Quick Health Check ===${NC}"
    echo ""

    cd "$PROJECT_DIR"

    # TypeScript check
    echo -e "${YELLOW}TypeScript Check:${NC}"
    if npx tsc --noEmit 2>&1 | head -20; then
        echo -e "${GREEN}✓ TypeScript OK${NC}"
    else
        echo -e "${RED}✗ TypeScript errors found${NC}"
    fi
    echo ""

    # Lint check
    echo -e "${YELLOW}Lint Check:${NC}"
    if npm run lint 2>&1 | tail -10; then
        echo -e "${GREEN}✓ Lint OK${NC}"
    else
        echo -e "${RED}✗ Lint errors found${NC}"
    fi
    echo ""

    # Structure check
    echo -e "${YELLOW}Structure Check:${NC}"
    SUMMARY_COUNT=$(grep -c "bookId:" src/data/bible-chapter-summaries.ts 2>/dev/null || echo "0")
    BOOK_COUNT=$(grep -c "bookName:" src/data/bible-chapter-summaries.ts 2>/dev/null || echo "0")
    CASE_COUNT=$(grep -c "case '" src/data/bible-chapter-summaries.ts 2>/dev/null || echo "0")
    echo "  Chapter summaries: $SUMMARY_COUNT"
    echo "  Books in export: $BOOK_COUNT"
    echo "  Switch cases: $CASE_COUNT"
}

start_foreground() {
    echo -e "${CYAN}Starting Clopus-02 QA Monitor...${NC}"
    echo -e "${YELLOW}Mode: Continuous testing and bug fixing${NC}"
    echo ""

    cd "$PROJECT_DIR"
    python3 qa_monitor.py start
}

start_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}QA Monitor is already running (PID: $PID)${NC}"
            return 1
        fi
    fi

    echo -e "${CYAN}Starting Clopus-02 QA Monitor daemon...${NC}"

    cd "$PROJECT_DIR"
    nohup python3 qa_monitor.py start > "$LOG_DIR/qa_monitor.log" 2>&1 &
    echo $! > "$PID_FILE"
    echo -e "${GREEN}Started with PID: $(cat $PID_FILE)${NC}"
    echo -e "Logs: $LOG_DIR/qa_monitor.log"
}

check_status() {
    echo -e "${CYAN}=== Clopus-02 QA Monitor Status ===${NC}"
    echo ""

    # Check if running
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "Status: ${GREEN}RUNNING${NC} (PID: $PID)"
        else
            echo -e "Status: ${RED}STOPPED${NC} (stale PID file)"
        fi
    else
        echo -e "Status: ${RED}STOPPED${NC}"
    fi
    echo ""

    # Quick health summary
    run_health_check
}

stop_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Stopping QA Monitor (PID: $PID)...${NC}"
            kill "$PID"
            rm -f "$PID_FILE"
            echo -e "${GREEN}Stopped${NC}"
        else
            echo -e "${YELLOW}Process not running, cleaning up PID file${NC}"
            rm -f "$PID_FILE"
        fi
    else
        echo -e "${YELLOW}QA Monitor is not running${NC}"
    fi
}

tail_logs() {
    if [ -f "$LOG_DIR/qa_monitor.log" ]; then
        tail -f "$LOG_DIR/qa_monitor.log"
    else
        echo -e "${YELLOW}No log file found at $LOG_DIR/qa_monitor.log${NC}"
    fi
}

# Main command handling
case "${1:-}" in
    daemon)
        start_daemon
        ;;
    status)
        check_status
        ;;
    stop)
        stop_daemon
        ;;
    logs)
        tail_logs
        ;;
    test)
        run_health_check
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        start_foreground
        ;;
esac
