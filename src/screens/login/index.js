import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EnterName from "./enterName";
import EnterPhoneNumber from "./enterPhoneNumber";
import SignUpComplete from "./signupComplete";
import TermsOfService from "./termsOfService";
import VerificationInput from "./verficationInput";
import FAQList from "../more/listFAQ";
import FAQContents from "../more/contentsFAQ";
const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="EnterPhoneNumber">
      <Stack.Screen name="EnterName" component={EnterName} />
      <Stack.Screen name="EnterPhoneNumber" component={EnterPhoneNumber} />
      <Stack.Screen name="SignUpComplete" component={SignUpComplete} />
      <Stack.Screen name="TermsOfService" component={TermsOfService} />
      <Stack.Screen name="VerificationInput" component={VerificationInput} />
      <Stack.Screen name="FAQList" component={FAQList} />
      <Stack.Screen name="FAQContents" component={FAQContents} />
    </Stack.Navigator>
  );
};

export default LoginStack;
