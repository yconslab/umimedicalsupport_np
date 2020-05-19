import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationTab from "../reservation/myReservation";
import ReservationInformationMatched from "../reservation/reservationInfomationMatched";
import ReservationInformation from "../reservation/reservationInformation";
const Stack = createStackNavigator();

const ReservationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Reservation" component={MyReservationTab} />
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
