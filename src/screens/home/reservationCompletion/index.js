import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { TabActions } from "@react-navigation/native";

import { CustomButton } from "../../../commons";
import { Scale } from "../../../helper/HelperFunction";
import Images from "../../../images";
import Colors from "../../../constants/Colors";
const { width } = Dimensions.get("window");

const ReservationComplete = ({ navigation }) => {
  const jumpToAction = TabActions.jumpTo("예약내역");

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <Image source={Images.paymentComplete} />
        <View style={styles.textTitleContainer}>
          <Text style={styles.textTitleStyle}>
            성공적으로 예약이 접수됐습니다.
          </Text>
          <Text
            style={[
              styles.textTitleStyle,
              { fontSize: Scale(14), color: "#404040" }
            ]}
          >
            담당 파트너가 매칭되면 결제가 진행되고 예약이 확정됩니다.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="내 예약 확인하기"
          onPress={() => navigation.dispatch(jumpToAction)}
        />
      </View>
    </View>
  );
};

export default ReservationComplete;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.appColor
  },
  textTitleContainer: {
    marginHorizontal: Scale(40)
  },
  textTitleStyle: {
    color: Colors.activeColor,
    fontSize: Scale(30),
    textAlign: "center",
    marginTop: Scale(20)
  },
  buttonContainer: {
    marginHorizontal: Scale(20)
  }
});
