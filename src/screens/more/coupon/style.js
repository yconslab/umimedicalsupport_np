import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  boxMargin: {
    marginVertical: 5,
  },
  boxWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  name: {
    fontSize: 10,
    paddingBottom: 5,
    lineHeight: 12,
    color: "#666666",
  },
  amountWrap: {
    flexDirection: "row",
  },
  amount: {
    fontSize: 20,
    paddingBottom: 5,
    color: Colors.activeBlueColor,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "bold",
  },
  amountSub: {
    fontSize: 20,
    paddingBottom: 5,
    fontSize: 23,
    lineHeight: 28,
  },
  time: {
    fontSize: 10,
    paddingBottom: 5,
    lineHeight: 12,
    color: "#666666",
  },
  dottedLine: {
    height: 94,
    width: 1,
  },
  sideWrap: {
    width: 40,
  },
  sideText: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: "bold",
    color: Colors.activeBlueColor,
  },
  imageWrapper: {
    flex: 1 / 2,
    // backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: 243,
    height: 195,
  },
  couponActive: {
    backgroundColor: "white",
  },
  margin_20: {
    margin: 20,
  },
  paddingVertical_20: {
    paddingVertical: 20,
  },
  marginHorizontal_20: {
    marginHorizontal: 20,
  },
  marginVertical_10: {
    marginVertical: 10,
  },
  paddingVertical_10: {
    paddingVertical: 10,
  },
});
