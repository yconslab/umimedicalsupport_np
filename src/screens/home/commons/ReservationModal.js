import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import { Button, Overlay } from "react-native-elements";
import CrossIcon from "react-native-vector-icons/Entypo";
import PhoneIcon from "react-native-vector-icons/FontAwesome";

import { Scale } from "../../../helper/HelperFunction";
const { height, width } = Dimensions.get("window");

import { CustomHeader, CustomButton } from "../../../commons";
import Colors from "../../../constants/Colors";

const Modal = ({ showReservationModal, toggleOverlay, navigation }) => {
  const OpenURLButton = ({ url, displayText }) => {
    const handlePress = async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        alert(`Don't know how to open this URL: ${url}`);
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.linkStyle}>{displayText}</Text>
      </TouchableOpacity>
    );
  };

  const handleOverlay = () => {
    navigation.navigate("DateSchedule");
    toggleOverlay();
  };
  return (
    <View style={styles.wrapper}>
      <Overlay
        isVisible={showReservationModal}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.ModalOverLaystyle}
      >
        <View>
          <TouchableOpacity onPress={toggleOverlay} style={{ marginLeft: -5 }}>
            <CrossIcon name="cross" size={Scale(30)} />
          </TouchableOpacity>
          <Text style={styles.headerTextStyle}>우미 예약 전에</Text>
          <Text style={styles.headerTextStyle}>
            병원 예약을 직접 하셔야 해요.
          </Text>
          <Text style={styles.headerBaseSmallTextStyle}>
            (우미에서 ‘바로예약’ 기능은 준비중입니다.)
          </Text>
          <View style={styles.PhoneBoxContainer}>
            <Text style={styles.phoneHeaderStyle}>전화 예약</Text>
            <TouchableOpacity style={styles.phoneWrapper}>
              <PhoneIcon
                name="phone"
                size={Scale(35)}
                color={Colors.activeColor}
              />
              <Text style={styles.PhoneNumberStyle}>1599-1004</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image />
          </View>
          <View>
            <Text style={styles.footerText}>온라인 예약</Text>
            <OpenURLButton
              url={"https://sev.iseverance.com/appnt/index.asp"}
              displayText="sev.iseverance.com/appnt/"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="네. 예약을 완료했어요."
            onPress={() => handleOverlay()}
          />
        </View>
      </Overlay>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: Scale(30)
  },
  wrapper: {
    flex: 1
  },
  ModalOverLaystyle: {
    width: width,
    height: height,
    marginTop: Scale(100)
  },
  PhoneBoxContainer: {
    marginVertical: Scale(42)
  },
  headerTextStyle: {
    fontSize: Scale(24),
    fontWeight: "bold"
  },
  headerBaseTextStyle: {
    fontSize: Scale(15),
    color: Colors.homeBannerBigText
  },
  phoneWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Scale(14)
  },
  PhoneNumberStyle: {
    fontSize: Scale(28),
    marginLeft: Scale(15),
    color: Colors.activeColor,
    fontWeight: "400",
    textDecorationLine: "underline"
  },
  footerText: {
    fontSize: Scale(18),
    color: Colors.textColor,
    fontWeight: "600",
    marginBottom: 10
  },
  linkStyle: {
    color: Colors.activeColor,
    fontWeight: "400",
    textDecorationLine: "underline",
    fontSize: Scale(28)
  },
  phoneHeaderStyle: {
    fontSize: Scale(18),
    color: Colors.textColor,
    fontWeight: "500"
  },
  headerBaseSmallTextStyle: {
    fontSize: Scale(12),
    color: Colors.homeBannerBigText
  }
});
