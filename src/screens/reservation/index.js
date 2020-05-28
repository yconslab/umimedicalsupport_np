import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationTab from "./myReservation";
import ReservationInformationMatched from "./reservationInfomationMatched";
import ReservationInformation from "./reservationInformation";
import PaymentCompletion from "./payementCompletion";
import ServiceCompletion from "./serviceCompletion";
import Inquiry from "./inquiry";

const Stack = createStackNavigator();

const ReservationStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Inquiry">
      <Stack.Screen name="MyReservationTab" component={MyReservationTab} />
      <Stack.Screen
        name="ReservationInformationMatched"
        component={ReservationInformationMatched}
      />
      <Stack.Screen
        name="ReservationInformation"
        component={ReservationInformation}
      />

      <Stack.Screen name="PaymentCompletion" component={PaymentCompletion} />
      <Stack.Screen name="ServiceCompletion" component={ServiceCompletion} />
      <Stack.Screen name="Inquiry" component={Inquiry} />
    </Stack.Navigator>
  );
};

export default ReservationStack;
