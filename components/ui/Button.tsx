import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}: ButtonProps) {
  
  const getContainerStyles = () => {
    let containerStyles = [styles.button, styles[`${size}Button`]];
    
    if (fullWidth) {
      containerStyles.push(styles.fullWidth);
    }
    
    switch (variant) {
      case 'primary':
        containerStyles.push(styles.primaryButton);
        break;
      case 'secondary':
        containerStyles.push(styles.secondaryButton);
        break;
      case 'outline':
        containerStyles.push(styles.outlineButton);
        break;
      case 'ghost':
        containerStyles.push(styles.ghostButton);
        break;
    }
    
    if (disabled) {
      containerStyles.push(styles.disabledButton);
    }
    
    return containerStyles;
  };
  
  const getTextStyles = () => {
    let textStyles = [styles.buttonText, styles[`${size}Text`]];
    
    switch (variant) {
      case 'primary':
        textStyles.push(styles.primaryText);
        break;
      case 'secondary':
        textStyles.push(styles.secondaryText);
        break;
      case 'outline':
        textStyles.push(styles.outlineText);
        break;
      case 'ghost':
        textStyles.push(styles.ghostText);
        break;
    }
    
    if (disabled) {
      textStyles.push(styles.disabledText);
    }
    
    return textStyles;
  };
  
  return (
    <TouchableOpacity
      style={[...getContainerStyles(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? 'white' : theme.colors.primary[600]}
        />
      ) : (
        <>
          {icon}
          <Text style={[...getTextStyles(), icon ? { marginLeft: 8 } : {}, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  fullWidth: {
    width: '100%',
  },
  smButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  mdButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  lgButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary[600],
  },
  secondaryButton: {
    backgroundColor: theme.colors.primary[100],
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary[600],
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: theme.colors.gray[200],
    borderColor: theme.colors.gray[300],
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
  },
  smText: {
    fontSize: 14,
  },
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: theme.colors.primary[700],
  },
  outlineText: {
    color: theme.colors.primary[600],
  },
  ghostText: {
    color: theme.colors.primary[600],
  },
  disabledText: {
    color: theme.colors.gray[500],
  },
});