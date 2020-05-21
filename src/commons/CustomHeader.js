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

const MyLeftComponent = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {
        (Platform.OS = "ios" ? (
          <BackIcon name="ios-arrow-round-back" size={Scale(30)} />
        ) : (
          <BackIcon name="md-arrow-back" size={Scale(30)} />
        ))
      }
    </TouchableOpacity>
  );
};
const HeaderList = ({
  navigation,
  showBackIcon,
  headerText,
  centerComponent,
  rightComponent,
  leftComponent
}) => {
  return (
    <View style={styles.headerMainWrapper}>
      <Header
        containerStyle={styles.headerWrapper}
        leftComponent={<MyLeftComponent navigation={navigation} />}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
      />
      <Text style={styles.headerTextStyle}>{headerText}</Text>
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
<<<<<<< HEAD
    fontSize: 24,
    lineHeight: 29,
=======
    fontSize: Scale(24),
>>>>>>> d94e2b2d35685544749fe35235885cfd4d2247b7
    fontWeight: "bold",
    color: Colors.TextColor
  }
});

export default HeaderList;
