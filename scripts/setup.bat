@echo off
REM Travel Guide App Setup Script for Windows
REM Run this script to set up the development environment on a new computer

echo 🚀 Setting up Travel Guide App development environment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher first.
    pause
    exit /b 1
)

echo ✅ Node.js version detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Install Expo CLI globally if not already installed
expo --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📱 Installing Expo CLI globally...
    npm install -g expo-cli
) else (
    echo ✅ Expo CLI already installed
)

REM Set up environment variables if template exists
if exist "env.template" (
    if not exist ".env" (
        echo ⚙️ Setting up environment variables...
        copy env.template .env
        echo 📝 Please edit .env file with your actual values
    )
)

echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Edit .env file with your configuration (if needed)
echo 2. Run 'npm start' to begin development
echo 3. Scan the QR code with Expo Go app on your phone
pause
