import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CustomButton } from "../../../commons";
import Images from "../../../images";
import styles from "./style";
const SignUpComplete = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.contentWrap}>
        <Image source={Images.signUpBanner} style={styles.imageStyle} />
        <Text style={styles.contentTitle1}>가입이 완료됐어요.</Text>

        <Text style={styles.contentTitle2}>우미로 편리하게 예약해보세요.</Text>
      </View>
      <View style={styles.btnWrap}>
        <CustomButton title="둘러보기" innerStyle={styles.innerStyle} />
      </View>
    </View>
  );
};

export default SignUpComplete;
