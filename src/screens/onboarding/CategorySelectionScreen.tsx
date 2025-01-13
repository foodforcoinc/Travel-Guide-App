import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type OnboardingStackParamList = {
  Location: undefined;
  CategorySelection: undefined;
  VenueSelection: {
    category: 'food' | 'drinks';
    location: string;
    isSecondCategory: boolean;
  };
  CategoryPrompt: undefined;
  PreferenceQuestions: undefined;
};

type Props = NativeStackScreenProps<OnboardingStackParamList, 'CategorySelection'>;

export const CategorySelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const handleCategorySelect = (category: 'food' | 'drinks') => {
    navigation.navigate('VenueSelection', {
      category,
      location: 'Current Location', // This would come from location screen
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

const styles = StyleSheet.create({/* ... */}); 