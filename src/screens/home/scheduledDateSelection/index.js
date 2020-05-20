import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import CustomHeader from "../../components/Global/CustomHeader";
import DatePicker from "../../components/UI/DatePicker";

const MidLine = ({ lineStyle }) => {
  return (
    <View style={{ width: "100%", backgroundColor: "#EBEBEB", ...lineStyle }} />
  );
};
const DateSelection = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        title1="예약된 일정을 선택하세요."
        click={() => {
          navigation.goBack();
        }}
      />

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ margin: 20 }}>
          <View style={styles.firstbox}>
            <Text>방문병원</Text>
            <Text style={{ color: "#4086F0" }}>세브란스병원</Text>
          </View>
          <MidLine lineStyle={{ height: 1 }} />

          <DatePicker
            click={() => {
              navigation.navigate("TimeSelection");
            }}
          />
        </View>
        <MidLine lineStyle={{ height: 14 }} />

        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

DateSelection.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  firstbox: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default DateSelection;
