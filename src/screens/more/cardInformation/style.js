import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants";
const { width, height } = Dimensions.get("screen");
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
    // alignItems: "center",
  },
  innerStyle: {
    height: 40,
    width: width / 2.3,
    borderColor: "#707070",
    backgroundColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center",
  },
  innerTextStyle: {
    color: "#707070",
  },
  innerStyle1: {
    backgroundColor: Colors.activeBlueColor,
    color: Colors.inactiveTextColor,
  },
  innerStyle2: {
    backgroundColor: Colors.inactiveButtonColor,
  },
  inputWrapper: {
    flexDirection: "row",
  },
  firstInput: {
    width: width / 1.5,
  },
  secondInput: {
    width: width / 4.4,
  },
  bottombuttonWrap: {
    margin: 20,
  },
  greyBorder:{
    borderBottomColor:'grey',
    borderBottomWidth:1
  },
  blueBorder:{
    borderBottomColor:'blue',
    borderBottomWidth:1
  }
});
