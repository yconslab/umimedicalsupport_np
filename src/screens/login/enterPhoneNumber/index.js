import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import {
  CustomHeader,
  CustomButton,
  TextInput,
  TextInputLeftIcon,
} from "../../../commons";
import styles from "./style";
const EnterPhoneNumber = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="전화번호로 간편하게 시작해요."
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.inputWrapper}>
          <TextInput
            title="전화번호"
            placeholderText="0000-0000"
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
            numeric
            leftIconDispay={<TextInputLeftIcon />}
            // value={nameinput}
            handleOnPress={() => handlePress(navigation)}
            clearButtonMode="while-editing"
            navigationFooter={true}
            navigation={navigation}
            footerText="로그인 / 가입을 도와드릴까요?"
            maxLength={12}
          />
        </View>
      </ScrollView>

      <View style={{ margin: 20 }}>
        <CustomButton
          title="다음"
          innerStyle={
            inputState === true && input.length > 11
              ? styles.innerStyle1
              : styles.innerStyle2
          }
          innerTextStyle={
            inputState === true && input.length > 11
              ? styles.innerTextStyle1
              : styles.innerTextStyle2
          }
          disabled={inputState === false && input.length <= 12}
          onPress={() => navigation.navigate("VerificationInput")}
        />
      </View>
    </View>
  );
};

export default EnterPhoneNumber;
