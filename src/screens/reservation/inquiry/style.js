import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileWrap: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  imageStyle: {
    height: 78,
    width: 78,
    borderRadius: 78 / 2,
    marginBottom: 10,
  },
  title1: {
    fontSize: 14,
    lineHeight: 21,
    color: "#1A88FF",
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
  amountWrap: {
    flexDirection: "row",
  },
  amountText: {
    fontSize: 23,
    lineHeight: 28,
    color: Colors.TextColor,
  },
  blueAmountText: {
    color: Colors.activeBlueColor,
    fontWeight: "bold",
  },
  couponText: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.43,
    color: "#666666",
  },
  midLineStyle: {
    backgroundColor: "#EBEBEB",
    width: "100%",
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  circleBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#707070",
  },
  circleText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000000",
    marginLeft: 10,
  },
  commonMargin: {
    margin: 20,
  },
  commonMarginHorizontal: {
    marginHorizontal: 20,
  },
  lineHeight1: {
    height: 1,
  },
  lineHeight21: {
    height: 21,
  },
  innerStyle:{
    backgroundColor: Colors.activeBlueColor
  }
});
