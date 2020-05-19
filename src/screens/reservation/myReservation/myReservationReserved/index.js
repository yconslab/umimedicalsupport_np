import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { CustomButton } from "../../../../commons";
import Colors from "../../../../constants";

const MyReservationReserved = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.info}>예약된 서비스가 없습니다.</Text>
        <Text style={styles.info}> 지금 예약해보세요!</Text>
      </View>
      <View style={{ margin: 20 }}>
        <CustomButton title="예약하기" />
      </View>
    </View>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: Colors.appColor,
    //       ...styles.main,
    //       height: '100%',
    //     }}>
    //     <StatusBar backgroundColor="#FFFFFF" />

    //     <HorizontalMargin>
    //       <HorizontalMargin>
    //         <View style={{alignSelf: 'center', marginBottom: 16}}>
    //           <Text style={styles.titleText}>예약된 서비스가 없습니다. </Text>
    //           <Text style={styles.titleText}>지금 예약해보세요!</Text>
    //         </View>
    //       </HorizontalMargin>
    //     </HorizontalMargin>
    //     <View style={{marginHorizontal: 20}}>
    //       <NormalButton
    //         style={{
    //           height: Platform.OS === 'ios' ? 50 : 50,
    //           width: '100%',
    //           borderRadius: 4,
    //         }}
    //         buttontext="예약하기"
    //         textStyle={{fontSize: 17, lineHeight: 20}}
    //         click={() => {
    //           this.props.navigation.navigate('HospitalSelection');
    //         }}
    //       />
    //     </View>
    //   </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: "center",
  },
  textWrap: {
    alignItems: "center",
  },
  info: {
    fontSize: 19,
    lineHeight: 29,
    color: Colors.activeBlueColor,
  },
});
export default MyReservationReserved;
