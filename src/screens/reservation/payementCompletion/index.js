import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { CustomButton } from "../../../commons";
import Images from "../../../images";
import Colors from "../../../constants/Colors";
const PaymentCompletion = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: 32 }}>
          <Image
            source={Images.signUpBanner}
            style={{
              height: 178.19,
              width: 289.73,
              overflow: "hidden",
              marginHorizontal: "5%",
            }}
          />
          <Text
            style={{
              fontSize: 30,
              lineHeight: 36,
              textAlign: "center",
              marginTop: 16,
              color: "#2A8CFF",
            }}
          >
            결제가 완료되었습니다.
          </Text>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 36,
              textAlign: "center",
              marginBottom: 16,
              color: "#2A8CFF",
            }}
          />

          <Text
            style={{
              fontSize: 14,
              textAlign: "center",

              marginHorizontal: 40,
              color: "#404040",
              lineHeight: 17,
            }}
          >
            우미를 이용해주셔서 감사합니다.
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",

              marginHorizontal: 40,
              color: "#404040",
              lineHeight: 17,
            }}
          >
            항상 좋은 서비스를 제공하겠습니다.
          </Text>
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <CustomButton
          title="홈으로 가기"
          innerStyle={{ backgroundColor: Colors.activeColor }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "85%",
    marginHorizontal: "7.5%",
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#4388F0",
    marginBottom: 16,
    backgroundColor: "#4388F0",
    alignSelf: "center",
  },
});

export default PaymentCompletion;
