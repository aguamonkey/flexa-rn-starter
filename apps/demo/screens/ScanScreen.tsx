import React from 'react';
import { View, Text } from 'react-native';
import useScan from '../hooks/useScan';

export default function ScanScreen() {
  const { status, onMockScan } = useScan();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scan (mock)</Text>
      <Text onPress={onMockScan} style={{ marginTop: 12, textDecorationLine: 'underline' }}>
        Tap to simulate Scan
      </Text>
      <Text style={{ marginTop: 12 }}>Status: {status}</Text>
    </View>
  );
}
