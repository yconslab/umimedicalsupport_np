import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StarIcon from "react-native-vector-icons/FontAwesome";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";

const DisplayStar = ({ count = 5 }) => {
  const storeC = [];
  for (var i = 0; i < count; i++) {
    storeC.push(
      <StarIcon
        name="star"
        color={Colors.activeColor}
        size={Scale(15)}
        style={{ marginLeft: Scale(3) }}
        key={i}
      />
    );
  }
  return <View style={styles.wrapper}>{storeC}</View>;
};

export default DisplayStar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginLeft: Scale(4)
  }
});
