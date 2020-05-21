import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./mainHome";
import HospitalSelection from "./hospitalSelection";
import ReservationGuide from "./reservationGuide";
import DateSchedule from "./scheduledDateSelection";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="DateSchedule">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HospitalSelection" component={HospitalSelection} />
      {/* <Stack.Screen name="ReservationGuide" component={ReservationGuide} /> */}
      <Stack.Screen name="DateSchedule" component={DateSchedule} />
    </Stack.Navigator>
  );
};

export default HomeStack;
