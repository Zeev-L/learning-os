#!/usr/bin/env bash
# install-schedule.sh — מתקין את התזמון השבועי (launchd). הרצה: bash scripts/install-schedule.sh
set -euo pipefail
SRC="$HOME/Desktop/learning-os/com.zeev.learningos.plist"
DEST="$HOME/Library/LaunchAgents/com.zeev.learningos.plist"
cp "$SRC" "$DEST"
launchctl unload "$DEST" 2>/dev/null || true
launchctl load "$DEST"
echo "✓ מתוזמן: רענון אוטומטי כל יום ראשון ב-08:00 (המחשב צריך להיות דלוק; אם ישן — ירוץ בהתעוררות)."
echo "  לוג ריצות: ~/Desktop/learning-os/auto-refresh.log"
echo "  להסרה:     launchctl unload \"$DEST\""
