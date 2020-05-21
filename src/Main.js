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
<<<<<<< HEAD
import ReservationStacks from "./screens/reservation/reservation";
import MyReservationReserved from "./screens/reservation/myRservationReserved";
import EnterPatientInformation from "./screens/more/enterPatientInformation";
import MoreList from "./screens/more/moreList";
=======
// import ReservationStacks from "./screens/reservation/reservation";
// import MyReservationReserved from "./screens/reservation/myRservationReserved";
>>>>>>> d94e2b2d35685544749fe35235885cfd4d2247b7
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
<<<<<<< HEAD
        <Stack.Screen
          name="EnterPatientInformation"
          component={EnterPatientInformation}
        />
        {/* <Stack.Screen name="MainBottomTab" component={MainBottomTab} /> */}
=======
        {/* <Stack.Screen name="Inquiry" component={Inquiry} /> */}
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
>>>>>>> d94e2b2d35685544749fe35235885cfd4d2247b7
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
