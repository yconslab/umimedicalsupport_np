import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainBottomTab from "./screens/ScreenMain";
import LoginStack from "./screens/login";
import Authority from "./screens/authority";
import ReservationStack from "./screens/reservation";
import HomeStack from "./screens/home";
import MoreStack from "./screens/more";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainBottomTab"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="authority" component={Authority} />
        <Stack.Screen name="login" component={LoginStack} />
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
        <Stack.Screen name="ReservationStack" component={ReservationStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="MoreStack" component={MoreStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
