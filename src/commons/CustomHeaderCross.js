import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import HeaderWrapper from "./HeaderWrapper";
import HorizontalMarginWrapper from "./HorizontalMargin";

import Icon from "react-native-vector-icons/MaterialIcons";

const CustomHeaderCross = ({
  click,
  title3,
  title1style,
  title2,
  title2style,
  title1,
  clicktitle2,
}) => {
  return (
    <HeaderWrapper style={{ ...styles.verticalmargin }}>
      <HorizontalMarginWrapper>
        <View style={styles.headerBox}>
          <Icon name="close" color="#000000" size={26} onPress={click} />
          <View style={styles.title3}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.41,
                textAlign: "center",
              }}
            >
              {title3}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...styles.title, ...title1style }}>{title1}</Text>
          <TouchableOpacity onPress={clicktitle2}>
            <Text style={{ ...styles.title, ...title2style }}>{title2}</Text>
          </TouchableOpacity>
        </View>
      </HorizontalMarginWrapper>
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  verticalmargin: {
    marginTop: Platform.OS === "ios" ? "10%" : 0,
    marginBottom: 16,
  },
  headerBox: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    color: "#000000",
    fontWeight: "bold",
  },

  title3: {
    width: "90%",
    alignItems: "center",
  },
});

export default CustomHeaderCross;
