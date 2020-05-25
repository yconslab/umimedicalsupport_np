import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./mainHome";
import HospitalSelection from "./hospitalSelection";
import ReservationGuide from "./reservationGuide";
import DateSchedule from "./scheduledDateSelection";
import ScheduleTime from "./scheduledTimeSelection";
import ScheduleHelper from "./scheduleHelperSelection";
import VisitorInformatioName from "./enterVisitorName";
import VisitorInformationPhoneNumber from "./enterVisitorNumber";
import AdditionalInformation from "./additionalInformation";
import ReservationComplete from "./reservationCompletion";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="ReservationComplete">
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
      <Stack.Screen
        name="VisitorInformatioNumber"
        component={VisitorInformationPhoneNumber}
      />
      <Stack.Screen
        name="AdditionalInformation"
        component={AdditionalInformation}
      />
      <Stack.Screen
        name="ReservationComplete"
        component={ReservationComplete}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
