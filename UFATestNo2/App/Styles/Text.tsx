import { StyleSheet, TextStyle, View } from "react-native";

interface Styles {
  TEXT_10SP: TextStyle;
  TEXT_12SP: TextStyle;
  TEXT_14SP: TextStyle;
  TEXT_16SP: TextStyle;
  TEXT_18SP: TextStyle;
  TEXT_20SP: TextStyle;
  TEXT_22SP: TextStyle;
  TEXT_24SP: TextStyle;
  TEXT_26SP: TextStyle;
  TEXT_30SP: TextStyle;
  TEXT_10SP_SEMI_BOLD: TextStyle;
  TEXT_12SP_SEMI_BOLD: TextStyle;
  TEXT_14SP_SEMI_BOLD: TextStyle;
  TEXT_16SP_SEMI_BOLD: TextStyle;
  TEXT_18SP_SEMI_BOLD: TextStyle;
  TEXT_20SP_SEMI_BOLD: TextStyle;
  TEXT_22SP_SEMI_BOLD: TextStyle;
  TEXT_24SP_SEMI_BOLD: TextStyle;
  TEXT_26SP_SEMI_BOLD: TextStyle;
  TEXT_30SP_SEMI_BOLD: TextStyle;
  TEXT_10SP_BOLD: TextStyle;
  TEXT_12SP_BOLD: TextStyle;
  TEXT_14SP_BOLD: TextStyle;
  TEXT_16SP_BOLD: TextStyle;
  TEXT_18SP_BOLD: TextStyle;
  TEXT_20SP_BOLD: TextStyle;
  TEXT_22SP_BOLD: TextStyle;
  TEXT_24SP_BOLD: TextStyle;
  TEXT_26SP_BOLD: TextStyle;
  TEXT_30SP_BOLD: TextStyle;
  TEXT_10SP_MEDIUM: TextStyle;
  TEXT_12SP_MEDIUM: TextStyle;
  TEXT_14SP_MEDIUM: TextStyle;
  TEXT_16SP_MEDIUM: TextStyle;
  TEXT_18SP_MEDIUM: TextStyle;
  TEXT_20SP_MEDIUM: TextStyle;
  TEXT_22SP_MEDIUM: TextStyle;
  TEXT_24SP_MEDIUM: TextStyle;
  TEXT_26SP_MEDIUM: TextStyle;
  TEXT_30SP_MEDIUM: TextStyle;
  TEXT_10SP_LIGHT: TextStyle;
  TEXT_12SP_LIGHT: TextStyle;
  TEXT_14SP_LIGHT: TextStyle;
  TEXT_16SP_LIGHT: TextStyle;
  TEXT_18SP_LIGHT: TextStyle;
  TEXT_20SP_LIGHT: TextStyle;
  TEXT_22SP_LIGHT: TextStyle;
  TEXT_24SP_LIGHT: TextStyle;
  TEXT_26SP_LIGHT: TextStyle;
  TEXT_30SP_LIGHT: TextStyle;
}

const FontStyle = {
  PoppinsRegular: 'PoppinsRegular',
  PoppinsSemiBold: 'PoppinsSemiBold',
  PoppinsBold: 'PoppinsBold',
  PoppinsMedium: 'PoppinsMedium',
  PoppinsLight: 'PoppinsLight',
}

const Text = StyleSheet.create<Styles>({
  TEXT_10SP: {
    fontSize: 10,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_12SP: {
    fontSize: 12,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_14SP: {
    fontSize: 14,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_16SP: {
    fontSize: 16,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_18SP: {
    fontSize: 18,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_20SP: {
    fontSize: 20,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_22SP: {
    fontSize: 22,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_24SP: {
    fontSize: 24,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_26SP: {
    fontSize: 26,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_30SP: {
    fontSize: 30,
    fontFamily: FontStyle.PoppinsRegular,
  },
  TEXT_10SP_SEMI_BOLD: {
    fontSize: 10,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_12SP_SEMI_BOLD: {
    fontSize: 12,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_14SP_SEMI_BOLD: {
    fontSize: 14,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_16SP_SEMI_BOLD: {
    fontSize: 16,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_18SP_SEMI_BOLD: {
    fontSize: 18,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_20SP_SEMI_BOLD: {
    fontSize: 20,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_22SP_SEMI_BOLD: {
    fontSize: 22,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_24SP_SEMI_BOLD: {
    fontSize: 24,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_26SP_SEMI_BOLD: {
    fontSize: 26,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_30SP_SEMI_BOLD: {
    fontSize: 30,
    fontFamily: FontStyle.PoppinsSemiBold,
  },
  TEXT_10SP_BOLD: {
    fontSize: 10,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_12SP_BOLD: {
    fontSize: 12,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_14SP_BOLD: {
    fontSize: 14,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_16SP_BOLD: {
    fontSize: 16,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_18SP_BOLD: {
    fontSize: 18,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_20SP_BOLD: {
    fontSize: 20,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_22SP_BOLD: {
    fontSize: 22,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_24SP_BOLD: {
    fontSize: 24,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_26SP_BOLD: {
    fontSize: 26,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_30SP_BOLD: {
    fontSize: 30,
    fontFamily: FontStyle.PoppinsBold,
  },
  TEXT_10SP_MEDIUM: {
    fontSize: 10,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_12SP_MEDIUM: {
    fontSize: 12,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_14SP_MEDIUM: {
    fontSize: 14,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_16SP_MEDIUM: {
    fontSize: 16,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_18SP_MEDIUM: {
    fontSize: 18,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_20SP_MEDIUM: {
    fontSize: 20,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_22SP_MEDIUM: {
    fontSize: 22,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_24SP_MEDIUM: {
    fontSize: 24,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_26SP_MEDIUM: {
    fontSize: 26,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_30SP_MEDIUM: {
    fontSize: 30,
    fontFamily: FontStyle.PoppinsMedium,
  },
  TEXT_10SP_LIGHT: {
    fontSize: 10,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_12SP_LIGHT: {
    fontSize: 12,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_14SP_LIGHT: {
    fontSize: 14,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_16SP_LIGHT: {
    fontSize: 16,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_18SP_LIGHT: {
    fontSize: 18,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_20SP_LIGHT: {
    fontSize: 20,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_22SP_LIGHT: {
    fontSize: 22,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_24SP_LIGHT: {
    fontSize: 24,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_26SP_LIGHT: {
    fontSize: 26,
    fontFamily: FontStyle.PoppinsLight,
  },
  TEXT_30SP_LIGHT: {
    fontSize: 30,
    fontFamily: FontStyle.PoppinsLight,
  },
})

export default Text