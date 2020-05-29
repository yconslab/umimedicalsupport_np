import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import styles from "./style";
const EnterName = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader headerText="실명을 입력해주세요." navigation={navigation} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.inputWrapper}>
          <TextInput
            title="이름"
            placeholderText="타이틀1"
            customStyle={styles.Textholder}
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
            handleOnPress={() => this.handlePress(navigation)}
            clearButtonMode="while-editing"
            navigation={navigation}
            maxLength={16}
          />
        </View>
      </ScrollView>

      <View style={styles.btnWrap}>
        <CustomButton
          title="다음"
          innerStyle={
            inputState === true && input.length > 4
              ? styles.innerStyle1
              : styles.innerStyle2
          }
          innerTextStyle={
            inputState === true && input.length > 4
              ? styles.innerTextStyle1
              : styles.innerTextStyle2
          }
          disabled={inputState === false && input.length <= 4}
        />
      </View>
    </View>
  );
};

export default EnterName;
