import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";
import Colors from "../../../constants";
import Images from "../../../images";
const { width, height } = Dimensions.get("screen");

const ProgressBar = ({}) => {
  return (
    <View style={{ justifyContent: "column", marginVertical: 35 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            // alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#E7E8E9",
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            width: "20%",
            height: 2,
            backgroundColor: "#E7E8E9",
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: "#4388F0",
              borderRadius: 15 / 2,
            }}
          />
        </View>
        <View
          style={{
            width: "20%",
            height: 2,
            backgroundColor: "#E7E8E9",
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#E7E8E9",
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            width: "20%",
            height: 2,
            backgroundColor: "#E7E8E9",
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#E7E8E9",
              borderRadius: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <Text style={styles.progressText}>예약완료</Text>
        <Text style={{ ...styles.progressText, ...styles.blueText }}>
          대기중
        </Text>
        <Text style={styles.progressText}>안내중</Text>
        <Text style={styles.progressText}>서비스 완료</Text>
      </View>
    </View>
  );
};

const MyReservationReserved = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        headerText="우미존에서 대기중입니다."
        navigation={navigation}
        header
        showHeaderText
      />
      <View style={{ margin: 15 }}>
        <Text>세브란스 정문의 우미존에서 고객님을 모시기 위해</Text>
        <Text>대기중입니다.</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
            justifyContent: "center",
            flex: 1 / 2,
          }}
        >
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={{
              height: 78,
              width: 78,
              borderRadius: 78 / 2,
              marginBottom: 10,
            }}
            title1="김우미 도우미"
          />
          <View style={{ margin: 20 }}>
            <ProgressBar />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          margin: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomButton
            title="전화하기"
            onPress={() => {
              navigation.navigate("Home");
            }}
            innerStyle={{
              width: width / 2.5,
              height: 56,
              borderRadius: 28,
              backgroundColor: Colors.activeBlueColor,
            }}
          />
          <CustomButton
            title="번호공유"
            innerStyle={{
              width: width / 2.5,
              height: 56,
              borderRadius: 28,
              backgroundColor: Colors.appColor,
              borderColor: Colors.activeBlueColor,
              borderWidth: 1,
            }}
            innerTextStyle={{ color: Colors.activeBlueColor }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  title1: {
    fontSize: 20,
    lineHeight: 30,
    color: "#000000",
  },
  title2: {
    fontSize: 14,
    lineHeight: 21,
    color: "#1A88FF",
  },
  normalText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000000",
  },
  bottomTextWrap: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottomColor,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  marginText: {
    marginVertical: 20,
  },
  textStyle: {
    fontSize: 11,
    lineHeight: 17,
    color: Colors.TextColor,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.activeBlueColor,
  },
  bigCircle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    backgroundColor: Colors.activeBlueColor,
  },
  progressText: {
    color: "#CBCCCD",
    fontSize: 13,
    lineHeight: 17,
  },
  blueText: {
    color: Colors.activeBlueColor,
  },
});
export default MyReservationReserved;
