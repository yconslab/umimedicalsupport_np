import React from "react";
import { SafeAreaView } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../screens/home";
import ReservationStack from "../screens/reservation";
import MoreStack from "../screens/more";
const Tab = createBottomTabNavigator();

const Main = () => {
  //   const { login } = useSelector(
  //     state => ({
  //       login: state.authorizationReducer.login,
  //     }),
  //     [],
  //   );
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={HomeStack} />
      <Tab.Screen name="예약내역" component={ReservationStack} />
      <Tab.Screen name="내 정보" component={MoreStack} />
    </Tab.Navigator>
  );
};

export default Main;
