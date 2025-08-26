import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { StyleSheet, TextInput, View, TextInputProps } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../Theme/Colors";
import { Fonts } from "../../Theme/Fonts";
import { text } from "../../Utility/text";
import IconButton from "./IconButton";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface AppTextInputProps extends TextInputProps {
  label?: string;
  isPsw?: boolean;
}

// 👇 forwardRef so parent can access .focus()
const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  ({ label, isPsw = false, ...props }, ref) => {
    const inputRef = useRef<TextInput>(null);
    const [isSecure, setIsSecure] = useState(isPsw);
    const [enteredText, setEnteredText] = useState("");
    const [labelState, setLabelState] = useState({
      isFocused: false,
      topValue: 19,
      color: Colors.gray200,
      border: Colors.gray100,
    });

    // expose imperative methods to parent
    useImperativeHandle(ref, () => inputRef.current);

    const toggleVisibility = () => setIsSecure((prev) => !prev);

    function onChangeText(text: string) {
      setEnteredText(text);
    }

    function onFocus() {
      setLabelState({
        isFocused: true,
        topValue: -4,
        color: Colors.primary,
        border: Colors.primary,
      });
    }

    function onBlur() {
      const givenText = enteredText.trim();
      if (givenText !== "") {
        setLabelState({
          isFocused: true,
          topValue: -4,
          color: Colors.gray200,
          border: Colors.gray100,
        });
      } else {
        setLabelState({
          isFocused: false,
          topValue: 19,
          color: Colors.gray200,
          border: Colors.gray100,
        });
      }
    }

    const colorConfig = { duration: 400, easing: Easing.inOut(Easing.ease) };
    const positionConfig = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    const sizeConfig = { duration: 350, easing: Easing.out(Easing.cubic) };

    const selectedLabel = useAnimatedStyle(() => ({
      color: withTiming(labelState.color, colorConfig),
      fontSize: withTiming(labelState.isFocused ? 13 : 16, sizeConfig),
      top: withTiming(labelState.topValue, positionConfig),
    }));

    const selectedInput = useAnimatedStyle(() => ({
      borderColor: withTiming(labelState.border, colorConfig),
      color: withTiming(
        labelState.isFocused ? Colors.gray800 : Colors.primary,
        colorConfig
      ),
    }));

    return (
      <View style={styles.container}>
        <AnimatedTextInput
          ref={inputRef}
          {...props}
          autoCorrect={true}
          cursorColor={Colors.primary}
          secureTextEntry={isSecure}
          style={[styles.input, selectedInput]}
          onChangeText={(text) => onChangeText(text)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {label && (
          <Animated.Text style={[selectedLabel, styles.label]}>
            {label}
          </Animated.Text>
        )}
        {isPsw && (
          <IconButton
            onPress={toggleVisibility}
            style={{ position: "absolute", right: 3 }}
          >
            <Ionicons
              name={isSecure ? "eye-off" : "eye"}
              size={20}
              color={labelState.isFocused ? Colors.primary : Colors.gray400}
            />
          </IconButton>
        )}
      </View>
    );
  }
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 2,
    justifyContent: "center",
    width: "100%",
  },
  label: {
    position: "absolute",
    paddingHorizontal: 4,
    left: 20,
    top: 19,
    backgroundColor: Colors.white,
    ...text(3.5, Colors.gray200, Fonts.medium),
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: Colors.gray100,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 23,
    overflow: "hidden",
    ...text(3.5, Colors.gray400, Fonts.regular),
  },
});
