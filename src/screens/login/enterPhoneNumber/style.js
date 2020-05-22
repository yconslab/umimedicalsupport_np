import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  inputWrapper: {
    margin: 20,
  },
  btnWrap: {
    margin: 20,
  },
  innerStyle1: {
    backgroundColor: Colors.activeBlueColor,
    color: Colors.inactiveTextColor,
  },
  innerStyle2: {
    backgroundColor: Colors.inactiveButtonColor,
  },
  innerTextStyle1: {
    color: Colors.inactiveButtonColor,
  },
  innerTextStyle2: {
    color: Colors.appColor,
  },
});
