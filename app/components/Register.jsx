import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Keyboard,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

// Get screen dimensions at the top level
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function Register() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !mobile || !email || !address) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    router.push('/components/Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#B10A10', '#1B1B1B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}
          >
            <Text style={styles.headerText}>Register</Text>
          </LinearGradient>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#999"
                value={mobile}
                onChangeText={setMobile}
                keyboardType="phone-pad"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
              <TextInput
                style={[styles.input, styles.addressInput]}
                placeholder="Address"
                placeholderTextColor="#999"
                value={address}
                onChangeText={setAddress}
                multiline
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
          </ScrollView>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + windowHeight * 0.03 : windowHeight * 0.08,
    paddingBottom: windowHeight * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.18,
  },
  headerText: {
    color: '#fff',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
  },
  scrollContent: {
    flexGrow: 1,
  },
  formContainer: {
    paddingHorizontal: windowWidth * 0.07,
    paddingTop: windowHeight * 0.03,
    paddingBottom: windowHeight * 0.05,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: windowWidth * 0.02,
    padding: Platform.OS === 'ios' ? windowHeight * 0.02 : windowHeight * 0.018,
    marginBottom: windowHeight * 0.025,
    fontSize: windowWidth * 0.04,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: windowHeight * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: windowWidth * 0.005,
    elevation: 2,
  },
  addressInput: {
    minHeight: windowHeight * 0.15,
    textAlignVertical: 'top',
  },
  bottomContainer: {
    paddingHorizontal: windowWidth * 0.07,
    paddingVertical: windowHeight * 0.02,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  registerButton: {
    backgroundColor: '#B10A10',
    paddingVertical: windowHeight * 0.02,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: windowHeight * 0.003 
    },
    shadowOpacity: 0.2,
    shadowRadius: windowWidth * 0.01,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
  },
});





