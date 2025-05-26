import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CalendarClock, ChevronDown, Clock, Filter, MapPin, Plus } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { mockScheduleData } from '@/data/mockData';

export default function ScheduleScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const tabs = [
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'past', label: 'Past' },
    { key: 'all', label: 'All' }
  ];

  // Filter data based on the active tab
  const filteredData = mockScheduleData.filter(item => {
    if (activeTab === 'upcoming') {
      return new Date(item.date) >= new Date();
    } else if (activeTab === 'past') {
      return new Date(item.date) < new Date();
    }
    return true;
  });

  const renderItem = ({ item, index }) => {
    // Extract month and day from the date
    const date = new Date(item.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    
    // Group header for month/year
    const showHeader = index === 0 || 
      new Date(mockScheduleData[index - 1].date).getMonth() !== date.getMonth();
    
    return (
      <>
        {showHeader && (
          <View style={styles.monthHeader}>
            <Text style={styles.monthHeaderText}>
              {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.eventCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateMonth}>{month}</Text>
            <Text style={styles.dateDay}>{day}</Text>
          </View>
          
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            
            <View style={styles.eventInfo}>
              <View style={styles.eventInfoItem}>
                <MapPin size={14} color={theme.colors.gray[500]} />
                <Text style={styles.eventInfoText}>{item.venue}</Text>
              </View>
              
              <View style={styles.eventInfoItem}>
                <Clock size={14} color={theme.colors.gray[500]} />
                <Text style={styles.eventInfoText}>{item.time}</Text>
              </View>
            </View>
            
            <View style={styles.eventTags}>
              {item.tags.map((tag, tagIndex) => (
                <View 
                  key={tagIndex} 
                  style={[
                    styles.eventTag, 
                    { backgroundColor: tag === 'Show' ? theme.colors.primary[50] : theme.colors.orange[50] }
                  ]}
                >
                  <Text 
                    style={[
                      styles.eventTagText,
                      { color: tag === 'Show' ? theme.colors.primary[600] : theme.colors.orange[600] }
                    ]}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="Schedule" />
      
      <View style={styles.filtersContainer}>
        <SegmentedControl
          values={tabs}
          selectedIndex={tabs.findIndex(tab => tab.key === activeTab)}
          onChange={index => setActiveTab(tabs[index].key)}
        />
        
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <Filter size={20} color={theme.colors.gray[700]} />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    ...theme.shadows.sm,
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  monthHeader: {
    paddingVertical: 12,
    marginBottom: 8,
  },
  monthHeaderText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[700],
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...theme.shadows.sm,
  },
  dateBox: {
    width: 54,
    height: 64,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  dateMonth: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
    textTransform: 'uppercase',
  },
  dateDay: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: theme.colors.primary[600],
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 6,
  },
  eventInfo: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  eventInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  eventInfoText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
    marginLeft: 4,
  },
  eventTags: {
    flexDirection: 'row',
  },
  eventTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  eventTagText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
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