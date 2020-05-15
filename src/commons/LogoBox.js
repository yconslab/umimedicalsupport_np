import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const LogoBox = ({style, logoStyle, logoTextStyle, LogoUrl, LogoTextUrl}) => {
  return (
    <View style={{...styles.box, ...style}}>
      <View style={{...styles.imagebox, ...logoStyle}}>
        <Image
          source={LogoUrl}
          style={{height: '100%', width: '100%', overflow: 'hidden'}}
        />
      </View>
      <View style={{...styles.logobox, ...logoTextStyle}}>
        <Image
          source={LogoTextUrl}
          style={{height: '100%', width: '100%', overflow: 'hidden'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagebox: {
    height: 96,
    width: 125,
    marginBottom: 20,
  },
  logobox: {
    height: 23,
    width: 76,
    marginBottom: 20,
  },
});

export default LogoBox;
