import SearchBar from '@/components/ui/search-bar'
import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DATA = [
  'Apple',
  'Banana',
  'Mango',
  'Orange',
  'Watermelon',
  'Strawberry',
  'Blueberry',
  'Pineapple',
  'Grapes',
  'Peach',
  'Kiwi',
  'Papaya',
]

export default function SearchDemoScreen() {
  const [query, setQuery] = useState('')

  const filteredData = useMemo(() => {
    if (!query.trim()) return DATA

    return DATA.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar value={query} onChangeText={setQuery} placeholder="Search fruits..." />

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No results found</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    padding: 16,
    flex: 1,
    gap: 16,
  },

  listContainer: {
    paddingBottom: 40,
  },

  itemCard: {
    backgroundColor: '#F9FAFB',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 14,
    color: '#9CA3AF',
  },
})
