import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomButton, CustomHeader, ProfileImageWrap } from "../../../commons";

import Images from "../../../images";
import styles from "./style";

const ProgressBar = () => {
  return (
    <View style={styles.progressBarWrap}>
      <View style={styles.progressBarInnerWrap}>
        <View style={styles.flex_Column}>
          <View style={styles.circle} />
        </View>
        <View style={styles.progressBarLine} />
        <View style={styles.flex_Column}>
          <View style={styles.blueCircle} />
        </View>
        <View style={styles.progressBarLine} />
        <View style={styles.flex_Column}>
          <View style={styles.circle} />
        </View>
        <View style={styles.progressBarLine} />
        <View style={styles.flex_Column}>
          <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.progressTextWrap}>
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

//main component
const MyReservationReserved = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="우미존에서 대기중입니다."
        navigation={navigation}
        header
        showHeaderText
      />
      <View style={styles.margin_15}>
        <Text>세브란스 정문의 우미존에서 고객님을 모시기 위해</Text>
        <Text>대기중입니다.</Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentWrap}>
          <ProfileImageWrap
            source={Images.profileImage}
            imageStyle={styles.profileImage}
            title1="김우미 도우미"
          />
          <View style={styles.margin_20}>
            <ProgressBar />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonMargin}>
        <View style={styles.buttonWrap}>
          <CustomButton
            title="전화하기"
            onPress={() => {
              navigation.navigate("Home");
            }}
            innerStyle={styles.innerStyle1}
          />
          <CustomButton
            title="번호공유"
            innerStyle={styles.innerStyle2}
            innerTextStyle={styles.innerTextStyle2}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyReservationReserved;
