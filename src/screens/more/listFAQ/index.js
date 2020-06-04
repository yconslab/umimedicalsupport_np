import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { CustomHeader } from "../../../commons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
//data
const data = [
  { id: 1, title: "로그인이 되지 않아요" },
  { id: 1, title: "질문1" },
  { id: 1, title: "질문2" }
];

//reusable components
const ListBox = ({ title, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate("FAQContents");
      }}
    >
      <Text style={styles.titleText}>{title}</Text>
      <Icon
        name="keyboard-arrow-right"
        size={26}
        color="#00000066"
        onPress={() => {
          navigation.navigate("FAQContents");
        }}
      />
    </TouchableOpacity>
  );
};

//main component
const FAQList = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomHeader
        headerText="무엇을 도와드릴까요?"
        cross
        navigation={navigation}
      />
      <View style={{ flexGrow: 1 }}>
        <View style={styles.listWrap}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
              <ListBox title={itemData.item.title} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default FAQList;
