import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Input from '../ui/input'
import Spacer from '../ui/spacer'

export default function LoginDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.subText}>Login to your account</Text>

      <Spacer height={32} />

      <Input icon="mail-outline" placeholder="Email address" />

      <Spacer height={16} />

      <Input icon="lock-closed-outline" placeholder="Password" secureTextEntry />

      <Spacer height={24} />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },

  subText: {
    marginTop: 4,
    fontSize: 14,
    color: '#6B7280',
  },

  button: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
})
