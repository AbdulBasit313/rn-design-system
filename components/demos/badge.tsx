import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Badge from '../ui/badge'

export default function BadgeDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Quizzes</Text>
      <Text style={styles.subHeading}>Track your progress</Text>

      <View style={styles.row}>
        <Text style={styles.title}>JavaScript Basics</Text>
        <Badge variant="completed" />
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>React Hooks</Text>
        <Badge variant="inProgress" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    lineHeight: 26,
  },
  subHeading: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
  },
})
