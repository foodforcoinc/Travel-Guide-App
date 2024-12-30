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

#### Profile Development
- Visual progress bar showing completion percentage
- Dynamic match quality indicator
- Multiple quiz types
- City-specific preference questions
- Location-based responses

#### Taste alignment indicators
  * Dining style preferences
  * Activity preferences
  * Travel style alignment
  * Specific favorite spots

#### Incentives
- Match quality improvements visible during profile completion
- Potential first persona match discount at certain completion threshold
- Progress tracking visible throughout onboarding

#### UI Components
- Profile completion progress bar
- Dynamic match quality indicator
- Profile section cards
- Quiz interface elements

#### Account Creation Requirements
1. Primary Contact (Required)
   - Email OR Phone Number
   - Must be verified
   - Used for authentication

2. Secondary Contact (Optional)
   - Email OR Phone Number
   - Can be added later
   - Additional recovery option

3. Basic Information
   - Username/Display name
   - Age verification
     * Required: 18+ to create account
     * Stored in profile for recommendation filtering
     * Used to filter age-restricted venues (21+ in US)
     * Affects drink recommendations
   - Terms acceptance

[Note: Location is not required at signup - can be detected for Right Now flow or selected for trip planning]

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

#### UI Components
- Match percentage display
- Background alignment cards
- Guide preview interface
- City selection interface

### 3. Right Now Flow

#### Core Assumptions
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

#### Implementation
1. Initial Question: "Looking for something specific?"
2. Dynamic Questions Based on Selection:
   - Food
   - Coffee
   - Drinks
   - Activities
   [Can select multiple]

3. Location/Transport:
   "How far do you want to go?"
   - Walking distance
   - Short ride
   - Anywhere in city
   [Shows map with radius]

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

#### Profile Requirements

##### Core Required Elements
1. Account Basics (from sign-up)
   - Username/Display name
   - Age (verified 18+)
   - Primary Contact (Email OR Phone)
   - Secondary Contact (optional)

2. Personal Considerations
   - Dietary restrictions/preferences
   - Accessibility needs
   - Food allergies
   - Mobility requirements

##### Profile Development
1. Quick Start Questionnaire
   - Location-based choices (e.g., "Pick your favorite spots in [city]")
   - Scenario-based preferences (e.g., "For a night out, would you rather...")
   - Visual choice sets (e.g., "Which of these spaces appeals to you most?")

[Note: Basic preferences (dining style, activity level, budget, atmosphere) are derived from questionnaire responses and Right Now flow choices rather than direct input]

#### Recommended Profile Elements

##### Purpose
These optional elements enhance the app's ability to connect users with guides who share similar backgrounds, experiences, or identities. By sharing this information, users receive more personally relevant recommendations, helping them find spaces where they'll feel welcomed, comfortable, and connected to community. This information is always private, optional, and used solely to improve guide matching and recommendation relevance.

##### Identity & Community Elements (Optional)
1. Cultural Background
2. Gender Identity
3. Orientation
4. Languages Spoken

##### Fun Extras (Optional)
- Astrological Sign
- Myers-Briggs Type
- Enneagram Number
- Other personality indicators

[Note: All recommended elements are private, optional, and used only for matching and recommendation purposes. Interests and preferences are determined through questionnaire responses and app usage rather than explicit declaration. Fun Extras provide additional matching points for interested users but are not core to the matching algorithm.]

#### Venue Tagging System

##### Theme/Concept Tags
Primary venue identity/focus:
- Speakeasy
- Tiki
- Sports bar
- Brewery
- Wine bar
- Gastropub
- Cocktail lounge
- Pub
- Dive
- Jazz club
- Piano bar

##### Design Tags
Physical aesthetic/decor:
- Industrial
- Vintage
- Modern
- Upscale
- Casual

##### Atmosphere Tags
- Cozy
- Intimate
- Lively
- Quiet conversation
- Loud/energetic
- Dimly lit
- Bright
- Moody
- Sophisticated
- Communal
- Private
- Spacious
- Rowdy
- Chill
- Romantic

##### Features/Activities Tags
- Pool table
- Arcade
- Game room
- Dancing
- Live music
- Karaoke
- Trivia night

##### Space Characteristics
- Rooftop
- Underground
- Outdoor seating
- Patio
- Beer garden

##### Scene/Crowd Tags
- College crowd
- Industry hangout
- Local hangout
- LGBTQ+
- Date spot
- Late-night

##### Right Now Flow Implementation
1. Initial Question: "Looking for something specific?"
2. For each category, show only options that match existing selections within the current guide
3. Users can skip any category to see all options
4. Results update dynamically based on selections

##### Price Point
- $ (Budget-friendly)
- $$ (Mid-range)
- $$$ (High-end)
- $$$$ (Special occasion)

##### Portion Style
- Small plates
- Shareable
- Family style
- Individual portions
- Tasting menu

##### Special Considerations
- Gluten-free options
- Dairy-free options
- Vegetarian-friendly
- Vegan-friendly
- Allergy-conscious
- Halal
- Kosher

