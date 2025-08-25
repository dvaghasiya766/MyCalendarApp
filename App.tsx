import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import Gradient from "./src/Components/UI/Gradient";
import PrimaryButton from "./src/Components/FormUI/PrimaryButton";

export default function App() {
  const [loaded, error] = useFonts({
    "Poppins-Light": require("./assets/Fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/Fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/Fonts/Poppins-Bold.ttf"),
    "Poppins-Italic": require("./assets/Fonts/Poppins-Italic.ttf"),
    "Poppins-ExtraBold": require("./assets/Fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontFamily: "Poppins-Bold" }}>
            Open up App.tsx to start working on your app Hello!
          </Text>
          <PrimaryButton onPress={() => console.log("button pressed!")}>
            Hello
          </PrimaryButton>
          <Gradient />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
