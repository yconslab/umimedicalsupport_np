import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { CustomButton, CustomHeader } from "../../../commons";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";

const servicesIncludedList = [
  { id: 1, title: "진료실 안내 서비스 같은" },
  { id: 2, title: "할수있는 서비스1" },
  { id: 3, title: "할수있는 서비스2" },
  { id: 4, title: "할수있는 서비스3" },
  { id: 5, title: "할수있는 서비스" }
];
const serviceNotListed = [
  { id: 1, title: "간병 서비스 같은" },
  { id: 2, title: "어려운 서비스1" },
  { id: 3, title: "어려운 서비스2" },
  { id: 4, title: "어려운 서비스3" },
  { id: 5, title: "어려운 서비스" }
];

const ServiceListComponent = ({ title }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "#393939", marginTop: Scale(2) }}>* {title}</Text>
    </View>
  );
};
const componentName = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("서비스 요금");

  return (
    <View style={styles.wrapper}>
      <CustomHeader headerText="우미 서비스 안내" navigation={navigation} />
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          style={[
            styles.tabStyle,
            selectedTab === "서비스 요금" && { ...styles.selectedTabColor }
          ]}
          onPress={() => setSelectedTab("서비스 요금")}
        >
          <Text
            style={[
              selectedTab === "서비스 요금" && { color: Colors.activeColor }
            ]}
          >
            서비스 요금
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabStyle,
            { marginLeft: Scale(5) },
            selectedTab === "서비스 범위" && { ...styles.selectedTabColor }
          ]}
          onPress={() => setSelectedTab("서비스 범위")}
        >
          <Text
            style={[
              selectedTab === "서비스 범위" && { color: Colors.activeColor }
            ]}
          >
            서비스 범위
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>포함 서비스</Text>
        {servicesIncludedList.map(i => (
          <ServiceListComponent title={i.title} key={i.id} />
        ))}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>미포함 서비스</Text>
        {serviceNotListed.map(i => (
          <ServiceListComponent title={i.title} key={i.id} />
        ))}
      </View>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor
  },
  tabWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: Scale(20)
  },
  tabStyle: {
    borderColor: Colors.bannerTextColor,
    borderWidth: 1,
    paddingHorizontal: Scale(45),
    paddingVertical: Scale(15),
    borderRadius: Scale(5)
  },
  selectedTabColor: {
    borderColor: Colors.activeColor
  },
  contentContainer: {
    marginHorizontal: Scale(20),
    marginVertical: Scale(10)
  },
  titleStyle: {
    color: "#393939",
    fontWeight: "bold",
    marginBottom: Scale(5)
  }
});
