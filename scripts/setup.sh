#!/bin/bash

# Travel Guide App Setup Script
# Run this script to set up the development environment on a new computer

echo "🚀 Setting up Travel Guide App development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js version $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install Expo CLI globally if not already installed
if ! command -v expo &> /dev/null; then
    echo "📱 Installing Expo CLI globally..."
    npm install -g expo-cli
else
    echo "✅ Expo CLI already installed"
fi

# Set up environment variables if template exists
if [ -f "env.template" ] && [ ! -f ".env" ]; then
    echo "⚙️ Setting up environment variables..."
    cp env.template .env
    echo "📝 Please edit .env file with your actual values"
fi

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your configuration (if needed)"
echo "2. Run 'npm start' to begin development"
echo "3. Scan the QR code with Expo Go app on your phone"
