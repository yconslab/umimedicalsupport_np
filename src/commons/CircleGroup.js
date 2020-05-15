import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const CircleGroup = ({
  main,
  first,
  common,
  second,
  third,
  fourth,
  firstclick,
  secondclick,
  thirdclick,
  fourthclick,
}) => {
  return (
    <View style={{...styles.wrapper, ...main}}>
      <TouchableOpacity
        style={{...styles.circle, ...first, ...common}}
        onPress={firstclick}
      />
      <TouchableOpacity
        style={{...styles.circle, ...second, ...common}}
        onPress={secondclick}
      />
      <TouchableOpacity
        style={{...styles.circle, ...third, ...common}}
        onPress={thirdclick}
      />
      <TouchableOpacity
        style={{...styles.circle, ...fourth, ...common}}
        onPress={fourthclick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  circle: {
    height: 7,
    width: 7,
    borderRadius: 3.5,
  },
});

export default CircleGroup;
