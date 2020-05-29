import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import styles from "./style";

//maincomponent
const EnterPatientInformation = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState(false);
  const [showNumberField, setShowNumberField] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="환자 정보"
        showHeaderText
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.inputWrap}>
          {showNumberField ? (
            <TextInput
              title="방문자 휴대폰 번호"
              placeholderText="실제 연락이 가능해야 합니다."
            />
          ) : null}

          <TextInput
            title="방문자 이름"
            changeText={(value) => {
              setInput(value);
              // console.log(value, inputState);
              if (value.length > 4) {
                setInputState(true);
              } else {
                setInputState(false);
              }
            }}
            value={input}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonWrap}>
        {showNumberField ? (
          <CustomButton title="등록하기" innerStyle={styles.innerStyle} />
        ) : (
          <CustomButton
            title="다음"
            onPress={() => setShowNumberField(true)}
            innerStyle={
              inputState === true && input.length > 0
                ? styles.innerStyle1
                : styles.innerStyle2
            }
            disabled={inputState === false && input.length <= 4}
          />
        )}
      </View>
    </View>
  );
};
export default EnterPatientInformation;
