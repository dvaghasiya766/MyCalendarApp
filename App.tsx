import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";

// Custom Components
import SignInScreen from "./src/Screens/SignInScreen";
import { statusGradients } from "./src/Theme/Colors";
import Gradient from "./src/Components/UI/Gradient";

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
      <View style={styles.container}>
        <StatusBar style="light" />
        <Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={statusGradients.primary}
          style={styles.container}
        >
          <SafeAreaView style={styles.container}>
            <SignInScreen />
            {/* <AnimatedStyleUpdateExample /> */}
          </SafeAreaView>
        </Gradient>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
