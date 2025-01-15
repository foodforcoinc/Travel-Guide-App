import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { VenueType } from '../../../types/venue';

interface TypeFilterProps {
  category: 'Food' | 'Drinks';
  selectedTypes: string[];
  onTypeSelect: (type: string) => void;
  venues: VenueType[];
}

export const TypeFilter: React.FC<TypeFilterProps> = ({
  category,
  selectedTypes,
  onTypeSelect,
  venues,
}) => {
  console.log('TypeFilter render start');
  
  const types = React.useMemo(() => {
    console.log('Processing venues for types:', venues.length);
    const typeSet = new Set<string>();
    
    venues.forEach(venue => {
      // For Drinks venues, log both theme and all other relevant classifications
      if (category === 'Drinks') {
        console.log('Venue:', venue.id, {
          theme: venue.classifications.theme,
          features: venue.classifications.features,
          atmosphere: venue.classifications.atmosphere
        });
      } else {
        console.log('Venue:', venue.id, {
          cuisine: venue.classifications.cuisine,
          features: venue.classifications.features,
          atmosphere: venue.classifications.atmosphere
        });
      }
      
      const types = category === 'Drinks' 
        ? venue.classifications.theme 
        : venue.classifications.cuisine;
      
      if (types) {
        types.forEach(type => {
          if (type) typeSet.add(type);
        });
      }
    });
    
    const sortedTypes = Array.from(typeSet).sort();
    console.log('Available types for filtering:', sortedTypes);
    return sortedTypes;
  }, [venues, category]);

  // Force render even if no types
  const renderTypes = types.length > 0 ? types : ['cocktail-lounge', 'speakeasy', 'tiki'];

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[
            styles.chip,
            selectedTypes.length === 0 && styles.activeChip
          ]}
          onPress={() => onTypeSelect('all')}
        >
          <Text style={[
            styles.chipText,
            selectedTypes.length === 0 && styles.activeChipText
          ]}>All</Text>
        </TouchableOpacity>
        
        {renderTypes.map(type => (
          <TouchableOpacity
            key={type}
            style={[
              styles.chip,
              selectedTypes.includes(type) && styles.activeChip
            ]}
            onPress={() => onTypeSelect(type)}
          >
            <Text style={[
              styles.chipText,
              selectedTypes.includes(type) && styles.activeChipText
            ]}>{type.replace(/-/g, ' ')}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    minHeight: 60,
    marginVertical: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginRight: 8,
    backgroundColor: '#ffffff',
  },
  activeChip: {
    backgroundColor: '#007AFF',
  },
  chipText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  activeChipText: {
    color: '#fff',
  },
}); 