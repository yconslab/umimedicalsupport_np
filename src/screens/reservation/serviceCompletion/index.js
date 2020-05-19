import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../constants";
import Images from "../../../images";
import { CustomHeader, CustomButton } from "../../../commons";
import { Rating, AirbnbRating, Input } from "react-native-elements";
const TextBox = ({ title1, title2, title1Style, title2Style }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 10,
      }}
    >
      <Text style={{ ...styles.title1, ...title1Style }}>{title1}</Text>
      <Text style={{ ...styles.title2, ...title2Style }}>{title2}</Text>
    </View>
  );
};

const NormalText = ({ text, textStyle }) => {
  return <Text style={{ ...styles.normalText, ...textStyle }}>{text}</Text>;
};
const ServiceCompletion = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="서비스가 완료되었습니다."
        navigation={navigation}
        header
        showHeaderText
      />
      <View style={{ margin: 15 }}>
        <Text>고객님은 안전하게 귀가하고 있습니다.</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.ratingWrap}>
          <Rating
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
            imageSize={28}
          />
        </View>

        <View style={styles.textArea}>
          <Input
            multiline
            numberOfLines={6}
            inputContainerStyle={styles.input}
            selectionColor="black"
            maxLength={200}
          />
        </View>
        <View style={{ margin: 20 }}>
          <TextBox title1="결제 예정내역" />
          <TextBox title1="총 결제금액" title2="24,800원" />
        </View>

        <View style={{ margin: 20 }}>
          <NormalText text="우미 파트너와 매칭되면 결제가 진행됩니다." />
          <NormalText text="서비스 시간이 2시간 초과 시 10분당 2,000원의 비용이 부과됩니다." />
          <NormalText
            text="서비스 요금 정책안내"
            textStyle={{ color: "#4086F0", textDecorationLine: "underline" }}
          />
          <NormalText
            text="서비스 전날 6시 이후부터는 30%"
            textStyle={{ color: "#4040406A" }}
          />
          <NormalText
            text="서비스 당일에는 100%의 취소 수수료가 발생합니다."
            textStyle={{ color: "#4040406A" }}
          />
        </View>
      </ScrollView>
      <View style={{ margin: 20 }}>
        <CustomButton
          title="결제 진행하기"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: Colors.appColor,
  },
  ratingWrap: {
    alignItems: "center",
    marginTop: 20,
  },

  ratingIcon: {
    height: 33,
    width: 33,
  },
  textArea: {
    height: 167,

    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#EDEDED",
    margin: 20,
  },
  input: {
    borderBottomColor: "#F9F9F9",
  },
  title1: {
    fontSize: 17,
    lineHeight: 26,
    color: "#393939",
  },
  title2: {
    fontSize: 24,
    lineHeight: 29,
    color: "#000000",
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#404040",
  },
});
export default ServiceCompletion;
