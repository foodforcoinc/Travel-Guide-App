# Travel Guide App

## Core Concept
A travel app that connects users with curated guide personas based on shared tastes and background characteristics. Users build trust through meaningful matches, then can access detailed city guides from personas they resonate with.

## Implementation Status

### Current Phase: User Onboarding & Profile Creation ✅
Successfully implemented core venue selection functionality with comprehensive dataset.

### Completed ✅
1. Location Selection
2. Category Selection
3. Venue Selection Flow
   - Basic UI implementation
   - Filtering system
   - Comprehensive venue dataset
   - Complete classification system
4. San Francisco Dataset
   - 38 curated venues
   - Full coverage of all cuisine & drink types
   - Detailed classifications for each venue

### In Progress 🚧
1. Optional Follow-up Questions
2. Profile Generation Logic

### Technical Implementation Details
- Complete TypeScript type system for venues
- Structured classification system including:
  - DrinkTheme
  - Cuisine
  - Atmosphere
  - Design
  - Space
  - Scene
  - Service
  - Features
  - MealPeriod
  - Specialty
  - Price
- Consistent data structure across all venues

## Core User Flow Stages

### 1. User Onboarding & Profile Creation ⏳ [Partially Complete]

#### Quick Start Options

##### Path 1: Venue Selection ✅ [Implemented]
1. Location Selection [Implemented]
2. Category Selection [Implemented]
3. Venue Selection Process [Implemented]
   - Select up to 7 venues
   - Filter by venue type
   - Clear progress indicator
   - Navigation between categories
   - Dataset of 38 San Francisco venues
   Next Steps:
   - Enhance venue cards with additional details
   - Add sorting capabilities
   - Improve selection feedback

4. Optional Follow-up 🚧 [Next Focus]
   - After ALL selections are made, ONE general question:
     "What usually draws you to places like these? (choose up to 3)"
     * Atmosphere/vibe
     * Food/drink quality
     * Service style
     * Location
     * Value
     * Unique experience

5. Profile Generation ⏳ [Pending]
   - Analyze selected venues
   - Identify common/recurring tags
   - Create initial preference profile
   - Display abstract "vibe check" results

##### Path 2: Scenario Selection ⏳ [Pending]
1. Travel Style Questions
   - "When exploring a new city, do you prefer..."
   - "Your ideal travel recommendations come from..."
   - "When traveling, you're most interested in..."

2. Venue Preferences

   Single-Select Questions
   - "For a night out, you typically prefer..."
     * High-energy bars/clubs
     * Casual neighborhood spots
     * Upscale cocktail bars
     * Dive bars with character

   - "Your favorite restaurants tend to be..."
     * Casual neighborhood spots
     * Trendy new places
     * Classic establishments
     * Quick, local favorites

   - "Your go-to lunch spots are usually..."
     * Quick counter service places
     * Casual cafes
     * Sit-down restaurants
     * Grab and go spots

   - "For coffee/tea, you prefer..."
     * Busy downtown cafes
     * Quiet neighborhood spots
     * Quick grab and go places
     * Cozy hangout spots

   - "For special occasions, you look for..."
     * Trendy hotspots
     * Classic fine dining
     * Neighborhood gems
     * Unique experiences

   - "When meeting friends, you suggest..."
     * Lively bars with food
     * Casual restaurants
     * Coffee/tea spots
     * Beer gardens/patios

   Multi-Select Questions
   - "Select your favorite types of cuisine (choose up to 5)"
     * [List of cuisine types]

   - "What kinds of bars do you gravitate toward? (select all that apply)"
     * [List of bar types]

   - "What makes a place become one of your favorites? (choose up to 4)"
     * Great food/drinks
     * Perfect atmosphere
     * Friendly staff
     * Good value
     * Unique experience
     * Consistent quality
     * Location
     * The crowd/scene

3. Profile Generation
   - Map responses to venue tags
   - Create initial preference profile
   - Display "vibe check" results

#### Profile Requirements ⏳ [Pending]

##### Core Required Elements
1. Account Basics
   - Username/Display name
   - Age (verified 18+)
   - Primary Contact (Email OR Phone)
   - Secondary Contact (optional)

2. Personal Considerations
   - Dietary restrictions/preferences
   - Accessibility needs
   - Food allergies
   - Mobility requirements

##### Optional Profile Elements
Purpose:
These optional elements enhance the app's ability to connect users with guides who share similar backgrounds, experiences, or identities. By sharing this information, users receive more personally relevant recommendations, helping them find spaces where they'll feel welcomed, comfortable, and connected to community.

Elements:
- Personal identifiers (private)
  * Gender Identity
  * Cultural Background/Ethnicity
  * Languages
  * LGBTQ+ Identity
  * Accessibility Needs
  * Age Range
  * Family Travel (children/pets)

### 2. Persona Alignment/Matching ⏳ [Future Phase]

#### Guide Persona Structure
1. Venue Collection
   - Their curated spots
   - Personal recommendations
   - Insider tips

2. Personal Preferences
   - Naturally derived from their venue selections
   - Reflected in their recommendations
   - Shown through their choices, not labels
   
3. Matching Logic
   - Primary: Direct venue overlap
   - Secondary: Pattern matching from choices
   - Tertiary: Implicit style preferences

#### Multi-City Handling
1. Guide Discovery
   - Guides are location-specific
   - Users can see all cities where matched persona offers guides
   - Helps plan future travel/guide purchases

2. Purchase Model
   - Primary: Single location guide purchase
   - Potential: All-access option

#### Match Display
Public Display:
- Show match percentage to users
- Venue Overlap Indicators
- Number of Background Alignments
- Common Interests

Private Display (User Only):
- Detailed Taste Alignment
- Background Connection Points

Never Shown:
- Specific personal information about guide
- Actual values of matching fields
- Private guide details

### 3. Right Now Flow ⏳ [Future Phase]

#### Core Assumptions
1. User Assumptions
   - User has completed account creation and profile setup
   - User has completed basic profile requirements
   - User has already matched with one or more guide personas
   - User has purchased access to at least one guide
   - User is seeking immediate recommendations
   - Users have basic familiarity with mobile apps
   - Users are currently in supported cities
   - Users value personalized recommendations
   - Users prefer quality over quantity in recommendations
   - Users appreciate authentic, local insights

2. Technical Assumptions
   - Users have reliable internet connectivity
   - Device location services are available
   - App can handle concurrent user sessions
   - Real-time venue data updates are possible
   - Cache management for offline access
   - Access to user's purchase history and guide permissions
   - Current location is available and verified within service area

3. Content Assumptions
   - Venues have consistent operating hours
   - Basic venue information is accurate and updated
   - Guide personas maintain active profiles
   - Sufficient venue variety exists per category
   - Content moderation is manageable
   - Guides have provided sufficient recommendations for immediate needs
   - Recommendations can be filtered based on current availability

#### Implementation
1. Initial Question: "Looking for something specific?"
2. Dynamic Questions Based on Selection
3. Location/Transport Options

#### Results Navigation
- All matching recommendations remain accessible
- Easy filtering/sorting of results
- No need to restart flow for additional options
- Quick return to previous recommendations

### 4. Venue Classification System ✅ [Implemented]
- Complete classification system implemented
- Applied to San Francisco venue dataset
- Supporting both Food and Drinks venues
- Includes all shared and specific classifications

## Technical Notes
- Using React Native with Expo
- TypeScript for type safety
- Navigation using @react-navigation/native
- Location services using expo-location
- Structured around functional components with hooks