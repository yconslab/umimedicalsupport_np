import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CustomHeader, HorizontalMarginWrapper } from "../../../commons";
import { NOTIFICATIONS } from "../../data/dummydata";

const data = [
  { id: 1, title: "", date: "" },
  {
    id: 2,
    title: "",
    date: "",
  },
  {
    id: 3,
    title: "",
    date: "",
  },
  {
    id: 4,
    title: "",
    date: "",
  },
];
const ListItem = ({ click, title, date }) => {
  return (
    <View style={{ ...styles.container }}>
      <TouchableOpacity style={styles.innnerContainer} onPress={click}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </TouchableOpacity>
    </View>
  );
};
const NotificationPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        title1="알림"
        click={() => {
          this.props.navigation.goBack();
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <HorizontalMarginWrapper
          style={{ backgroundColor: "#FFFFFF", flex: 1 }}
        >
          <FlatList
            data={NOTIFICATIONS}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <ListItem title={itemData.item.title} />}
          />
        </HorizontalMarginWrapper>
      </ScrollView>
    </View>
  );
};

NotificationPage.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  container: {
    height: Platform.OS === "ios" ? 100 : 110,
    width: "100%",
    borderBottomColor: "#00000014",
    borderBottomWidth: 1,
  },
  innnerContainer: {
    marginVertical: 32,
  },
});
export default NotificationPage;
