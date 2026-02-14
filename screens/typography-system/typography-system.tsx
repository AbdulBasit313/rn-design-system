import AppBar from '@/components/ui/app-bar'
import Text from '@/components/ui/text'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'

export default function TextDemoScreen() {
  return (
    <View style={styles.container}>
      <AppBar title="Typography System" showBackButton={true} subtitle="Design System Components" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text variant="subtitle1" weight="semibold" style={styles.sectionTitle}>
              Brand Identity
            </Text>

            {/* Primary Brand Card */}
            <Pressable
              style={({ pressed }) => [
                styles.brandCard,
                { backgroundColor: '#FFF9E6' },
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.brandCardHeader}>
                <View style={[styles.colorDot, { backgroundColor: '#D4A017' }]} />
                <Text variant="overline" color="primary">
                  PRIMARY BRAND
                </Text>
              </View>
              <Text variant="titleTertiary" weight="bold" color="primary" style={{ marginTop: 12 }}>
                Premium Gold
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                Main brand color for primary actions, highlights, and premium features
              </Text>
              <View style={styles.brandFeatures}>
                <View style={styles.featureTag}>
                  <Text variant="caption" weight="medium" color="primary">
                    Buttons
                  </Text>
                </View>
                <View style={styles.featureTag}>
                  <Text variant="caption" weight="medium" color="primary">
                    Icons
                  </Text>
                </View>
                <View style={styles.featureTag}>
                  <Text variant="caption" weight="medium" color="primary">
                    Highlights
                  </Text>
                </View>
              </View>
            </Pressable>

            {/* Secondary Brand Card */}
            <Pressable
              style={({ pressed }) => [
                styles.brandCard,
                { backgroundColor: '#F0F9FF' },
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.brandCardHeader}>
                <View style={[styles.colorDot, { backgroundColor: '#0ea5e9' }]} />
                <Text variant="overline" color="secondary">
                  SECONDARY BRAND
                </Text>
              </View>
              <Text
                variant="titleTertiary"
                weight="bold"
                color="secondary"
                style={{ marginTop: 12 }}
              >
                Sky Blue
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                Supporting color for links, info states, and interactive elements
              </Text>
              <View style={styles.brandFeatures}>
                <View style={[styles.featureTag, { backgroundColor: '#E0F2FE' }]}>
                  <Text variant="caption" weight="medium" color="secondary">
                    Links
                  </Text>
                </View>
                <View style={[styles.featureTag, { backgroundColor: '#E0F2FE' }]}>
                  <Text variant="caption" weight="medium" color="secondary">
                    Info
                  </Text>
                </View>
                <View style={[styles.featureTag, { backgroundColor: '#E0F2FE' }]}>
                  <Text variant="caption" weight="medium" color="secondary">
                    Accents
                  </Text>
                </View>
              </View>
            </Pressable>

            {/* Tertiary Brand Card */}
            <Pressable
              style={({ pressed }) => [
                styles.brandCard,
                { backgroundColor: '#FAF5FF' },
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.brandCardHeader}>
                <View style={[styles.colorDot, { backgroundColor: '#8b5cf6' }]} />
                <Text variant="overline" color="tertiary">
                  TERTIARY BRAND
                </Text>
              </View>
              <Text
                variant="titleTertiary"
                weight="bold"
                color="tertiary"
                style={{ marginTop: 12 }}
              >
                Royal Purple
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                Accent color for special features, badges, and premium content
              </Text>
              <View style={styles.brandFeatures}>
                <View style={[styles.featureTag, { backgroundColor: '#F3E8FF' }]}>
                  <Text variant="caption" weight="medium" color="tertiary">
                    Badges
                  </Text>
                </View>
                <View style={[styles.featureTag, { backgroundColor: '#F3E8FF' }]}>
                  <Text variant="caption" weight="medium" color="tertiary">
                    Premium
                  </Text>
                </View>
                <View style={[styles.featureTag, { backgroundColor: '#F3E8FF' }]}>
                  <Text variant="caption" weight="medium" color="tertiary">
                    Special
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          {/* Typography Showcase - Real App Content */}
          <View style={styles.section}>
            <Text variant="subtitle1" weight="semibold" style={styles.sectionTitle}>
              Recent Activity
            </Text>

            {/* Notification Card */}
            <View style={styles.notificationCard}>
              <View style={styles.notificationHeader}>
                <View style={[styles.notificationIcon, { backgroundColor: '#DCFCE7' }]}>
                  <Text variant="body1" color="success">
                    ✓
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text variant="subtitle2" weight="semibold">
                    Payment Received
                  </Text>
                  <Text variant="caption" color="textTertiary">
                    5 minutes ago
                  </Text>
                </View>
              </View>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 8 }}>
                Your payment of{' '}
                <Text weight="semibold" color="success">
                  $2,500.00
                </Text>{' '}
                from Acme Corp has been successfully processed.
              </Text>
            </View>

            {/* Warning Card */}
            <View style={[styles.notificationCard, { borderLeftColor: '#ea580c' }]}>
              <View style={styles.notificationHeader}>
                <View style={[styles.notificationIcon, { backgroundColor: '#FFEDD5' }]}>
                  <Text variant="body1" color="warning">
                    ⚠
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text variant="subtitle2" weight="semibold">
                    Action Required
                  </Text>
                  <Text variant="caption" color="textTertiary">
                    1 hour ago
                  </Text>
                </View>
              </View>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 8 }}>
                Please review and approve 3 pending invoices before the end of the day.
              </Text>
            </View>
          </View>

          {/* Text Hierarchy Demo - Product Card */}
          <View style={styles.section}>
            <Text variant="subtitle1" weight="semibold" style={styles.sectionTitle}>
              Typography Hierarchy
            </Text>

            <View style={styles.productCard}>
              <Text variant="overline" color="tertiary">
                FEATURED PRODUCT
              </Text>
              <Text variant="title" weight="bold" style={{ marginTop: 8 }}>
                Pro Membership
              </Text>
              <Text variant="titleSecondary" color="primary" weight="bold" style={{ marginTop: 4 }}>
                $49.99/month
              </Text>
              <Text variant="body1" color="textSecondary" style={{ marginTop: 12 }}>
                Unlock premium features and take your productivity to the next level with our Pro
                membership.
              </Text>

              <View style={styles.divider} />

              <Text variant="subtitle2" weight="semibold" style={{ marginTop: 16 }}>
                What's included:
              </Text>
              <View style={styles.featureList}>
                <View style={styles.featureItem}>
                  <Text variant="body1" color="success">
                    ✓
                  </Text>
                  <Text variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>
                    Unlimited projects and storage
                  </Text>
                </View>
                <View style={styles.featureItem}>
                  <Text variant="body1" color="success">
                    ✓
                  </Text>
                  <Text variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>
                    Advanced analytics and insights
                  </Text>
                </View>
                <View style={styles.featureItem}>
                  <Text variant="body1" color="success">
                    ✓
                  </Text>
                  <Text variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>
                    Priority customer support
                  </Text>
                </View>
                <View style={styles.featureItem}>
                  <Text variant="body1" color="success">
                    ✓
                  </Text>
                  <Text variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>
                    Exclusive templates and resources
                  </Text>
                </View>
              </View>

              <Pressable
                style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
              >
                <Text variant="subtitle2" color="white" weight="semibold">
                  Upgrade Now
                </Text>
              </Pressable>

              <Text variant="caption" color="textTertiary" align="center" style={{ marginTop: 12 }}>
                Cancel anytime. No hidden fees.
              </Text>
            </View>
          </View>

          {/* Semantic Colors in Action */}
          <View style={styles.section}>
            <Text variant="subtitle1" weight="semibold" style={styles.sectionTitle}>
              System Messages
            </Text>

            <View style={[styles.messageCard, styles.successCard]}>
              <Text variant="subtitle2" weight="semibold" color="success">
                ✓ Upload Complete
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                Your files have been successfully uploaded and are now available.
              </Text>
            </View>

            <View style={[styles.messageCard, styles.infoCard]}>
              <Text variant="subtitle2" weight="semibold" color="info">
                ℹ System Update Available
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                A new version is available. Update now to get the latest features.
              </Text>
            </View>

            <View style={[styles.messageCard, styles.warningCard]}>
              <Text variant="subtitle2" weight="semibold" color="warning">
                ⚠ Storage Almost Full
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                You're using 85% of your storage. Consider upgrading your plan.
              </Text>
            </View>

            <View style={[styles.messageCard, styles.errorCard]}>
              <Text variant="subtitle2" weight="semibold" color="error">
                ✕ Connection Failed
              </Text>
              <Text variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
                Unable to connect to server. Please check your internet connection.
              </Text>
            </View>
          </View>

          {/* Text Decorations in Context */}
          <View style={styles.section}>
            <Text variant="subtitle1" weight="semibold" style={styles.sectionTitle}>
              Shopping Cart
            </Text>

            <View style={styles.cartCard}>
              <View style={styles.cartItem}>
                <View style={{ flex: 1 }}>
                  <Text variant="subtitle2" weight="semibold">
                    Premium UI Kit
                  </Text>
                  <Text variant="caption" color="textTertiary">
                    Digital Download
                  </Text>
                </View>
                <View>
                  <Text variant="body2" lineThrough color="textTertiary">
                    $99.00
                  </Text>
                  <Text variant="subtitle2" weight="bold" color="primary">
                    $49.00
                  </Text>
                </View>
              </View>

              <View style={styles.cartItem}>
                <View style={{ flex: 1 }}>
                  <Text variant="subtitle2" weight="semibold">
                    Icon Pack Pro
                  </Text>
                  <Text variant="caption" color="textTertiary">
                    5000+ icons
                  </Text>
                </View>
                <View>
                  <Text variant="body2" lineThrough color="textTertiary">
                    $59.00
                  </Text>
                  <Text variant="subtitle2" weight="bold" color="primary">
                    $29.00
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.cartTotal}>
                <View>
                  <Text variant="caption" color="textTertiary">
                    SUBTOTAL
                  </Text>
                  <Text variant="body2" weight="medium" style={{ marginTop: 4 }}>
                    $78.00
                  </Text>
                </View>
                <View>
                  <Text variant="caption" color="textTertiary" align="right">
                    DISCOUNT
                  </Text>
                  <Text
                    variant="body2"
                    weight="medium"
                    color="success"
                    align="right"
                    style={{ marginTop: 4 }}
                  >
                    -$80.00
                  </Text>
                </View>
                <View>
                  <Text variant="caption" color="textTertiary" align="right">
                    TOTAL
                  </Text>
                  <Text
                    variant="titleTertiary"
                    weight="bold"
                    align="right"
                    style={{ marginTop: 4 }}
                  >
                    $78.00
                  </Text>
                </View>
              </View>

              <Pressable
                style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
              >
                <Text variant="subtitle2" color="white" weight="semibold">
                  Proceed to Checkout
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Bottom spacing */}
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  brandCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  brandCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  brandFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  featureTag: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#16a34a',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  notificationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginTop: 16,
  },
  featureList: {
    marginTop: 12,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  primaryButton: {
    backgroundColor: '#D4A017',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  messageCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
  },
  successCard: {
    backgroundColor: '#f0fdf4',
    borderLeftColor: '#16a34a',
  },
  infoCard: {
    backgroundColor: '#eff6ff',
    borderLeftColor: '#2563eb',
  },
  warningCard: {
    backgroundColor: '#fff7ed',
    borderLeftColor: '#ea580c',
  },
  errorCard: {
    backgroundColor: '#fef2f2',
    borderLeftColor: '#dc2626',
  },
  cartCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 16,
  },
  cartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
})
