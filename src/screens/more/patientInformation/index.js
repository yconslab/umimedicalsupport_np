import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import Images from "../../../images";
import styles from "./style";
//data
const data = [
  {
    id: 1,
    title: "윤정택",
    contactNumber: "01045844821",
    navigationTitle: "EnterPatientInformation"
  },
  {
    id: 2,
    title: "박춘자",
    contactNumber: "01012938287",
    navigationTitle: "EnterPatientInformation"
  }
];

//reusable component
const ListBox = ({ title, contactNumber, navigation, navigationTitle }) => {
  return (
    <TouchableOpacity
      style={styles.listBox}
      onPress={() => navigation.navigate(navigationTitle)}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.contactNumber}>{contactNumber}</Text>
    </TouchableOpacity>
  );
};
//maincomponent
const PatientInformation = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="환자 정보"
        showHeaderText
        navigation={navigation}
      />
      <View style={{ flexGrow: 1 }}>
        <View style={styles.listWrapper}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
              <ListBox
                title={itemData.item.title}
                navigation={navigation}
                navigationTitle={itemData.item.navigationTitle}
                contactNumber={itemData.item.contactNumber}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.buttonWrap}>
        <CustomButton
          title="새 환자 등록"
          innerStyle={styles.innerStyle}
          innerTextStyle={styles.innerTextStyle}
          onPress={() => navigation.navigate("EnterPatientInformation")}
        />
      </View>
    </View>
  );
};
export default PatientInformation;
