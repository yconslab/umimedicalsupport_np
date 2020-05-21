import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { CustomHeader, ProfileImageWrap } from "../../../commons";
import Images from "../../../images";
import styles from "./style";
//data
const data = [
  { id: 1, title: "환자 정보", navigationTitle: "" },
  { id: 2, title: "카드 관리", navigationTitle: "" },
  { id: 3, title: "자주 묻는 질문", navigationTitle: "" },
  { id: 4, title: "쿠폰 관리", navigationTitle: "" },
  { id: 5, title: "로그아웃", navigationTitle: "" },
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
      <CustomHeader backHidden />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <ListBox
                title={itemData.item.title}
                navigation={navigation}
                navigationTitle={itemData.item.navigationTitle}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default MoreList;
