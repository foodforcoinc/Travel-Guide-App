import React from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'PreferenceQuestions'>;

export const PreferenceQuestionsScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Preference Questions Screen</Text>
    </View>
  );
};