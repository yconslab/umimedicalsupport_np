import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationTab from "../reservation/myReservation";
const Stack = createStackNavigator();

const ReservationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Reservation" component={MyReservationTab} />
    </Stack.Navigator>
  );
};

export default ReservationStack;
