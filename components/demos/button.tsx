import Button from '@/components/ui/button'
import Spacer from '@/components/ui/spacer'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

export default function ButtonDemo() {
  const handlePress = (variant: string, state: string = '') => {
    const buttonName = state ? `${variant} ${state}` : variant
    console.log(`${buttonName} pressed`)
  }

  return (
    <View>
      {/* Primary Variant */}
      <View>
        <Text style={styles.sectionTitle}>Primary</Text>

        <Button title="Buy Now" onPress={() => handlePress('Primary')} />

        <Spacer height={12} />

        <Text style={styles.sectionTitle}>Loading</Text>
        <Button title="Primary Loading" loading onPress={() => handlePress('Primary', 'loading')} />
      </View>

      <Spacer height={32} />

      {/* Secondary Variant */}
      <View>
        <Text style={styles.sectionTitle}>Secondary</Text>
        <View style={[styles.row, styles.gap10]}>
          <Button title="Add to Cart" variant="secondary" />
          <Button
            title="Save"
            variant="secondary"
            icon={<Ionicons name="save-outline" size={20} color="#fff" />}
          />
          <Button
            icon={<Ionicons name="settings" size={24} color="#fff" />}
            variant="secondary"
            onPress={() => handlePress('Primary', 'icon only')}
          />
        </View>

        <Spacer height={12} />
      </View>

      <Spacer height={10} />

      {/* Outline Variant */}
      <View>
        <Text style={styles.sectionTitle}>Outline</Text>

        <View style={[styles.row, styles.gap10]}>
          <Button title="Delete" variant="outline" onPress={() => handlePress('Outline')} />

          <Button
            title=""
            variant="outline"
            icon={<Ionicons name="trash-bin-outline" size={20} color="#E8AE1B" />}
            onPress={() => handlePress('Outline', 'with icon')}
          />
        </View>
      </View>

      <Spacer height={32} />

      {/* Ghost Variant */}
      <View>
        <Text style={styles.sectionTitle}>Text Button</Text>

        <View style={[styles.row, styles.gap10]}>
          <Button title="Learn More" variant="ghost" onPress={() => handlePress('Ghost')} />

          <Button
            title="Like"
            variant="ghost"
            icon={<Ionicons name="heart" size={20} color="#E8AE1B" />}
            onPress={() => handlePress('Ghost', 'like')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 8,
  },
  gap10: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
