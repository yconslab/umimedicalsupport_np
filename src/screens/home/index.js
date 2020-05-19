import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./mainHome";
import HospitalSelection from "./hospitalSelection";
import ReservationGuide from "./reservationGuide";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HospitalSelection" component={HospitalSelection} />
      <Stack.Screen name="ReservationGuide" component={ReservationGuide} />
    </Stack.Navigator>
  );
};

export default HomeStack;
