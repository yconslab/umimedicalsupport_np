import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { CustomHeader } from "../../../commons";
import Colors from "../../../constants/Colors";
const Events = ({ navigation }) => (
  <View style={styles.wrapper}>
    <CustomHeader navigation={navigation} cross headerText="이벤트" />
    <View style={styles.innerContainer}>
      <Text>Events</Text>
    </View>
  </View>
);

export default Events;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
