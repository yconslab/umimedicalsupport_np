import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import NoticationIcons from "react-native-vector-icons/Ionicons";
import SwiperFlatList from "react-native-swiper-flatlist";
import BannerSlider from "./BannerSlider";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.NotifcaitonContainer}
        onPress={() => navigation.navigate("Notice")}
      >
        <NoticationIcons name="ios-notifications" size={25} />
      </TouchableOpacity>
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

          bottom: Scale(100),
        }}
      >
        <BannerSlider navigation={navigation} />
        <BannerSlider navigation={navigation} />
        <BannerSlider navigation={navigation} />
        <BannerSlider navigation={navigation} />
        <BannerSlider navigation={navigation} />
      </SwiperFlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  sliderPaginationItemStyle: {
    borderWidth: 1,
    height: 10,
    width: 10,
    borderColor: Colors.whiteColor,
  },

  NotifcaitonContainer: {
    position: "absolute",
    top: Scale(50),
    height: Scale(40),
    width: Scale(40),
    backgroundColor: Colors.whiteColor,
    zIndex: 1,
    right: Scale(20),
    borderRadius: Scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
