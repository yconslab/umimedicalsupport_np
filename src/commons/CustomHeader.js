import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import HeaderWrapper from './HeaderWrapper';
import HorizontalMarginWrapper from './HorizontalMargin';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CustomHeader = ({
  style,
  backHidden,
  click,
  justifyStyle,
  clicktitle1,
  title1style,
  title1,
  clicktitle2,
  title2style,
  title2,
  title3style,
  title3,
}) => {
  return (
    <SafeAreaView>
      <HeaderWrapper
        style={{
          ...styles.verticalmargin,
          ...style,
        }}>
        <HorizontalMarginWrapper>
          <View style={styles.headerBox}>
            {backHidden ? null : (
              <Icon
                name="arrow-back"
                color="#404040"
                size={30}
                onPress={click}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              ...justifyStyle,
            }}>
            <View>
              <TouchableOpacity onPress={clicktitle1}>
                <Text
                  style={{
                    ...styles.title,
                    ...title1style,
                  }}>
                  {title1}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.title,
                  ...title3style,
                }}>
                {title3}
              </Text>
            </View>

            <TouchableOpacity onPress={clicktitle2}>
              <Text
                style={{
                  ...styles.title,
                  ...title2style,
                }}>
                {title2}
              </Text>
            </TouchableOpacity>
          </View>
        </HorizontalMarginWrapper>
      </HeaderWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  verticalmargin: {
    marginBottom: 20,
  },
  headerBox: {
    marginTop: '5%',
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    color: Colors.headerBlack,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
