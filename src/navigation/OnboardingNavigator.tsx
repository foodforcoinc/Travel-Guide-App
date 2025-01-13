import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    previousCategory: 'food' | 'drinks';
    location: string;
  };
  PreferenceQuestions: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
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