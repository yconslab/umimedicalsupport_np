import { StyleSheet } from "react-native";
import Colors from "../../../constants";
export default StyleSheet.create({
  backgroundContent: {
    flex: 1,
    backgroundColor: "#00000062",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBox: {
    marginHorizontal: "7.5%",
    width: "85%",
    backgroundColor: "#FFFFFF",
    height: Platform.OS === "ios" ? "50%" : "70%",
    borderRadius: 8,
  },
  contentWrapper: {
    marginTop: "15%",
    marginHorizontal: "5%",
  },
  firstBox: {
    marginBottom: "5%",
  },
  firstText: {
    fontSize: 24,
    lineHeight: 29,
  },
  midLine: {
    width: "100%",
    backgroundColor: "#000000",
    height: 1,
    marginBottom: "5%",
    opacity: 0.2,
  },
  secondContent: {
    marginBottom: "10%",
  },
  notificationBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 3,
  },
  notificationtext: {
    fontSize: 17,
    lineHeight: 20,
    color: "#1A88FF",
  },
  normalText: {
    fontSize: 14,
    lineHeight: 17,
    color: "#000000",
  },
  thirdContent: {
    marginBottom: "5%",
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 3,
  },
  locationText: {
    fontSize: 17,
    lineHeight: 20,
    color: "#1A88FF",
  },
  btn: {
    width: "100%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: Platform.OS === "ios" ? 50 : 50,
    marginVertical: 0,
    backgroundColor: Colors.activeBlueColor,
  },
  modalWrapper: {
    flex: 1 / 2,
    margin: 20,
    backgroundColor: "yellow",
    width: "100%",
  },
  modal: {
    margin: 10,
    backgroundColor: "red",
    flex: 1,
  },
  contentWrapper: {
    flex: 4,

    marginHorizontal: 20,
    marginVertical: 40,
  },
  btnWrapper: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    color: "#393939",
  },
  innerTextStyle: {
    fontSize: 17,
    lineHeight: 20,
  },
});
