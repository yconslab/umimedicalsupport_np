import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {CustomHeader, CustomButton, NormalInput} from '../../commons';
const NameInput = ({navigation}) => {
  const [input, setInput] = useState('');
  const [inputstate, setInputState] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader
          title1="실명을 입력해주세요."
          click={() => {
            navigation.goBack();
          }}
        />
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <NormalInput
            label="이름"
            placeholder="실명"
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
        </View>
      </ScrollView>

      <View style={{margin: 20}}>
        <CustomButton
          style={{
            height: Platform.OS === 'ios' ? 50 : 50,
            width: '100%',
            borderRadius: 4,
            backgroundColor: inputstate && input > 4 ? '#4388F0' : '#EBEBEB',
          }}
          buttontext="다음"
          textStyle={{
            fontSize: 17,
            lineHeight: 20,
            color: inputstate && input > 4 ? '#FFFFFF' : '#0000004D',
            fontWeight: 'bold',
          }}
          click={() => {
            navigation.navigate('AgreementPage');
          }}
          disabled={!inputstate}
        />
      </View>
    </SafeAreaView>
  );
};

NameInput.navigationOptions = navData => {
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
});
export default NameInput;
