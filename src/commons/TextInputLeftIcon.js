import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Images from "../images";

const LeftIcon = () => {
  return (
    <View style={styles.textBoxWrapper}>
      <Image source={Images.callIcon} style={{ height: 20, width: 22 }} />
      <Text style={{ paddingLeft: 10, fontSize: 28 }}>010-</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBoxWrapper: {
    flexDirection: "row",
    // justifyContent: 'flex-start',
    alignItems: "center",
    // backgroundColor: 'red',
    alignSelf: "flex-start",
  },
});
export default LeftIcon;
