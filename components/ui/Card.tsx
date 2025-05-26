import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '@/constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
}

export default function Card({ children, style, variant = 'default' }: CardProps) {
  const getCardStyle = () => {
    switch (variant) {
      case 'elevated':
        return [styles.card, styles.elevatedCard, style];
      case 'outlined':
        return [styles.card, styles.outlinedCard, style];
      default:
        return [styles.card, style];
    }
  };

  return <View style={getCardStyle()}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  elevatedCard: {
    ...theme.shadows.md,
  },
  outlinedCard: {
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
  },
});