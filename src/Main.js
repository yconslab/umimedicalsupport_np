import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainBottomTab from "./screens/ScreenMain";
import LoginStack from "./screens/login";
import Authority from "./screens/authority";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="authority" component={Authority} />
        <Stack.Screen name="login" component={LoginStack} />
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
