# Travel Guide App

## Core Concept
A travel app that connects users with curated guide personas based on shared tastes and background characteristics. Users build trust through meaningful matches, then can access detailed city guides from personas they resonate with.

## Current Status
* Phase: Onboarding Flow Implementation
* Focus: User Journey Implementation
* Documentation: See `/docs/app-idea.md` for detailed specifications

## Current Development
1. Onboarding Flow
   * Location selection with geolocation
   * Category selection (Food/Drinks)
   * Venue selection system
   * Navigation structure

2. Type System
   * Venue classification taxonomy
   * Shared venue characteristics
   * Guide detail tags
   * TypeScript interfaces

3. Next Steps
   * Implement venue selection UI components
   * Create preference questions screen
   * Add progress indicators to onboarding
   * Build profile generation logic

## Project Structure
src/
├── navigation/
│   └── OnboardingNavigator.tsx
├── screens/
│   └── onboarding/
│       ├── LocationSelectionScreen.tsx
│       ├── CategorySelectionScreen.tsx
│       ├── VenueSelectionScreen.tsx
│       └── CategoryPromptScreen.tsx
└── types/
    └── venue.ts

## Documentation
* Core Documentation: `/docs/app-idea.md`
* Project Board: [Link to project board]
* Current Issues: See GitHub Issues tab

## Getting Started
For detailed information about the project:
1. Review the documentation in `/docs/app-idea.md`
2. Check the project board for current priorities
3. See issues for specific development tasks 