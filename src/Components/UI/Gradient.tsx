import React from "react";
import { StyleSheet, ColorValue } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]]; // gradient colors
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children: React.ReactNode;
}

export default function Gradient({
  colors = ["#4c669f", "#3b5998", "#192f6a"], // default gradient
  start = { x: 1, y: 0 },
  end = { x: 0, y: 0 },
  children,
}: GradientButtonProps) {
  return (
    <LinearGradient
      colors={colors}
      style={styles.button}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

// Example
// <Gradient
//   start={{ x: 0, y: 0 }}
//   end={{ x: 1, y: 1 }}
//   colors={statusGradients.primary}
// >
//   <View style={{ height: 150, width: 150 }}></View>
// </Gradient>;
