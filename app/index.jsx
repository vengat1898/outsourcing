import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Add this line
import logo from '../assets/images/logo.png';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* App Logo */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to OurSourcing</Text>
      <Text style={styles.subText}>Let’s get you started!</Text>

      {/* Gradient Login Button */}
      <TouchableOpacity onPress={() => router.push('/components/Login')}>
        <LinearGradient
          colors={['#B10A10', '#1B1B1B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Go to Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1B1B1B',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  loginButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});



