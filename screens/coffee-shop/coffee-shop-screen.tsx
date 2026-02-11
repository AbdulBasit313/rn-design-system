import Card from '@/components/ui/card/card'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')
const HORIZONTAL_PADDING = 16
const CARD_GAP = 16
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2

// Design tokens
const COLORS = {
  background: '#F5F5F7',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  primary: '#111827',
  white: '#FFFFFF',
}

const categories = [
  { id: '1', title: 'Espresso', icon: 'cafe' },
  { id: '2', title: 'Latte', icon: 'beer' },
  { id: '3', title: 'Cappuccino', icon: 'water' },
  { id: '4', title: 'Cold Brew', icon: 'snow' },
  { id: '5', title: 'Beans', icon: 'nutrition' },
]

const products = [
  {
    id: '1',
    title: 'Caramel Latte',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800',
  },
  {
    id: '2',
    title: 'Iced Coffee',
    price: '$3.90',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800',
  },
  {
    id: '3',
    title: 'Mocha',
    price: '$4.20',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800',
  },
  {
    id: '4',
    title: 'Flat White',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
  },
]

const CoffeeShopScreen = () => {
  const handleCategoryPress = (category: any) => {
    console.log('Category pressed:', category.title)
  }

  const handleProductPress = (product: any) => {
    console.log('Product pressed:', product.title)
  }

  const handleFeaturedPress = () => {
    console.log('Featured pressed')
  }

  const renderCategory = ({ item }: any) => (
    <Card
      variant="outlined"
      padding="small"
      style={styles.categoryCard}
      onPress={() => handleCategoryPress(item)}
    >
      <View style={styles.categoryContent}>
        <Ionicons name={item.icon} size={20} color={COLORS.textSecondary} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </Card>
  )

  const renderProduct = ({ item }: any) => (
    <Card
      variant="filled"
      padding="none"
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </Card>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: HORIZONTAL_PADDING }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning ☕</Text>
          <Text style={styles.subtitle}>Find your perfect coffee</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderCategory}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>

        {/* Featured */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔥 Featured</Text>
          <Card variant="elevated" padding="none" onPress={handleFeaturedPress}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200',
              }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>Signature Cappuccino</Text>
              <Text style={styles.featuredSubtitle}>Rich espresso with velvety steamed milk</Text>
              <View style={styles.featuredFooter}>
                <Text style={styles.featuredPrice}>$5.20</Text>
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>Popular</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        {/* Popular Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
            columnWrapperStyle={styles.productRow}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CoffeeShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },

  // Categories
  categoriesContainer: {
    gap: 12,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryCard: {},
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },

  // Featured
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  featuredBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  featuredBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#92400E',
  },

  // Products
  productRow: {
    gap: CARD_GAP,
  },
  productCard: {
    width: CARD_WIDTH,
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 140,
  },
  productContent: {
    padding: 12,
    gap: 4,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textSecondary,
  },
})
