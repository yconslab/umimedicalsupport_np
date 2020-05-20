import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CustomButton } from "../../../commons";
import Images from "../../../images";
import styles from "./style";
const PaymentCompletion = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.contentWrap}>
        <View style={styles.marginBottomStyle}>
          <Image source={Images.signUpBanner} style={styles.imageStyle} />
          <Text style={styles.titleText}>결제가 완료되었습니다.</Text>
          <Text style={styles.titleText} />

          <Text style={styles.normalText}>우미를 이용해주셔서 감사합니다.</Text>
          <Text style={styles.normalText}>
            항상 좋은 서비스를 제공하겠습니다.
          </Text>
        </View>
      </View>
      <View style={styles.marginStyle}>
        <CustomButton title="홈으로 가기" innerStyle={styles.innerStyle} />
      </View>
    </View>
  );
};

export default PaymentCompletion;
