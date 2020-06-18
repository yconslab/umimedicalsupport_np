import { StyleSheet } from "react-native";
import Colors from "../../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "center",
  },
  textWrap: {
    alignItems: "center",
  },
  info: {
    fontSize: 19,
    lineHeight: 29,
    color: Colors.activeBlueColor,
  },
  boxMargin: {
    marginHorizontal: 20,
    // backgroundColor: "yellow",
    marginVertical: 5,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottomColor,
  },
  infoTextWrap: {
    justifyContent: "center",
  },
  matchStatusWrap: {
    justifyContent: "center",
  },
  infotext: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.TextColor,
  },
  matchStatus: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.activeBlueColor,
  },
  innerStyle: {
    backgroundColor: Colors.activeBlueColor,
  },
  margin_20: {
    margin: 20,
  },
});
