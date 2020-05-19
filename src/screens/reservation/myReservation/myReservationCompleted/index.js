import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../../../../constants";

const data = [
  {
    id: 1,
    serviceTitle: "의료도우미 서비스",
    dateTime: "2020년 1월 10일(월) 오후 2시",
    matchStatus: "서비스완료",
  },
  {
    id: 2,
    serviceTitle: "의료도우미 서비스",
    dateTime: "2020년 1월 10일(월) 오후 2시",
    matchStatus: "예약취소",
  },
];

const CompletedReservationList = ({ serviceTitle, dateTime, matchStatus }) => {
  return (
    <View style={styles.boxMargin}>
      <View style={styles.box}>
        <View style={styles.infoTextWrap}>
          <Text style={styles.infotext}>{serviceTitle}</Text>
          <Text style={styles.infotext}>{dateTime}</Text>
        </View>
        <View style={styles.matchStatusWrap}>
          <Text style={styles.matchStatus}>{matchStatus}</Text>
        </View>
      </View>
    </View>
  );
};

const MyReservationCompleted = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CompletedReservationList
            serviceTitle={itemData.item.serviceTitle}
            dateTime={itemData.item.dateTime}
            matchStatus={itemData.item.matchStatus}
            click={() => {
              this.props.navigation.navigate("");
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.appColor,
  },
  boxMargin: {
    marginHorizontal: 20,
    // backgroundColor: "yellow",
    marginVertical: 5,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottomColor,
  },
  infoTextWrap: {
    justifyContent: "center",
  },
  matchStatusWrap: {
    justifyContent: "center",
  },
  infotext: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.TextColor,
  },
  matchStatus: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.activeBlueColor,
  },
});
export default MyReservationCompleted;
