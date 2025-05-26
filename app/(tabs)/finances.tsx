import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ArrowDown, ArrowUp, ChevronRight, DollarSign, Plus, Ticket } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Header from '@/components/layout/Header';
import { mockFinancialData, mockTransactions } from '@/data/mockData';
import FinancialSummaryCard from '@/components/finances/FinancialSummaryCard';

export default function FinancesScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const periods = [
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
    { key: 'tour', label: 'Tour' },
    { key: 'year', label: 'Year' },
  ];

  // Filter transactions based on period (simplified for demo)
  const filteredTransactions = mockTransactions;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <Header title="Finances" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.periodSelector}>
          {periods.map(period => (
            <TouchableOpacity
              key={period.key}
              style={[
                styles.periodOption,
                selectedPeriod === period.key && styles.periodOptionActive
              ]}
              onPress={() => setSelectedPeriod(period.key)}
            >
              <Text 
                style={[
                  styles.periodOptionText,
                  selectedPeriod === period.key && styles.periodOptionTextActive
                ]}
              >
                {period.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.summaryContainer}>
          <FinancialSummaryCard
            title="Tour Income"
            amount={mockFinancialData.income}
            change={mockFinancialData.incomeChange}
            changeType={mockFinancialData.incomeChange >= 0 ? 'positive' : 'negative'}
            icon={DollarSign}
            color={theme.colors.green[500]}
          />
          
          <FinancialSummaryCard
            title="Tour Expenses"
            amount={mockFinancialData.expenses}
            change={mockFinancialData.expensesChange}
            changeType={mockFinancialData.expensesChange >= 0 ? 'negative' : 'positive'}
            icon={ArrowUp}
            color={theme.colors.red[500]}
          />
          
          <FinancialSummaryCard
            title="Profit"
            amount={mockFinancialData.income - mockFinancialData.expenses}
            change={mockFinancialData.profitChange}
            changeType={mockFinancialData.profitChange >= 0 ? 'positive' : 'negative'}
            icon={DollarSign}
            color={theme.colors.primary[500]}
          />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          
          {filteredTransactions.map((transaction, index) => (
            <TouchableOpacity key={index} style={styles.transactionItem}>
              <View 
                style={[
                  styles.transactionIcon, 
                  { 
                    backgroundColor: transaction.type === 'income' 
                      ? theme.colors.green[50] 
                      : theme.colors.red[50] 
                  }
                ]}
              >
                {transaction.type === 'income' ? (
                  <ArrowDown 
                    size={20} 
                    color={theme.colors.green[500]} 
                  />
                ) : (
                  <ArrowUp 
                    size={20} 
                    color={theme.colors.red[500]} 
                  />
                )}
              </View>
              
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{transaction.description}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              
              <Text 
                style={[
                  styles.transactionAmount,
                  { 
                    color: transaction.type === 'income' 
                      ? theme.colors.green[600] 
                      : theme.colors.red[600] 
                  }
                ]}
              >
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Transactions</Text>
            <ChevronRight size={20} color={theme.colors.primary[600]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: theme.colors.gray[100],
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  periodOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  periodOptionActive: {
    backgroundColor: 'white',
    ...theme.shadows.sm,
  },
  periodOptionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[500],
  },
  periodOptionTextActive: {
    color: theme.colors.gray[900],
  },
  summaryContainer: {
    marginBottom: 24,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: theme.colors.gray[900],
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[100],
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: theme.colors.gray[900],
  },
  transactionDate: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.colors.gray[500],
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginTop: 8,
  },
  viewAllText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: theme.colors.primary[600],
    marginRight: 4,
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