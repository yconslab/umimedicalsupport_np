import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants";

const { height, width } = Dimensions.get("screen");
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "center",
  },
  textBox: {
    marginHorizontal: 20,
    marginVertical: 40,
    // height: 'auto',
  },
  innerText: {
    fontSize: 15,
    lineHeight: 19,
    color: "#707070",
  },
  bottomWrapper: {
    margin: 20,
  },
  bottomtxt: {
    fontSize: 17,
    lineHeight: 20,
    color: "#021F2C",
    fontWeight: "bold",
  },
  bottomTextWrap: {
    alignItems: "center",
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 17,
    lineHeight: 20,
    color: "#021F2C",
    fontWeight: "bold",
  },
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerStyle1: {
    width: width / 2.3,
    height: 56,
    borderColor: "#4388F0",
    borderWidth: 2,
    backgroundColor: Colors.appColor,
  },
  innerStyle2: {
    width: width / 2.3,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#FFDF00",
  },
  innerTextStyle1: {
    color: Colors.activeBlueColor,
    fontWeight: "bold",
  },
  innerTextStyle2: {
    color: Colors.TextColor,
    fontWeight: "bold",
  },
});
