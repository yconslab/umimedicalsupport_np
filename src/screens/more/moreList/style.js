import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "flex-start",
  },
  profileWrapper: {
    margin: 20,
  },
  imageStyle: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title1Style: {
    fontSize: 28,
    lineHeight: 33,
    color: "#000000",
    fontWeight: "600",
  },
  title2Style: {
    fontSize: 17,
    lineHeight: 20,
    color: "#000000",
  },
  listWrapper: {
    margin: 20,
  },
  listBox: {
    height: 56,
    width: "100%",
    borderBottomColor: "#00000014",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    color: "#404040",
  },
});
