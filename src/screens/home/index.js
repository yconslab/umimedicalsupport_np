import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./mainHome";
import HospitalSelection from "./hospitalSelection";
import DateSchedule from "./scheduledDateSelection";
import ScheduleTime from "./scheduledTimeSelection";
import ScheduleHelper from "./scheduleHelperSelection";
import VisitorInformatioName from "./enterVisitorName";
import VisitorInformationPhoneNumber from "./enterVisitorNumber";
import AdditionalInformation from "./additionalInformation";
import ReservationComplete from "./reservationCompletion";
import ServiceInformation from "./serviceInformation";
import Notice from "./notice";

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HospitalSelection" component={HospitalSelection} />
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
      <Stack.Screen name="ServiceInformation" component={ServiceInformation} />
      <Stack.Screen name="Notice" component={Notice} />
    </Stack.Navigator>
  );
};

export default HomeStack;
