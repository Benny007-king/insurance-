@echo off
echo ===================================================
echo   Insurance Site - Build and Start Script
echo ===================================================
echo.

echo [Step 1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Install failed.
    pause
    exit /b %errorlevel%
)

echo.
echo [Step 2/3] Building the Frontend...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed.
    pause
    exit /b %errorlevel%
)

echo.
echo [Step 3/3] Starting preview on port 3000...
:: הפקודה preview מריצה את האתר הבנוי לפי הגדרות ה-package.json שלך
call npm run preview -- --port 3000 --host 0.0.0.0
pause