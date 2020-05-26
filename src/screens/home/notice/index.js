import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import { CustomHeader, Divider } from "../../../commons";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";

const data = [
  {
    id: 1,
    title: "서비스가 시작되었습니다.",
    date: "2020년 1월 10일(월) 오후 2시",
    seen: false
  },
  {
    id: 2,
    title: "우미의 새로운 이벤트",
    date: "2020년 1월 10일(월) 오후 2시",
    seen: true
  },
  {
    id: 3,
    title: "2020년 1월 10일(월) 오후 2시",
    date: "2020년 1월 10일(월) 오후 2시",
    seen: true
  },
  {
    id: 4,
    title: "우미에서 사용할 수 있는 쿠폰이 발급되었습니다.",
    date: "2020년 1월 10일(월) 오후 2시",
    seen: true
  }
];
const ListItem = ({ click, title, date, seen }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.innnerContainer,
          !seen && { backgroundColor: Colors.activeColor }
        ]}
        onPress={click}
      >
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.dateStyle}>{date}</Text>
      </TouchableOpacity>
      <Divider externalStyle={{ marginHorizontal: Scale(20) }} />
    </View>
  );
};
const NotificationPage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <CustomHeader headerText="알림" navigation={navigation} />
      <View style={{ marginTop: Scale(20) }}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ListItem
              title={itemData.item.title}
              date={itemData.item.date}
              seen={itemData.item.seen}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#00000014",
    borderBottomWidth: 1,
    marginHorizontal: Scale(20)
  },
  innnerContainer: {
    height: Scale(100),
    justifyContent: "center",
    paddingHorizontal: Scale(20)
  },
  wrapper: { flex: 1, backgroundColor: Colors.appColor },
  dateStyle: {
    fontSize: Scale(14),
    marginTop: Scale(3)
  },
  textStyle: {
    fontSize: Scale(14)
  }
});
export default NotificationPage;
