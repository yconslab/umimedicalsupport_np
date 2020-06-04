import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

//data used in screen
const data = [
  {
    id: 1,
    serviceTitle: "의료도우미 서비스",
    dateTime: "2020년 1월 10일(월) 오후 2시",
    matchStatus: "서비스완료",
    navTitle: "ReservationInformation"
  },
  {
    id: 2,
    serviceTitle: "의료도우미 서비스",
    dateTime: "2020년 1월 10일(월) 오후 2시",
    matchStatus: "예약취소",
    navTitle: "ReservationInformationMatched"
  }
];

//reusable component
const CompletedReservationList = ({
  serviceTitle,
  dateTime,
  matchStatus,
  navTitle,
  navigation
}) => {
  return (
    <TouchableOpacity
      style={styles.boxMargin}
      onPress={() => navigation.navigate(navTitle)}
    >
      <View style={styles.box}>
        <View style={styles.infoTextWrap}>
          <Text style={styles.infotext}>{serviceTitle}</Text>
          <Text style={styles.infotext}>{dateTime}</Text>
        </View>
        <View style={styles.matchStatusWrap}>
          <Text style={styles.matchStatus}>{matchStatus}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//main component
const MyReservationCompleted = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <CompletedReservationList
            serviceTitle={itemData.item.serviceTitle}
            dateTime={itemData.item.dateTime}
            matchStatus={itemData.item.matchStatus}
            navigation={navigation}
            navTitle={itemData.item.navTitle}
          />
        )}
      />
    </View>
  );
};

export default MyReservationCompleted;
