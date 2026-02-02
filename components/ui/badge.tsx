import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type BadgeVariant = 'completed' | 'inProgress'

type BadgeProps = {
  variant: BadgeVariant
}

const BADGE_CONFIG: Record<
  BadgeVariant,
  {
    label: string
    color: string
    bgColor: string
    borderColor: string
    icon: React.ReactNode
  }
> = {
  completed: {
    label: 'Done',
    color: '#059669',
    bgColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    icon: <Ionicons name="checkmark-circle" size={14} color="#059669" />,
  },
  inProgress: {
    label: 'Active',
    color: '#D97706',
    bgColor: '#FFFBEB',
    borderColor: '#FDE68A',
    icon: <Ionicons name="flash" size={14} color="#D97706" />,
  },
}

export default function Badge({ variant }: BadgeProps) {
  const config = BADGE_CONFIG[variant]

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: config.bgColor,
          borderColor: config.borderColor,
        },
      ]}
    >
      {config.icon}
      <Text style={[styles.text, { color: config.color }]}>{config.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
})
