import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import More from "./More";
const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="QRScreen">
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};

export default MoreStack;
