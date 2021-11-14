import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  BTN_GET_STARTED: ViewStyle;
  BTN_TAB_BAR_ACTIVE: ViewStyle;
  BTN_TAB_BAR_INACTIVE: ViewStyle;
  BTN_BACK: ViewStyle;
}

const Button = StyleSheet.create<Styles>({
  BTN_GET_STARTED: {
    position: 'absolute',
    paddingVertical: 10,
    width: 150,
    backgroundColor: '#F9B090',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -25
  },
  BTN_TAB_BAR_ACTIVE: {
    backgroundColor: '#672CBC', 
    padding: 10, 
    borderRadius: 100, 
    bottom: 25, 
    position: 'absolute'
  },
  BTN_TAB_BAR_INACTIVE: {
    backgroundColor: '#EFE9F5', 
    padding: 10, 
    borderRadius: 100
  },
  BTN_BACK: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#FFF', 
    padding: 10, 
    borderRadius: 100 
  }
})

export default Button;
