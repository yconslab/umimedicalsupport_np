import React from "react";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";
const { height, width } = Dimensions.get("window");

import Images from "../../../images";

const HomeImageSlider = () => (
  <ImageBackground
    source={Images.welcomeBanner}
    style={styles.bannerStyle}
  ></ImageBackground>
);

const styles = StyleSheet.create({
  bannerStyle: {
    height: height,
    width: width
  }
});
export default HomeImageSlider;
