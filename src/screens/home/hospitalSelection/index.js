import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CustomButton, CustomHeader } from "../../../commons";
const data = [
  {
    id: 1,
    name: "연세 세브란스",
  },
  {
    id: 2,
    name: "연세 암병원",
  },
  {
    id: 3,
    name: "재활병원",
  },
  {
    id: 4,
    name: "연세 세브란스",
  },
  { id: 5, name: "연세 암병원" },
  {
    id: 6,
    name: "재활병원",
  },
];
const ListItem = ({ title, navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity style={styles.product}>
      <TouchableOpacity>
        <CheckBox
          leftText={title}
          leftTextStyle={
            isChecked === true
              ? {
                  color: "#4388F0",
                  fontSize: 16,
                  marginVertical: 20,
                  lineHeight: 19,
                }
              : {
                  color: "#404040",
                  fontSize: 16,
                  marginVertical: 20,
                  lineHeight: 19,
                }
          }
          checked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
            navigation.navigate("AppointmentPage");
          }}
          isChecked={isChecked}
          uncheckedCheckBoxColor="#FFFFFF"
          checkBoxColor="#4388F0"
          checkedImage={<Icon name="done" color="#4388F0" size={24} />}
          style={{ borderColor: "#FFFFFF", backgroundColor: "#FFFFFF" }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const HospitalSelection = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        headerText="방문할 병원을 선택해주세요."
        navigation={navigation}
        header
        showHeaderText
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            style={{ marginTop: 16, backgroundColor: "#FFFFFF" }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <ListItem title={itemData.item.name} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonStyle}>
        <CustomButton
          title="다음"
          onPress={() => navigation.navigate("VerificationCodeScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  product: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D1",
    height: "auto",
  },
  title: {
    fontSize: 18,
    marginVertical: 15,
  },
  buttonStyle: {
    margin: 20,
  },
});
export default HospitalSelection;
