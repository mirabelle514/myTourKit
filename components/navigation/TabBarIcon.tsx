import React from 'react';
import { View, StyleSheet } from 'react-native';

interface TabBarIconProps {
  icon: React.ElementType;
  color: string;
  size: number;
}

export default function TabBarIcon({ icon: Icon, color, size }: TabBarIconProps) {
  return (
    <View style={styles.container}>
      <Icon size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});