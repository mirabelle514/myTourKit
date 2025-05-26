import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ArrowDown, ArrowUp } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Card from '@/components/ui/Card';

interface FinancialSummaryCardProps {
  title: string;
  amount: number;
  change: number;
  changeType: 'positive' | 'negative';
  icon: React.ElementType;
  color: string;
}

export default function FinancialSummaryCard({
  title,
  amount,
  change,
  changeType,
  icon: Icon,
  color,
}: FinancialSummaryCardProps) {
  return (
    <Card variant="elevated" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View 
          style={[
            styles.iconContainer,
            { backgroundColor: `${color}20` } // 20% opacity version of the color
          ]}
        >
          <Icon size={18} color={color} />
        </View>
      </View>
      
      <Text style={styles.amount}>${amount.toLocaleString()}</Text>
      
      <View style={styles.changeContainer}>
        <View 
          style={[
            styles.changePercentage,
            { 
              backgroundColor: changeType === 'positive' 
                ? `${theme.colors.green[500]}20` 
                : `${theme.colors.red[500]}20` 
            }
          ]}
        >
          {changeType === 'positive' ? (
            <ArrowUp size={12} color={theme.colors.green[500]} />
          ) : (
            <ArrowDown size={12} color={theme.colors.red[500]} />
          )}
          
          <Text 
            style={[
              styles.changeText,
              { 
                color: changeType === 'positive' 
                  ? theme.colors.green[600] 
                  : theme.colors.red[600] 
              }
            ]}
          >
            {Math.abs(change)}%
          </Text>
        </View>
        
        <Text style={styles.periodText}>vs. last month</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[600],
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: theme.colors.gray[900],
    marginBottom: 12,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changePercentage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  changeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginLeft: 4,
  },
  periodText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
  },
});