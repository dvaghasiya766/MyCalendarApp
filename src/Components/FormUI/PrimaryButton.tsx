// import { Pressable, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Colors } from "../../Theme/Colors";
// import { Fonts } from "../../Theme/Fonts";

// interface PrimaryButtonProps {
//   onPress: () => void;
//   children: React.ReactNode;
// }

// export default function PrimaryButton({
//   onPress,
//   children,
// }: PrimaryButtonProps) {
//   return (
//     <View style={styles.buttonOuterContainer}>
//       <Pressable
//         onPress={onPress}
//         android_ripple={{ color: Colors.primaryDark }}
//         style={({ pressed }) =>
//           pressed
//             ? [styles.buttonInnercontainer, styles.pressed]
//             : styles.buttonInnercontainer
//         }
//       >
//         <Text style={styles.buttonText}>{children}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonOuterContainer: { borderRadius: 28, margin: 10, overflow: "hidden" },
//   buttonInnercontainer: {
//     backgroundColor: Colors.primary,
//     // paddingVertical: 8,
//     paddingHorizontal: 16,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     shadowOpacity: 0.3,
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontFamily: Fonts.regular, // custom font
//   },
//   pressed: {
//     backgroundColor: Colors.primaryLight,
//     // opacity: 0.75, // This will apply a slight opacity change when the button is pressed
//   },
// });
// // #F9A825

import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import Gradient from "../UI/Gradient";

interface PrimaryButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Gradient>
        <Text style={styles.text}>{title}</Text>
      </Gradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.85,
  },
});
