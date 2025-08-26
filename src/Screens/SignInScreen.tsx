import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
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
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Sign Up Here</Title>
          <View style={styles.inputContainer}>
            <AppTextInput
              ref={emailRef}
              label="Enter Your Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => passwordRef.current?.focus()} // 👈 jump to Name
            />
            <AppTextInput
              isPsw
              ref={passwordRef}
              label="Create New Password"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
            />
          </View>
          <PrimaryButton title="Sign Up Now" onPress={handleSignIn} />
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
  inputContainer: {
    marginTop: 8,
  },
});
