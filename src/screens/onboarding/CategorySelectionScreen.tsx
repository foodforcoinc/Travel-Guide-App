import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
      <Text style={styles.header}>What would you like to explore first?</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Food"
          onPress={() => handleCategorySelect('food')}
        />
        <Button 
          title="Drinks"
          onPress={() => handleCategorySelect('drinks')}
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
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    alignItems: 'center',
  },
}); 