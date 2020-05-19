import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Header, Avatar, Badge, Icon, withBadge } from "react-native-elements";
// import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants";

const { height, width } = Dimensions.get("window");
const MyCustomLeftComponent = ({
  navigation,
  cross,
  showBarIocn,
  navigationFirstPage,
  customcross,
  navTitle,
}) => {
  return (
    <View>
      {cross ? (
        customcross ? (
          <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>
            <Image
              source={Images.cross}
              style={{
                height: 15,
                resizeMode: "contain",
                width: 15,
                tintColor: "#000000",
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" color="#000000" size={26} />
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigationFirstPage
              ? navigationFirstPage.navigate("HomeScreen")
              : navigation.goBack()
          }
          //
        >
          <Icon name="arrow-back" color="#404040" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const HeaderList = ({
  headerText,
  backHidden,
  navigation,
  centerText,
  padding,
  header,
  cross,
  showHeaderText,

  showBarIocn,
  sideText,
  navigationFirstPage,

  centerNavigation,
}) => {
  const BadgedIcon = withBadge(1)(Icon);

  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={
          padding
            ? { ...styles.headerWrapper, paddingBottom: 30 }
            : { ...styles.headerWrapper }
        }
      >
        {backHidden ? (
          <Header
            containerStyle={{
              backgroundColor: Colors.appColor,
              justifyContent: "space-around",
            }}
            centerComponent={
              centerText && (
                <TouchableOpacity
                // onPress={centerNavigation}
                >
                  <Text>{centerText}</Text>
                </TouchableOpacity>
              )
            }
            rightComponent={sideText && <Text>{sideText}</Text>}
          />
        ) : (
          <Header
            leftComponent={
              <MyCustomLeftComponent
                navigation={navigation}
                showBarIocn={showBarIocn}
                cross={cross}
                navigationFirstPage={navigationFirstPage}
              />
            }
            containerStyle={{
              backgroundColor: Colors.appColor,
              justifyContent: "space-around",
            }}
            centerComponent={
              centerText && (
                <TouchableOpacity onPress={centerNavigation}>
                  <Text>{centerText}</Text>
                </TouchableOpacity>
              )
            }
            rightComponent={
              sideText && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("ChargingMethodSelection")}
                >
                  <Text
                    style={{
                      color: Colors.activeBlueColor,
                      fontSize: 17,
                      lineHeight: 22,
                    }}
                  >
                    {sideText}
                  </Text>
                </TouchableOpacity>
              )
            }
          />
        )}
      </View>

      {showHeaderText && (
        <View style={styles.headerTextDesign}>
          <Text style={styles.headerTextStyle}>{headerText}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 3,
    backgroundColor: Colors.appColor,
  },
  headerTextDesign: {
    paddingHorizontal: 15,
    backgroundColor: Colors.appColor,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTextStyle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold",
    color: Colors.TextColor,
  },
});

export default HeaderList;
