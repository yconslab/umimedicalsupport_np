import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.appColor,
    flex: 1,
    alignContent: "flex-start",
  },
  checkBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4388F0",
    backgroundColor: "#4388F0",
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    // color: 'white',
    // flex: 1,
  },
  unCheckBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0000002E",
    // backgroundColor: '#0000002E',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  CheckBoxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title1: {
    fontSize: 12,
    // lineHeight: 9,
    color: "#000000",
    // textDecorationLine: 'underline',
  },
  title2: {
    fontSize: 8,
    // lineHeight: 9,
    color: "#4388F0",
  },
  checkedIconWrap: {
    alignSelf: "flex-end",

    width: 20,
  },
  checkedIconStyle: {
    height: 10,
    width: 10,
  },
  titleTextWrap: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // justifyContent: 'center',
    alignItems: "center",
    flex: 3,
  },
  textStyle1: {
    fontSize: 15,
    color: "#4388F0",
    fontWeight: "bold",
  },
  textStyle2: {
    textDecorationLine: "underline",
    fontSize: 12,
    color: "#000000",
  },
  textStyle3: {
    textDecorationLine: "underline",
    color: "#000000",
  },
  containerStyle1: {
    backgroundColor: "white",
    borderColor: "#4388F0",
    flex: 1,
  },
  containerStyle2: {
    backgroundColor: "white",
    borderColor: "white",
    flex: 1,
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
  contentTopMargin: {
    marginTop: 40,
  },
  btnWrap: {
    margin: 20,
  },
});
