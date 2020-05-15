import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthorityScreen from "./allowAccess";

const Stack = createStackNavigator();

const AuthorityStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthorityScreen" component={AuthorityScreen} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};
export default AuthorityStack;
