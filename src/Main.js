import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReservationInformationMatched from "./screens/reservation/reservationInfomationMatched";
// import AuthorityStack from "./screens/authority";
import MainBottomTab from "./screens/ScreenMain";
import ReservationStacks from "./screens/reservation/reservation";
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
          name="ReservationInformationMatched"
          component={ReservationInformationMatched}
        />
        {/* <Stack.Screen name="MainBottomTab" component={MainBottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
