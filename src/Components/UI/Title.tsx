import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../../Theme/Fonts";
import { text } from "../../Utility/text";
import { Colors } from "../../Theme/Colors";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    ...text(8, Colors.gray500, Fonts.bold),
  },
});
