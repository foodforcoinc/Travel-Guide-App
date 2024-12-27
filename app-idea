# Travel Guide App

## Core Concept
A travel app that connects users with curated guide personas based on shared tastes and background characteristics. Users build trust through meaningful matches, then can access detailed city guides from personas they resonate with.

## Core User Flow Stages

### 1. User Onboarding & Profile Creation
- App download and account creation
- Brief app purpose overview

#### Minimum Requirements ("Quick Start")
- Personal identity information (core required fields TBD)
- Basic preference questionnaire
  * General taste indicators (e.g., "quiet cocktail bar vs. busy dive")
  * Not city-specific
  * Focus on universal preferences
  * Minimum number of responses TBD

#### Profile Completion
- Visual progress bar showing completion percentage
- Dynamic match quality indicator
  * Shows potential match improvement as profile is completed
  * Updates in real-time as more sections are filled out
  * Demonstrates value of complete profile

#### Profile Elements
- Personal identifiers (private)
  * Gender Identity
  * Cultural Background/Ethnicity
  * Languages
  * LGBTQ+ Identity
  * Accessibility Needs
  * Age Range
  * Family Travel (children/pets)
- Taste alignment indicators
  * Dining style preferences
  * Activity preferences
  * Travel style alignment
  * Specific favorite spots
- Multiple quiz types
- City-specific preference questions
- Location-based responses
- Optional personality/type indicators

#### Incentives
- Match quality improvements visible during profile completion
- Potential first persona match discount at certain completion threshold
- Progress tracking visible throughout onboarding

#### UI Components
- Profile completion progress bar
- Dynamic match quality indicator
- Profile section cards
- Quiz interface elements

### 2. Persona Alignment/Matching

#### Multi-City Handling
1. Guide Discovery
   - Guides are location-specific
   - Users can see all cities where matched persona offers guides
   - Helps plan future travel/guide purchases

2. Purchase Model
   - Primary: Single location guide purchase
     * Access to one persona's guide for one city
     * Location-specific pricing
   - Potential: All-access option
     * Access to all guides from a single persona
     * For frequent travelers who align well with a specific guide

3. City Selection
   - Simple location switcher
   - Shows only personas with guides for selected city
   - Maintains match percentages but filters for availability

#### Match Display
Public Display:
- Show match percentage to users (e.g., "85% Match")
- Number of Background Alignments
- Shared Favorite Spots
- Common Interests

Private Display (User Only):
- Detailed Taste Alignment
  * Dining style match %
  * Activity preferences match %
  * Travel style alignment %
  * Specific shared favorite spots
- Background Connection Points
  * "You match on: Gender Identity, Cultural Background, Age Range"
  * "You share interests in: Astrology, Myers-Briggs"
  * Total number of matching points

Never Shown:
- Specific personal information about guide
- Actual values of matching fields
- Private guide details

#### Trial Experience
- Limited "Right Now" flow (one complete recommendation)
- Preview selection of guide locations
  * Sample venues/activities
  * Without full context/timing details
  * Demonstrates guide's taste/style
- Helps users evaluate guide fit before purchase

#### UI Components
- Match percentage display
- Background alignment cards
- Guide preview interface
- City selection interface

### 3. Right Now Flow

#### Assumptions
1. User Assumptions
- User already has matched with/purchased guide(s)
- User is looking for immediate recommendations
- User is actively out and about
- User can navigate basic filtering options

2. Technical Assumptions
- Recommendations can be filtered in real-time
- Location services are enabled and accurate
- Venue database is current
- Session state maintains filter selections

3. Content Assumptions
- Venues have accurate operating hours
- Sufficient venue options exist per filter combination
- Recommendations account for current time/day
- Tags and filters cover all common scenarios

4. UX Assumptions
- Users can easily modify/return to filters
- Initial results appear with minimal filtering
- Navigation between options is intuitive
- Match quality indicators are clear

#### Core Filters
"Let's find something for you to do right now..."
- Group Size?
- Any special requirements? (kids/pets/accessibility)
- Essential characteristics

#### Dynamic Questions
"What kind of experience are you looking for?"
- Food
- Coffee
- Drinks
- Activities
[Can select multiple]

Branching Questions Based on Selections:
IF COFFEE SELECTED:
- "What kind of coffee spot are you looking for?"
  * Quick coffee to go
  * Coffee shop to work/hang
  * Specialty coffee
  * [etc.]

- "Any specific preferences?"
  * Quiet space
  * Work-friendly
  * Meeting spot
  * Outdoor seating
  * [etc.]

IF FOOD SELECTED:
- "What are you craving?"
  * Mexican/Tex-Mex
  * Asian (or specific: Thai, Japanese, etc.)
  * Pizza
  * Burgers
  * BBQ
  * Vegetarian/Vegan
  * [etc.]
