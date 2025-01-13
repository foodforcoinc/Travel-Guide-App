import React from 'react';
import { View, TextInput } from 'react-native';
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
    <View>
      <TextInput
        value={venue.name}
        onChangeText={(name) => onChange({ name })}
        placeholder="Venue Name"
      />
      <TextInput
        value={venue.website}
        onChangeText={(website) => onChange({ website })}
        placeholder="Website"
        keyboardType="url"
      />
      {/* Other inputs */}
    </View>
  );
}; 