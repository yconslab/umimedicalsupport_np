import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReservationInformationMatched from "./reservationInfomationMatched";
import ReservationInformation from "./reservationInformation";
import PaymentCompletion from "./payementCompletion";
import ServiceCompletion from "./serviceCompletion";
import MyReservationReserved from "./myRservationReserved";
import Inquiry from "./inquiry";

const Stack = createStackNavigator();

const ReservationInnerStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MyReservationTab">
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
      <Stack.Screen
        name="MyReservationReserved"
        component={MyReservationReserved}
      />
    </Stack.Navigator>
  );
};

export default ReservationInnerStack;
