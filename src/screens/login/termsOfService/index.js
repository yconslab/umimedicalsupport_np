import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { CheckBox, Button } from "react-native-elements";
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
          ...textStyle,
        }}
      >
        {title1}
      </Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};

//mainComponent
const TermsofService = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const handleFirstCheckBox = (val) => {
    if (val === true) {
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
    } else if (val === false) {
      setCheck1(false);
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
    }
  };
  const handleUncheckForSecond = (val) => {
    setCheck2(val);
    if (val == false && !check3) {
      setCheck1(false);
    }
    if (val == true && check3) {
      setCheck1(true);
    }
    // alert(!check2);
  };
  const handleUncheckForThird = (val) => {
    setCheck3(val);
    if (val == false && !check2) {
      setCheck1(false);
    }
    if (val == true && check2) {
      setCheck1(true);
    }
  };
  return (
    <View style={styles.screen}>
      <CustomHeader headerText="약관동의가 필요해요." navigation={navigation} />
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
              checked={check2}
              title={
                <TitleText
                  title1="전자금융거래 이용약관 동의"
                  title2="(필수)"
                  textStyle={styles.textStyle2}
                />
              }
              onPress={() => handleUncheckForSecond(!check2)}
              containerStyle={styles.containerStyle2}
              iconRight
            />
          </CheckBoxWrapper>

          <CheckBoxWrapper>
            <CheckBox
              checkedIcon={<CheckedIcon />}
              uncheckedIcon={<UncheckedIcon />}
              checked={check3}
              title={
                <TitleText
                  title1="마케팅 수신 동의"
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
          title="등록하기"
          innerStyle={
            check1 === true && check2 === true && check3 == true
              ? styles.innerStyle1
              : styles.innerStyle2
          }
          innerTextStyle={
            check1 === true && check2 === true && check3 == true
              ? styles.innerTextStyle1
              : styles.innerTextStyle2
          }
          disabled={!check1 && !check2 && !check3}
          onPress={() => navigation.navigate("SignUpComplete")}
        />
      </View>
    </View>
  );
};

export default TermsofService;
