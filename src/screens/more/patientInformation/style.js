import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "flex-start",
  },

  listWrapper: {
    margin: 20,
  },
  listBox: {
    height: 56,
    width: "100%",
    borderBottomColor: "#00000014",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    color: "#404040",
  },
  contactNumber: {
    fontSize: 16,
    lineHeight: 19,
    color: "#404040",
    opacity: 0.6,
  },
  buttonWrap: {
    margin: 20,
  },
  innerStyle: {
    backgroundColor: Colors.appColor,
    borderWidth: 2,
    borderColor: Colors.activeBlueColor,
  },
  innerTextStyle: {
    color: Colors.activeBlueColor,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 20,
  },
});
