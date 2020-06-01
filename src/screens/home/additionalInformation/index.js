import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";

import { Overlay } from "react-native-elements";
import { CustomHeader, CustomButton } from "../../../commons";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";
import { FinalConfirmation } from "../finalConfirmation";

const { height, width } = Dimensions.get("window");

const additionalInformation = [
  { id: 1, title: "간병 서비스 같은" },
  { id: 2, title: "어려운 서비스1" },
  { id: 3, title: "어려운 서비스2 " },
  { id: 4, title: "어려운 서비스3 " },
  { id: 5, title: "어려운 서비스" }
];
const AdditionalInformation = ({ navigation }) => {
  const [textInput, setTextInput] = useState("");
  const [showModal, setModal] = useState(false);

  const onPressHandleCloseModal = () => setModal(!showModal);
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        headerText="설명해주신 내용은 우미가 특별히 신경쓰겠습니다."
        navigation={navigation}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>
          도우미가 특별히 알아야 하는 사항을 알려주세요. Ex)환자분의 거동이
          불편하십니다.
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={val => setTextInput(val)}
          value={textInput}
          multiline={true}
          maxLength={100}
          placeholder="어머니께서 귀가 어두우십니다. 친절하게 안내 부탁드립니다."
        />
      </View>
      <View style={styles.additionalInformationContainer}>
        <Text style={styles.titleStyle}>미포함 서비스</Text>
        {additionalInformation.map(i => {
          return (
            <View style={styles.titleContainer} key={i.id}>
              <Text style={[styles.titleDesignStyle, { fontSize: Scale(20) }]}>
                *
              </Text>
              <Text style={styles.titleDesignStyle}>{i.title}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="다음" onPress={() => setModal(true)} />
      </View>
      {showModal && (
        <View style={styles.modalStyle}>
          <FinalConfirmation
            onPressHandleCloseModal={onPressHandleCloseModal}
            navigation={navigation}
          />
        </View>
      )}
    </View>
  );
};

export default AdditionalInformation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor
  },
  innerContainer: {
    marginHorizontal: Scale(20)
  },
  textInputStyle: {
    height: 100,
    // backgroundColor: "/#F5F5F5",
    borderBottomWidth: 1,
    borderWidth: 1,
    backgroundColor: "#F5F5F5",
    borderBottomColor: "#F5F5F5",
    borderColor: "#DFE4EB",
    padding: Scale(10),
    borderRadius: Scale(5)
  },
  textStyle: {
    fontSize: Scale(15),
    marginTop: Scale(10),
    marginBottom: Scale(20)
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: Scale(20)
  },
  additionalInformationContainer: {
    marginHorizontal: Scale(20)
  },
  titleStyle: {
    fontSize: Scale(11),
    marginVertical: Scale(14),
    fontWeight: "bold"
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: Scale(3),
    alignItems: "center"
  },
  titleDesignStyle: {
    fontSize: Scale(11),
    marginRight: Scale(4),
    color: "#393939"
  },
  modalStyle: {
    position: "absolute",
    top: Scale(40),
    left: 0,
    right: 0,
    backgroundColor: "#EBEBEB",
    bottom: 0
  }
});