- "Any preferences for the spot?"
  * Restaurant
  * Food Truck
  * Counter Service
  * Full Service
  * [etc.]

IF DRINKS SELECTED:
- "What's your drink style?"
  * Craft Cocktails
  * Local Brewery
  * Wine Bar
  * Coffee/Tea
  * Dive Bar
  * Tiki
  * [etc.]

IF ACTIVITIES SELECTED:
- "What kind of activity interests you?"
  * Outdoor
  * Arts/Culture
  * Live Music
  * Shopping
  * [etc.]

Location/Transport:
"How far do you want to go?"
- Walking distance
- Short ride
- Anywhere in city
[Shows map with radius]

Vibe Check:
"What kind of atmosphere are you looking for?"
[Only relevant options based on previous selections]
- Lively vs. Chill
- Casual vs. Upscale
[etc.]

#### Results Navigation
- All matching recommendations remain accessible
- Easy filtering/sorting of results
- No need to restart flow for additional options
- Quick return to previous recommendations

#### Result Categories
1. Best Matches
   - Perfect fit for all selected criteria
2. Good Matches
   - Meets most important criteria
3. Other Options
   - Meets some criteria
   - Alternative suggestions

#### Technical Note
- Cache user's flow responses
- Allow quick modification of filters
- Maintain session state for easy browsing

#### UI Components
##### Venue Card Layout
- **Background Image**: Venue photo (blurred/dimmed)
  
##### Overlay Elements
- **Venue Name**: "Café XYZ"
  - Font: Bold, large size, contrasting color
- **Icons**: 
  - Positioned at the bottom or top of the card
  - Example: [🍽️] [☕] [🍹]
  
- **Word Tags**: 
  - Positioned below the venue name
  - Example: "Busy" | "$" | "Casual"
  - Font: Smaller size, legible color

##### Filter Interface
- Core filter selection
- Dynamic question cards
- Results navigation
- Map view components

## Technical Implementation

### Database Structure
#### Core Attributes
1. Basic Information
   - Type (Food, Drinks, Activity, etc.)
   - Location/Area
   - Price range
   - Hours
   - Indoor/Outdoor options

2. Atmosphere
   - Energy level (Quiet to Lively)
   - Noise level
   - Typical crowd
   - Overall vibe
   - Dress code/style

3. Special Considerations
   - Kid-friendly
   - Pet-friendly
   - Accessibility features
   - Group size limitations
   - Reservation requirements

4. Guide Context
   - Guide's notes/tips
   - Best times to visit
   - Related recommendations
   - Insider knowledge

#### Tagging System
1. Experience Tags
   - TBD, either descriptive of the vibe, offerings, gimmick, or draw of the venue

2. Activity Tags
   - Quick Visit
   - Leisurely Experience
   - Special Occasion
   - Casual Hangout
   - Group Activity
   - Solo-Friendly

3. Seasonal/Timing Tags
   - Seasonal Activities
   - Weather Dependent
   - Time-Specific Events
   - Peak Hours
   - Off-Peak Specials

##### Potential Venue Card Design
- **Background Image**: Venue photo (blurred/dimmed)
  
##### Overlay Elements
- **Venue Name**: "Café XYZ"
  - Font: Bold, large size, contrasting color
- **Icons**: 
  - Positioned at the bottom or top of the card
  - Example: [🍽️] [☕] [🍹]
  
- **Word Tags**: 
  - Positioned below the venue name
  - Example: "Busy" | "$" | "Casual"
  - Font: Smaller size, legible color

### UI Components
#### Profile Creation Components
[Move relevant UI components here]

#### Matching Display Components
[Move relevant UI components here]

#### Right Now Flow Components
[Current Venue Card Layout content]
- Card Design
- Overlay Elements

## TODO Next Steps
### Prototype Development
- [PRIORITY] Define MVP profile requirements
- [PRIORITY] Create basic matching system
- [PRIORITY] Build Right Now flow MVP

### Documentation Updates
- ✅ Clarify Right Now flow definition and scope
- ✅ Document assumptions for Right Now feature
- ✅ Define user journey specifics
- [FUTURE] Distinguish from other travel apps

### Next Session Goals
1. Define specific MVP requirements for each core feature
2. Create prototype user flow diagrams
3. Begin technical implementation planning

## Future Phase Features
- Trip Planning
- Visit Tracking
- User Generated Content
- Local Engagement
- Social Features

## References
- GitHub Repository: https://github.com/foodforcoinc/Travel-Guide-App
- Flow Inspiration: https://philome.la/Coinc/sxsw-twine/play/index.html