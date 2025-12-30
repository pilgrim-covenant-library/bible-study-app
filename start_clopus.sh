#!/bin/bash
# start_clopus.sh - Clopus-02 launcher for Bible Study App
# Runs autonomous Claude sessions for completing chapter summaries

PROJECT_DIR="/home/jonathan/sandbox/bible-study-app"
AUTONOMOUS_DIR="/home/jonathan/autonomous-claude"
CONFIG_FILE="$AUTONOMOUS_DIR/config/bible_study.json"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/.clopus.pid"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

export AUTONOMOUS_PROJECT="bible_study"
export AUTONOMOUS_CONFIG="$CONFIG_FILE"
export WORKING_DIR="$PROJECT_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

show_help() {
    echo -e "${BLUE}Clopus-02 Bible Study App Launcher${NC}"
    echo ""
    echo "Usage: ./start_clopus.sh [command]"
    echo ""
    echo "Commands:"
    echo "  (none)    Start in foreground (see output)"
    echo "  daemon    Start as background daemon"
    echo "  status    Check if running and show recent activity"
    echo "  stop      Stop the daemon"
    echo "  logs      Tail the log file"
    echo "  help      Show this help message"
    echo ""
    echo "Commentary Sources:"
    echo "  - Matthew Henry's Complete Commentary"
    echo "  - John Calvin's Commentaries"
    echo "  - Matthew Poole's English Annotations"
    echo "  - Albert Barnes' Notes on the Bible"
}

start_foreground() {
    echo -e "${GREEN}Starting Clopus-02 for Bible Study App...${NC}"
    echo -e "${YELLOW}Commentary sources: Matthew Henry, John Calvin, Matthew Poole, Albert Barnes${NC}"
    echo ""

    # Link bible_study.json as the active config
    ln -sf "$CONFIG_FILE" "$AUTONOMOUS_DIR/config/autonomous.json"

    cd "$AUTONOMOUS_DIR"
    python3 scripts/watcher.py start
}

start_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Clopus-02 is already running (PID: $PID)${NC}"
            return 1
        fi
    fi

    echo -e "${GREEN}Starting Clopus-02 daemon for Bible Study App...${NC}"

    # Link bible_study.json as the active config
    ln -sf "$CONFIG_FILE" "$AUTONOMOUS_DIR/config/autonomous.json"

    cd "$AUTONOMOUS_DIR"
    nohup python3 scripts/watcher.py start > "$LOG_DIR/clopus.log" 2>&1 &
    echo $! > "$PID_FILE"
    echo -e "${GREEN}Started with PID: $(cat $PID_FILE)${NC}"
    echo -e "Logs: $LOG_DIR/clopus.log"
}

check_status() {
    echo -e "${BLUE}=== Clopus-02 Bible Study Status ===${NC}"
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

    # Show recent activity
    if [ -f "$PROJECT_DIR/.autonomous_prompt.md" ]; then
        echo -e "${YELLOW}Recent Context:${NC}"
        head -20 "$PROJECT_DIR/.autonomous_prompt.md"
        echo "..."
    fi
    echo ""

    # Show last learning
    if [ -f "$PROJECT_DIR/.memory_learning.json" ]; then
        echo -e "${YELLOW}Last Learning:${NC}"
        cat "$PROJECT_DIR/.memory_learning.json"
    fi
    echo ""

    # Show completion status
    echo -e "${YELLOW}Chapter Summary Completion:${NC}"
    cd "$PROJECT_DIR"
    TOTAL_SUMMARIES=$(grep -c "bookId:" src/data/bible-chapter-summaries.ts 2>/dev/null || echo "0")
    echo "Total chapter summaries: $TOTAL_SUMMARIES"
}

stop_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Stopping Clopus-02 (PID: $PID)...${NC}"
            kill "$PID"
            rm -f "$PID_FILE"
            echo -e "${GREEN}Stopped${NC}"
        else
            echo -e "${YELLOW}Process not running, cleaning up PID file${NC}"
            rm -f "$PID_FILE"
        fi
    else
        echo -e "${YELLOW}Clopus-02 is not running${NC}"
    fi
}

tail_logs() {
    if [ -f "$LOG_DIR/clopus.log" ]; then
        tail -f "$LOG_DIR/clopus.log"
    else
        echo -e "${YELLOW}No log file found at $LOG_DIR/clopus.log${NC}"
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
    help|--help|-h)
        show_help
        ;;
    *)
        start_foreground
        ;;
esac
