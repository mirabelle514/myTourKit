import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Mail, Phone, Plus, Search, User } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';
import { mockCrewData } from '@/data/mockData';
import Card from '@/components/ui/Card';

export default function CrewScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  
  const roles = [
    { key: 'all', label: 'All' },
    { key: 'band', label: 'Band' },
    { key: 'tech', label: 'Tech' },
    { key: 'management', label: 'Management' },
    { key: 'local', label: 'Local' },
  ];
  
  // Filter crew members based on search and role
  const filteredCrew = mockCrewData.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || member.roleCategory === selectedRole;
    
    return matchesSearch && matchesRole;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.crewCard}>
      <View style={styles.crewCardHeader}>
        {item.photoUrl ? (
          <Image source={{ uri: item.photoUrl }} style={styles.crewPhoto} />
        ) : (
          <View style={styles.crewPhotoPlaceholder}>
            <User size={24} color={theme.colors.gray[400]} />
          </View>
        )}
        
        <View style={styles.crewInfo}>
          <Text style={styles.crewName}>{item.name}</Text>
          <View style={styles.crewRoleContainer}>
            <Text style={styles.crewRole}>{item.role}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.crewCardBody}>
        <TouchableOpacity style={styles.contactButton}>
          <Phone size={20} color={theme.colors.primary[600]} />
          <Text style={styles.contactButtonText}>Call</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contactButton}>
          <Mail size={20} color={theme.colors.primary[600]} />
          <Text style={styles.contactButtonText}>Email</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="Crew" />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={theme.colors.gray[400]} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search crew members..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={theme.colors.gray[400]}
          />
        </View>
      </View>
      
      <View style={styles.roleFilters}>
        <FlatList
          horizontal
          data={roles}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[
                styles.roleFilterButton,
                selectedRole === item.key && styles.roleFilterButtonActive
              ]}
              onPress={() => setSelectedRole(item.key)}
            >
              <Text 
                style={[
                  styles.roleFilterText,
                  selectedRole === item.key && styles.roleFilterTextActive
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.roleFiltersList}
        />
      </View>
      
      <FlatList
        data={filteredCrew}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      
      <TouchableOpacity style={styles.addButton}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[50],
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...theme.shadows.sm,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[900],
  },
  roleFilters: {
    marginBottom: 8,
  },
  roleFiltersList: {
    paddingHorizontal: 16,
  },
  roleFilterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 8,
    ...theme.shadows.sm,
  },
  roleFilterButtonActive: {
    backgroundColor: theme.colors.primary[600],
  },
  roleFilterText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[700],
  },
  roleFilterTextActive: {
    color: 'white',
  },
  listContent: {
    padding: 8,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  crewCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '48%',
    ...theme.shadows.sm,
  },
  crewCardHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  crewPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  crewPhotoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  crewInfo: {
    alignItems: 'center',
  },
  crewName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 4,
    textAlign: 'center',
  },
  crewRoleContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: theme.colors.primary[50],
    borderRadius: 4,
  },
  crewRole: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
  },
  crewCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary[200],
    flex: 1,
    marginHorizontal: 4,
  },
  contactButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
    marginLeft: 4,
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.primary[600],
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.lg,
  },
});