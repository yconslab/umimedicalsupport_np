import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  inputWrap: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  buttonWrap: {
    margin: 20,
  },
  innerStyle: {
    backgroundColor: Colors.activeBlueColor,
  },
  innerStyle1: {
    backgroundColor: Colors.activeBlueColor,
    color: Colors.inactiveTextColor,
  },
  innerStyle2: {
    backgroundColor: Colors.inactiveButtonColor,
  },
});
