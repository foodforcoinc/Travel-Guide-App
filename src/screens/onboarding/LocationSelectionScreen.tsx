import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Location'>;

const AVAILABLE_CITIES = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Miami',
  'Austin',
  'San Francisco'
] as const;

export const LocationSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        const address = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        
        if (address[0]?.city) {
          setCurrentCity(address[0].city);
        }
      }
    } catch (err) {
      setError('Unable to get current location');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = (city: string) => {
    navigation.navigate('CategorySelection', { location: city });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Detecting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a City</Text>
      
      {currentCity && AVAILABLE_CITIES.includes(currentCity as typeof AVAILABLE_CITIES[number]) && (
        <View style={styles.currentLocation}>
          <Text style={styles.subheader}>Current Location</Text>
          <Button
            title={currentCity}
            onPress={() => handleLocationSelect(currentCity)}
          />
        </View>
      )}

      <Text style={styles.subheader}>Available Cities</Text>
      <View style={styles.cityList}>
        {AVAILABLE_CITIES.map(city => (
          <Button
            key={city}
            title={city}
            onPress={() => handleLocationSelect(city)}
          />
        ))}
      </View>

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 16,
  },
  currentLocation: {
    marginBottom: 24,
  },
  cityList: {
    gap: 12,
  },
  error: {
    color: 'red',
    marginTop: 16,
  }
}); 