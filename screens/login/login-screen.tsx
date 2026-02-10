import AppButton from '@/components/ui/button/gradient-button'
import Divider from '@/components/ui/divider'
import AppTextInput from '@/components/ui/input/filled'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const updateField = (key: 'email' | 'password', value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleContinue = () => {
    console.log('Login form data:', form)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      {/* Enhanced Header */}
      <LinearGradient
        colors={['#1C339A', '#2947C7', '#3B5CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          {/* Logo with glow effect */}
          <View style={styles.logoWrapper}>
            <View style={styles.logoGlow} />
            <LinearGradient colors={['#FFFFFF', '#F0F4FF']} style={styles.logo}>
              <Ionicons name="sunny" size={36} color="#1C339A" />
            </LinearGradient>
          </View>

          {/* Title & Subtitle */}
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue your journey</Text>
          </View>

          {/* Decorative circles */}
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
        </View>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Email */}
          <AppTextInput
            leftIcon="mail"
            placeholder="E-mail"
            value={form.email}
            onChangeText={(text) => updateField('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          {/* Password */}
          <AppTextInput
            leftIcon="shield-checkmark"
            placeholder="Password"
            value={form.password}
            onChangeText={(text) => updateField('password', text)}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoComplete="password"
          >
            <Pressable onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeIcon}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#94A3B8"
              />
            </Pressable>
          </AppTextInput>

          {/* Forgot Password */}
          <Pressable>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </Pressable>

          {/* Continue */}
          <AppButton title="Continue" onPress={handleContinue} />

          <Divider text="Don't have an account yet?" />

          {/* Create account */}
          <AppButton
            title="Create an account"
            variant="secondary"
            onPress={() => console.log('Create account')}
          />

          {/* Apple */}
          <AppButton
            title="Sign in with Apple"
            variant="secondary"
            icon={<Ionicons name="logo-apple" size={20} color="#000" style={styles.socialIcon} />}
            onPress={() => console.log('Apple sign-in')}
          />

          {/* Google */}
          <AppButton
            title="Sign in with Google"
            variant="secondary"
            icon={
              <Ionicons name="logo-google" size={20} color="#1C339A" style={styles.socialIcon} />
            }
            onPress={() => console.log('Google sign-in')}
          />

          {/* Terms */}
          <Text style={styles.terms}>
            By clicking "Continue", I have read and agree{'\n'}
            with the <Text style={styles.termsLink}>Term Sheet</Text>,{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  headerContent: {
    alignItems: 'center',
    position: 'relative',
  },
  logoWrapper: {
    marginBottom: 24,
    position: 'relative',
  },
  logoGlow: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    opacity: 0.15,
    top: -8,
    left: -8,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  headerTextContainer: {
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    top: -30,
    right: -40,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    bottom: -20,
    left: -20,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  eyeIcon: {
    padding: 4,
    marginLeft: 12,
  },
  forgotPassword: {
    fontSize: 15,
    color: '#1C339A',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '500',
  },
  socialIcon: {
    marginRight: 8,
  },
  terms: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 18,
    paddingBottom: 24,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: '#334155',
  },
})
