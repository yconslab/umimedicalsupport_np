import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import Images from "../../../images";
import styles from "./style";

//reusable component
const CouponBox = ({ children, bg, innerStyle }) => (
  <View
    // onPress={props.onPress}
    style={[
      styles.container,
      bg ? { backgroundColor: bg } : styles.couponActive,
      { ...styles.container, ...innerStyle },
    ]}
  >
    {children}
  </View>
);

//data
const dataList = [
  {
    id: 1,
    name: "가입기념 지급 쿠폰",
    time: "유효기간: 2019.07.01~2019.08.01",
    exp: "예약 하기",
    amount: "3,000원  ",
    amountSub: "할인",
    disabled: false,
  },
  {
    id: 1,
    name: "가입기념 지급 쿠폰",
    time: "유효기간: 2019.07.01~2019.08.01",
    exp: "기간 만료",
    amount: "3,000원  ",
    amountSub: "할인",
    disabled: true,
  },
];

const DisplayBoxInnerContent = ({
  amount,
  name,
  time,
  exp,
  onPress,
  amountSub,
  disabled,
}) => {
  return (
    <TouchableOpacity style={styles.boxMargin} onPress={onPress}>
      <View style={styles.boxWrap}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.amountWrap}>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.amountSub}>{amountSub}</Text>
          </View>

          <Text style={styles.time}>{time}</Text>
        </View>
        <View>
          <Image source={Images.dotted} style={styles.dottedLine} />
        </View>
        <View style={styles.sideWrap}>
          <Text style={styles.sideText}>{exp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const CouponSelectionScreen = ({ navigation }) => {
  const [hasCoupon, setHasCoupon] = useState(false);
  const [input, setInput] = useState("");
  const [inputState, setInputState] = useState(false);
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="사용할 쿠폰을 선택해주세요."
        navigation={navigation}
      />
      <View style={styles.margin_20}>
        <TextInput
          placeholderText="쿠폰코드를 입력하세요."
          title="쿠폰코드"
          changeText={(value) => {
            setInput(value);
            // console.log(value, inputState);
            if (value.length > 4) {
              setInputState(true);
            } else {
              setInputState(false);
            }
          }}
          value={input}
          handleOnPress={() => this.handlePress(navigation)}
          clearButtonMode="while-editing"
          navigation={navigation}
          maxLength={16}
        />

        <CustomButton
          title="등록하기"
          onPress={() => setHasCoupon(true)}
          innerStyle={
            inputState === true && input.length > 4
              ? styles.innerStyle1
              : styles.innerStyle2
          }
          innerTextStyle={
            inputState === true && input.length > 4
              ? styles.innerTextStyle1
              : styles.innerTextStyle2
          }
          disabled={inputState === false && input.length <= 4}

          // disabled
        />
      </View>
      {hasCoupon ? (
        <ScrollView contentContainerStyle={styles.paddingVertical_20}>
          {dataList.map((i) => {
            return (
              <View key={i.id} style={styles.marginHorizontal_20}>
                {i.disabled ? (
                  <CouponBox innerStyle={styles.marginVertical_10} bg="#EBEBEB">
                    <DisplayBoxInnerContent
                      name={i.name}
                      exp={i.exp}
                      amount={i.amount}
                      time={i.time}
                      amountSub={i.amountSub}
                    />
                  </CouponBox>
                ) : (
                  <CouponBox innerStyle={styles.marginVertical_10}>
                    <DisplayBoxInnerContent
                      name={i.name}
                      exp={i.exp}
                      amount={i.amount}
                      time={i.time}
                      amountSub={i.amountSub}
                    />
                  </CouponBox>
                )}
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.paddingVertical_20}>
          <View style={styles.imageWrapper}>
            <Image source={Images.couponBanner} style={styles.bannerImage} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CouponSelectionScreen;
