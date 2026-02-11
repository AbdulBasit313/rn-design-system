import { ReactNode } from 'react'
import { Platform, Pressable, StyleSheet, View, ViewStyle } from 'react-native'

type CardVariant = 'outlined' | 'filled' | 'elevated'
type CardPadding = 'none' | 'small' | 'medium' | 'large'

type CardProps = {
  children: ReactNode
  variant?: CardVariant
  padding?: CardPadding
  onPress?: () => void
  style?: ViewStyle
  disabled?: boolean
  testID?: string
}

const COLORS = {
  card: '#FFFFFF',
  border: '#E5E7EB',
  filled: '#F9FAFB',
  pressed: '#F3F4F6',
  shadow: '#64748b',
}

const PADDING: Record<CardPadding, number> = {
  none: 0,
  small: 12,
  medium: 16,
  large: 20,
}

export default function Card({
  children,
  variant = 'outlined',
  padding = 'medium',
  onPress,
  style,
  disabled = false,
  testID,
}: CardProps) {
  const baseStyle: ViewStyle = {
    borderRadius: 16,
    padding: PADDING[padding],
    overflow: 'hidden',
  }

  const variantStyles: Record<CardVariant, ViewStyle> = {
    outlined: {
      backgroundColor: COLORS.card,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    filled: {
      backgroundColor: COLORS.filled,
    },
    elevated: {
      backgroundColor: COLORS.card,
      ...Platform.select({
        ios: {
          shadowColor: COLORS.shadow,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },
        android: {
          elevation: 6,
          shadowColor: COLORS.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
        },
      }),
    },
  }

  const disabledStyle: ViewStyle = disabled ? { opacity: 0.5 } : {}

  if (onPress) {
    return (
      <Pressable
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [
          baseStyle,
          variantStyles[variant],
          pressed && styles.pressed,
          disabledStyle,
          style,
        ]}
      >
        {children}
      </Pressable>
    )
  }

  return (
    <View testID={testID} style={[baseStyle, variantStyles[variant], disabledStyle, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
})
