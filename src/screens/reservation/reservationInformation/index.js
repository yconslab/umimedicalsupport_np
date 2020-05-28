import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";

import { Input } from "react-native-elements";
//reusable components
import styles from "./style";
const MidLine = ({ lineStyle }) => {
  return <View style={{ ...lineStyle, ...styles.midlineStyle }} />;
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

const BottomTextBox = ({ title, textStyle }) => {
  return (
    <View style={styles.bottomTextWrap}>
      <Text style={{ ...styles.bottomText, ...textStyle }}>{title}</Text>
    </View>
  );
};

const ReservationInformation = ({ navigation }) => {
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
            imageUrl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            imageStyle={styles.imageStyle}
            title1="소중한 고객님을 안내해드릴 파트너를"
            title2="매칭 중 입니다."
          />
        </View>

        <MidLine lineStyle={styles.height_1} />

        <View style={styles.commonMargin}>
          <TitleBox title1="서비스 내용" title2="예약변경" />
          <Text style={styles.normalText}>세브란스 병원</Text>
          <Text style={styles.normalText}>2020년 1월 10일(월) 오후 2시</Text>
          <Text style={styles.normalText}>2시간(오후 2시~오후 4시)</Text>
        </View>

        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <TitleBox title1="유료 서비스" title2="서비스 추가" />
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

              ...styles.marginBottom_20,
            }}
          >
            립니다.
          </Text>
        </View>

        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <TitleBox title1="환자정보" title2="수정" />
          <TextBox label="방문자 전화번호" value="01055048441" />
          <TextBox label="방문자 이름" value="윤정탁" />
        </View>
        <MidLine lineStyle={styles.height_9} />
        <View style={{ ...styles.commonMargin, ...styles.marginBottom_40 }}>
          <TitleBox title1="쿠폰사용" />

          <Text style={styles.couponText}>가입기념 지급 쿠폰</Text>
          <View style={styles.amountWrap}>
            <Text style={{ ...styles.amountText, ...styles.blueAmountText }}>
              3,000원
            </Text>
            <Text style={styles.amountText}> 적용</Text>
          </View>
        </View>
        <MidLine lineStyle={styles.height_9} />
        <View style={styles.commonMargin}>
          <TitleBox title1="결제정보" title2="결제카드 변경" />
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
        <BottomTextBox title="예약 변경" textStyle={styles.bottomText1} />
        <BottomTextBox title="예약 취소" textStyle={styles.bottomText2} />
      </ScrollView>
      <View style={styles.commonMargin}>
        <CustomButton
          title="문의하기"
          onPress={() => {
            navigation.navigate("Home");
          }}
          innerStyle={styles.innerStyle}
        />
      </View>
    </View>
  );
};

export default ReservationInformation;
