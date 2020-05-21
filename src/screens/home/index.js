import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./mainHome";
import HospitalSelection from "./hospitalSelection";
import ReservationGuide from "./reservationGuide";
import DateSchedule from "./scheduledDateSelection";
import ScheduleTime from "./scheduledTimeSelection";
import ScheduleHelper from "./scheduleHelperSelection";
import VisitorInformatioName from "./enterVisitorName";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="DateSchedule">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HospitalSelection" component={HospitalSelection} />
      {/* <Stack.Screen name="ReservationGuide" component={ReservationGuide} /> */}
      <Stack.Screen name="DateSchedule" component={DateSchedule} />
      <Stack.Screen name="ScheduleTime" component={ScheduleTime} />
      <Stack.Screen name="ScheduleHelper" component={ScheduleHelper} />
      <Stack.Screen
        name="VisitorInformatioName"
        component={VisitorInformatioName}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
