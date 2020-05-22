import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
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
    state => state.VisitorInformation
  );
  const dispatch = useDispatch();
  const handleRadioButton = vale => {
    dispatch(setRadioButton(vale));

    setselectedRadioButton(vale);
  };
  const handleNameChangeInput = text => {
    dispatch(setName(text));
    setname(text);
    if (name.length > 4) {
      return setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        headerText="방문자의 이름을 입력하세요."
        navigation={navigation}
      />
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
          onChangeRadioButton={title => handleRadioButton(title)}
        />
        <RadioButton
          title="본인입니다."
          selected={VisitorInformationValue.selectedRadioButton}
          onChangeRadioButton={title => handleRadioButton(title)}
        />
      </View>
      <View style={styles.footerPosition}>
        <CustomButton
          title="다음"
          innerStyle={{ marginHorizontal: Scale(20) }}
          disabled={disableButton}
          onPress={() => navigation.navigate("VisitorInformatioNumber")}
        />
      </View>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor
  },
  textInputStyle: {
    marginHorizontal: Scale(20),
    marginTop: Scale(30)
  },
  textInputHeaderStyle: {
    fontSize: Scale(13),
    color: "#A7A7A7",
    fontWeight: "bold"
  },
  radioButtonWrapper: {
    flexDirection: "row",
    marginTop: -20,
    marginHorizontal: Scale(20)
  },
  footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }
});
