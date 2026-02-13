import AppBarDemo from '@/components/demos/app-bar'
import BadgeDemo from '@/components/demos/badge'
import ButtonDemo from '@/components/demos/button'
import CoffeeShopDemo from '@/components/demos/coffee-shop'
import DividerDemo from '@/components/demos/divider'
import FilterTabsDemo from '@/components/demos/filter-tab'
import InputDemo from '@/components/demos/input'
import LoginDemo from '@/components/demos/login'
import SpacerDemo from '@/components/demos/spacer'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Design System</Text>
          <Text style={styles.headerSubtitle}>Components & Screens</Text>
        </View>

        {/* Screens Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Screens</Text>
        </View>

        <LoginDemo />
        <CoffeeShopDemo />

        {/* Components Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Components</Text>
        </View>

        <AppBarDemo />
        <FilterTabsDemo />
        <BadgeDemo />
        <ButtonDemo />
        <InputDemo />
        <SpacerDemo />
        <DividerDemo />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    gap: 24,
  },
  header: {},
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1C339A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748B',
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#334155',
    marginBottom: -8,
  },
})
