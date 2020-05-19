import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";

import { Input } from "react-native-elements";
import Colors from "../../../constants";
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
const ReservationInformation = ({ navigation }) => {
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
            imageUrl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            imageStyle={{
              height: 78,
              width: 78,
              borderRadius: 78 / 2,
              marginBottom: 10,
            }}
            title1="소중한 고객님을 안내해드릴 파트너를"
            title2="매칭 중 입니다."
          />
        </View>

        <MidLine lineStyle={{ height: 1 }} />

        <View style={{ margin: 20 }}>
          <TitleBox title1="서비스 내용" title2="예약변경" />
          <Text style={styles.normalText}>세브란스 병원</Text>
          <Text style={styles.normalText}>2020년 1월 10일(월) 오후 2시</Text>
          <Text style={styles.normalText}>2시간(오후 2시~오후 4시)</Text>
        </View>

        <MidLine lineStyle={{ height: 9 }} />
        <View style={{ margin: 20 }}>
          <TitleBox title1="유료 서비스" title2="서비스 추가" />
          <Text
            style={{
              ...styles.normalText,
              color: "#00000057",
              marginBottom: 20,
            }}
          >
            선택하신 서비스가 없습니다.
          </Text>
        </View>

        <MidLine lineStyle={{ height: 9 }} />

        <View style={{ margin: 20 }}>
          <TitleBox title1="특이사항" title2="수정" />
          <Text
            style={{
              ...styles.normalText,
            }}
          >
            어머니께서 귀가 어두우십니다. 친절하게 안내 부탁드
          </Text>
          <Text
            style={{
              ...styles.normalText,

              marginBottom: 20,
            }}
          >
            립니다.
          </Text>
        </View>

        <MidLine lineStyle={{ height: 9 }} />
        <View style={{ margin: 20 }}>
          <TitleBox title1="환자정보" title2="수정" />
          <TextBox label="방문자 전화번호" value="01055048441" />
          <TextBox label="방문자 이름" value="윤정탁" />
        </View>
        <MidLine lineStyle={{ height: 9 }} />
        <View style={{ margin: 20, marginBottom: 40 }}>
          <TitleBox title1="쿠폰사용" />

          <Text style={styles.couponText}>가입기념 지급 쿠폰</Text>
          <View style={styles.amountWrap}>
            <Text style={{ ...styles.amountText, ...styles.blueAmountText }}>
              3,000원
            </Text>
            <Text style={styles.amountText}> 적용</Text>
          </View>
        </View>
        <MidLine lineStyle={{ height: 9 }} />
        <View style={{ margin: 20 }}>
          <TitleBox title1="결제정보" title2="결제카드 변경" />
          <TitleBox
            title1="결제예정금액"
            title2="24,800원"
            title1Style={{ fontSize: 16, lineHeight: 19, color: "#404040" }}
            title2Style={{
              fontSize: 24,
              lineHeight: 29,
              color: "#000000",
              fontWeight: "bold",
            }}
          />
          <View style={styles.marginText}>
            <Text style={styles.textStyle}>
              우미 파트너와 매칭되면 결제가 진행됩니다.{" "}
            </Text>
            <Text style={styles.textStyle}>
              서비스 시간이 2시간 초과 시 10분당 2,000원의 비용이 부과됩니다.
            </Text>
          </View>
        </View>
        <MidLine lineStyle={{ height: 21 }} />
        <View style={{ margin: 20 }}>
          <CircleBox title="주의 사항" />
        </View>
        <MidLine lineStyle={{ height: 1 }} />
        <View style={{ margin: 20 }}>
          <CircleBox title="자주 묻는 질문" />
        </View>
        <MidLine lineStyle={{ height: 9 }} />
        <BottomTextBox
          title="예약 변경"
          textStyle={{ color: Colors.TextColor }}
        />
        <BottomTextBox title="예약 취소" textStyle={{ color: "#FF5151" }} />
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
export default ReservationInformation;
