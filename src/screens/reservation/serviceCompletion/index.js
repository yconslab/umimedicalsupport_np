import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import { Rating, AirbnbRating, Input } from "react-native-elements";
import styles from "./style";
const TextBox = ({ title1, title2, title1Style, title2Style }) => {
  return (
    <View style={styles.textBoxWrap}>
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

      <View style={styles.headerText}>
        <Text>고객님은 안전하게 귀가하고 있습니다.</Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.ratingWrap}>
          <Rating
            onFinishRating={this.ratingCompleted}
            style={styles.paddingStyle}
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
        <View style={styles.marginBox}>
          <TextBox title1="결제 예정내역" />
          <TextBox title1="총 결제금액" title2="24,800원" />
        </View>

        <View style={styles.marginBox}>
          <NormalText text="우미 파트너와 매칭되면 결제가 진행됩니다." />
          <NormalText text="서비스 시간이 2시간 초과 시 10분당 2,000원의 비용이 부과됩니다." />
          <NormalText
            text="서비스 요금 정책안내"
            textStyle={styles.underlineTextStyle}
          />
          <NormalText
            text="서비스 전날 6시 이후부터는 30%"
            textStyle={styles.textStyle}
          />
          <NormalText
            text="서비스 당일에는 100%의 취소 수수료가 발생합니다."
            textStyle={styles.textStyle}
          />
        </View>
      </ScrollView>
      <View style={styles.marginBox}>
        <CustomButton
          title="결제 진행하기"
          onPress={() => {
            navigation.navigate("PaymentCompletion");
          }}
        />
      </View>
    </View>
  );
};

export default ServiceCompletion;
