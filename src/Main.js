import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import AuthorityStack from "./screens/authority";
import MainBottomTab from "./screens/ScreenMain";

const Stack = createStackNavigator();

const Main = () => {
  //   const { login } = useSelector(
  //     state => ({
  //       login: state.authorizationReducer.login,
  //     }),
  //     [],
  //   );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
        {/* <Stack.Screen name="AuthorityStack" component={AuthorityStack} /> */}
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
