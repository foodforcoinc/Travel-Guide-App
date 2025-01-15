import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export type SortOrder = 'asc' | 'desc';

interface SortingControlsProps {
  currentOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

export const SortingControls: React.FC<SortingControlsProps> = ({ 
  currentOrder, 
  onSortChange 
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.button, 
          currentOrder === 'asc' && styles.activeButton
        ]}
        onPress={() => onSortChange('asc')}
      >
        <Text style={[
          styles.buttonText,
          currentOrder === 'asc' && styles.activeText
        ]}>A-Z</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.button, 
          currentOrder === 'desc' && styles.activeButton
        ]}
        onPress={() => onSortChange('desc')}
      >
        <Text style={[
          styles.buttonText,
          currentOrder === 'desc' && styles.activeText
        ]}>Z-A</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    gap: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
  },
}); 