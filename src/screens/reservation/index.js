import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationTab from "./myReservation";
import ReservationInformationMatched from "./reservationInfomationMatched";
import ReservationInformation from "./reservationInformation";
import PaymentCompletion from "./payementCompletion";
import ServiceCompletion from "./serviceCompletion";
import MyReservationReserved from "./myRservationReserved";
import Inquiry from "./inquiry";

const Stack = createStackNavigator();

const ReservationStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MyReservationTab">
      <Stack.Screen name="MyReservationTab" component={MyReservationTab} />
      <Stack.Screen
        name="ReservationInformationMatched"
        component={ReservationInformationMatched}
      />
      <Stack.Screen
        name="ReservationInformation"
        component={ReservationInformation}
      />
    </Stack.Navigator>
  );
};

export default ReservationStack;
