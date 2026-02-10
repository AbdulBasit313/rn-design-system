import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type DemoContainerProps = {
  title: string
  children: ReactNode
}

const DemoContainer = ({ title, children }: DemoContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

export default DemoContainer

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
  },
})
