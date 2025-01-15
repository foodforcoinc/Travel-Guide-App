import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { VenueCard } from '../../components/VenueSelection/VenueCard';
import { SearchBar } from '../../components/VenueSelection/Filters/SearchBar';
import { SortingControls, SortOrder } from '../../components/VenueSelection/Filters/SortingControls';
import { TypeFilter } from '../../components/VenueSelection/Filters/TypeFilter';
import type { VenueType } from '../../types/venue';
import { getVenuesByLocationAndCategory } from '../../data/venueData';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'VenueSelection'>;

export const VenueSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const [selectedVenues, setSelectedVenues] = useState<VenueType[]>([]);
  const [venues, setVenues] = useState<VenueType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const { category, location, isSecondCategory } = route.params;

  useEffect(() => {
    const properCategory = category.charAt(0).toUpperCase() + category.slice(1) as 'Food' | 'Drinks';
    const venueData = getVenuesByLocationAndCategory(location, properCategory);
    console.log('Loaded venues:', venueData.length);
    setVenues(venueData);
  }, [category, location]);

  const displayedVenues = useMemo(() => {
    let filtered = [...venues];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(venue => 
        venue.name.toLowerCase().includes(query)
      );
    }

    // Updated type filtering for multiple selections
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(venue => {
        const types = category.toLowerCase() === 'drinks' 
          ? venue.classifications.theme 
          : venue.classifications.cuisine;
        return types?.some(type => selectedTypes.includes(type));
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [venues, searchQuery, selectedTypes, sortOrder, category]);

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

  const handleTypeSelect = (type: string) => {
    if (type === 'all') {
      setSelectedTypes([]);
      return;
    }
    
    setSelectedTypes(current => {
      if (current.includes(type)) {
        return current.filter(t => t !== type);
      }
      return [...current, type];
    });
  };

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

      <SearchBar onSearch={setSearchQuery} />
      
      <SortingControls 
        currentOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      
      <TypeFilter
        category={category.charAt(0).toUpperCase() + category.slice(1) as 'Food' | 'Drinks'}
        selectedTypes={selectedTypes}
        onTypeSelect={handleTypeSelect}
        venues={venues}
      />

      <FlatList
        data={displayedVenues}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <VenueCard
            venue={item}
            isSelected={selectedVenues.some(v => v.id === item.id)}
            onSelect={handleVenueSelect}
          />
        )}
      />
      
      {selectedVenues.length > 0 && (
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  counter: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 