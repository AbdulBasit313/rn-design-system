import React from 'react'
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native'

// Color palette - Light mode only
const COLORS = {
  // Brand colors
  primary: '#D4A017',
  secondary: '#0ea5e9',
  tertiary: '#8b5cf6',

  // Text colors
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textTertiary: '#94a3b8',

  // Semantic colors
  error: '#dc2626',
  warning: '#ea580c',
  success: '#16a34a',
  info: '#2563eb',

  white: '#ffffff',
  black: '#000000',
} as const

// Base typography configuration
const BASE_TYPOGRAPHY = {
  // Font families (update these when you add custom fonts)
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },

  // Base font sizes
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 28,
    '5xl': 32,
  },

  // Line heights
  lineHeight: {
    tight: 16,
    snug: 20,
    normal: 24,
    relaxed: 26,
    loose: 28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
  },

  // Letter spacing
  letterSpacing: {
    tighter: -0.5,
    tight: -0.3,
    normal: 0,
    wide: 0.1,
    wider: 0.15,
    widest: 0.25,
    expanded: 0.4,
    superExpanded: 0.5,
  },

  // Font weights
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const

type TextVariant =
  | 'title'
  | 'titleSecondary'
  | 'titleTertiary'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'

type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold'

type ColorName = keyof typeof COLORS

interface CustomTextProps extends RNTextProps {
  variant?: TextVariant
  weight?: TextWeight
  color?: ColorName
  align?: 'left' | 'center' | 'right' | 'justify'
  italic?: boolean
  underline?: boolean
  lineThrough?: boolean
  children: React.ReactNode
}

const variantStyles = StyleSheet.create({
  title: {
    fontSize: BASE_TYPOGRAPHY.fontSize['5xl'],
    lineHeight: BASE_TYPOGRAPHY.lineHeight['4xl'],
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.tighter,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.bold,
  },
  titleSecondary: {
    fontSize: BASE_TYPOGRAPHY.fontSize['3xl'],
    lineHeight: BASE_TYPOGRAPHY.lineHeight['2xl'],
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.tight,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.semibold,
  },
  titleTertiary: {
    fontSize: BASE_TYPOGRAPHY.fontSize.xl,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.relaxed,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.normal,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.semibold,
  },
  body1: {
    fontSize: BASE_TYPOGRAPHY.fontSize.lg,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.normal,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.normal,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.regular,
  },
  body2: {
    fontSize: BASE_TYPOGRAPHY.fontSize.base,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.snug,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.normal,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.regular,
  },
  subtitle1: {
    fontSize: BASE_TYPOGRAPHY.fontSize.lg,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.normal,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.wider,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.medium,
  },
  subtitle2: {
    fontSize: BASE_TYPOGRAPHY.fontSize.base,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.snug,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.wide,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.medium,
  },
  caption: {
    fontSize: BASE_TYPOGRAPHY.fontSize.sm,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.tight,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.expanded,
    fontWeight: BASE_TYPOGRAPHY.fontWeight.regular,
  },
  overline: {
    fontSize: BASE_TYPOGRAPHY.fontSize.xs,
    lineHeight: BASE_TYPOGRAPHY.lineHeight.tight,
    letterSpacing: BASE_TYPOGRAPHY.letterSpacing.expanded,
    textTransform: 'uppercase',
    fontWeight: BASE_TYPOGRAPHY.fontWeight.medium,
  },
})

const weightStyles = StyleSheet.create({
  light: {
    fontWeight: BASE_TYPOGRAPHY.fontWeight.light,
  },
  regular: {
    fontWeight: BASE_TYPOGRAPHY.fontWeight.regular,
  },
  medium: {
    fontWeight: BASE_TYPOGRAPHY.fontWeight.medium,
  },
  semibold: {
    fontWeight: BASE_TYPOGRAPHY.fontWeight.semibold,
  },
  bold: {
    fontWeight: BASE_TYPOGRAPHY.fontWeight.bold,
  },
})

export const Text: React.FC<CustomTextProps> = ({
  variant = 'body1',
  weight = 'regular',
  color = 'textPrimary',
  align = 'left',
  italic = false,
  underline = false,
  lineThrough = false,
  style,
  children,
  ...props
}) => {
  const variantStyle = variantStyles[variant]
  const weightStyle = weightStyles[weight]

  const textDecorationLine = (() => {
    if (underline && lineThrough) return 'underline line-through'
    if (underline) return 'underline'
    if (lineThrough) return 'line-through'
    return 'none'
  })()

  const combinedStyle: TextStyle = {
    ...variantStyle,
    ...weightStyle,
    color: COLORS[color],
    textAlign: align,
    ...(italic && { fontStyle: 'italic' }),
    textDecorationLine,
  }

  return (
    <RNText style={[combinedStyle, style]} {...props}>
      {children}
    </RNText>
  )
}

export { BASE_TYPOGRAPHY, COLORS }

export default Text
