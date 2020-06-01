import React from "react";
import { View, Text, Alert } from "react-native";
import { CustomButton } from "../../../commons";
import styles from "./style";

const AuthorizationPage = ({ navigation }) => {
  const buttonHandler = () => {
    Alert.alert(
      " 이 장치에 대한 UMI",

      " 위치 정보에 액세스하여 허용 하시겠습니까?",
      [
        {
          text: " 받지 않다",
          onPress: () => navigation.navigate("MainBottomTab"),
          style: "cancel",
        },
        {
          text: " 허용하다",
          onPress: () => navigation.navigate("MainBottomTab"),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.backgroundContent}>
      <View style={styles.modalBox}>
        <View style={styles.contentWrapper}>
          <View style={styles.firstBox}>
            <Text style={styles.firstText}>편리한 이용을 위해 </Text>
            <Text style={styles.firstText}>권한허용이 꼭 필요합니다.</Text>
          </View>

          <View style={styles.midLine} />

          <View style={styles.secondContent}>
            <View style={styles.notificationBox}>
              <Text style={styles.notificationtext}>알림 허용</Text>
            </View>

            <Text style={styles.normalText}>
              우미가 보내는 알림을 확인하는데에 필요해요.
            </Text>
          </View>

          <View style={styles.thirdContent}>
            <View style={styles.locationBox}>
              <Text style={styles.locationText}>위치정보 허용</Text>
            </View>

            <Text style={styles.normalText}>
              우미가 보내는 알림을 확인하는데에 필요해요.
            </Text>
          </View>
        </View>

        <CustomButton
          innerStyle={styles.btn}
          title="네, 동의해요"
          innerTextStyle={styles.innerTextStyle}
          onPress={buttonHandler}
        />
      </View>
    </View>
  );
};

export default AuthorizationPage;
