import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { CheckBox, Button, Header } from "react-native-elements";
import images from "../../../images";
import { CustomHeader, CustomButton } from "../../../commons";
import styles from "./style";

//reusable components
const CheckBoxWrapper = ({ children }) => {
  return <View style={styles.CheckBoxWrapper}>{children}</View>;
};

const CheckedIcon = () => {
  return (
    <View style={styles.checkedIconWrap}>
      <View style={styles.checkBox}>
        <Image source={images.checkIcon} style={styles.checkedIconStyle} />
      </View>
    </View>
  );
};

const UncheckedIcon = () => {
  return (
    <View style={styles.unCheckBox}>
      <Image source={images.checkIcon} style={styles.checkedIconStyle} />
    </View>
  );
};

const TitleText = ({ title1, title2, title3, flexd, textStyle }) => {
  return (
    <View style={styles.titleTextWrap}>
      <Text
        style={{
          ...styles.title1,
          ...textStyle
        }}
      >
        {title1}
      </Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};

//mainComponent
const CardRegistration = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check3, setCheck3] = useState(false);

  const handleFirstCheckBox = val => {
    if (val === true) {
      setCheck1(true);
      setCheck3(true);
    } else if (val === false) {
      setCheck1(false);
      setCheck3(false);
    }
  };
  const handleUncheckForThird = val => {
    setCheck3(val);
    if (val == false) {
      setCheck1(false);
      setCheck1(false);
    }
    if (val == true) {
      setCheck1(true);
      setCheck1(true);
    }
  };
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="카드 추가"
        navigation={navigation}
        headerLine={20}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentTopMargin}>
          <CheckBoxWrapper>
            <CheckBox
              checkedIcon={<CheckedIcon />}
              uncheckedIcon={<UncheckedIcon />}
              checked={check1}
              title={
                <TitleText
                  title1="모두 확인 및 동의합니다."
                  title2=""
                  textStyle={styles.textStyle1}
                />
              }
              iconRight
              onPress={() => handleFirstCheckBox(!check1)}
              containerStyle={styles.containerStyle1}
            />
          </CheckBoxWrapper>

          <CheckBoxWrapper>
            <CheckBox
              checkedIcon={<CheckedIcon />}
              uncheckedIcon={<UncheckedIcon />}
              checked={check3}
              title={
                <TitleText
                  title1="개인정보 3자 제공 동의 "
                  title2="(필수)"
                  textStyle={styles.textStyle3}
                />
              }
              onPress={() => handleUncheckForThird(!check3)}
              containerStyle={styles.containerStyle2}
              iconRight
            />
          </CheckBoxWrapper>
        </View>
      </ScrollView>

      <View style={styles.btnWrap}>
        <CustomButton
          title="다음"
          disabled={!check1 && !check3}
          onPress={() => navigation.navigate("CardInformation")}
        />
      </View>
    </View>
  );
};

export default CardRegistration;
