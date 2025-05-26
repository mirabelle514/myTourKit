import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { router, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Calendar, ChevronRight, Clock, MapPin, MessageSquare, Music } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TourSummary from '@/components/home/TourSummary';
import UpcomingShow from '@/components/home/UpcomingShow';
import { mockUpcomingShows, mockTourData } from '@/data/mockData';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="My Tour Kit" showProfile={true} />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TourSummary 
          tourName={mockTourData.name}
          totalShows={mockTourData.totalShows}
          remainingShows={mockTourData.remainingShows}
          startDate={mockTourData.startDate}
          endDate={mockTourData.endDate}
        />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Next Show</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/schedule')}>
              <Text style={styles.seeAll}>See Schedule</Text>
            </TouchableOpacity>
          </View>
          
          <UpcomingShow show={mockUpcomingShows[0]} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
          </View>
          
          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionItem} onPress={() => router.push('/(tabs)/schedule')}>
              <View style={[styles.actionIcon, { backgroundColor: theme.colors.primary[50] }]}>
                <Calendar size={24} color={theme.colors.primary[600]} />
              </View>
              <Text style={styles.actionText}>Schedule</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem} onPress={() => router.push('/(tabs)/venues')}>
              <View style={[styles.actionIcon, { backgroundColor: theme.colors.teal[50] }]}>
                <MapPin size={24} color={theme.colors.teal[600]} />
              </View>
              <Text style={styles.actionText}>Venues</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem} onPress={() => router.push('/(tabs)/messages')}>
              <View style={[styles.actionIcon, { backgroundColor: theme.colors.orange[50] }]}>
                <MessageSquare size={24} color={theme.colors.orange[600]} />
              </View>
              <Text style={styles.actionText}>Messages</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem} onPress={() => router.push('/(tabs)/finances')}>
              <View style={[styles.actionIcon, { backgroundColor: theme.colors.green[50] }]}>
                <Music size={24} color={theme.colors.green[600]} />
              </View>
              <Text style={styles.actionText}>Setlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Shows</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/schedule')}>
              <Text style={styles.seeAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {mockUpcomingShows.slice(1, 4).map((show, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.upcomingItem}
              onPress={() => {
                // Navigate to show details
              }}
            >
              <View style={styles.upcomingDate}>
                <Text style={styles.upcomingDay}>{show.day}</Text>
                <Text style={styles.upcomingMonth}>{show.month}</Text>
              </View>
              <View style={styles.upcomingDetails}>
                <Text style={styles.upcomingVenue}>{show.venue}</Text>
                <Text style={styles.upcomingLocation}>{show.location}</Text>
                <View style={styles.upcomingTime}>
                  <Clock size={14} color={theme.colors.gray[500]} />
                  <Text style={styles.upcomingTimeText}>{show.time}</Text>
                </View>
              </View>
              <ChevronRight size={20} color={theme.colors.gray[400]} />
            </TouchableOpacity>
          ))}
        </View>
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
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  actionItem: {
    width: '25%',
    padding: 8,
    alignItems: 'center',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[700],
    textAlign: 'center',
  },
  upcomingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 8,
    ...theme.shadows.sm,
  },
  upcomingDate: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  upcomingDay: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: theme.colors.primary[600],
  },
  upcomingMonth: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[500],
  },
  upcomingDetails: {
    flex: 1,
  },
  upcomingVenue: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 2,
  },
  upcomingLocation: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
    marginBottom: 4,
  },
  upcomingTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upcomingTimeText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
    marginLeft: 4,
  },
});