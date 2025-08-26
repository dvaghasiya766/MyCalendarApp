import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TextInputProps,
} from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts } from "../../Theme/Fonts";
import { text } from "../../Utility/text";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface AppTextInputProps extends TextInputProps {
  label?: string; // optional label
}

export default function AppTextInput({ label, ...props }: AppTextInputProps) {
  const [enteredText, setEnteredText] = useState("");
  const [labelState, setLabelState] = useState({
    isFocused: false,
    topValue: 19,
  });

  function onChangeText(text: string) {
    setEnteredText(text);
    // If user types something, keep label on top
    if (text.trim() !== "") {
      setEnteredText(text);
    }
  }

  function onFocus() {
    setLabelState({ isFocused: true, topValue: -5 });
  }

  function onBlur() {
    const givenText = enteredText.trim();
    if (givenText !== "") {
      // keep label up if text exists
      setLabelState({ isFocused: true, topValue: -5 });
    } else {
      // move label down if empty
      setLabelState({ isFocused: false, topValue: 19 });
    }
  }

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const selectedLabel = useAnimatedStyle(() => {
    return {
      color: withTiming(
        labelState.isFocused ? Colors.primary : Colors.gray200,
        config
      ),
      top: withTiming(labelState.topValue, config),
    };
  });

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={true}
        autoCapitalize="words"
        cursorColor={Colors.primary}
        {...props}
        style={labelState.isFocused ? styles.selectedInput : styles.input}
        onChangeText={(text) => onChangeText(text)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {label && (
        <Animated.Text style={[selectedLabel, styles.label]}>
          {label}
        </Animated.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 8,
    width: "100%",
  },
  label: {
    position: "absolute",
    paddingHorizontal: 4,
    left: 16,
    top: 19,
    backgroundColor: Colors.white,
    ...text(3.5, Colors.gray200, Fonts.medium),
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: Colors.gray100,
    borderRadius: 8,
    marginVertical: 4,
    paddingHorizontal: 14,
    ...text(3.5, Colors.gray400, Fonts.medium),
  },
  selectedInput: {
    height: 50,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    marginVertical: 4,
    paddingHorizontal: 14,
    ...text(3.5, Colors.gray400, Fonts.medium),
  },
});
