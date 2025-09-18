# Development Setup Guide

## Quick Start for New Computer

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/foodforcoinc/Travel-Guide-App.git
   cd Travel-Guide-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Expo CLI globally** (if not already installed)
   ```bash
   npm install -g expo-cli
   ```

4. **Set up environment variables** (if needed)
   ```bash
   cp env.template .env
   # Edit .env with your actual values
   ```

5. **Start development server**
   ```bash
   npm start
   ```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

### Troubleshooting

- If you encounter issues with dependencies, try deleting `node_modules` and running `npm install` again
- For Expo issues, try clearing cache: `expo start --clear`
- Make sure you have the latest version of Node.js installed

### VS Code Setup (Optional)

For consistent development experience across computers:

1. Install VS Code
2. Install the "Settings Sync" extension
3. Sync your settings, extensions, and keybindings
4. Recommended extensions:
   - ES7+ React/Redux/React-Native snippets
   - TypeScript Importer
   - Prettier - Code formatter
