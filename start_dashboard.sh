#!/bin/bash
# start_dashboard.sh - Bible Study App Dashboard
# Live monitoring dashboard for the app and autonomous agents

PROJECT_DIR="/home/jonathan/sandbox/bible-study-app"
DASHBOARD_DIR="$PROJECT_DIR/dashboard"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/.dashboard.pid"

mkdir -p "$LOG_DIR"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

show_help() {
    echo -e "${CYAN}Bible Study App Dashboard${NC}"
    echo ""
    echo "Usage: ./start_dashboard.sh [command]"
    echo ""
    echo "Commands:"
    echo "  (none)    Start dashboard in foreground"
    echo "  daemon    Start as background daemon"
    echo "  stop      Stop the dashboard"
    echo "  status    Check if running"
    echo "  install   Install Python dependencies"
    echo "  help      Show this help"
    echo ""
    echo "Dashboard URL: http://localhost:5050"
}

install_deps() {
    echo -e "${CYAN}Installing dashboard dependencies...${NC}"
    pip3 install -r "$DASHBOARD_DIR/requirements.txt"
    echo -e "${GREEN}Dependencies installed${NC}"
}

start_foreground() {
    echo -e "${CYAN}Starting Bible Study App Dashboard...${NC}"
    echo -e "${YELLOW}Dashboard: http://localhost:5050${NC}"
    echo ""
    cd "$DASHBOARD_DIR"
    python3 app.py
}

start_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Dashboard is already running (PID: $PID)${NC}"
            return 1
        fi
    fi

    echo -e "${CYAN}Starting Dashboard daemon...${NC}"
    cd "$DASHBOARD_DIR"
    nohup python3 app.py > "$LOG_DIR/dashboard.log" 2>&1 &
    echo $! > "$PID_FILE"
    echo -e "${GREEN}Started with PID: $(cat $PID_FILE)${NC}"
    echo -e "Dashboard: ${CYAN}http://localhost:5050${NC}"
    echo -e "Logs: $LOG_DIR/dashboard.log"
}

check_status() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "Dashboard: ${GREEN}RUNNING${NC} (PID: $PID)"
            echo -e "URL: ${CYAN}http://localhost:5050${NC}"
        else
            echo -e "Dashboard: ${RED}STOPPED${NC} (stale PID)"
        fi
    else
        echo -e "Dashboard: ${RED}STOPPED${NC}"
    fi
}

stop_daemon() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}Stopping Dashboard (PID: $PID)...${NC}"
            kill "$PID"
            rm -f "$PID_FILE"
            echo -e "${GREEN}Stopped${NC}"
        else
            echo -e "${YELLOW}Process not running, cleaning up${NC}"
            rm -f "$PID_FILE"
        fi
    else
        echo -e "${YELLOW}Dashboard is not running${NC}"
    fi
}

case "${1:-}" in
    daemon)
        start_daemon
        ;;
    stop)
        stop_daemon
        ;;
    status)
        check_status
        ;;
    install)
        install_deps
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        start_foreground
        ;;
esac
