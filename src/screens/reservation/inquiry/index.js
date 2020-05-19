import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";

import { Input } from "react-native-elements";
import Colors from "../../../constants";
import Images from "../../../images";
//reusable components

const MidLine = ({ lineStyle }) => {
  return (
    <View style={{ ...lineStyle, backgroundColor: "#EBEBEB", width: "100%" }} />
  );
};

const TitleBox = ({ title1, title2, title1Style, title2Style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 10,
      }}
    >
      <Text style={{ ...styles.title1, ...title1Style }}>{title1}</Text>
      <Text style={{ ...styles.title2, ...title2Style }}>{title2}</Text>
    </View>
  );
};

const CircleBox = ({ title }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#707070",
        }}
      />
      <Text
        style={{
          fontSize: 14,
          lineHeight: 21,
          color: "#000000",
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const TextBox = ({ value, label }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Input
        placeholder=""
        value={value}
        label={label}
        labelStyle={{
          fontSize: 12,
          lineHeight: 18,
          color: "#393939",
          marginVertical: 5,
        }}
        inputContainerStyle={{
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderColor: "#DFE4EB",
        }}
        inputStyle={{
          fontSize: 14,
          lineHeight: 21,
          color: "#393939",
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

const BottomTextBox = ({ title, textStyle }) => {
  return (
    <View style={styles.bottomTextWrap}>
      <Text style={{ ...styles.bottomText, ...textStyle }}>{title}</Text>
    </View>
  );
};
const Inquiry = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        centerText="2020년 1월 10일(월) 오후 2시"
        navigation={navigation}
        header
        showHeaderText
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={{
              height: 78,
              width: 78,
              borderRadius: 78 / 2,
              marginBottom: 10,
            }}
            title1="김우미 도우미"
            title2="서비스는 만족하셨나요?"
          />
        </View>

        <MidLine lineStyle={{ height: 1 }} />

        <View style={{ marginHorizontal: 20 }}>
          <TitleBox title1="서비스 일정" />

          <Text style={styles.normalText}>2020년 1월 10일(월) 오후 2시</Text>
          <Text style={styles.normalText}>2시간(오후 2시~오후 4시)</Text>
        </View>

        <View style={{ margin: 20 }}>
          <TitleBox title1="서비스 내용" />

          <Text style={styles.normalText}>세브란스 병원</Text>
          <Text style={styles.normalText}>진료 도움</Text>
        </View>

        <MidLine lineStyle={{ height: 1 }} />
        <View style={{ margin: 20 }}>
          <CircleBox title="결제 정보" />
        </View>
        <MidLine lineStyle={{ height: 21 }} />

        <View style={{ margin: 20 }}>
          <CircleBox title="주의 사항" />
        </View>
        <MidLine lineStyle={{ height: 1 }} />
        <View style={{ margin: 20 }}>
          <CircleBox title="자주 묻는 질문" />
        </View>
      </ScrollView>
      <View style={{ margin: 20 }}>
        <CustomButton
          title="문의하기"
          onPress={() => {
            navigation.navigate("Home");
          }}
          innerStyle={{ backgroundColor: Colors.activeBlueColor }}
        />
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
    fontSize: 14,
    lineHeight: 21,
    color: "#1A88FF",
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
  amountWrap: {
    flexDirection: "row",
  },
  amountText: {
    fontSize: 23,
    lineHeight: 28,
    color: Colors.TextColor,
  },
  blueAmountText: {
    color: Colors.activeBlueColor,
    fontWeight: "bold",
  },
  couponText: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.43,
    color: "#666666",
  },
});
export default Inquiry;
