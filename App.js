import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    <ActivityIndicator />;
  }

  return (
    <ImageBackground source={require("./assets/bg.jpg")} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        {/* UPPER PORTION  OF THE SCREEN */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 14,
                color: "#fff",
              }}
            >
              "The Science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value."
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                color: "#fff",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          <Image
            source={require("./assets/refresh-icon.png")}
            style={{ height: 32, width: 32 }}
          ></Image>
        </View>
        {/* LOWER PORTION OF THE SCREEN */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
