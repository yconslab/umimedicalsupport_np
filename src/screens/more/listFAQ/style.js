import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  textWrapper: {
    width: "90%",
    height: "auto",
    marginBottom: "10%",
  },
  titleText: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: "left",
    color: "#00000099",
  },
  titleBox: {
    marginBottom: 14,
  },
  box: {
    height: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#00000014",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listWrap: {
    margin: 20,
  },
});
