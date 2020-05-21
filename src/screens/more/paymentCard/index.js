import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import Colors from "../../../constants";
// import styles from "./style";
//data

//reusable component

//maincomponent
const PayementCard = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader headerText="환자 정보" showHeaderText />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} />
      <View style={styles.buttonWrap}>
        <CustomButton
          title="새 환자 등록"
          innerStyle={styles.innerStyle}
          innerTextStyle={styles.innerTextStyle}
        />
      </View>
    </View>
  );
};
export default PayementCard;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
});
