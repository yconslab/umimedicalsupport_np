import React from "react";
import { SafeAreaView, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../screens/home";
import ReservationStack from "../screens/reservation";
import MoreStack from "../screens/more";
import Colors from "../constants/Colors";
import Images from "../images";
const Tab = createBottomTabNavigator();

const Main = () => {
  //   const { login } = useSelector(
  //     state => ({
  //       login: state.authorizationReducer.login,
  //     }),
  //     [],
  //   );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "홈") {
            iconName = (
              <Image
                source={Images.homeIcon}
                style={{
                  height: 29,
                  width: 29,
                  resizeMode: "contain",
                  tintColor: focused
                    ? Colors.activeColor
                    : Colors.homeBannerBigText,
                }}
              />
            );
          }
          if (route.name === "예약내역") {
            iconName = (
              <Image
                source={Images.reservationIcon}
                style={{
                  height: 29,
                  width: 29,
                  resizeMode: "contain",
                  tintColor: focused
                    ? Colors.activeColor
                    : Colors.homeBannerBigText,
                }}
              />
            );
          }
          if (route.name === "내 정보") {
            iconName = (
              <Image
                source={Images.userIcon}
                style={{
                  height: 29,
                  width: 29,
                  resizeMode: "contain",
                  tintColor: focused
                    ? Colors.activeColor
                    : Colors.homeBannerBigText,
                }}
              />
            );
          }

          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.activeColor,
        inactiveTintColor: Colors.homeBannerBigText,
      }}
    >
      <Tab.Screen name="홈" component={HomeStack} />
      <Tab.Screen name="예약내역" component={ReservationStack} />
      <Tab.Screen name="내 정보" component={MoreStack} />
    </Tab.Navigator>
  );
};

export default Main;
