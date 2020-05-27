import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReservationInformationMatched from "./screens/reservation/reservationInfomationMatched";
import Inquiry from "./screens/reservation/inquiry";
import PaymentCompletion from "./screens/reservation/payementCompletion";
import ServiceCompletion from "./screens/reservation/serviceCompletion";
import AuthorityStack from "./screens/authority";
import MainBottomTab from "./screens/ScreenMain";
// import ReservationStacks from "./screens/reservation/reservation";
// import MyReservationReserved from "./screens/reservation/myRservationReserved";
import FAQContents from "./screens/more/contentsFAQ";
import MoreList from "./screens/more/moreList";
import ENterName from "./screens/login/enterName";
import EnterName from "./screens/login/enterName";
import TermsofService from "./screens/login/termsOfService";
import CouponSelectionScreen from "./screens/more/coupon";
import CardInformation from "./screens/more/cardInformation";
// import ReservationStacks from "./screens/reservation/reservation";
// import MyReservationReserved from "./screens/reservation/myRservationReserved";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="CardInformation" component={CardInformation} />
        {/* <Stack.Screen name="MainBottomTab" component={MainBottomTab} /> */}
        {/* <Stack.Screen
          name="CouponSelectionScreen"
          component={CouponSelectionScreen}
        /> */}
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
