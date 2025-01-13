import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'VenueSelection'>;

export const VenueSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  const { category, location, isSecondCategory } = route.params;

  const canProceed = selectedVenues.length > 0 && selectedVenues.length <= 7;

  const handleContinue = () => {
    if (isSecondCategory) {
      // Both categories completed, move to preference questions
      navigation.navigate('PreferenceQuestions');
    } else {
      // First category completed, prompt for second category
      navigation.navigate('CategoryPrompt');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Select up to 7 {category} venues you enjoy in {location}
      </Text>
      
      {/* Venue selection UI */}
      
      <Text style={styles.counter}>
        {selectedVenues.length}/7 venues selected
      </Text>

      {canProceed && (
        <Button 
          title="Continue"
          onPress={handleContinue}
        />
      )}
    </View>
  );
}; 