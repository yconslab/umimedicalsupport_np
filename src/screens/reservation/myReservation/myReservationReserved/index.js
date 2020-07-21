import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { CustomButton } from "../../../../commons";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";

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

  {
    id: 3,
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

const MyReservationReserved = ({ navigation }) => {
  const reservations = useSelector(
    (state) => state.ReservationInformation.reservations
  );

  console.log(reservations);

  return reservations.length > 0 ? (
    <View style={styles.screen}>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => (
          <CompletedReservationList
            serviceTitle="의료도우미 서비스"
            dateTime="2020년 1월 10일(월) 오후 2시"
            matchStatus="서비스완료"
            click={() => {
              this.props.navigation.navigate("");
            }}
          />
        )}
      />
    </View>
  ) : (
    <View style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.info}>예약된 서비스가 없습니다.</Text>
        <Text style={styles.info}> 지금 예약해보세요!</Text>
      </View>
      <View style={styles.margin_20}>
        <CustomButton
          title="예약하기"
          onPress={() => navigation.navigate("HospitalSelection")}
          innerStyle={styles.innerStyle}
        />
      </View>
    </View>
  );
};

export default MyReservationReserved;
