// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import Checkbox from "expo-checkbox"; 
// import logo from "../../assets/images/logo.png";
// import { useRouter } from 'expo-router';

// export default function Login() {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [isAdult, setIsAdult] = useState(false);

//   const handleLogin = () => {
//   if (!isAdult) {
//     Alert.alert("Age Verification", "You must confirm you are 18 years above.");
//     return;
//   }

//   if (!mobileNumber || mobileNumber.length < 10) {
//     Alert.alert("Invalid Input", "Please enter a valid mobile number.");
//     return;
//   }

//   // Navigate to OTP screen
//   router.push('/components/Otp');
// };


//   return (
//     <View style={styles.container}>
//       <LinearGradient colors={['#B10A10', '#1B1B1B']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//        style={styles.header}>
//         <Text style={styles.headerText}>Login</Text>
//       </LinearGradient>
    
//       <Image source={logo} style={styles.logo} />

//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter mobile number"
//           keyboardType="phone-pad"
//           value={mobileNumber}
//           onChangeText={setMobileNumber}
//         />

//         <View style={styles.checkboxContainer}>
//           <Checkbox value={isAdult} onValueChange={setIsAdult} color={isAdult ? "#B10A10" : undefined} />
//           <Text style={styles.checkboxLabel}>I am 18 years above</Text>
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.agreeText}>By login, I agree to oio’s T&C</Text>
//       <Text style={styles.referralText}>Have a Referral Code?</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     paddingVertical: 40,
//     marginBottom: 20,
//     // borderRadius:- 10
//   },
//   headerText: {
//     color: "#fff",
//     fontSize: 18,
//     textAlign: "center",
//     fontWeight: "bold",
//     marginTop:20
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain",
//     alignSelf: "center",
//     marginBottom: 30,
//   },
//   formContainer: {
//     paddingHorizontal: 24, // Added horizontal padding
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 14,
//     marginBottom: 15,
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 45,
//   },
//   checkboxLabel: {
//     marginLeft: 8,
//     fontSize: 14,
//   },
//   button: {
//     backgroundColor: "#B10A10",
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 25,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   agreeText: {
//     textAlign: "center",
//     fontSize: 12,
//     color: "#555",
//     marginBottom: 25,
//   },
//   referralText: {
//     textAlign: "center",
//     fontSize: 14,
//     color: "#000",
//     fontWeight: "bold",
//   },
// });


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/images/logo.png";
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      Alert.alert("Invalid Input", "Please enter a valid mobile number.");
      return;
    }

    // Navigate to OTP screen
    router.push('/components/Otp');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#B10A10', '#1B1B1B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
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
      {/* <Text style={styles.referralText}>Have a Referral Code?</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 40,
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
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
  referralText: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
});




