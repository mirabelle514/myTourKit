import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { theme } from '@/constants/theme';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface SegmentedControlProps {
  values: Array<{ key: string; label: string }>;
  selectedIndex: number;
  onChange: (index: number) => void;
  style?: any;
}

export default function SegmentedControl({ 
  values, 
  selectedIndex, 
  onChange, 
  style 
}: SegmentedControlProps) {
  
  const handleChange = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onChange(index);
  };

  return (
    <View style={[styles.container, style]}>
      {values.map((value, index) => {
        const isSelected = selectedIndex === index;
        
        return (
          <TouchableOpacity
            key={value.key}
            style={[
              styles.option,
              isSelected && styles.selectedOption,
            ]}
            onPress={() => handleChange(index)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.optionText,
                isSelected && styles.selectedOptionText,
              ]}
            >
              {value.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.gray[100],
    borderRadius: 8,
    padding: 4,
  },
  option: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  selectedOption: {
    backgroundColor: 'white',
    ...theme.shadows.sm,
  },
  optionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[500],
  },
  selectedOptionText: {
    color: theme.colors.gray[900],
  },
});