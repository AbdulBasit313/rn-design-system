import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View, ViewStyle } from 'react-native'

type SearchBarProps = {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  style?: ViewStyle
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  style,
}: SearchBarProps) {
  const [focused, setFocused] = useState(false)

  const showClear = value.length > 0

  return (
    <View style={[styles.container, focused && styles.focused, style]}>
      {/* Search Icon */}
      <Ionicons name="search-outline" size={18} color="#6B7280" />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        returnKeyType="search"
      />

      {/* iOS-style Clear Button */}
      {showClear && (
        <Pressable
          onPress={() => onChangeText('')}
          hitSlop={10}
          style={({ pressed }) => [
            styles.clearButton,
            pressed && { opacity: 0.6, transform: [{ scale: 0.95 }] },
          ]}
        >
          <Ionicons name="close" size={14} color="#6B7280" />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 16,
    paddingHorizontal: 16,

    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',

    gap: 10,
  },

  focused: {
    borderColor: '#A9D1C9',
    backgroundColor: '#FFFFFF',
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
    paddingVertical: 0,
  },

  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
