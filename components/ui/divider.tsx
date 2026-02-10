import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

interface DividerProps {
  color?: string
  thickness?: number
  spacing?: number
  vertical?: boolean
  text?: string
  dashed?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
}

export default function Divider({
  color = '#E2E8F0',
  thickness = 1,
  spacing = 16,
  vertical = false,
  text,
  dashed = false,
  style,
  textStyle,
}: DividerProps) {
  if (text && !vertical) {
    return (
      <View style={[styles.textContainer, { marginVertical: spacing }]}>
        <Line color={color} thickness={thickness} dashed={dashed} />
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <Line color={color} thickness={thickness} dashed={dashed} />
      </View>
    )
  }

  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: dashed ? 'transparent' : color,
          marginVertical: vertical ? 0 : spacing,
          marginHorizontal: vertical ? spacing : 0,
          ...(vertical
            ? { width: thickness, height: '100%' }
            : { height: thickness, width: '100%' }),
          borderStyle: dashed ? 'dashed' : 'solid',
          borderWidth: dashed ? thickness : 0,
          borderColor: dashed ? color : undefined,
        },
        style,
      ]}
    />
  )
}

interface LineProps {
  color: string
  thickness: number
  dashed: boolean
}

function Line({ color, thickness, dashed }: LineProps) {
  return (
    <View
      style={[
        styles.flexLine,
        {
          height: thickness,
          backgroundColor: dashed ? 'transparent' : color,
          borderStyle: dashed ? 'dashed' : 'solid',
          borderWidth: dashed ? thickness : 0,
          borderColor: dashed ? color : undefined,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  line: {
    alignSelf: 'stretch',
  },

  flexLine: {
    flex: 1,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    marginHorizontal: 12,
    fontSize: 13,
    color: '#94A3B8',
  },
})
