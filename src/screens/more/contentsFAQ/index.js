import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import styles from "./style";
const FAQContents = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="로그인이 되지 않아요."
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.textBox}>
          <Text styles={styles.innerText}>
            해결 방법해결 방법해결 방법해결 방법해결 방법해결 방법해결 방법해결
            방법해결 방법해결 방법해결 방법해결 방법해결 방법해결 방법해결
            방법해결 방법해결 방법해결 방법해결 방법해결 방법해결 방법해결
            방법해결 방법해결 방법해결 방법해결 방법해결 방법해결 방법해결
            방법해결 방법해결 방법해결 방법해결 방법 해결 방법해결 방법해결
            방법해결 방법해결 방법해결 방법해결 방법해결 방법해결
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <View style={styles.bottomTextWrap}>
          <Text style={styles.bottomText}>우미 고객센터</Text>
          <Text style={styles.bottomText}>오전 10시 - 오후 8시</Text>
        </View>
        <View style={styles.btnWrap}>
          <CustomButton
            title="02-392-0700"
            innerStyle={styles.innerStyle1}
            innerTextStyle={styles.innerTextStyle1}
          />
          <CustomButton
            title="카카오 상담톡"
            innerStyle={styles.innerStyle2}
            innerTextStyle={styles.innerTextStyle2}
          />
        </View>
      </View>
    </View>
  );
};

export default FAQContents;
