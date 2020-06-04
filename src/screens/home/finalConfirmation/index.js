import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import CrossIcon from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";

import { Scale } from "../../../helper/HelperFunction";
import { CustomButton, CustomHeader, Divider } from "../../../commons";
import Colors from "../../../constants/Colors";

export const FinalConfirmation = ({ navigation, onPressHandleCloseModal }) => {
  const VisitorInformationValue = useSelector(
    state => state.VisitorInformation
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.firstContainerStyle}>
          <TouchableOpacity
            onPress={onPressHandleCloseModal}
            style={styles.crossIconStyle}
          >
            <CrossIcon name="cross" size={Scale(30)} />
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <Text>예약내용을 확인하신 후 확정해주세요.</Text>
            <View style={styles.inLineStyle}>
              <Text style={styles.questionKeyStyle}>방문병원</Text>
              <Text style={styles.keyValueStyle}>세브란스병원</Text>
            </View>
            <Divider />
            <View style={styles.inLineStyle}>
              <Text style={styles.questionKeyStyle}>방문자</Text>
              <Text style={styles.keyValueStyle}>
                {VisitorInformationValue.name || ""}
              </Text>
            </View>
            <Divider />
            <View style={styles.inLineStyle}>
              <Text style={styles.questionKeyStyle}>방문자 연락처</Text>
              <Text style={styles.keyValueStyle}>
                {VisitorInformationValue.phoneNumber || ""}
              </Text>
            </View>
            <Divider />
            <View style={styles.inLineStyle}>
              <Text style={styles.questionKeyStyle}>방문날짜</Text>
              <Text style={styles.keyValueStyle}>2020.01.15</Text>
            </View>
            <Divider />
            <View style={styles.inLineStyle}>
              <Text style={styles.questionKeyStyle}>방문시간</Text>
              <Text style={styles.keyValueStyle}>10:00</Text>
            </View>
            <Divider />
            <View style={styles.textInputWrapper}>
              <Text style={{ marginVertical: 10 }}>특이사항</Text>
              <TextInput
                style={styles.textInputStyle}
                //   onChangeText={val => setTextInput(val)}
                //   value={textInput}
                multiline={true}
                maxLength={100}
                placeholder="어머니께서 귀가 어두우십니다. 친절하게 안내 부탁드립니다."
              />
            </View>

            <View style={styles.noticeStyle}>
              <Text style={styles.noticeHeadingStyle}>유의사항(필수확인)</Text>
              <Text style={styles.noticetextStyle}>
                * 무엇무엇은 불가합니다.
              </Text>
              <Text style={styles.noticetextStyle}>
                * 무엇무엇을 요청할 시 서비스를 거부할 수 있습니다.{" "}
              </Text>
              <Text style={styles.noticetextStyle}>
                * 무엇무엇을 준비해주시기 바랍니다.
              </Text>
            </View>
            <View style={styles.benefitWrapper}>
              <Text style={styles.benefitsHeadingStyle}>혜택적용</Text>
              <View style={styles.benefitsStyle}>
                <Text style={styles.benefitKeyStyle}>혜택적용</Text>
                <TouchableOpacity>
                  <Text style={styles.navigationStyle}>추가</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.secondContainerStyle}>
          <Text style={styles.benefitKeyStyle}>결제수단</Text>
          <View
            style={[
              styles.benefitsStyle,
              {
                alignItems: "center",
                marginVertical: Scale(10)
              }
            ]}
          >
            <Text
              style={[styles.benefitKeyStyle, { marginVertical: Scale(10) }]}
            >
              우리카드 1942
            </Text>
            <TouchableOpacity>
              <Text style={styles.navigationStyle}>변경</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.redColorStyle}>
            기본결재수단은 필수로 등록해야 합니다.
          </Text>
        </View>
        <View style={styles.lastContainerWrapper}>
          <Text>결제 예정내역</Text>
          <View
            style={[
              styles.benefitsStyle,
              {
                alignItems: "center",
                marginVertical: Scale(10)
              }
            ]}
          >
            <Text>결제 예정내역</Text>
            <Text>결제 예정내역</Text>
          </View>
          <Text style={styles.chargeStyle}>
            우미 파트너와 매칭되면 결제가 진행됩니다.
          </Text>
          <Text style={styles.chargeStyle}>
            서비스 시간이 2시간 초과 시 10분당 2,000원의 비용이 부과됩니다.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ServiceInformation")}
          >
            <Text style={styles.serviceFeePolic}>서비스 요금 정책안내</Text>
          </TouchableOpacity>
          <Text style={styles.lastFooterTextStyle}>
            서비스 전날 6시 이후부터는 30%
          </Text>
          <Text style={styles.lastFooterTextStyle}>
            서비스 당일에는 100%의 취소 수수료가 발생합니다.
          </Text>
          <View style={styles.footerPosition}>
            <CustomButton
              title="예약 확정하기"
              onPress={() => navigation.navigate("ReservationComplete")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  crossIconStyle: {
    marginHorizontal: Scale(20)
  },
  footerPosition: {
    marginVertical: Scale(10)
  },

  lastFooterTextStyle: {
    color: "#4040406A"
  },
  serviceFeePolic: {
    color: Colors.activeColor,
    textDecorationLine: "underline",
    marginVertical: Scale(10)
  },
  chargeStyle: {
    fontSize: Scale(11),
    color: "#404040"
  },
  lastContainerWrapper: {
    backgroundColor: Colors.appColor,
    paddingVertical: Scale(20),
    paddingHorizontal: Scale(20)
  },
  redColorStyle: {
    fontSize: Scale(11),
    color: "#FF0000",
    fontWeight: "600"
  },
  secondContainerStyle: {
    backgroundColor: Colors.appColor,
    marginVertical: Scale(20),
    paddingVertical: Scale(20),
    paddingHorizontal: Scale(20)
  },
  navigationStyle: {
    color: Colors.activeColor,
    fontSize: Scale(16)
  },
  benefitWrapper: {
    marginVertical: Scale(20)
  },
  benefitKeyStyle: {
    fontSize: Scale(16),
    color: "#404040"
  },
  benefitsHeadingStyle: {
    fontSize: Scale(17),
    color: "#404040",
    fontWeight: "600",
    marginVertical: Scale(5)
  },
  benefitsStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wrapper: {
    flex: 1
  },
  firstContainerStyle: {
    backgroundColor: Colors.appColor
  },
  innerContainer: {
    marginHorizontal: Scale(20)
  },
  inLineStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Scale(20)
  },
  questionKeyStyle: {
    fontSize: Scale(16)
  },
  keyValueStyle: {
    fontSize: Scale(16),
    color: Colors.activeColor
  },
  textInputStyle: {
    height: 100,
    borderColor: Colors.bannerTextColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: Scale(20)
  },
  textInputWrapper: {
    marginVertical: Scale(20)
  },
  noticeStyle: {
    marginBottom: Scale(10)
  },
  noticetextStyle: {
    fontSize: Scale(11),
    color: "#404040",
    marginBottom: 2
  },
  noticeHeadingStyle: {
    color: "#FF0000",
    fontWeight: "600",
    marginBottom: 10
  }
});
