import React from "react";
import { View, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

import { CheckBox } from "react-native-elements";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";

const RadioButton = ({ title, selected, onChangeRadioButton }) => {
  return (
    <CheckBox
      containerStyle={styles.coantainerStyle}
      title={title}
      checkedIcon={
        <View style={styles.borderCheckbox}>
          <Icons
            name="circle"
            style={{ width: Scale(10) }}
            color={Colors.activeColor}
          />
        </View>
      }
      uncheckedIcon={
        <Icons
          name="circle-thin"
          color={Colors.activeColor}
          style={{ width: Scale(15) }}
          size={Scale(15)}
        />
      }
      checked={title === selected}
      onPress={() => onChangeRadioButton(title)}
    />
  );
};
export default RadioButton;
const styles = StyleSheet.create({
  borderCheckbox: {
    width: Scale(15),
    height: Scale(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: Colors.activeColor,
    borderWidth: 1
  },
  coantainerStyle: {
    backgroundColor: Colors.appColor,
    borderWidth: 0,
    margin: 0,
    padding: 0
  }
});
