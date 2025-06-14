import React, { useState, useRef } from 'react';
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
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function Register() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const mobileInput = useRef(null);
  const emailInput = useRef(null);
  const addressInput = useRef(null);

  const handleRegister = () => {
    Keyboard.dismiss();
    if (!name || !mobile || !email || !address) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    router.push('/components/Home');
  };

  return (
    <View style={styles.fullContainer}>
      <StatusBar barStyle="light-content" translucent />
<LinearGradient
  colors={['#B10A10', '#1B1B1B']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={[styles.header, { paddingTop: insets.top }]}
>
  <Text style={styles.headerText}>Register</Text>
</LinearGradient>
      
      <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
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
                returnKeyType="next"
                onSubmitEditing={() => mobileInput.current?.focus()}
              />
              <TextInput
                ref={mobileInput}
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#999"
                value={mobile}
                onChangeText={setMobile}
                keyboardType="phone-pad"
                returnKeyType="next"
                onSubmitEditing={() => emailInput.current?.focus()}
              />
              <TextInput
                ref={emailInput}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => addressInput.current?.focus()}
              />
              <TextInput
                ref={addressInput}
                style={[styles.input, styles.addressInput]}
                placeholder="Address"
                placeholderTextColor="#999"
                value={address}
                onChangeText={setAddress}
                multiline
                returnKeyType="done"
                onSubmitEditing={handleRegister}
              />
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.registerButton} 
              onPress={handleRegister}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientHeader: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: windowHeight * 0.025,
    zIndex: 1,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: windowHeight * 0.12,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
header: {
  height: 120,
  justifyContent: 'flex-end', // pushes text to the bottom
  alignItems: 'center',
  paddingBottom: 10, // same as OTP look
},
headerText: {
  color: '#fff',
  fontSize: 21,
  fontWeight: 'bold',
},
  scrollContent: {
    flexGrow: 1,
    paddingBottom: windowHeight * 0.1,
  },
  formContainer: {
    paddingHorizontal: windowWidth * 0.07,
    paddingTop: windowHeight * 0.05, // Increased from 0.03 to 0.05 to move inputs down
    marginTop: windowHeight * 0.02, // Added margin to push container down
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: windowWidth * 0.02,
    padding: Platform.OS === 'ios' ? windowHeight * 0.02 : windowHeight * 0.018,
    marginBottom: windowHeight * 0.025,
    fontSize: windowWidth * 0.04,
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: windowHeight * 0.002 },
    // shadowOpacity: 0.1,
    // shadowRadius: windowWidth * 0.005,
    // elevation: 2,
  },
  addressInput: {
    minHeight: windowHeight * 0.15,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    paddingHorizontal: windowWidth * 0.07,
    paddingBottom: windowHeight * 0.03,
    backgroundColor: '#fff',
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






