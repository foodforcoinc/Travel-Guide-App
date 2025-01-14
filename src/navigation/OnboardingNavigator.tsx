import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VenueType } from '../types/venue';

import { LocationSelectionScreen } from '../screens/onboarding/LocationSelectionScreen';
import { CategorySelectionScreen } from '../screens/onboarding/CategorySelectionScreen';
import { VenueSelectionScreen } from '../screens/onboarding/VenueSelectionScreen';
import { CategoryPromptScreen } from '../screens/onboarding/CategoryPromptScreen';
import { PreferenceQuestionsScreen } from '../screens/onboarding/PreferenceQuestionsScreen';

export type OnboardingStackParamList = {
  Location: undefined;
  CategorySelection: { location: string };
  VenueSelection: {
    category: 'food' | 'drinks';
    location: string;
    isSecondCategory: boolean;
  };
  CategoryPrompt: {
    firstCategoryVenues: VenueType[];
  };
  PreferenceQuestions: {
    selectedVenues: VenueType[];
  };
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false, // Prevent back swipe during onboarding
      }}
    >
      <Stack.Screen name="Location" component={LocationSelectionScreen} />
      <Stack.Screen name="CategorySelection" component={CategorySelectionScreen} />
      <Stack.Screen name="VenueSelection" component={VenueSelectionScreen} />
      <Stack.Screen name="CategoryPrompt" component={CategoryPromptScreen} />
      <Stack.Screen name="PreferenceQuestions" component={PreferenceQuestionsScreen} />
    </Stack.Navigator>
  );
}; 