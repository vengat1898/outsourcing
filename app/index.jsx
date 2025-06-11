
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome!</Text>
      <TouchableOpacity onPress={() => router.push("/components/Login")}>
        <Text style={{ marginTop: 20, color: "blue" }}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

