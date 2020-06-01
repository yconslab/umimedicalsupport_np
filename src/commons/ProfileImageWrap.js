import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Scale } from "../helper/HelperFunction";

const ProfileImageWrap = ({
  source,
  title1,
  title2,
  imageStyle,
  title1Style,
  title2Style
}) => {
  return (
    <View>
      <View style={{ ...styles.imageContainer, ...imageStyle }}>
        <Image style={styles.image} source={source} />
      </View>
      <View>
        <Text style={{ ...styles.titleText, ...title1Style }}>{title1}</Text>
        <Text style={{ ...styles.titleText, ...title2Style }}>{title2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    alignSelf: "center"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white"
  },
  titleText: {
    textAlign: "center",
    marginTop: Scale(10)
  }
});

export default ProfileImageWrap;
