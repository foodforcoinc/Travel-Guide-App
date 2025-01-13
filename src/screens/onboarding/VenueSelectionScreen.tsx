import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'VenueSelection'>;

export const VenueSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  const { category, location, isSecondCategory } = route.params;

  const canProceed = selectedVenues.length > 0 && selectedVenues.length <= 7;

  const handleContinue = () => {
    if (isSecondCategory) {
      navigation.navigate('PreferenceQuestions');
    } else {
      navigation.navigate('CategoryPrompt', {
        previousCategory: category,
        location
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Select up to 7 {category} venues you enjoy in {location}
      </Text>
      
      {/* Venue selection UI will go here */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  counter: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
  },
}); 