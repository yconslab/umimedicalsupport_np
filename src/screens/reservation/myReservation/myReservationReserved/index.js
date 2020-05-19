import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CustomButton } from "../../../../commons";
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
  const [hasReservation, setHasReservation] = useState(false);
  return hasReservation ? (
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
  ) : (
    <View style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.info}>예약된 서비스가 없습니다.</Text>
        <Text style={styles.info}> 지금 예약해보세요!</Text>
      </View>
      <View style={{ margin: 20 }}>
        <CustomButton
          title="예약하기"
          onPress={() => navigation.navigate("ReservationInformation")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "center",
  },
  textWrap: {
    alignItems: "center",
  },
  info: {
    fontSize: 19,
    lineHeight: 29,
    color: Colors.activeBlueColor,
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
export default MyReservationReserved;