import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CodeInput from 'react-native-confirmation-code-input';
import {CustomHeader} from '../../commons';
const VerificationCodeScreen5 = ({headerTitle, navigation}) => {
  const [inputCode, setCode] = useState('');
  const [error, setError] = useState(false);
  const setCodeHandler = code => {
    setCode(code);
  };

  const _onFinishCheckingCode1 = isValid => {
    console.log(isValid);
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
      if (!error) {
        navigation.navigate('NameInput');
      }
    }
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader
          title1="6자리 인증번호를 입력해주세요."
          click={() => {
            navigation.goBack();
          }}
        />
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <View style={styles.topTextWrapper}>
            <Text style={styles.titleText}>
              01055048441번으로 코드를 전송했어요.{' '}
            </Text>
            <Text style={styles.titleText}>수신된 코드를 입력하세요</Text>
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.codeInputWrap}>
              <CodeInput
                // ref="codeInputRef1"
                className={'border-b'}
                compareWithCode="606016"
                space={15}
                size={40}
                codeLength={6}
                inputPosition="center"
                onFulfill={isValid => _onFinishCheckingCode1(isValid)}
                activeColor={error ? 'red' : '#4388F0'}
                inactiveColor={error ? 'red' : '#4388F0'}
                keyboardType="numeric"
                codeInputStyle={{color: 'black', fontSize: 40, lineHeight: 48}}
                selectionColor="black"
                compareWithCode="123456"
                onCodeChange={code => setCode(code)}
                selectionColor="#4388F0"
              />
            </View>

            {error ? (
              <View style={styles.errorBox}>
                <Text style={{color: 'red'}}>
                  인증번호를 잘못 입력하셨습니다. 다시 입력해주세요.
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomTextWrap}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="refresh" style={{paddingRight: 3}} />
            <Text style={styles.bottomText}>재전송</Text>
          </View>

          <Text style={styles.bottomText}>0초</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,

    alignContent: 'flex-start',

    // backgroundColor: "red"
  },
  buttonStyle: {
    margin: 20,
  },
  mainWrapper: {
    flex: 1,

    marginHorizontal: 20,
  },
  topTextWrapper: {
    flex: 1 / 2,
  },
  inputWrapper: {
    flex: 4,
    // backgroundColor:'green',
    flexDirection: 'column',
  },
  codeInputWrap: {
    flex: 2,
    // backgroundColor:'yellow',
    marginHorizontal: 30,
    marginBottom: 100,
  },
  bottomTextWrap: {
    flex: 1,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  bottomText: {
    color: '#404040',
  },
  errorBox: {
    flex: 3,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'center',
    width: '80%',
  },
});

export default VerificationCodeScreen5;
