#!/usr/bin/env bash
# auto-refresh.sh — רענון שבועי אוטומטי של ה-Digest דרך Claude Code headless (בלי מפתח API).
# מופעל ע"י launchd (com.zeev.learningos.plist). בדיקה ידנית: bash scripts/auto-refresh.sh
set -uo pipefail
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"   # launchd מריץ עם PATH מינימלי — צריך node+claude+gh

# מזהה את מיקום ה-repo מהסקריפט עצמו — עובד בכל נתיב/יוזר/מכונה
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG="$REPO/auto-refresh.log"
cd "$REPO" || { echo "no repo at $REPO" >&2; exit 1; }

{
  echo "===================== $(date) — auto-refresh start ====================="
  git pull --quiet 2>&1 || echo "git pull warn"
  # claude headless: מבצע את כל הרענון לפי ההנחיה, כולל commit+push
  claude -p "$(cat "$REPO/scripts/refresh-prompt.md")" --dangerously-skip-permissions 2>&1
  echo "===================== $(date) — auto-refresh done ======================"
  echo ""
} >> "$LOG" 2>&1
