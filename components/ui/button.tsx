import { ReactNode } from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps {
  title?: string
  icon?: ReactNode
  onPress?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: ButtonVariant
  style?: ViewStyle
}

const BASE_STYLES = {
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  } satisfies ViewStyle,

  text: {
    fontSize: 16,
    fontWeight: '600',
  } satisfies TextStyle,
}

const DISABLED_STYLES = {
  container: {
    backgroundColor: '#E7E8E9',
    borderWidth: 0,
  } satisfies ViewStyle,

  text: {
    color: '#9FA3A9',
  },
}

const VARIANTS = {
  primary: {
    container: {
      backgroundColor: '#E8AE1B',
    },
    text: {
      color: '#fff',
    },
  },
  secondary: {
    container: {
      backgroundColor: '#473401',
    },
    text: {
      color: '#fff',
    },
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#E8AE1B',
    },
    text: {
      color: '#E8AE1B',
    },
  },
  ghost: {
    container: {
      backgroundColor: 'transparent',
    },
    text: {
      color: '#E8AE1B',
    },
  },
} satisfies Record<ButtonVariant, { container: ViewStyle; text: any }>

const Button = ({
  title,
  icon,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  style,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading
  const variantStyles = VARIANTS[variant]

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      {...rest}
      style={({ pressed }) => [
        BASE_STYLES.container,
        variantStyles.container,
        pressed && !isDisabled && styles.pressed,
        pressed && !isDisabled && styles.shrink,
        isDisabled && DISABLED_STYLES.container,
        style,
      ]}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator color="#9FA3A9" />
        ) : (
          <>
            {icon && <View style={title ? styles.icon : styles.iconOnly}>{icon}</View>}

            {title && (
              <Text
                style={[BASE_STYLES.text, variantStyles.text, isDisabled && DISABLED_STYLES.text]}
              >
                {title}
              </Text>
            )}
          </>
        )}
      </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 8,
  },

  iconOnly: {
    marginRight: 0,
  },

  pressed: {
    opacity: 0.9,
  },

  shrink: {
    transform: [{ scale: 0.96 }],
  },
})
