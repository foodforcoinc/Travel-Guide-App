import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'CategoryPrompt'>;

export const CategoryPromptScreen: React.FC<Props> = ({ navigation, route }) => {
  const { previousCategory, location } = route.params;
  
  const handleResponse = (wantsToContinue: boolean) => {
    if (wantsToContinue) {
      // Navigate to venue selection with the other category
      const nextCategory = previousCategory === 'food' ? 'drinks' : 'food';
      navigation.navigate('VenueSelection', {
        category: nextCategory,
        location,
        isSecondCategory: true
      });
    } else {
      // Skip to preference questions
      navigation.navigate('PreferenceQuestions');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Would you like to select some venues for the other category?
      </Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Yes, let's do it"
          onPress={() => handleResponse(true)}
        />
        <Button 
          title="No, continue"
          onPress={() => handleResponse(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    alignItems: 'center',
  },
}); 