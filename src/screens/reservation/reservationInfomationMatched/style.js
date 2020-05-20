import { StyleSheet } from "react-native";
import Colors from "../../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  circleBoxWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  circleBox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#707070",
  },
  circleBoxText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000000",
    marginLeft: 10,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 18,
    color: "#393939",
    marginVertical: 5,
  },
  inputContainerStyle: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#DFE4EB",
  },
  inputStyle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#393939",
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 78,
    width: 78,
    borderRadius: 78 / 2,
    marginBottom: 10,
  },
  title1Style: {
    fontSize: 16,
    lineHeight: 19,
    color: "#404040",
  },
  title2Style: {
    fontSize: 24,
    lineHeight: 29,
    color: "#000000",
    fontWeight: "bold",
  },
  innerStyle: {
    backgroundColor: Colors.activeBlueColor,
  },
  midlineStyle: {
    backgroundColor: "#EBEBEB",
    width: "100%",
  },
  commonMargin: {
    margin: 20,
  },
  bottomText1: {
    color: Colors.TextColor,
  },
  bottomText2: {
    color: "#FF5151",
  },
  height_1: {
    height: 1,
  },
  height_9: {
    height: 9,
  },
  height_21: {
    height: 21,
  },
  normalTextExtra: {
    color: "#00000057",
    marginBottom: 20,
  },
  marginBottom_20: {
    marginBottom: 20,
  },
  marginBottom_40: {
    marginBottom: 40,
  },
  marginVertical_10: {
    marginVertical: 10,
  },
  innerStyle: { backgroundColor: Colors.activeBlueColor },
});
