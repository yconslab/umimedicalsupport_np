import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";

import { Input } from "react-native-elements";
//reusable components
import Images from "../../../images";
import styles from "./style";

const MidLine = ({ lineStyle }) => {
  return <View style={{ ...lineStyle, ...styles.midlineStyle }} />;
};

const TitleBox = ({
  title1,
  title2,
  title1Style,
  title2Style,
  navTitle,
  navigation,
}) => {
  return (
    <View style={styles.titleBox}>
      <Text style={{ ...styles.title1, ...title1Style }}>{title1}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(navTitle)}>
        <Text style={{ ...styles.title2, ...title2Style }}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const NormalBox = ({ title1, title2, title1Style, title2Style }) => {
  return (
    <View style={styles.titleBox}>
      <Text style={{ ...styles.title1, ...title1Style }}>{title1}</Text>

      <Text style={{ ...styles.title2, ...title2Style }}>{title2}</Text>
    </View>
  );
};

const CircleBox = ({ title }) => {
  return (
    <View style={styles.circleBoxWrap}>
      <View style={styles.circleBox} />
      <Text style={styles.circleBoxText}>{title}</Text>
    </View>
  );
};

const TextBox = ({ value, label }) => {
  return (
    <View style={styles.marginVertical_10}>
      <Input
        placeholder=""
        value={value}
        label={label}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
      />
    </View>
  );
};

const ReservationInformationMatched = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        centerText="2020년 1월 10일(월) 오후 2시"
        navigation={navigation}
        header
        showHeaderText
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ alignItems: "center", ...styles.marginVertical_10 }}>
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={styles.imageStyle}
            title1="김우미 도우미"
            title2="고객님을 소중히 모시겠습니다."
          />
        </View>

        <MidLine lineStyle={styles.height_1} />

        <View style={styles.commonMargin}>
          <TitleBox
            title1="서비스 내용"
            title2="예약변경"
            navigation={navigation}
            navTitle="DateSchedule"
          />
          <Text style={styles.normalText}>세브란스 병원</Text>
          <Text style={styles.normalText}>2020년 1월 10일(월) 오후 2시</Text>
          <Text style={styles.normalText}>2시간(오후 2시~오후 4시)</Text>
        </View>

        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <NormalBox title1="유료 서비스" title2="서비스 추가" />
          <Text
            style={{
              ...styles.normalText,
              ...styles.normalTextExtra,
            }}
          >
            선택하신 서비스가 없습니다.
          </Text>
        </View>

        <MidLine lineStyle={styles.height_9} />

        <View style={styles.commonMargin}>
          <TitleBox
            title1="특이사항"
            title2="수정"
            navigation={navigation}
            navTitle="AdditionalInformation"
          />
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
              ...styles.marginBottom_20,
            }}
          >
            립니다.
          </Text>
        </View>

        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <TitleBox
            title1="환자정보"
            title2="수정"
            navigation={navigation}
            navTitle="VisitorInformatioName"
          />
          <TextBox label="방문자 전화번호" value="01055048441" />
          <TextBox label="방문자 이름" value="윤정탁" />
        </View>
        <MidLine lineStyle={styles.height_9} />
        <View style={{ ...styles.commonMargin, ...styles.marginBottom_40 }}>
          <TitleBox title1="쿠폰사용" />
        </View>
        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <TitleBox
            title1="결제정보"
            title2="결제카드 변경"
            navigation={navigation}
            navTitle="PaymentCard"
          />
          <TitleBox
            title1="결제예정금액"
            title2="24,800원"
            title1Style={styles.title1Style}
            title2Style={styles.title2Style}
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
        <MidLine lineStyle={styles.height_21} />
        <View style={styles.commonMargin}>
          <CircleBox title="주의 사항" />
        </View>
        <MidLine lineStyle={styles.height_1} />
        <View style={styles.commonMargin}>
          <CircleBox title="자주 묻는 질문" />
        </View>
        <MidLine lineStyle={styles.height_9} />
      </ScrollView>
      <View style={styles.commonMargin}>
        <CustomButton
          title="문의하기"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

export default ReservationInformationMatched;
