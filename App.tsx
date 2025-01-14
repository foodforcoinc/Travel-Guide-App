import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingNavigator } from './src/navigation/OnboardingNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
