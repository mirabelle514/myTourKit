import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MapPin, Phone, Search, Star, ChevronRight, Plus } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';
import { mockVenueData } from '@/data/mockData';

export default function VenuesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredVenues = mockVenueData.filter(venue => 
    venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.venueCard}>
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.venueImage}
      />
      <View style={styles.venueDetails}>
        <View style={styles.venueHeader}>
          <Text style={styles.venueName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Star size={14} color={theme.colors.orange[500]} fill={theme.colors.orange[500]} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        
        <View style={styles.venueInfo}>
          <View style={styles.venueInfoItem}>
            <MapPin size={14} color={theme.colors.gray[500]} />
            <Text style={styles.venueInfoText}>{item.location}</Text>
          </View>
          
          <View style={styles.venueInfoItem}>
            <Phone size={14} color={theme.colors.gray[500]} />
            <Text style={styles.venueInfoText}>{item.phone}</Text>
          </View>
        </View>
        
        <View style={styles.venueInfoRow}>
          <Text style={styles.venueCapacity}>Capacity: {item.capacity}</Text>
          <ChevronRight size={20} color={theme.colors.gray[400]} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="Venues" />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={theme.colors.gray[400]} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search venues..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={theme.colors.gray[400]}
          />
        </View>
      </View>
      
      <FlatList
        data={filteredVenues}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  venueCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    ...theme.shadows.md,
  },
  venueImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  venueDetails: {
    padding: 16,
  },
  venueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  venueName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.orange[50],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.orange[700],
  },
  venueInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  venueInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  venueInfoText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
  },
  venueInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[100],
    paddingTop: 12,
  },
  venueCapacity: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[700],
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