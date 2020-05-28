import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainBottomTab from "./screens/ScreenMain";
import CardManagement from "../src/screens/more/cardCameraRecognition";
import CardInformation from "../src/screens/more/cardInformation";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="AuthorityStack"
        headerMode="none"
        gestureEnabled={false}
      >
        <Stack.Screen name="s" component={CardInformation} />

        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
