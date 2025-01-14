import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'CategorySelection'>;

export const CategorySelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const { location } = route.params;

  const handleCategorySelect = (category: 'food' | 'drinks') => {
    navigation.navigate('VenueSelection', {
      category,
      location,
      isSecondCategory: false
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What would you like to explore in {location}?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleCategorySelect('food')}
        >
          <Text style={styles.buttonText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleCategorySelect('drinks')}
        >
          <Text style={styles.buttonText}>Drinks</Text>
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
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 