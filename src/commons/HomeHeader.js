import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import HeaderWrapper from "./HeaderWrapper";
import HorizontalMarginWrapper from "./HorizontalMargin";

const NotificationBell = ({ click, style }) => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "flex-start", ...style }}
    >
      <Icon name="notifications" size={30} color="black" onPress={click} />
      <View style={styles.notificationWrap}>
        <Text style={styles.notificationText}>1</Text>
      </View>
    </View>
  );
};
const HomeHeader = ({ style, click }) => {
  return (
    <HeaderWrapper style={{ ...styles.verticalmargin, ...style }}>
      <HorizontalMarginWrapper
        style={{ flexDirection: "row", justifyContent: "flex-end" }}
      >
        <View style={styles.headerBox}>
          <NotificationBell
            click={click}
            style={{ paddingTop: 5, paddingLeft: 5 }}
          />
        </View>
      </HorizontalMarginWrapper>
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  verticalmargin: {
    marginTop: Platform.OS === "ios" ? 20 : 20,
  },
  headerBox: {
    marginTop: "2%",
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.43,
    shadowRadius: 3.84,

    elevation: 15,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
  ttileBox: {
    width: "90%",
  },
  notificationBox: {
    width: "10%",
  },
  shadowView: {
    shadowColor: "#00000029",
    shadowOpacity: 0.41,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 15,
  },
  notificationWrap: {
    width: 14,
    height: 14,
    backgroundColor: "#FF634F",
    borderRadius: 7,
    position: "relative",
    right: 12,
    top: 5,
  },
  notificationText: {
    color: "white",
    fontSize: 9,
    textAlign: "center",
  },
});

export default HomeHeader;
