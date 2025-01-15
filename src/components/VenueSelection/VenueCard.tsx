import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { VenueType } from '../../types/venue';

interface VenueCardProps {
  venue: VenueType;
  onSelect: (venue: VenueType) => void;
  isSelected: boolean;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue, onSelect, isSelected }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, isSelected && styles.selectedCard]} 
      onPress={() => onSelect(venue)}
    >
      <Image source={{ uri: venue.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{venue.name}</Text>
        <Text style={styles.description}>{venue.description}</Text>
        <View style={styles.tags}>
          {venue.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  selectedCard: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    color: '#666',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
    marginTop: 4,
    fontSize: 12,
  },
}); 