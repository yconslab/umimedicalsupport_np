import React from "react";

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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Reservation" component={ReservationStack} />
      <Tab.Screen name="MoreStack" component={MoreStack} />
    </Tab.Navigator>
  );
};

export default Main;
