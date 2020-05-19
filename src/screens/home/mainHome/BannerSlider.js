import React from "react";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

import Images from "../../../images";
import { CustomButton } from "../../../commons";
import { Scale } from "../../../helper/HelperFunction";
import Colors from "../../../constants/Colors";

const HomeImageSlider = () => (
  <ImageBackground source={Images.welcomeBanner} style={styles.bannerStyle}>
    <View style={styles.containerWrapper}>
      <View
        style={{
          width: Scale(200),
          height: Scale(100)
          // justifyContent: "center",
          // alignItems: "center"
        }}
      >
        <Text style={styles.firstTextStyle}>우미 이용이 </Text>
        <Text style={styles.firstTextStyle}>처음이신가요?</Text>
      </View>
      <View>
        <Text style={styles.secondTextStyle}>우미 서비스 가이드를</Text>
        <Text style={styles.secondTextStyle}>이용 전 먼저 읽어주시면 더 </Text>
        <Text style={styles.secondTextStyle}>
          더 편하게 이용하실 수 있습니다.
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.NavigationText}>서비스 가이드</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <CustomButton
        title="우미 헬퍼 예약하기"
        innerStyle={styles.customButtonStyle}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bannerStyle: {
    height: height,
    width: width
  },
  containerWrapper: {
    paddingVertical: Scale(130),
    flex: 1 / 2,
    paddingHorizontal: Scale(15)
  },
  firstTextStyle: {
    fontSize: Scale(34),
    color: Colors.homeBannerBigText,
    fontWeight: "bold"
  },
  secondTextStyle: {
    fontSize: Scale(15),
    color: Colors.bannerTextColor
  },
  NavigationText: {
    color: Colors.activeColor,
    fontSize: Scale(17),
    marginVertical: Scale(20)
  },
  buttonContainer: {
    position: "absolute",
    bottom: Scale(80),
    width: width,
    paddingHorizontal: 20
  },
  customButtonStyle: {
    height: Scale(64),
    borderRadius: Scale(32)
  }
});
export default HomeImageSlider;