import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainBottomTab from "./screens/ScreenMain";
import LoginStack from "./screens/login";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainBottomTab"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
        <Stack.Screen name="login" component={LoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
