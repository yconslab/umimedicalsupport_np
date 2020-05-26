import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { CustomHeader, CustomButton, TextInput } from "../../../commons";
import Images from "../../../images";
import Colors from "../../../constants";
const { height, width } = Dimensions.get("window");

//reusable component
const CoperativeBoxContainer = ({ children, bg, innerStyle }) => (
  <View
    // onPress={props.onPress}
    style={[
      styles.container,
      bg ? { backgroundColor: bg } : { backgroundColor: "white" },
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
    exp: "주문 하기",
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
  disabled,
}) => {
  return (
    <TouchableOpacity style={{ marginVertical: 5 }} onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 10,
              paddingBottom: 5,
              lineHeight: 12,
              color: "#666666",
            }}
          >
            {name}
          </Text>
          <Text style={{ fontSize: 20, paddingBottom: 5 }}>{amount}</Text>
          <Text
            style={{
              fontSize: 10,
              paddingBottom: 5,
              lineHeight: 12,
              color: "#666666",
            }}
          >
            {time}
          </Text>
        </View>
        <View>
          <Image source={Images.dotted} style={{ height: 94, width: 1 }} />
        </View>
        <View style={{ width: 40 }}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 19,
              fontWeight: "bold",
              color: Colors.activeBlueColor,
            }}
          >
            {exp}
          </Text>
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
        headerText="사용할 쿠폰을 선택해주세요"
        navigation={navigation}
      />
      <View
        style={{
          margin: 20,
        }}
      >
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
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {dataList.map((i) => {
            return (
              <View key={i.id} style={{ marginHorizontal: 20 }}>
                <CoperativeBoxContainer innerStyle={{ marginVertical: 10 }}>
                  <DisplayBoxInnerContent
                    name={i.name}
                    exp={i.exp}
                    amount={i.amount}
                    time={i.time}
                  />
                </CoperativeBoxContainer>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 1 / 2,
              // backgroundColor: 'yellow',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={Images.couponBanner}
              style={{ width: 243, height: 195 }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
});

export default CouponSelectionScreen;
