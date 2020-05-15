import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {CustomHeader, CustomButton, PhoneInput} from '../../commons';
const LoginNumberInput = ({navigation}) => {
  const [input, setInput] = useState('');
  const [inputstate, setInputState] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF', height: '100%'}}>
      <ScrollView
        style={{backgroundColor: '#FFFFFF', flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader
          title1="전화번호로 간편하게 시작해요"
          click={() => {
            navigation.goBack();
          }}
        />
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <PhoneInput
            label="전화번호"
            clearButtonMode="while-editing"
            changeText={value => {
              setInput(value);
              if (value.length > 4) {
                setInputState(true);
              } else {
                setInputState(false);
              }
            }}
            value={input}
          />
          <TouchableOpacity
            style={{marginBottom: 100, marginTop: 10}}
            onPress={() => {
              navigation.navigate('LoginHelpPage');
            }}>
            <Text style={styles.helptext}>로그인 / 가입을 도와드릴까요?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{margin: 20}}>
        <CustomButton
          style={{
            height: Platform.OS === 'ios' ? 50 : 50,
            width: '100%',
            borderRadius: 4,
            backgroundColor: inputstate ? '#4388F0' : '#EBEBEB',
          }}
          buttontext="다음"
          textStyle={{
            fontSize: 17,
            lineHeight: 20,
            color: inputstate ? '#FFFFFF' : '#0000004D',
          }}
          disabled={inputstate ? false : true}
          click={() => {
            navigation.navigate('VerificationNumberInput');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

LoginNumberInput.navigationOptions = navData => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: '15%',
    backgroundColor: 'grey',
  },
  firstbox: {
    height: 56,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#00000014',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastBox: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    color: '#0000004D',
  },
  activeCoupon: {
    shadowColor: '#E8E8E8',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 45,
  },
  helptext: {
    fontSize: 12,
    lineHeight: 17,
    color: '#00000099',
    textDecorationLine: 'underline',
    textDecorationColor: '#00000099',
    textDecorationStyle: 'solid',
  },
});
export default LoginNumberInput;

