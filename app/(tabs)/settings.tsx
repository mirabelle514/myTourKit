import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bell, ChevronRight, CircleHelp as HelpCircle, Key, LifeBuoy, Lock, LogOut, Moon, User, CircleUser as UserCircle } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const renderSettingItem = ({ icon, title, value, toggle, onPress, showToggle = false, showChevron = true }) => (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={onPress}
    >
      <View style={styles.settingIconContainer}>
        {icon}
      </View>
      
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {value && <Text style={styles.settingValue}>{value}</Text>}
      </View>
      
      {showToggle && (
        <Switch
          value={toggle}
          onValueChange={(newValue) => onPress(newValue)}
          trackColor={{ false: theme.colors.gray[200], true: theme.colors.primary[200] }}
          thumbColor={toggle ? theme.colors.primary[600] : theme.colors.gray[400]}
        />
      )}
      
      {showChevron && !showToggle && (
        <ChevronRight size={20} color={theme.colors.gray[400]} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="Settings" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <UserCircle size={64} color={theme.colors.primary[600]} />
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileRole}>Tour Manager</Text>
          </View>
          
          <ChevronRight size={24} color={theme.colors.gray[400]} />
        </TouchableOpacity>
        
        <View style={styles.settingSection}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          
          {renderSettingItem({
            icon: <Bell size={22} color={theme.colors.primary[500]} />,
            title: 'Notifications',
            toggle: notifications,
            onPress: (value) => setNotifications(value !== undefined ? value : !notifications),
            showToggle: true,
            showChevron: false
          })}
          
          {renderSettingItem({
            icon: <Moon size={22} color={theme.colors.primary[500]} />,
            title: 'Dark Mode',
            toggle: darkMode,
            onPress: (value) => setDarkMode(value !== undefined ? value : !darkMode),
            showToggle: true,
            showChevron: false
          })}
          
          {renderSettingItem({
            icon: <Key size={22} color={theme.colors.primary[500]} />,
            title: 'Offline Mode',
            toggle: offlineMode,
            onPress: (value) => setOfflineMode(value !== undefined ? value : !offlineMode),
            showToggle: true,
            showChevron: false
          })}
        </View>
        
        <View style={styles.settingSection}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          
          {renderSettingItem({
            icon: <User size={22} color={theme.colors.primary[500]} />,
            title: 'Account Information',
            onPress: () => {}
          })}
          
          {renderSettingItem({
            icon: <Lock size={22} color={theme.colors.primary[500]} />,
            title: 'Privacy & Security',
            onPress: () => {}
          })}
        </View>
        
        <View style={styles.settingSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          {renderSettingItem({
            icon: <HelpCircle size={22} color={theme.colors.primary[500]} />,
            title: 'Help Center',
            onPress: () => {}
          })}
          
          {renderSettingItem({
            icon: <LifeBuoy size={22} color={theme.colors.primary[500]} />,
            title: 'Contact Support',
            onPress: () => {}
          })}
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={theme.colors.red[600]} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>My Tour Kit v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[50],
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    ...theme.shadows.sm,
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
  },
  settingSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    ...theme.shadows.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[100],
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[800],
  },
  settingValue: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.red[50],
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: theme.colors.red[600],
    marginLeft: 8,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
    textAlign: 'center',
  },
});