import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const { width } = Dimensions.get("window");
const Divider = () => <View style={styles.DividerWrapper} />;

const styles = StyleSheet.create({
  DividerWrapper: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.bannerTextColor,
    width: width
  }
});

export default Divider;
