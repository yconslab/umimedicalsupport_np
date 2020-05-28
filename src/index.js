import * as React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
// import { store } from './reducer';

import Main from "./Main";

const Route = () => {
  return (
    <View style={styles.wrapper}>
      <Main />
    </View>
  );
};

export default Route;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
