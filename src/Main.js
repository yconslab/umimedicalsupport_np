import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import AuthorityStack from "./screens/authority";
import MainBottomTab from "./screens/ScreenMain";
import HomeStack from "./screens/home";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="HomeStack" component={HomeStack} />

        {/* <Stack.Screen name="MainBottomTab" component={MainBottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
