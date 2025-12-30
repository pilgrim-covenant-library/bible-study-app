#!/bin/bash
# start_clopus.sh - Clopus-02 launcher for Bible Study App
# Runs autonomous Claude sessions for completing chapter summaries

PROJECT_DIR="/home/jonathan/sandbox/bible-study-app"
AUTONOMOUS_DIR="/home/jonathan/autonomous-claude"
CONFIG_FILE="$AUTONOMOUS_DIR/config/bible_study.json"
WATCHER_CONFIG_FILE="$AUTONOMOUS_DIR/config/bible_study_scraper.json"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/.clopus.pid"
WATCHER_PID_FILE="$PROJECT_DIR/.clopus-watcher.pid"

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
    echo "  watcher   Start WATCHER mode to monitor AI scraper (detect only)"
    echo "  status    Check if running and show recent activity"
    echo "  stop      Stop the daemon"
    echo "  logs      Tail the log file"
    echo "  scraper   Show AI scraper status"
    echo "  help      Show this help message"
    echo ""
    echo "Commentary Sources:"
    echo "  - Matthew Henry's Complete Commentary"
    echo "  - John Calvin's Commentaries"
    echo "  - Matthew Poole's English Annotations"
    echo "  - Albert Barnes' Notes on the Bible"
}

start_watcher() {
    if [ -f "$WATCHER_PID_FILE" ]; then
        PID=$(cat "$WATCHER_PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Clopus-02 WATCHER is already running (PID: $PID)${NC}"
            return 1
        fi
    fi

    echo -e "${GREEN}Starting Clopus-02 in WATCHER MODE...${NC}"
    echo -e "${YELLOW}Mode: Detect + Recommend (NO auto-fixes)${NC}"
    echo -e "${BLUE}Monitoring: AI scraper at /tmp/ai-scraper.log${NC}"
    echo ""

    # Link watcher config as the active config
    ln -sf "$WATCHER_CONFIG_FILE" "$AUTONOMOUS_DIR/config/autonomous.json"
    export CLOPUS_MODE="watcher"

    cd "$AUTONOMOUS_DIR"
    nohup python3 scripts/watcher.py start > "$LOG_DIR/clopus-watcher.log" 2>&1 &
    echo $! > "$WATCHER_PID_FILE"
    echo -e "${GREEN}Started with PID: $(cat $WATCHER_PID_FILE)${NC}"
    echo -e "Logs: $LOG_DIR/clopus-watcher.log"
}

show_scraper_status() {
    echo -e "${BLUE}=== AI Scraper Status ===${NC}"
    echo ""

    # Check scraper log
    if [ -f "/tmp/ai-scraper.log" ]; then
        LINES=$(wc -l < /tmp/ai-scraper.log)
        echo -e "Log file: ${GREEN}/tmp/ai-scraper.log${NC} ($LINES lines)"
        echo ""

        # Count completed chapters (lines with "✓ AI summary")
        COMPLETED=$(grep -c "✓ AI summary" /tmp/ai-scraper.log 2>/dev/null || echo "0")
        TOTAL_EXPECTED=$((1189 * 4))  # 1189 chapters × 4 commentators
        PERCENT=$(echo "scale=1; $COMPLETED * 100 / $TOTAL_EXPECTED" | bc)

        echo -e "Progress: ${GREEN}$COMPLETED${NC} / $TOTAL_EXPECTED summaries ($PERCENT%)"
        echo ""

        # Show last 15 lines
        echo -e "${YELLOW}Recent activity:${NC}"
        tail -15 /tmp/ai-scraper.log
    else
        echo -e "${RED}No scraper log found at /tmp/ai-scraper.log${NC}"
    fi
    echo ""

    # Show output files
    echo -e "${YELLOW}Output files:${NC}"
    ls -la "$PROJECT_DIR/scripts/commentary-scraper/output/"*.json 2>/dev/null || echo "No output files yet"
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
    watcher)
        start_watcher
        ;;
    status)
        check_status
        ;;
    stop)
        stop_daemon
        # Also stop watcher if running
        if [ -f "$WATCHER_PID_FILE" ]; then
            PID=$(cat "$WATCHER_PID_FILE")
            if ps -p "$PID" > /dev/null 2>&1; then
                echo -e "${YELLOW}Also stopping watcher (PID: $PID)...${NC}"
                kill "$PID"
                rm -f "$WATCHER_PID_FILE"
            fi
        fi
        ;;
    logs)
        tail_logs
        ;;
    scraper)
        show_scraper_status
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        start_foreground
        ;;
esac
