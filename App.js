import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
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
        <View style={{ marginBottom: 46 }}>
          {/* Greetings  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/sun.png")}
              style={{ height: 32, width: 32 }}
            />
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 20,
                color: "#fff",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              Good Morning
            </Text>
          </View>

          {/* Time  */}
          <View style={{ marginTop: 10 }}>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 100,
                  color: "#fff",
                }}
              >
                11:30
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                BST
              </Text>
            </Text>
          </View>

          {/* Location  */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 18,
                color: "#fff",
                letterSpacing: 3,
              }}
            >
              In London UK
            </Text>
          </View>

          {/* Button  */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              height: 40,
              width: 115,
              borderRadius: 13,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
              paddingLeft: 16,
              paddingRight: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              MORE
            </Text>
            <Image
              source={require("./assets/ad.png")}
              style={{
                height: 25,
                width: 25,
                marginLeft: 8,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
