import { Colors } from "../Theme/Colors";
import { Fonts } from "../Theme/Fonts";
import { font } from "../Theme/Responsive";

export const text = (
  size = 3.5,
  color = Colors.black,
  fontFamily = Fonts.regular
) => {
  return {
    includeFontPadding: false,
    // textAlignVertical: "center",
    fontSize: (size && font(size)) || font(3.5),
    color,
    fontFamily,
    // lineHeight: font(size + 2),
  };
};
