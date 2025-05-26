import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Clock, MapPin, Ticket } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface UpcomingShowProps {
  show: {
    id: number;
    venue: string;
    location: string;
    date: string;
    day: string;
    month: string;
    time: string;
    image: string;
    ticketsSold: number;
    ticketsTotal: number;
  };
}

export default function UpcomingShow({ show }: UpcomingShowProps) {
  const router = useRouter();
  
  // Calculate percentage of tickets sold
  const ticketPercentage = (show.ticketsSold / show.ticketsTotal) * 100;

  return (
    <Card variant="elevated" style={styles.container}>
      <Image 
        source={{ uri: show.image }} 
        style={styles.venueImage} 
      />
      
      <View style={styles.dateContainer}>
        <Text style={styles.dateDay}>{show.day}</Text>
        <Text style={styles.dateMonth}>{show.month}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.venueName}>{show.venue}</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <MapPin size={16} color={theme.colors.gray[500]} />
            <Text style={styles.infoText}>{show.location}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Clock size={16} color={theme.colors.gray[500]} />
            <Text style={styles.infoText}>{show.time}</Text>
          </View>
        </View>
        
        <View style={styles.ticketContainer}>
          <View style={styles.ticketInfo}>
            <Ticket size={16} color={theme.colors.gray[500]} />
            <Text style={styles.ticketText}>
              {show.ticketsSold} / {show.ticketsTotal} tickets sold
            </Text>
          </View>
          
          <View style={styles.ticketProgressBar}>
            <View 
              style={[
                styles.ticketProgressFill,
                { width: `${ticketPercentage}%` }
              ]} 
            />
          </View>
        </View>
        
        <View style={styles.buttonRow}>
          <Button 
            title="Schedule" 
            variant="outline" 
            size="sm"
            onPress={() => router.push('/tabs/schedule')}
            style={{ flex: 1, marginRight: 8 }}
          />
          
          <Button 
            title="Venue Details" 
            variant="primary" 
            size="sm"
            onPress={() => router.push('/tabs/venues')}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    overflow: 'hidden',
  },
  venueImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  dateContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    padding: 8,
    ...theme.shadows.sm,
  },
  dateDay: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: theme.colors.primary[600],
  },
  dateMonth: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[600],
    textTransform: 'uppercase',
  },
  contentContainer: {
    padding: 16,
  },
  venueName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
    marginLeft: 6,
  },
  ticketContainer: {
    marginBottom: 16,
  },
  ticketInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ticketText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
    marginLeft: 6,
  },
  ticketProgressBar: {
    height: 6,
    backgroundColor: theme.colors.gray[100],
    borderRadius: 3,
    overflow: 'hidden',
  },
  ticketProgressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary[500],
    borderRadius: 3,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});