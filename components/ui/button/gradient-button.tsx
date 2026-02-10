import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

type AppButtonProps = {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  style?: ViewStyle
  disabled?: boolean
}

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  style,
  disabled = false,
}: AppButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <LinearGradient
        colors={variant === 'primary' ? ['#1C339A', '#2947C7'] : ['#F1F5F9', '#F1F5F9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, variant === 'primary' ? styles.primary : styles.secondary]}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text
          style={[styles.text, variant === 'primary' ? styles.primaryText : styles.secondaryText]}
        >
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    shadowColor: '#1C339A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  secondary: {
    borderColor: '#E2E8F0',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#334155',
  },
})
