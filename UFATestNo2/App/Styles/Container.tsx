import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  CONTAINER: ViewStyle;
  CONTAINER_HEADER_SEARCH: ViewStyle;
}

const Container = StyleSheet.create<Styles>({
  CONTAINER: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  CONTAINER_HEADER_SEARCH: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 16, 
    backgroundColor: '#FFF' 
  },
})

export default Container