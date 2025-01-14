# Travel Guide App

A React Native mobile application that connects users with curated guide personas based on shared tastes and background characteristics.

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator or Android Emulator (optional)

## Project Status

### Latest Updates
- Implemented standardized venue data structure with 25 San Francisco locations
- Completed end-to-end flow from city selection to venue selection
- Added venue filtering by location and category
- Established classification system for Food and Drinks venues
- Connected venue data to selection screens

### Development Status

✅ **Complete**
- Project Structure & Configuration
- Basic Navigation Flow
- Location & Category Selection
- Venue Type System
- Classification Taxonomy
- San Francisco Venue Dataset
- Basic Venue Selection Flow

🚧 **In Progress**
- Venue Selection UI Enhancements
  * Styling improvements
  * Filter/sort functionality
  * Selection feedback
  * Card design

⏳ **Next Up**
- Preference Questions Implementation
- Profile Generation Logic
- Scenario Selection Path
- Profile Requirements Screens

## Core Features

### User Flow
1. Location Selection [✅]
2. Category Selection (Food/Drinks) [✅]
3. Venue Selection [✅]
   - Multiple venue selection (up to 7)
   - Category switching
   - Progress tracking
4. Preference Questions [⏳]
5. Profile Generation [⏳]

### Venue System
- Standardized classification types:
  * Common: design, atmosphere, space, scene
  * Food-specific: cuisine, service, mealPeriods, specialties
  * Drinks-specific: theme
  * Price points: $$-$$$$
- Location-based filtering
- Category-based organization

## Technical Details

### Tech Stack
- React Native with Expo
- TypeScript for type safety
- React Navigation for routing
- Expo Location Services
- Custom venue classification system

### Key Dependencies
- @react-navigation/native
- @react-navigation/native-stack
- expo-location
- typescript
- react-native-safe-area-context

## Documentation
- [App Concept & Details](docs/app-idea.md)
