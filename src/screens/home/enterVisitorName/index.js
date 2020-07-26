import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import { Scale } from "../../../helper/HelperFunction";
import Colors from "../../../constants/Colors";
import { RadioButton } from "../commons";
import { setName, setRadioButton } from "../redux/actions";

const componentName = ({ navigation }) => {
  const [selectedRadioButton, setselectedRadioButton] = useState(
    "대리 접수입니다."
  );
  const [disableButton, setDisableButton] = useState(true);
  const [name, setname] = useState("");

  const VisitorInformationValue = useSelector(
    (state) => state.ReservationInformation
  );
  const dispatch = useDispatch();
  const handleRadioButton = (vale) => {
    dispatch(setRadioButton(vale));

    setselectedRadioButton(vale);
  };
  const handleNameChangeInput = (text) => {
    console.log(text);
    dispatch(setName(text));
    setname(text);
    if (name.length > 1) {
      return setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleButton = () => {
    navigation.navigate("VisitorInformatioNumber");
    dispatch(setName(name));
  };
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        headerText="방문자의 이름을 입력하세요."
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          disabled={disableButton}
          onPress={() => handleButton()}
        />
      </View>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
  textInputStyle: {
    marginHorizontal: Scale(20),
    marginTop: Scale(30),
  },
  textInputHeaderStyle: {
    fontSize: Scale(13),
    color: "#A7A7A7",
    fontWeight: "bold",
  },
  radioButtonWrapper: {
    flexDirection: "row",
    marginTop: -20,
    marginHorizontal: Scale(20),
  },
  footerPosition: {
    margin: Scale(20),
  },
});
