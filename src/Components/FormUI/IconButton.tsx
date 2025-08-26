import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { Children } from "react";
import { Colors } from "../../Theme/Colors";
import { Fonts } from "../../Theme/Fonts";

interface IconButtonProps {
  onPress: () => void;
  style?: TextStyle;
  children: React.ReactNode;
}

export default function IconButton({
  onPress,
  style,
  children,
}: IconButtonProps) {
  return (
    <View style={[styles.outterContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.gray200 }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.innerContainer}>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: "50%",
    // backgroundColor: Colors.gray100,
    overflow: "hidden",
  },
  innerContainer: { padding: 12 },
  pressed: {
    opacity: 0.9,
  },
});
