import * as React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MyReservationReserved from "../../reservation/myReservation/myReservationReserved";
import MyReservationCompleted from "../../reservation/myReservation/myReservationCompleted";
import Colors from "../../../constants";
const Tab = createMaterialTopTabNavigator();

const myReservation = () => {
  return (
    <Tab.Navigator
      initialRouteName="MyReservationReserved"
      tabBarOptions={{
        activeTintColor: Colors.activeBlueColor,
        inactiveTintColor: Colors.inactiveTintColor,
        labelStyle: { fontSize: 17, lineHeight: 20 },
        style: { backgroundColor: Colors.appColor, paddingTop: 40 },
      }}
    >
      <Tab.Screen
        name="MyReservationReserved"
        component={MyReservationReserved}
        options={{ tabBarLabel: "예약된 서비스" }}
      />
      <Tab.Screen
        name="MyReservationCompleted"
        component={MyReservationCompleted}
        options={{ tabBarLabel: "완료된 서비스" }}
      />
    </Tab.Navigator>
  );
};

export default myReservation;
