import AppBar from '@/components/ui/app-bar'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'

const AppBarScreen = () => {
  const [selectedDemo, setSelectedDemo] = useState('home')
  const [showCode, setShowCode] = useState(false)

  const demoSections = [
    { id: 'home', label: 'Home Screen', icon: 'home-outline' },
    { id: 'profile', label: 'Profile Page', icon: 'person-outline' },
    { id: 'messages', label: 'Messages', icon: 'chatbubbles-outline' },
    { id: 'settings', label: 'Settings', icon: 'settings-outline' },
    { id: 'search', label: 'Search', icon: 'search-outline' },
    { id: 'notification', label: 'Notifications', icon: 'notifications-outline' },
  ]

  const renderRightElement = (type: string) => {
    switch (type) {
      case 'search':
        return (
          <View style={styles.actionButtons}>
            <Pressable style={styles.iconButton} accessibilityLabel="Search">
              <Ionicons name="search-outline" size={20} color="#1E293B" />
            </Pressable>
            <Pressable style={styles.iconButton} accessibilityLabel="Filter">
              <Ionicons name="funnel-outline" size={20} color="#1E293B" />
            </Pressable>
          </View>
        )
      case 'edit':
        return (
          <Pressable style={styles.primaryButton} accessibilityLabel="Edit">
            <Text style={styles.primaryButtonText}>Edit</Text>
          </Pressable>
        )
      case 'share':
        return (
          <View style={styles.actionButtons}>
            <Pressable style={styles.iconButton} accessibilityLabel="Share">
              <Ionicons name="share-outline" size={20} color="#1E293B" />
            </Pressable>
            <Pressable style={styles.iconButton} accessibilityLabel="More">
              <Ionicons name="ellipsis-vertical" size={20} color="#1E293B" />
            </Pressable>
          </View>
        )
      case 'add':
        return (
          <Pressable style={styles.iconButton} accessibilityLabel="Add">
            <Ionicons name="add" size={20} color="#1E293B" />
          </Pressable>
        )
      default:
        return null
    }
  }

  const renderDemo = () => {
    switch (selectedDemo) {
      case 'home':
        return <AppBar title="Discover" rightElement={renderRightElement('search')} />

      case 'profile':
        return (
          <AppBar
            title="Emma Watson"
            subtitle="emma.watson@email.com"
            showBackButton
            rightElement={renderRightElement('edit')}
            onBackPress={() => alert('Back pressed')}
          />
        )

      case 'messages':
        return (
          <AppBar title="Messages" titleAlign="center" rightElement={renderRightElement('add')} />
        )

      case 'settings':
        return (
          <AppBar
            title="Account Settings"
            showBackButton
            onBackPress={() => alert('Back pressed')}
          />
        )

      case 'search':
        return (
          <AppBar
            title="Search Results"
            subtitle="24 items found"
            showBackButton
            rightElement={renderRightElement('share')}
            onBackPress={() => alert('Back pressed')}
          />
        )

      case 'notification':
        return (
          <AppBar
            title="Notifications"
            titleAlign="center"
            showBackButton
            onBackPress={() => alert('Back pressed')}
          />
        )

      default:
        return <AppBar title="Default" />
    }
  }

  return (
    <View style={styles.container}>
      {renderDemo()}

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Demo Selection */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Screen Examples</Text>
            <Text style={styles.sectionSubtitle}>
              Tap to preview different app bar configurations
            </Text>
          </View>

          <View style={styles.demoGrid}>
            {demoSections.map((section) => (
              <Pressable
                key={section.id}
                style={[styles.demoCard, selectedDemo === section.id && styles.demoCardActive]}
                onPress={() => setSelectedDemo(section.id)}
              >
                <View
                  style={[
                    styles.demoIconContainer,
                    selectedDemo === section.id && styles.demoIconContainerActive,
                  ]}
                >
                  <Ionicons
                    name={section.icon as any}
                    size={22}
                    color={selectedDemo === section.id ? '#3B82F6' : '#64748B'}
                  />
                </View>
                <Text
                  style={[
                    styles.demoCardText,
                    selectedDemo === section.id && styles.demoCardTextActive,
                  ]}
                >
                  {section.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Code Example Toggle */}
        <View style={styles.codeToggleSection}>
          <Text style={styles.codeToggleLabel}>Show Code</Text>
          <Switch
            value={showCode}
            onValueChange={setShowCode}
            trackColor={{ false: '#E2E8F0', true: '#BFDBFE' }}
            thumbColor={showCode ? '#3B82F6' : '#F1F5F9'}
          />
        </View>

        {/* Code Block */}
        {showCode && (
          <View style={styles.codeSection}>
            <View style={styles.codeHeader}>
              <Ionicons name="code-slash" size={16} color="#94A3B8" />
              <Text style={styles.codeHeaderText}>Component Code</Text>
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{getCodeExample(selectedDemo)}</Text>
            </View>
          </View>
        )}

        {/* Features Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <View style={styles.featuresGrid}>
            <FeatureCard
              icon="shield-checkmark-outline"
              title="Type Safe"
              description="Full TypeScript support with strong typing"
              color="#10B981"
            />
            <FeatureCard
              icon="accessibility-outline"
              title="Accessible"
              description="WCAG compliant with screen reader support"
              color="#8B5CF6"
            />
            <FeatureCard
              icon="resize-outline"
              title="Responsive"
              description="Adapts to safe area and device screens"
              color="#F59E0B"
            />
            <FeatureCard
              icon="color-palette-outline"
              title="Customizable"
              description="Style props for complete control"
              color="#EF4444"
            />
          </View>
        </View>

        {/* Usage Stats */}
        <View style={styles.statsSection}>
          <StatItem label="Bundle Size" value="3.2 KB" icon="document-text-outline" />
          <StatItem label="Dependencies" value="2" icon="git-branch-outline" />
          <StatItem label="Variants" value="6+" icon="options-outline" />
        </View>
      </ScrollView>
    </View>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: string
  title: string
  description: string
  color: string
}) => (
  <View style={styles.featureCard}>
    <View style={[styles.featureIconContainer, { backgroundColor: color + '15' }]}>
      <Ionicons name={icon as any} size={20} color={color} />
    </View>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
)

const StatItem = ({ label, value, icon }: { label: string; value: string; icon: string }) => (
  <View style={styles.statItem}>
    <Ionicons name={icon as any} size={18} color="#64748B" />
    <View style={styles.statContent}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  </View>
)

const getCodeExample = (demo: string): string => {
  switch (demo) {
    case 'home':
      return `<AppBar
  title="Discover"
  rightElement={
    <View style={styles.actionButtons}>
      <IconButton icon="search-outline" />
      <IconButton icon="funnel-outline" />
    </View>
  }
/>`
    case 'profile':
      return `<AppBar
  title="Emma Watson"
  subtitle="emma.watson@email.com"
  showBackButton
  rightElement={
    <Button text="Edit" />
  }
/>`
    case 'messages':
      return `<AppBar
  title="Messages"
  titleAlign="center"
  rightElement={
    <IconButton icon="add" />
  }
/>`
    case 'settings':
      return `<AppBar
  title="Account Settings"
  showBackButton
/>`
    case 'search':
      return `<AppBar
  title="Search Results"
  subtitle="24 items found"
  showBackButton
  rightElement={
    <View style={styles.actions}>
      <IconButton icon="share-outline" />
      <IconButton icon="ellipsis-vertical" />
    </View>
  }
/>`
    case 'notification':
      return `<AppBar
  title="Notifications"
  titleAlign="center"
  showBackButton
/>`
    default:
      return `<AppBar title="Default" />`
  }
}

export default AppBarScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '400',
  },
  demoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  demoCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F1F5F9',
    shadowColor: 'rgba(15, 23, 42, 0.04)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  demoCardActive: {
    borderColor: '#e8f1ff',
    backgroundColor: '#F0F9FF',
  },
  demoIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  demoIconContainerActive: {
    backgroundColor: '#fff',
    borderColor: '#e8f1ff',
  },
  demoCardText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  demoCardTextActive: {
    color: '#1E40AF',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.2,
  },
  codeToggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  codeToggleLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  codeSection: {
    marginBottom: 32,
    overflow: 'hidden',
    borderRadius: 12,
  },
  codeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  codeHeaderText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94A3B8',
  },
  codeBlock: {
    backgroundColor: '#0F172A',
    padding: 16,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#E2E8F0',
    lineHeight: 20,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  featureCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  featureIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  featureDescription: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
  },
  statsSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
  },
})
