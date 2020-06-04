import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.appColor,
    flex: 1,

    alignContent: "flex-start"

    // backgroundColor: "red"
  },
  contentWrap: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  buttonStyle: {
    margin: 20
  },
  mainWrapper: {
    flex: 1,

    marginHorizontal: 20
  },
  topTextWrapper: {
    flex: 1 / 2
  },
  inputWrapper: {
    flex: 4,
    // backgroundColor:'green',
    flexDirection: "column"
  },
  codeInputWrap: {
    flex: 2,
    // backgroundColor:'yellow',
    marginHorizontal: 30,
    marginBottom: 100
  },
  bottomTextWrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 20
  },
  bottomText: {
    color: "#404040"
  },
  errorBox: {
    flex: 3,

    width: 200,
    marginHorizontal: 30,
    alignItems: "center",
    width: "80%"
  },
  errorText: {
    color: "red",
    textAlign: "center"
  },
  bottomWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  refreshIconStyle: {
    paddingRight: 3
  }
});
