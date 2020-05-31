import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { Header } from "react-native-elements";
import BackIcon from "react-native-vector-icons/Ionicons";
import Colors from "../constants";
import { Scale } from "../helper/HelperFunction";

const { height, width } = Dimensions.get("window");

const MyLeftComponent = ({ navigation, cross }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {cross ? (
        <BackIcon name="ios-close" size={Scale(35)} />
      ) : (
        (Platform.OS = "ios" ? (
          <BackIcon name="ios-arrow-back" size={Scale(30)} />
        ) : (
          <BackIcon name="md-arrow-back" size={Scale(30)} />
        ))
      )}
    </TouchableOpacity>
  );
};
const HeaderList = ({
  navigation,
  showBackIcon,
  headerText,
  centerComponent,
  rightComponent,
  leftComponent,
  sideText,
  cross,
  sideNavigation
}) => {
  return (
    <View style={styles.headerMainWrapper}>
      <Header
        containerStyle={styles.headerWrapper}
        leftComponent={
          <MyLeftComponent navigation={navigation} cross={cross} />
        }
        centerComponent={centerComponent}
        rightComponent={rightComponent}
      />
      <View style={styles.headerTextWrap}>
        <Text style={styles.headerTextStyle}>{headerText}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(sideNavigation)}>
          {sideText && <Text style={styles.sideText}>{sideText}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 3,
    backgroundColor: Colors.appColor
  },
  headerMainWrapper: {
    paddingHorizontal: Scale(20)
  },
  headerTextDesign: {
    paddingHorizontal: Scale(15),
    backgroundColor: Colors.appColor,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTextStyle: {
    lineHeight: 29,
    fontSize: Scale(24),
    fontWeight: "bold",
    color: Colors.TextColor
  },
  headerTextWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sideText: {
    fontSize: 16,
    lineHeight: 19,
    color: Colors.activeBlueColor
  }
});

export default HeaderList;
