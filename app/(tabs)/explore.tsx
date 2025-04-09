import { StyleSheet, FlatList, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const unregisteredCompanies = [
  { id: '1', name: 'Company A' },
  { id: '2', name: 'Company B' },
];

const newProducts = [
  { id: '1', name: 'Product X', company: 'Company C' },
  { id: '2', name: 'Product Y', company: 'Company D' },
];

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <Collapsible title="Unregistered Insurance Companies">
        <FlatList
          data={unregisteredCompanies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemedText style={styles.listItem}>{item.name}</ThemedText>
          )}
        />
      </Collapsible>
      <Collapsible title="New Insurance Products">
        <FlatList
          data={newProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <ThemedText style={styles.listItem}>{item.name}</ThemedText>
              <ThemedText style={styles.companyName}>by {item.company}</ThemedText>
            </View>
          )}
        />
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
  productItem: {
    marginBottom: 8,
  },
  companyName: {
    fontSize: 14,
    color: '#808080',
  },
});
