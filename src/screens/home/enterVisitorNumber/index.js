import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CheckIcons from "react-native-vector-icons/Ionicons";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import { Scale } from "../../../helper/HelperFunction";
import Colors from "../../../constants/Colors";
import { RadioButton } from "../commons";
import {
  setName,
  setRadioButton,
  setPhoneNumber,
  setCheckbox,
} from "../redux/actions";
import { CheckBox } from "react-native-elements";

const VisitorPhonenumber = ({ navigation }) => {
  const [selectedRadioButton, setselectedRadioButton] = useState(
    "대리 접수입니다."
  );
  const [disableButton, setDisableButton] = useState(true);
  const [name, setname] = useState("");

  const [ph, setph] = useState("");

  const VisitorInformationValue = useSelector(
    (state) => state.VisitorInformation
  );
  const dispatch = useDispatch();
  const handleRadioButton = (vale) => {
    dispatch(setRadioButton(vale));

    setselectedRadioButton(vale);
  };
  const handleNameChangeInput = (text) => {
    dispatch(setName(text));
    setname(text);
    // if (name.length > 4) {
    //   return setDisableButton(false);
    // } else {
    //   setDisableButton(true);
    // }
  };
  const handleChangeNumber = (val) => {
    dispatch(setPhoneNumber(val));

    if (val.length > 10) {
      return setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };
  const handleCheckedBox = (val) => {
    dispatch(setCheckbox(!val));
  };

  const handleButton = () => {
    navigation.navigate("AdditionalInformation");
  };
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        headerText="방문자의 전화번호를 입력하세요."
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.NumberStyleContainer}>
          <Text style={styles.textInputHeaderStyle}>방문자 휴대폰 번호</Text>
          <TextInput
            placeholderText="실제 연락이 가능해야 합니다."
            value={VisitorInformationValue.phoneNumber}
            changeText={handleChangeNumber}
            numeric={true}
          />
          <View style={styles.checkboxWrapper}>
            <CheckBox
              title="안심번호 사용"
              containerStyle={styles.checkboxStyle}
              checkedIcon={
                <CheckIcons
                  name="md-checkbox"
                  color={Colors.activeColor}
                  size={Scale(22)}
                />
              }
              onPress={() => handleCheckedBox(VisitorInformationValue.checkbox)}
              checked={VisitorInformationValue.checkbox}
            />
          </View>
        </View>
        <View style={styles.textInputStyle}>
          <Text style={styles.textInputHeaderStyle}>방문자 이름</Text>
          <TextInput
            placeholderText="실명을 입력해주세요."
            value={VisitorInformationValue.name}
            changeText={handleNameChangeInput}
          />
        </View>
        <View style={styles.radioButtonWrapper}>
          <RadioButton
            title="대리 접수입니다."
            selected={VisitorInformationValue.selectedRadioButton}
            onChangeRadioButton={(title) => handleRadioButton(title)}
          />
          <RadioButton
            title="본인입니다."
            selected={VisitorInformationValue.selectedRadioButton}
            onChangeRadioButton={(title) => handleRadioButton(title)}
          />
        </View>
      </ScrollView>
      <View style={styles.footerPosition}>
        <CustomButton
          title="다음"
          // innerStyle={{ marginHorizontal: Scale(20) }}
          disabled={disableButton}
          onPress={() => handleButton()}
        />
      </View>
    </View>
  );
};

export default VisitorPhonenumber;

const styles = StyleSheet.create({
  checkboxStyle: {
    backgroundColor: Colors.appColor,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  footerPosition: {
    margin: Scale(20),
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  textInputStyle: {
    marginHorizontal: Scale(20),
    // marginVertical: Scale(20)
    marginTop: Scale(30),
  },
  textInputHeaderStyle: {
    fontSize: Scale(13),
    color: "#A7A7A7",
    fontWeight: "bold",
    marginLeft: Scale(10),
  },
  radioButtonWrapper: {
    flexDirection: "row",
    marginTop: Scale(-10),
    marginHorizontal: Scale(20),
    // backgroundColor: "red"
  },
  checkboxWrapper: {
    marginTop: Scale(-30),
  },
  NumberStyleContainer: {
    marginHorizontal: Scale(20),
    marginTop: Scale(30),
  },
});
