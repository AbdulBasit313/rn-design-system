import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Divider from '../ui/divider'

export default function DividerDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Divider Examples</Text>

      {/* Basic divider */}
      <Divider />

      <Text style={styles.sectionText}>Content Section</Text>

      {/* With spacing */}
      <Divider spacing={24} />

      {/* Dashed divider */}
      <Divider dashed />

      <Text style={styles.sectionText}>Another Section</Text>

      {/* Text divider */}
      <Divider text="OR" />

      {/* Custom text */}
      <Divider text="CONTINUE" dashed textStyle={{ fontSize: 12, letterSpacing: 1 }} />

      {/* Vertical divider */}
      <View style={styles.row}>
        <Text style={styles.inlineText}>Left</Text>
        <Divider vertical style={{ height: 24 }} />
        <Text style={styles.inlineText}>Right</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  sectionText: {
    fontSize: 14,
    color: '#374151',
    marginVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 24,
  },

  inlineText: {
    fontSize: 14,
    color: '#374151',
  },
})
