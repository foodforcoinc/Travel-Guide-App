import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'CategoryPrompt'>;

export const CategoryPromptScreen: React.FC<Props> = ({ navigation, route }) => {
  const { firstCategoryVenues } = route.params;
  const previousCategory = firstCategoryVenues[0]?.category.toLowerCase() as 'food' | 'drinks';

  const handleResponse = (wantsToContinue: boolean) => {
    if (wantsToContinue) {
      // Navigate to venue selection with the other category
      const nextCategory = previousCategory === 'food' ? 'drinks' : 'food';
      navigation.navigate('VenueSelection', {
        category: nextCategory,
        location: 'Current Location', // Would be preserved from before
        isSecondCategory: true
      });
    } else {
      // Skip to preference questions
      navigation.navigate('PreferenceQuestions', {
        selectedVenues: firstCategoryVenues
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Would you like to select some venues for the other category?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}
          onPress={() => handleResponse(true)}
        >
          <Text style={{ color: 'white' }}>Yes, let's do it</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}
          onPress={() => handleResponse(false)}
        >
          <Text style={{ color: 'white' }}>No, continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 10,
  },
}); 