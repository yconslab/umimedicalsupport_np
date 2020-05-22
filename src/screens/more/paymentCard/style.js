import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants";
const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  cardWrap: {
    height: "auto",
  },
  card: {
    height: 200,
    width: width / 1.2,
    backgroundColor: "#4086F0",
    borderRadius: 8,
    marginHorizontal: 15,
  },
  cardInnerWrap: {
    margin: 20,
    flex: 1,
  },
  inputWrapper: {
    flex: 1 / 2,
    justifyContent: "center",
  },
  cardChipWrap: {
    flex: 1,
    justifyContent: "center",
  },
  cardChip: {
    width: 38,
    height: 30,
  },
  cardLogoWrap: {
    borderWidth: 0.5,
    height: 22,
    width: 112,
    borderColor: "#D8D8D8",
  },
  cardNumberWrap: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  cardNumber: {
    flex: 1,
    fontSize: 22,
    lineHeight: 26,
    color: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,

    elevation: 3,
  },
  cardMargin: {
    marginHorizontal: 20,
  },
  innerStyle: {
    backgroundColor: Colors.appColor,
    borderColor: Colors.activeBlueColor,
    borderWidth: 2,
  },
  innerTextStyle: {
    color: Colors.activeBlueColor,
  },
  buttonWrap: {
    margin: 20,
  },
  cardTextWrap: {
    flex: 1,
    justifyContent: "center",
  },
  cardText: {
    fontSize: 13,
    lineHeight: 16,
    color: "#FFFFFF",
  },
  marginVertical_40: {
    marginVertical: 40,
  },
  cardColor: {
    backgroundColor: "#009E9B",
  },
});
