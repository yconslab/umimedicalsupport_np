import * as React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CustomHeader } from "../../../commons";
import MyReservationReserved from "../../reservation/myReservation/myReservationReserved";
import MyReservationCompleted from "../../reservation/myReservation/myReservationCompleted";
import Colors from "../../../constants";
const Tab = createMaterialTopTabNavigator();

const myReservation = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Tab.Navigator
        initialRouteName="MyReservationReserved"
        tabBarOptions={{
          activeTintColor: Colors.activeBlueColor,
          inactiveTintColor: Colors.inactiveTintColor,
          labelStyle:
            Platform.OS === "ios"
              ? { fontSize: 17, lineHeight: 20, paddingTop: 40 }
              : { fontSize: 17, lineHeight: 20 },
          style: { backgroundColor: Colors.appColor },
        }}
      >
        <Tab.Screen
          name="MyReservationReserved"
          component={MyReservationReserved}
          options={{ tabBarLabel: "예약된 서비스" }}
        />
        <Tab.Screen
          name="MyReservationCompleted"
          component={MyReservationCompleted}
          options={{ tabBarLabel: "완료된 서비스" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default myReservation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
});
