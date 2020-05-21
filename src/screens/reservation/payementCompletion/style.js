import { StyleSheet } from "react-native";
import Colors from "../../../constants/";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  contentWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 178.19,
    width: 289.73,
    overflow: "hidden",
    marginHorizontal: "5%"
  },
  titleText: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginTop: 16,
    color: "#2A8CFF"
  },
  normalText: {
    fontSize: 14,
    textAlign: "center",

    marginHorizontal: 40,
    color: "#404040",
    lineHeight: 17
  },
  box: {
    width: "85%",
    marginHorizontal: "7.5%",
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#4388F0",
    marginBottom: 16,
    backgroundColor: "#4388F0",
    alignSelf: "center"
  },
  innerStyle: {
    backgroundColor: Colors.activeColor
  },
  marginStyle: {
    margin: 20
  },
  marginBottomStyle: {
    marginBottom: 32
  }
});
