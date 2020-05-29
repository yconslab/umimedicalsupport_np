import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: Colors.appColor,
  },
  ratingWrap: {
    alignItems: "center",
    marginTop: 20,
  },

  ratingIcon: {
    height: 33,
    width: 33,
  },
  textArea: {
    height: 167,

    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#EDEDED",
    margin: 20,
  },
  input: {
    borderBottomColor: "#F9F9F9",
  },
  title1: {
    fontSize: 17,
    lineHeight: 26,
    color: "#393939",
  },
  title2: {
    fontSize: 24,
    lineHeight: 29,
    color: "#000000",
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#404040",
  },
  textBoxWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  marginBox: {
    margin: 20,
  },
  headerText: {
    margin: 20,
  },
  paddingStyle: { paddingVertical: 10 },
  underlineTextStyle: {
    color: "#4086F0",
    textDecorationLine: "underline",
  },
  textStyle: { color: "#4040406A" },
});
