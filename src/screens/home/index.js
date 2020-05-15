import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./home";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
