import React from 'react';
import { View, Text } from 'react-native';
import useSpend from '../hooks/useSpend';

export default function SpendScreen() {
  const { status, onMockSpend } = useSpend();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spend (mock)</Text>
      <Text onPress={onMockSpend} style={{ marginTop: 12, textDecorationLine: 'underline' }}>
        Tap to simulate Spend
      </Text>
      <Text style={{ marginTop: 12 }}>Status: {status}</Text>
    </View>
  );
}
