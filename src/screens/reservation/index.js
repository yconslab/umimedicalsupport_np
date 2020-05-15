import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reservation from "./Reservation";
const Stack = createStackNavigator();

const ReservationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Reservation" component={Reservation} />
    </Stack.Navigator>
  );
};

export default ReservationStack;
