import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {CheckBox, Button} from 'react-native-elements';
import images from '../../images';
import {CustomHeader, CustomButton} from '../../commons';

const TextWithArrow = ({click}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', justifyContent: 'center'}}
      onPress={click}>
      <Text style={{fontSize: 12, lineHeight: 15, color: '#666666'}}>보기</Text>
      <Image
        style={{alignSelf: 'center', marginLeft: 5, height: 10, width: 10}}
      />
    </TouchableOpacity>
  );
};

const CheckBoxWrapper = ({children}) => {
  return <View style={styles.CheckBoxWrapper}>{children}</View>;
};

const CheckedIcon = () => {
  return (
    <View
      style={{
        alignSelf: 'flex-end',

        width: 20,
      }}>
      <View style={styles.checkBox}>
        <Image source={images.checkIcon} style={{height: 10, width: 10}} />
      </View>
    </View>
  );
};

const UncheckedIcon = () => {
  return (
    <View style={styles.unCheckBox}>
      <Image source={images.checkIcon} style={{height: 10, width: 10}} />
    </View>
  );
};

const TitleText = ({title1, title2, title3, flexd, textStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
      }}>
      <Text
        style={{
          ...styles.title1,
          ...textStyle,
        }}>
        {title1}
      </Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};
const AgreementScreen = ({navigation}) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const handleFirstCheckBox = val => {
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
  const handleUncheckForSecond = val => {
    setCheck2(val);
    if (val == false && !check3) {
      setCheck1(false);
    }
    if (val == true && check3) {
      setCheck1(true);
    }
    // alert(!check2);
  };
  const handleUncheckForThird = val => {
    setCheck3(val);
    if (val == false && !check2) {
      setCheck1(false);
    }
    if (val == true && check2) {
      setCheck1(true);
    }
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader
        title1="약관동의가 필요해요."
        click={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{margin: 2}}>
        <View
          style={{
            marginTop: 40,
          }}>
          <CheckBoxWrapper>
            <CheckBox
              checkedIcon={<CheckedIcon />}
              uncheckedIcon={<UncheckedIcon />}
              checked={check1}
              title={
                <TitleText
                  title1="모두 확인 및 동의합니다."
                  title2=""
                  textStyle={{
                    fontSize: 15,
                    color: '#4388F0',
                    fontWeight: 'bold',
                  }}
                />
              }
              iconRight
              onPress={() => handleFirstCheckBox(!check1)}
              containerStyle={{
                backgroundColor: 'white',
                borderColor: '#4388F0',
                flex: 1,
              }}
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
                  textStyle={{
                    textDecorationLine: 'underline',
                    fontSize: 12,
                    color: '#000000',
                  }}
                />
              }
              onPress={() => handleUncheckForSecond(!check2)}
              containerStyle={{
                backgroundColor: 'white',
                borderColor: 'white',
                flex: 1,
              }}
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
                  textStyle={{
                    textDecorationLine: 'underline',
                    color: '#000000',
                  }}
                />
              }
              onPress={() => handleUncheckForThird(!check3)}
              containerStyle={{
                backgroundColor: 'white',
                borderColor: 'white',
                flex: 1,
              }}
              iconRight
            />
          </CheckBoxWrapper>
        </View>
      </ScrollView>

      <View style={{margin: 20}}>
        <CustomButton
          style={{
            height: Platform.OS === 'ios' ? 50 : 50,
            width: '100%',
            borderRadius: 4,
            backgroundColor:
              check1 === true && check2 === true && check3 == true
                ? '#4388F0'
                : '#EBEBEB',
          }}
          buttontext="등록하기"
          textStyle={{
            fontSize: 17,
            lineHeight: 20,
            color:
              check1 === true && check2 === true && check3 == true
                ? '#FFFFFF'
                : '#0000004D',
            fontWeight: 'bold',
          }}
          click={() => {
            navigation.navigate('SignupComplete');
          }}
          disabled={!check1 && !check2 && !check3}
        />
      </View>
    </SafeAreaView>
  );
};

export default AgreementScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'flex-start',
  },
  buttonStyle: {
    margin: 20,
  },
  headerText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#606060',
  },
  iconImage: {
    height: 20,
    width: 20,
  },
  checkBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#4388F0',
    backgroundColor: '#4388F0',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'white',
    // flex: 1,
  },
  unCheckBox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0000002E',
    // backgroundColor: '#0000002E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  CheckBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title1: {
    fontSize: 12,
    // lineHeight: 9,
    color: '#000000',
    // textDecorationLine: 'underline',
  },
  title2: {
    fontSize: 8,
    // lineHeight: 9,
    color: '#4388F0',
  },
});
