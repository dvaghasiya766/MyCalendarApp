import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/UI/Title";
import PrimaryButton from "../Components/FormUI/PrimaryButton";
import AppTextInput from "../Components/FormUI/AppTextInput";

function handleSignIn() {
  Alert.alert(
    "Forbidden 403!",
    "Currently Not Available this Functionality..."
  );
}

export default function SignInScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Sign In Here</Title>
          <AppTextInput label="Enter Your Email" />
          <AppTextInput label="Enter Your Name" />
          <PrimaryButton title="Sign In Now" onPress={handleSignIn} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    paddingHorizontal: 22,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
