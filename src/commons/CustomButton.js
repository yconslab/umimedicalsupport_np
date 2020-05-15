import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = ({style, click, disabled, textStyle, buttontext}) => {
  return (
    <TouchableOpacity
      style={{...styles.btn, ...style}}
      onPress={click}
      disabled={disabled}>
      <Text style={{...styles.btnText, ...textStyle}}>{buttontext}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.buttonBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: Colors.btntextWhite,
  },
  bottombtn: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    width: '70%',
    marginHorizontal: '15%',
  },
});

export default CustomButton;
