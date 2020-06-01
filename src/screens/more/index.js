import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FAQList from "./listFAQ";
import FAQContents from "./contentsFAQ";
import CardCameraRecognition from "./cardCameraRecognition";
import CardInformation from "./cardInformation";
import CardRegistration from "./cardRegistration";
import Coupon from "./coupon";
import EnterPatientInformation from "./enterPatientInformation";
import PatientInformation from "./patientInformation";
import PayementCard from "./paymentCard";
import MoreList from "./moreList";
const Stack = createStackNavigator();

const MoreStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MoreList">
      <Stack.Screen name="MoreList" component={MoreList} />
      <Stack.Screen name="FAQList" component={FAQList} />
      <Stack.Screen name="FAQContents" component={FAQContents} />
      <Stack.Screen
        name="CardCameraRecognition"
        component={CardCameraRecognition}
      />
      <Stack.Screen name="CardInformation" component={CardInformation} />

      <Stack.Screen name="Coupon" component={Coupon} />
      <Stack.Screen name="CardRegistration" component={CardRegistration} />
      <Stack.Screen
        name="EnterPatientInformation"
        component={EnterPatientInformation}
      />
      <Stack.Screen name="PatientInformation" component={PatientInformation} />
      <Stack.Screen name="PayementCard" component={PayementCard} />
    </Stack.Navigator>
  );
};

export default MoreStack;
