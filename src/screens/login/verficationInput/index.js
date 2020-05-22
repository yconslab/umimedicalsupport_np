import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import CodeInput from "react-native-confirmation-code-input";
import { CustomHeader } from "../../../commons";
import Colors from "../../../constants";
import styles from "./style";
const VerificationInput = ({ headerTitle, navigation }) => {
  const [inputCode, setCode] = useState("");
  const [error, setError] = useState(false);

  const _onFinishCheckingCode1 = (isValid) => {
    console.log(isValid);
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
      if (!error) {
        navigation.navigate("NameInput");
      }
    }
  };
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CustomHeader headerText="6자리 인증번호를 입력해주세요." />
        <View style={styles.contentWrap}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.titleText}>
              01055048441번으로 코드를 전송했어요.{" "}
            </Text>
            <Text style={styles.titleText}>수신된 코드를 입력하세요</Text>
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.codeInputWrap}>
              <CodeInput
                // ref="codeInputRef1"
                className={"border-b"}
                compareWithCode="606016"
                space={15}
                size={40}
                codeLength={6}
                inputPosition="center"
                onFulfill={(isValid) => _onFinishCheckingCode1(isValid)}
                activeColor={error ? "red" : "#4388F0"}
                inactiveColor={error ? "red" : "#4388F0"}
                keyboardType="numeric"
                codeInputStyle={{
                  color: "black",
                  fontSize: 40,
                  lineHeight: 48,
                }}
                selectionColor="black"
                compareWithCode="123456"
                onCodeChange={(code) => setCode(code)}
                selectionColor="#4388F0"
              />
            </View>

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  인증번호를 잘못 입력하셨습니다. 다시 입력해주세요.
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomTextWrap}>
          <View style={styles.bottomWrap}>
            <Icon name="refresh" style={styles.refreshIconStyle} />
            <Text style={styles.bottomText}>재전송</Text>
          </View>

          <Text style={styles.bottomText}>0초</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VerificationInput;
