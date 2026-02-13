import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Design tokens for light mode
const COLORS = {
  background: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#64748B',
  border: '#F1F5F9',
  backButton: '#F8FAFC',
  backButtonActive: '#F1F5F9',
  backButtonBorder: '#E2E8F0',
  iconColor: '#1E293B',
  shadow: 'rgba(15, 23, 42, 0.04)',
} as const

const SPACING = {
  horizontal: 20,
  vertical: 16,
  backButtonMargin: 12,
} as const

const SIZES = {
  backButtonSize: 40,
  backButtonRadius: 12,
  iconSize: 22,
  titleFontSize: 18,
} as const

interface AppBarProps {
  title: string
  onBackPress?: () => void
  showBackButton?: boolean
  titleAlign?: 'left' | 'center'
  rightElement?: React.ReactNode
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
  backButtonStyle?: ViewStyle
  subtitle?: string
}

const AppBar = ({
  title,
  showBackButton = false,
  onBackPress,
  titleAlign = 'left',
  rightElement,
  containerStyle,
  titleStyle,
  backButtonStyle,
  subtitle,
}: AppBarProps) => {
  const router = useRouter()
  const insets = useSafeAreaInsets()

  const handleBack = () => {
    if (onBackPress) {
      onBackPress()
    } else {
      router.back()
    }
  }

  const BACK_BUTTON_WIDTH = SIZES.backButtonSize + SPACING.backButtonMargin

  return (
    <View style={[styles.header, { paddingTop: insets.top + SPACING.vertical }, containerStyle]}>
      {/* Left Section - Back Button or Spacer */}
      {showBackButton ? (
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
            backButtonStyle,
          ]}
          onPress={handleBack}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          accessibilityHint="Navigates to the previous screen"
        >
          <Ionicons name="chevron-back" size={SIZES.iconSize} color={COLORS.iconColor} />
        </Pressable>
      ) : (
        titleAlign === 'center' && <View style={{ width: BACK_BUTTON_WIDTH }} />
      )}

      {/* Title Section */}
      {titleAlign === 'center' ? (
        <View style={styles.centerTitleContainer}>
          <Text
            style={[styles.headerTitle, styles.centerTitle, titleStyle]}
            numberOfLines={1}
            accessibilityRole="header"
          >
            {title}
          </Text>
          {subtitle && (
            <Text style={[styles.subtitle, styles.centerTitle]} numberOfLines={1}>
              {subtitle}
            </Text>
          )}
        </View>
      ) : (
        <View style={styles.leftTitleContainer}>
          <Text
            style={[styles.headerTitle, titleStyle]}
            numberOfLines={1}
            accessibilityRole="header"
          >
            {title}
          </Text>
          {subtitle && (
            <Text style={styles.subtitle} numberOfLines={1}>
              {subtitle}
            </Text>
          )}
        </View>
      )}

      {/* Right Section - Custom Element or Spacer */}
      {rightElement ? (
        <View style={styles.rightElement}>{rightElement}</View>
      ) : (
        titleAlign === 'center' && <View style={{ width: BACK_BUTTON_WIDTH }} />
      )}
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.vertical,
    paddingHorizontal: SPACING.horizontal,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },
  backButton: {
    width: SIZES.backButtonSize,
    height: SIZES.backButtonSize,
    borderRadius: SIZES.backButtonRadius,
    backgroundColor: COLORS.backButton,
    borderWidth: 1,
    borderColor: COLORS.backButtonBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.backButtonMargin,
  },
  backButtonPressed: {
    backgroundColor: COLORS.backButtonActive,
    transform: [{ scale: 0.96 }],
  },
  leftTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: SIZES.titleFontSize,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -0.4,
  },
  centerTitle: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
    marginTop: 3,
    letterSpacing: -0.1,
  },
  rightElement: {
    marginLeft: SPACING.backButtonMargin,
  },
})
