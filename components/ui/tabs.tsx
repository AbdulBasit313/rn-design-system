import { Pressable, StyleSheet, Text } from 'react-native'

interface TabProps {
  label: string
  active: boolean
  onPress: () => void
}

function Tab({ label, active, onPress }: TabProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.tab,
        active && styles.activeTab,
        pressed && styles.pressedTab,
      ]}
    >
      <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
    </Pressable>
  )
}

export default Tab

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    borderColor: '#F3F4F6',
    borderWidth: 1,
  },

  activeTab: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  pressedTab: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },

  activeText: {
    color: '#111827',
  },
})
