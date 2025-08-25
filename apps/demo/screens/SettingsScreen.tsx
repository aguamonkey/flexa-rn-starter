import React from 'react';
import { View, Text } from 'react-native';
import { getEnv } from '../services/env';

export default function SettingsScreen() {
  const env = getEnv();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
      <Text style={{ marginTop: 12 }}>MOCK: {String(env.MOCK)}</Text>
      <Text>PUBLISHABLE_KEY: {env.PUBLISHABLE_KEY ? '••••••' : '(not set)'}</Text>
    </View>
  );
}
