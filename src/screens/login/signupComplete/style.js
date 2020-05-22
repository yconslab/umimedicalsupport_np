import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  contentWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle1: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginTop: 16,
    color: "#2A8CFF",
  },
  contentTitle2: {
    fontSize: 14,
    textAlign: "center",

    marginHorizontal: 40,
    color: "#404040",
    lineHeight: 17,
  },
  imageStyle: {
    height: 178.19,
    width: 289.73,
    overflow: "hidden",
    marginHorizontal: "5%",
  },
  btnWrap: {
    margin: 20,
  },
  innerStyle: {
    backgroundColor: Colors.activeBlueColor,
  },
});
