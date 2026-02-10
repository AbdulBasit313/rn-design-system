import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface InputProps {
  icon: keyof typeof Ionicons.glyphMap
  placeholder: string
  secureTextEntry?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

export default function Input({
  icon,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color={colors.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const colors = {
  background: '#FFFFFF',
  border: '#E5E7EB',
  text: '#111827',
  placeholder: '#9CA3AF',
  icon: '#6B7280',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.text,
  },
})
