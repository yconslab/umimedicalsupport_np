import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";
import Images from "../../../images";

//reusable components
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
const MidLine = ({ lineStyle }) => {
  return <View style={{ ...lineStyle, ...styles.midLineStyle }} />;
};

const TitleBox = ({ title1, title2, title1Style, title2Style }) => {
  return (
    <View style={styles.titleBox}>
      <Text style={{ ...styles.title1, ...title1Style }}>{title1}</Text>
      <Text style={{ ...styles.title2, ...title2Style }}>{title2}</Text>
    </View>
  );
};

const CircleBox = ({ title }) => {
  return (
    <View style={styles.circleBox}>
      <View style={styles.circle} />
      <Text style={styles.circleText}>{title}</Text>
    </View>
  );
};

//main component
const Inquiry = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        centerText="2020년 1월 10일(월) 오후 2시"
        navigation={navigation}
        header
        showHeaderText
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.profileWrap}>
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={styles.imageStyle}
            title1="김우미 도우미"
            title2="서비스는 만족하셨나요?"
          />
        </View>

        <MidLine lineStyle={styles.lineHeight1} />

        <View style={styles.commonMarginHorizontal}>
          <TitleBox title1="서비스 일정" />

          <Text style={styles.normalText}>2020년 1월 10일(월) 오후 2시</Text>
          <Text style={styles.normalText}>2시간(오후 2시~오후 4시)</Text>
        </View>

        <View style={styles.commonMargin}>
          <TitleBox title1="서비스 내용" />

          <Text style={styles.normalText}>세브란스 병원</Text>
          <Text style={styles.normalText}>진료 도움</Text>
        </View>

        <MidLine lineStyle={styles.lineHeight1} />
        <View style={styles.commonMargin}>
          <CircleBox title="결제 정보" />
        </View>
        <MidLine lineStyle={styles.lineHeight21} />

        <TouchableOpacity style={styles.commonMargin}>
          <CircleBox
            title="주의 사항"
            onPress={() => {
              navigation.navigate("FAQContents");
            }}
          />
        </TouchableOpacity>
        <MidLine lineStyle={styles.lineHeight1} />
        <TouchableOpacity
          style={styles.commonMargin}
          onPress={() => navigation.navigate("FAQList")}
        >
          <CircleBox title="자주 묻는 질문" />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.commonMargin}>
        <CustomButton
          title="문의하기"
          onPress={() => {
            navigation.navigate("FAQContents");
          }}
          innerStyle={styles.innerStyle}
        />
      </View>
    </View>
  );
};

export default Inquiry;
