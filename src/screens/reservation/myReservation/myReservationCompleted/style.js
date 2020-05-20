import { StyleSheet } from "react-native";
import Colors from "../../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.appColor,
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
});
