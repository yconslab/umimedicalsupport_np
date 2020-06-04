import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import styles from "./style";

//maincomponent
const EnterPatientInformation = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState(false);
  const [secondInput, setSecondInput] = useState("");
  const [showbutton, setShowButton] = useState(false);
  const handleSetFirstTextBox = value => {
    setInput(value);
    if (value.length > 4) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  };
  const handleInputSecondText = val => {
    setSecondInput(val);
    if (val.length > 4 && inputState) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="환자 정보"
        showHeaderText
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.inputWrap}>
          {inputState && (
            <TextInput
              title="방문자 휴대폰 번호"
              placeholderText="실제 연락이 가능해야 합니다."
              changeText={val => handleInputSecondText(val)}
              value={secondInput}
            />
          )}

          <TextInput
            title="방문자 이름"
            changeText={value => handleSetFirstTextBox(value)}
            value={input}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonWrap}>
        <CustomButton
          title={showbutton ? "등록하기" : "다음"}
          disabled={showbutton ? false : true}
        />
      </View>
    </View>
  );
};
export default EnterPatientInformation;
