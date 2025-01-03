# Travel Guide App

## Core Concept
A travel app that connects users with curated guide personas based on shared tastes and background characteristics. Users build trust through meaningful matches, then can access detailed city guides from personas they resonate with.

## Core User Flow Stages

### 1. User Onboarding & Profile Creation
- App download and account creation
- Brief app purpose overview

#### Quick Start Options

##### Path 1: Venue Selection
1. Location Selection
   - Default to user's current location (if permitted)
   - Option to select from available guide cities
   - Must be a city where guides exist

2. Category Selection
   - Simple choice: Food or Drinks
   - One category at a time, can repeat for other category

3. Venue Selection Process
   - Select up to 7 venues
   - Simple, quick selection interface
   - Clear progress indicator
   - Easy to add/remove selections
   - Able to filter/order venues based on different criteria (bar/cuisine type, alphabetical, distance, atmosphere, etc.)

4. Optional Follow-up
   - After ALL selections are made, ONE general question:
     "What usually draws you to places like these? (choose up to 3)"
     * Atmosphere/vibe
     * Food/drink quality
     * Service style
     * Location
     * Value
     * Unique experience

5. Profile Generation
   - Analyze selected venues
   - Identify common/recurring tags
   - Create initial preference profile
   - Display abstract "vibe check" results

##### Path 2: Scenario Selection
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

   - "What feature gets you most excited about a bar?"
     * Great patio/outdoor space
     * Live music setup
     * Games (pool, darts, etc.)
     * Craft beer selection
     * Creative cocktail program
     * Wine list
     * Bar seating

   - "What catches your eye most in a restaurant?"
     * Open kitchen
     * Outdoor seating
     * Private booths
     * Communal tables
     * Counter dining
     * View/location
     * Unique design/space

   - "Which matters more to you in a venue?"
     * People watching spot
     * Hidden/private feeling
     * Room to move around
     * Cozy/intimate space
     * Good for groups
     * Bar scene
     * Quiet corners

   Multi-Select Questions
   - "Select your favorite types of cuisine (choose up to 5)"
     * Italian
     * Japanese
     * Mexican
     * Thai
     * Indian
     * Mediterranean
     * French
     * Korean
     * Vietnamese
     * BBQ
     * [etc. from cuisine types]

   - "What kinds of bars do you gravitate toward? (select all that apply)"
     * Wine bars
     * Craft breweries
     * Cocktail lounges
     * Dive bars
     * Sports bars
     * Speakeasies
     * Jazz clubs
     * [etc. from bar types]

   - "What makes a place become one of your favorites? (choose up to 4)"
     * Great food/drinks
     * Perfect atmosphere
     * Friendly staff
     * Good value
     * Unique experience
     * Consistent quality
     * Location
     * The crowd/scene

   - "What catches your interest in a new spot? (choose up to 3)"
     * Friend recommendations
     * Interesting menu/drinks
     * Cool space/design
     * Local favorite
     * Something unique
     * Good reviews

3. Profile Generation
   - Map responses to venue tags
   - Create initial preference profile
   - Display "vibe check" results

#### Next Steps (Both Paths)
- Option to try other Quick Start path
- Preview potential guide matches
- Complete additional profile sections

#### Profile Requirements

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
These optional elements enhance the app's ability to connect users with guides who share similar backgrounds, experiences, or identities. By sharing this information, users receive more personally relevant recommendations, helping them find spaces where they'll feel welcomed, comfortable, and connected to community. This information is always private, optional, and used solely to improve guide matching and recommendation relevance.

Elements:
- Personal identifiers (private)
  * Gender Identity
  * Cultural Background/Ethnicity
  * Languages
  * LGBTQ+ Identity
  * Accessibility Needs
  * Age Range
  * Family Travel (children/pets)

[Note: All optional elements are private, used only for matching and recommendation purposes. Fun extras like Astrological Sign, Myers-Briggs Type, etc. provide additional matching points for interested users but are not core to the matching algorithm.]

##### Profile Development
- Visual progress bar showing completion percentage
- Dynamic match quality indicator
- Multiple quiz types
- City-specific preference questions
- Location-based responses

[Note: Basic preferences (dining style, activity level, budget, atmosphere) are derived from questionnaire responses and Right Now flow choices rather than direct input]

### 2. Persona Alignment/Matching

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
     * Recurring atmospheres in selections
     * Consistent features across venues
     * Price point patterns
   - Tertiary: Implicit style preferences
     * Not "wine expert" but "often recommends wine bars"
     * Not "foodie" but "values unique dining experiences"
     * Not "party person" but "knows the high-energy spots"

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
- Venue Overlap Indicators:
  * "Picked 4 of the same places in Chicago as you"
  * "Shares your taste in Nashville dive bars"
  * "Loves the same NYC coffee shops"
- Number of Background Alignments
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

## Prototype Development Requirements

### Priority 1: Core Venue System
1. Basic Venue Parameters
   - Minimum required fields:
     * Name
     * Type (Food/Drinks/Both)
     * Location (City, Area)
     * Price Point ($-$$$$)
     * Primary Tags (3-5)
     * Secondary Tags (up to 5)
   
   - Initial Scale:
     * 2-3 cities
     * 30-50 venues per city
     * Even distribution across types
     * Natural price point spread

2. Tag System Rules
   - Primary Categories:
     * Atmosphere
     * Type/Style
     * Features
     * Scene
   - Maximum tags per category
   - Required category coverage

### Priority 2: Basic Persona Framework
1. Initial Guide Structure
   - 3-5 guides per city
   - 10-15 venues per guide
   - Must include mix of:
     * Food venues
     * Drink venues
     * Price points
     * Areas/neighborhoods

2. Preference System
   - Core preference indicators
   - Tag weight distribution
   - Variation allowance
   - Cross-venue patterns

### Priority 3: Profile Generation
1. Quick Start Response Mapping
   - Tag assignment rules
   - Weight by question type
   - Minimum data points needed
   - Profile completion metrics

2. Match Calculation
   - Direct venue overlap value
   - Preference pattern matching
   - Minimum match threshold
   - Display requirements

### Priority 4: Extended Features
1. Additional Cities
2. More Complex Patterns
3. Profile Updates
4. Refined Matching

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

### UI Components
#### Venue Card Layout
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

## Future Phase Features
- Trip Planning: Extend Right Now flow for future dates
- Visit Tracking: Personal history and recommendations
- Guide Creation Tools: Interface for creating and managing guides
- Social Features: Sharing and collaboration options

## References
- GitHub Repository: https://github.com/foodforcoinc/Travel-Guide-App
- Project Board: [Link to project board]
- Current Issues: See GitHub Issues tab
- Flow Inspiration: https://philome.la/Coinc/sxsw-twine/play/index.html