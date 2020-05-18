import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import SwiperFlatList from "react-native-swiper-flatlist";
import BannerSlider from "./BannerSlider";
import Colors from "../../../constants/Colors";

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        autoplayLoop
        index={1}
        showPagination
        paginationDefaultColor={"transparent"}
        paginationStyleItem={styles.sliderPaginationItemStyle}
        paginationStyle={{
          position: "absolute",

          bottom: 100
        }}
      >
        <BannerSlider />
        <BannerSlider />
        <BannerSlider />
        <BannerSlider />
        <BannerSlider />
      </SwiperFlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  sliderPaginationItemStyle: {
    borderWidth: 1,
    height: 10,
    width: 10,
    borderColor: Colors.whiteColor
  }
});
