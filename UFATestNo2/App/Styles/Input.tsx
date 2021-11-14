import { ImageStyle } from "react-native";
import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  INPUT_SEARCH: ViewStyle;
}

const Input = StyleSheet.create<Styles>({
  INPUT_SEARCH: {
    borderColor: '#8789A2',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
})

export default Input