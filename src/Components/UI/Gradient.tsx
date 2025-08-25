import React from "react";
import { StyleSheet, ColorValue } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]]; // gradient colors
  children: React.ReactNode;
}

export default function Gradient({
  colors = ["#4c669f", "#3b5998", "#192f6a"], // default gradient
  children,
}: GradientButtonProps) {
  return (
    <LinearGradient colors={colors} style={styles.button}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
