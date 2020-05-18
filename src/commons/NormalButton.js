import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const NormalButton = ({ style, click, disabled, textStyle, buttontext }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btn, ...style }}
      onPress={click}
      disabled={disabled}
    >
      <Text style={{ ...styles.btnText, ...textStyle }}>{buttontext}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  bottombtn: {
    width: "70%",
    marginHorizontal: "15%",
  },
});

export default NormalButton;