##### Meal Periods
- Breakfast/Brunch
- Lunch
- Dinner
- Late-night
- All-day

##### Specialties
- House-made pasta
- Wood-fired pizza
- Fresh seafood
- Craft burgers
- Seasonal menu
- Raw bar
- Dim sum
- Omakase
- Tableside preparation

"Looking for something specific?"
- Cuisine Type
- Service Style
- Space Type
- Design/Atmosphere basics

Guide makers can specify:
- Price Point
- Portion Style
- Special Considerations
- Meal Periods
- Specialties

### 4. Venue Classification System

#### Bar/Nightlife Venues
##### Theme/Concept
- Speakeasy
- Tiki
- Sports bar
- Brewery
- Wine bar
- Gastropub
- Cocktail lounge
- Pub
- Dive
- Jazz club
- Piano bar

##### Design
- Industrial
- Vintage
- Modern
- Upscale
- Casual

##### Atmosphere
- Cozy
- Intimate
- Lively
- Quiet conversation
- Loud/energetic
- Dimly lit
- Bright
- Moody
- Sophisticated
- Communal
- Private
- Spacious
- Rowdy
- Chill
- Romantic

##### Features/Activities
- Pool table
- Arcade
- Game room
- Dancing
- Live music
- Karaoke
- Trivia night

##### Space Characteristics
- Rooftop
- Underground
- Outdoor seating
- Patio
- Beer garden

##### Scene/Crowd
- College crowd
- Industry hangout
- Local hangout
- LGBTQ+
- Date spot
- Late-night

#### Restaurant Venues
##### Cuisine Type
- American
- Italian
- Mexican
- Chinese
- Japanese
- Thai
- Indian
- Mediterranean
- French
- Korean
- Vietnamese
- BBQ
- Seafood
- Steakhouse
- Vegetarian/Vegan
- Fusion

##### Service Style
- Fine dining
- Casual dining
- Fast casual
- Counter service
- Full service

##### Space Type
- Traditional restaurant
- Food truck
- Pop-up
- Cafe
- Bistro

#### Guide Detail Tags
##### Price Point
- $ (Budget-friendly)
- $$ (Mid-range)
- $$$ (High-end)
- $$$$ (Special occasion)

##### Portion Style
- Small plates
- Shareable
- Family style
- Individual portions
- Tasting menu

##### Special Considerations
- Gluten-free options
- Dairy-free options
- Vegetarian-friendly
- Vegan-friendly
- Allergy-conscious
- Halal
- Kosher

##### Meal Periods
- Breakfast/Brunch
- Lunch
- Dinner
- Late-night
- All-day

##### Specialties
- House-made pasta
- Wood-fired pizza
- Fresh seafood
- Craft burgers
- Seasonal menu
- Raw bar
- Dim sum
- Omakase
- Tableside preparation

#### Right Now Flow Implementation
1. Initial Question: "Looking for something specific?"
2. For bars:
   - Theme/Concept selection
   - Design/Atmosphere preferences
   - Features/Activities interests
3. For restaurants:
   - Cuisine Type selection
   - Service Style preferences
   - Space Type preferences
4. Results update dynamically based on selections
5. Guide details surface in results for additional filtering

### 5. Technical Implementation

#### Database Structure
##### Venue Data
1. Core Information
   - Name
   - Location/Area
   - Hours
   - Contact details
   - Photos

2. Classification Tags
   - Theme/Concept tags
   - Design tags
   - Atmosphere tags
   - Features/Activities
   - Space characteristics
   - Scene/Crowd tags

3. Guide Details
   - Price point
   - Special considerations
   - Meal periods (for restaurants)
   - Specialties
   - Guide's notes/tips
   - Best times to visit
   - Related recommendations

##### User Data
1. Profile Information
   - Account basics
   - Personal identifiers (private)
   - Questionnaire responses
   - Guide purchases/access

2. Preferences
   - Derived from questionnaires
   - Updated through usage
   - Location-specific choices

#### UI Components
##### Right Now Flow
- Initial question card
- Filter selection interface
- Location radius selector
- Results display

##### Venue Cards
- Background Image (blurred/dimmed)
- Venue name
- Primary tags/icons
- Quick-view details
- Match indicators

### 6. Future Phase Features
- Trip Planning: Extend Right Now flow for future dates
- Visit Tracking: Personal history and recommendations
- Guide Creation Tools: Interface for creating and managing guides
- Social Features: Sharing and collaboration options

### 7. TODO Next Steps
#### Immediate Priority
- [PRIORITY] Define MVP questionnaire format
- [PRIORITY] Design Right Now flow UI
- [PRIORITY] Develop venue tagging interface

#### Next Phase
- Create guide maker tools
- Build recommendation engine
- Design profile completion flow

#### Documentation
- Document questionnaire structure
- Detail matching algorithm
- Define guide creation process

### 8. References
- GitHub Repository: https://github.com/foodforcoinc/Travel-Guide-App
- Project Board: [Link to project board]
- Current Issues: See GitHub Issues tab
- Flow Inspiration: https://philome.la/Coinc/sxsw-twine/play/index.html