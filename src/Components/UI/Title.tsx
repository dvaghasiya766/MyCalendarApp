import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../../Theme/Fonts";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 30,
  },
});
