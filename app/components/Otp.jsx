import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

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
    // alert(Entered OTP is: ${enteredOtp});
    router.push('/components/Register');
  };

  const handleResend = () => {
    alert('OTP Resent');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}
        >
          <View style={{ flex: 1 }}>
            <LinearGradient
              colors={['#B10A10', '#1B1B1B']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.header}
            >
              <Text style={styles.headerText}>OTP</Text>
            </LinearGradient>

            <View style={styles.content}>
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

              <View style={styles.centeredButton}>
                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
    color: '#000',
  },
  centeredButton: {
    alignItems: 'center',
  },
  verifyButton: {
    backgroundColor: '#B10A10',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Otp;







