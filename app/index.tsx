import BadgeDemo from '@/components/demos/badge'
import ButtonDemo from '@/components/demos/button'
import DividerDemo from '@/components/demos/divider'
import FilterTabsDemo from '@/components/demos/filter-tab'
import LoginDemo from '@/components/demos/login'
import SpacerDemo from '@/components/demos/spacer'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <FilterTabsDemo />
        <BadgeDemo />
        <LoginDemo />
        <ButtonDemo />
        <SpacerDemo />
        <DividerDemo />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    gap: 30,
  },
})
