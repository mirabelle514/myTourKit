import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, MapPin } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Card from '@/components/ui/Card';

interface TourSummaryProps {
  tourName: string;
  totalShows: number;
  remainingShows: number;
  startDate: string;
  endDate: string;
}

export default function TourSummary({
  tourName,
  totalShows,
  remainingShows,
  startDate,
  endDate,
}: TourSummaryProps) {
  // Calculate tour progress
  const progressPercentage = ((totalShows - remainingShows) / totalShows) * 100;

  return (
    <Card variant="elevated" style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.tourName}>{tourName}</Text>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${progressPercentage}%` },
            ]}
          />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressText}>
            {totalShows - remainingShows} of {totalShows} shows completed
          </Text>
          <Text style={styles.progressPercentage}>
            {Math.round(progressPercentage)}%
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Calendar size={16} color={theme.colors.gray[500]} />
          <Text style={styles.infoText}>
            {startDate} - {endDate}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <MapPin size={16} color={theme.colors.gray[500]} />
          <Text style={styles.infoText}>
            {remainingShows} shows remaining
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tourName: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: theme.colors.gray[900],
  },
  viewDetailsButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.primary[50],
    borderRadius: 16,
  },
  viewDetailsText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.gray[100],
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary[500],
    borderRadius: 4,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[600],
  },
  progressPercentage: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.primary[600],
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[700],
    marginLeft: 6,
  },
});