import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants";
const { width, height } = Dimensions.get("screen");
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  contentWrap: {
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
    flex: 1 / 2,
  },
  profileImage: {
    height: 78,
    width: 78,
    borderRadius: 78 / 2,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  title1: {
    fontSize: 20,
    lineHeight: 30,
    color: "#000000",
  },
  title2: {
    fontSize: 14,
    lineHeight: 21,
    color: "#1A88FF",
  },
  normalText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000000",
  },
  bottomTextWrap: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottomColor,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  marginText: {
    marginVertical: 20,
  },
  textStyle: {
    fontSize: 11,
    lineHeight: 17,
    color: Colors.TextColor,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.activeBlueColor,
  },
  bigCircle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    backgroundColor: Colors.activeBlueColor,
  },
  progressText: {
    color: "#CBCCCD",
    fontSize: 13,
    lineHeight: 17,
  },
  blueText: {
    color: Colors.activeBlueColor,
  },
  progressBarWrap: {
    justifyContent: "column",
    marginVertical: 35,
    justifyContent: "flex-end",
  },
  progressBarInnerWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "#E7E8E9",
    borderRadius: 5,
  },
  blueCircle: {
    width: 15,
    height: 15,
    backgroundColor: "#4388F0",
    borderRadius: 15 / 2,
  },
  progressBarLine: {
    width: width / 4.5,
    height: 1,
    backgroundColor: "#E7E8E9",
  },
  progressTextWrap: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  flex_Column: {
    flexDirection: "column",
  },
  innerStyle2: {
    width: width / 2.5,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.appColor,
    borderColor: Colors.activeBlueColor,
    borderWidth: 1,
  },
  innerTextStyle2: {
    color: Colors.activeBlueColor,
  },
  innerStyle1: {
    width: width / 2.5,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.activeBlueColor,
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonMargin: {
    margin: 20,
  },
  margin_20: {
    margin: 20,
  },
  margin_15: {
    margin: 15,
  },
});
