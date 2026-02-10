import { Ionicons } from '@expo/vector-icons'
import React, { ReactNode } from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

type AppTextInputProps = TextInputProps & {
  leftIcon: keyof typeof Ionicons.glyphMap
  children?: ReactNode
}

const AppTextInput = ({ leftIcon, children, style, ...props }: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={leftIcon} size={20} color="#1C339A" style={styles.leftIcon} />

      <TextInput {...props} style={[styles.input, style]} placeholderTextColor="#94A3B8" />

      {children}
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  leftIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
    paddingVertical: 0,
  },
})
