import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  StatusBar,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo.png";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      Alert.alert("Invalid Input", "Please enter a valid mobile number.");
      return;
    }

    router.push("/components/Otp");
  };

  return (
    <View style={styles.container}>
      {/* Transparent StatusBar for gradient background */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Gradient Header including the status bar area */}
      <LinearGradient
        colors={["#B10A10", "#1B1B1B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <SafeAreaView>
          <Text style={styles.headerText}>Login</Text>
        </SafeAreaView>
      </LinearGradient>

      <Image source={logo} style={styles.logo} />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="+91-Enter mobile number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.agreeText}>By login, I agree to oio’s T&C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#B10A10",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  agreeText: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    marginBottom: 25,
  },
});





