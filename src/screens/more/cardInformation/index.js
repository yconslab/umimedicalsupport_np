import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import styles from "./style";
import { CardIOModule, CardIOUtilities } from "react-native-awesome-card-io";
const CardInformation = ({ navigation }) => {
  const [showNumberField, setShowNumberField] = useState(false);
  const [showcvcField, setShowcvcFiled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [cardNumber, setCardNumber] = useState("238742389731234");
  const [headerLine, setHeaderLine] = useState(40);

  //
  const [readCardValue, setReadCardValue] = useState("");

  useEffect(() => {
    if (Platform.OS === "ios") {
      CardIOUtilities.preload();
    }
  }, []);

  const scanCard = () => {
    CardIOModule.scanCard()
      .then(card => {
        alert(card.cardNumber);
        setReadCardValue(card.cardNumber);
      })
      .catch(() => {});
  };
  const handlesetShowNumberField = val => {
    setShowNumberField(val);
    setHeaderLine(50);
  };

  const handlesetShowcvcFiled = val => {
    setShowcvcFiled(val);
    setHeaderLine(70);
  };
  const handlesetShowPassword = val => {
    setShowPassword(val);
    setHeaderLine(90);
  };
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="카드 추가"
        showHeaderText
        navigation={navigation}
        headerLine={headerLine}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.inputWrap}>
          {showPassword ? (
            <TextInput
              title="카드 비밀번호 앞 두자리"
              placeholderText="비밀번호 앞 두자리"
              changeText={() => setShowButton(true)}
              secureTextEntry={true}
              clearButtonMode="while-editing"
            />
          ) : null}
          {showcvcField ? (
            <TextInput
              title="CVC"
              placeholderText="카드 뒷면 세자리"
              onSubmitEditing={() => handlesetShowPassword(true)}
              secureTextEntry={true}
            />
          ) : null}
          {showNumberField ? (
            <TextInput
              title="유효기간"
              placeholderText="YYMM"
              onSubmitEditing={() => handlesetShowcvcFiled(true)}
            />
          ) : null}
          <View style={styles.inputWrapper}>
            <View style={styles.firstInput}>
              <TextInput
                title="방문자 이름"
                numeric
                clearButtonMode="while-editing"
                value={readCardValue}
                onSubmitEditing={() => handlesetShowNumberField(true)}
              />
            </View>
            <View style={styles.secondInput}>
              <TextInput numeric secureTextEntry={true} maxLength={4} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={showButton ? styles.bottombuttonWrap : styles.buttonWrap}>
        {showNumberField ? null : (
          <CustomButton
            title="카드스캔"
            innerStyle={styles.innerStyle}
            innerTextStyle={styles.innerTextStyle}
            onPress={() => scanCard()}
          />
        )}
        {showButton ? <CustomButton title="등록하기" /> : null}
      </View>
    </View>
  );
};
export default CardInformation;
