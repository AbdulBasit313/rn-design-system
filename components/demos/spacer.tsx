import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spacer from '../ui/spacer'

export default function SpacerDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Spacer Demo</Text>

      <Text style={styles.text}>Above</Text>
      <Spacer height={16} />
      <Text style={styles.text}>Below (16px)</Text>

      <Spacer height={24} />

      <View style={styles.row}>
        <View style={styles.box} />
        <Spacer width={12} height="auto" />
        <View style={styles.box} />
        <Spacer width={12} height="auto" />
        <View style={styles.box} />
      </View>

      <Spacer height={24} />

      <Spacer height={1} width="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: '#374151',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#E5E7EB',
  },
})
