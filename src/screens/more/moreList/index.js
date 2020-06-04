import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { CustomHeader, ProfileImageWrap } from "../../../commons";
import Images from "../../../images";
import styles from "./style";
//data
const data = [
  { id: 1, title: "환자 정보", navigationTitle: "PatientInformation" },
  { id: 2, title: "카드 관리", navigationTitle: "PayementCard" },
  { id: 3, title: "자주 묻는 질문", navigationTitle: "FAQList" },
  { id: 4, title: "쿠폰 관리", navigationTitle: "Coupon" },
  { id: 5, title: "로그아웃", navigationTitle: "login" }
];

//reusable component
const ListBox = ({ title, navigation, navigationTitle }) => {
  return (
    <TouchableOpacity
      style={styles.listBox}
      onPress={() => navigation.navigate(navigationTitle)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
//maincomponent
const MoreList = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 1 }}>
        <View style={styles.profileWrapper}>
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={styles.imageStyle}
            title1="윤정탁"
            title2="010-5504-8441"
            title1Style={styles.title1Style}
            title2Style={styles.title2Style}
          />
        </View>
        <View style={styles.listWrapper}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
              <ListBox
                title={itemData.item.title}
                navigation={navigation}
                navigationTitle={itemData.item.navigationTitle}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default MoreList;
