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
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

// Get screen dimensions at the top level
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  useEffect(() => {
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
    alert(`Entered OTP is: ${enteredOtp}`);
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
              Don't receive OTP?{' '}
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: windowHeight * 0.05,
    alignItems: 'center',
    marginBottom: windowHeight * 0.12,
    bottom: windowHeight * 0.07,
  },
  headerText: {
    color: '#fff',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.05,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: windowWidth * 0.07,
    marginBottom: windowHeight * 0.03,
  },
  otpInput: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: windowWidth * 0.02,
    textAlign: 'center',
    fontSize: windowWidth * 0.05,
  },
  resendText: {
    textAlign: 'center',
    fontSize: windowWidth * 0.035,
    marginBottom: windowHeight * 0.04,
    color: '#000',
  },
  bottom: {
    position: 'absolute',
    bottom: windowHeight * 0.04,
    width: '100%',
    paddingHorizontal: windowWidth * 0.07,
  },
  verifyButton: {
    backgroundColor: '#B10A10',
    paddingVertical: windowHeight * 0.018,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: windowWidth * 0.04,
  },
});

export default Otp;


