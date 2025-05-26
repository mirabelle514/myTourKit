import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Bell, CircleUser as UserCircle } from 'lucide-react-native';
import { theme } from '@/constants/theme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
  onBackPress?: () => void;
}

export default function Header({
  title,
  showBack = false,
  showNotifications = true,
  showProfile = false,
  onBackPress,
}: HeaderProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <ChevronLeft size={24} color={theme.colors.gray[800]} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightContainer}>
        {showNotifications && (
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={22} color={theme.colors.gray[800]} />
          </TouchableOpacity>
        )}
        
        {showProfile && (
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/(tabs)/settings')}
          >
            <UserCircle size={22} color={theme.colors.gray[800]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[100],
    ...theme.shadows.sm,
  },
  leftContainer: {
    width: 40,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
  },
  rightContainer: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 4,
    marginLeft: 16,
  },
});