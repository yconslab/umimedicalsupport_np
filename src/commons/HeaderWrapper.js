import React from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';

const HeaderWrapper = ({style, children}) => {
  return (
    <View style={{...styles.wrapper, ...style}}>
      <StatusBar
        barStyle="dark-content"
        style={{height: '5%'}}
        backgroundColor="#FFFFFF"
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Platform.OS === 'ios' ? '10%' : '13%',
    width: '100%',
  },
});

export default HeaderWrapper;
