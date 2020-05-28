/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import { store } from "./src/redux/Store";

import { Provider } from "react-redux";
import Main from "./src/Main";
const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
};
export default App;
