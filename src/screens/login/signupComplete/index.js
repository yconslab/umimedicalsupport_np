import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import Images from "../../../assets/images";
const SignUpComplete = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
            가입이 완료됐어요.
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
            우미로 편리하게 예약해보세요.
          </Text>
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <CustomButton
          style={{
            height: Platform.OS === "ios" ? 50 : 50,
            borderRadius: 4,
            width: "100%",
          }}
          buttontext="둘러보기"
          textStyle={{
            fontSize: 17,
            lineHeight: 20,
            paddingVertical: "4%",
          }}
          click={() => {
            props.navigation.navigate("Home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

SignUpComplete.navigationOptions = (navData) => {
  return {
    header: null,
  };
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

export default SignUpComplete;
