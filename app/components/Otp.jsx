import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    // Auto-focus the first input when component mounts
    if (inputs.current[0]) {
      inputs.current[0].focus();
    }
  }, []);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      alert('Please enter the complete OTP');
      return;
    }

    // For demonstration
    alert(`Entered OTP is: ${enteredOtp}`);

    // Navigate to Register screen
    router.push('/components/Register');
  };

  const handleResend = () => {
    alert('OTP Resent');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <LinearGradient
            colors={['#B10A10', '#1B1B1B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}
          >
            <Text style={styles.headerText}>OTP</Text>
          </LinearGradient>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                ref={(ref) => (inputs.current[index] = ref)}
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
                returnKeyType={index === otp.length - 1 ? 'done' : 'next'}
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>
              Don’t receive OTP?{' '}
              <Text style={{ color: '#B10A10', fontWeight: 'bold' }}>Resend</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Otp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 40,
    alignItems: 'center',
    marginBottom: 100,
    bottom:60
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
    color: '#000',
  },
  bottom: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 24,
  },
  verifyButton: {
    backgroundColor: '#B10A10',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});



