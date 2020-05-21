import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReservationInformationMatched from "./screens/reservation/reservationInfomationMatched";
import Inquiry from "./screens/reservation/inquiry";
import PaymentCompletion from "./screens/reservation/payementCompletion";
import ServiceCompletion from "./screens/reservation/serviceCompletion";
// import AuthorityStack from "./screens/authority";
import MainBottomTab from "./screens/ScreenMain";
import ReservationStacks from "./screens/reservation/reservation";
import MyReservationReserved from "./screens/reservation/myRservationReserved";
import PatientInformation from "./screens/more/patientInformation";
import MoreList from "./screens/more/moreList";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen
          name="PatientInformation"
          component={PatientInformation}
        />
        {/* <Stack.Screen name="MainBottomTab" component={MainBottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
