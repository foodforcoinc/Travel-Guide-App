import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import type { VenueDetails } from '../../types/venue';

interface BasicInfoSectionProps {
  venue: Partial<VenueDetails>;
  onChange: (updates: Partial<VenueDetails>) => void;
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  venue,
  onChange
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={venue.name ?? ''}
        onChangeText={(name) => onChange({ name })}
        placeholder="Venue Name"
        style={styles.input}
      />
      <TextInput
        value={venue.website ?? ''}
        onChangeText={(website) => onChange({ website })}
        placeholder="Website"
        keyboardType="url"
        style={styles.input}
      />
      {/* Other inputs */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
}); 