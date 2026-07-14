#!/usr/bin/env bash
# install-schedule.sh — מתקין תזמון שבועי (launchd). מייצר את ה-plist דינמית לפי היוזר/הנתיב —
# עובד בכל מכונה/יוזר בלי עריכה. הרצה: bash scripts/install-schedule.sh
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"   # מיקום ה-repo (מהסקריפט)
LABEL="com.zeev.learningos"
DEST="$HOME/Library/LaunchAgents/$LABEL.plist"
mkdir -p "$HOME/Library/LaunchAgents"

cat > "$DEST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$REPO/scripts/auto-refresh.sh</string>
  </array>
  <key>WorkingDirectory</key><string>$REPO</string>
  <key>StartCalendarInterval</key>
  <dict><key>Weekday</key><integer>0</integer><key>Hour</key><integer>8</integer><key>Minute</key><integer>0</integer></dict>
  <key>StandardOutPath</key><string>$REPO/auto-refresh.log</string>
  <key>StandardErrorPath</key><string>$REPO/auto-refresh.log</string>
</dict>
</plist>
PLIST

launchctl unload "$DEST" 2>/dev/null || true
launchctl load "$DEST"
echo "✓ מתוזמן: רענון אוטומטי כל יום ראשון ב-08:00 (המחשב צריך להיות דלוק)."
echo "  repo: $REPO"
echo "  לוג:  $REPO/auto-refresh.log"
echo "  להסרה: launchctl unload \"$DEST\" && rm \"$DEST\""
