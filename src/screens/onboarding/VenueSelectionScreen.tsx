import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { VenueCard } from '../../components/VenueSelection/VenueCard';
import type { VenueType } from '../../types/venue';
import { getVenuesByLocationAndCategory } from '../../data/venueData';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'VenueSelection'>;

export const VenueSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const [selectedVenues, setSelectedVenues] = useState<VenueType[]>([]);
  const [venues, setVenues] = useState<VenueType[]>([]);
  const { category, location, isSecondCategory } = route.params;

  useEffect(() => {
    const properCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const venueData = getVenuesByLocationAndCategory(location, properCategory as 'Food' | 'Drinks');
    console.log(`Found ${venueData.length} venues for ${location} - ${properCategory}`);
    setVenues(venueData);
  }, [category, location]);

  const handleVenueSelect = (venue: VenueType) => {
    setSelectedVenues(current => {
      const isSelected = current.some(v => v.id === venue.id);
      if (isSelected) {
        return current.filter(v => v.id !== venue.id);
      }
      if (current.length < 7) {
        return [...current, venue];
      }
      return current;
    });
  };

  const canProceed = selectedVenues.length > 0;

  const handleContinue = () => {
    if (isSecondCategory) {
      navigation.navigate('PreferenceQuestions', {
        selectedVenues: selectedVenues
      });
    } else {
      navigation.navigate('CategoryPrompt', {
        firstCategoryVenues: selectedVenues
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Select up to 7 {category} venues you enjoy in {location}
      </Text>
      
      <Text style={styles.counter}>
        {selectedVenues.length}/7 venues selected
      </Text>

      <FlatList
        data={venues} // We'll need to add venue data
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <VenueCard
            venue={item}
            isSelected={selectedVenues.some(v => v.id === item.id)}
            onSelect={handleVenueSelect}
          />
        )}
      />
      {canProceed && (
        <TouchableOpacity 
          style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}
          onPress={handleContinue}
        >
          <Text style={{ color: 'white' }}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  counter: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
}); 