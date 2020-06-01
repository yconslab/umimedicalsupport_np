import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import styles from "./style";

//reusable component
const Card = ({ cardStyle, navigation }) => {
  return (
    <TouchableOpacity style={{ ...styles.card, ...cardStyle }}>
      <View style={styles.cardInnerWrap}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View style={styles.cardLogoWrap}>
            {/* <Image
                source={Images.cardLogo}
                style={{height: '100%', width: '100%'}}
              /> */}
          </View>
        </View>

        <View style={styles.cardChipWrap}>
          <Image source={Images.cardChip} style={styles.cardChip} />
        </View>
        <View style={styles.cardNumberWrap}>
          <Text style={styles.cardNumber}>5570</Text>

          <Text style={styles.cardNumber}>42**</Text>

          <Text style={styles.cardNumber}>****</Text>

          <Text style={styles.cardNumber}>****</Text>
        </View>

        <View style={styles.cardTextWrap}>
          <Text style={styles.cardText}>노리체크신한</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//maincomponent
const PayementCard = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="카드 관리"
        sideText="카드추가"
        navigation={navigation}
        sideNavigation="CardRegistration"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.marginVertical_40}
      >
        <ScrollView horizontal>
          <Card navigation={navigation} />
          <Card cardStyle={styles.cardColor} navigation={navigation} />
        </ScrollView>
      </ScrollView>
      <View style={styles.buttonWrap}>
        <CustomButton
          title="결제카드로 설정하기"
          innerStyle={styles.innerStyle}
          innerTextStyle={styles.innerTextStyle}
        />
      </View>
    </View>
  );
};
export default PayementCard;
