import { StyleSheet, FlatList, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const insuranceData = [
  {
    id: '1',
    company: 'Company A',
    motorRate: '5%',
    healthRate: '3%',
    propertyRate: '4%',
    commissionRate: '2%',
  },
  {
    id: '2',
    company: 'Company B',
    motorRate: '6%',
    healthRate: '4%',
    propertyRate: '5%',
    commissionRate: '3%',
  },
  {
    id: '3',
    company: 'Company C',
    motorRate: '4%',
    healthRate: '2%',
    propertyRate: '3%',
    commissionRate: '1.5%',
  },
];

export default function HomeScreen() {
  const renderInsuranceItem = ({ item }: { item: typeof insuranceData[0] }) => (
    <ThemedView style={styles.card}>
      <ThemedText type="title">{item.company}</ThemedText>
      <ThemedText>Motor Rate: {item.motorRate}</ThemedText>
      <ThemedText>Health Rate: {item.healthRate}</ThemedText>
      <ThemedText>Property Rate: {item.propertyRate}</ThemedText>
      <ThemedText>Commission Rate: {item.commissionRate}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Insurance Companies and Rates
      </ThemedText>
      <FlatList
        data={insuranceData}
        renderItem={renderInsuranceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    gap: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
