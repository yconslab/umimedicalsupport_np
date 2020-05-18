import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import HorizontalMarginWrapper from "../../components/Global/HorizontalMargin";
import CustomHeader from "../../components/Global/CustomHeader";
import CustomButton from "../../components/UI/CustomButton";

class ServiceGuide1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <CustomHeader
          title1="환자 정보"
          click={() => {
            this.props.navigation.goBack();
          }}
        />

        <HorizontalMarginWrapper style={{ backgroundColor: "#FFFFFF" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 20,
            }}
          >
            <CustomButton
              style={{
                height: Platform.OS === "ios" ? 35 : 35,
                width: "48%",
                borderRadius: 4,
                backgroundColor: "#FFFFFF",
                borderColor: "#4086F0",
                borderWidth: 1,
              }}
              buttontext="서비스 요금"
              textStyle={{ fontSize: 14, lineHeight: 17, color: "#4086F0" }}
              click={() => {
                this.props.navigation.navigate("ServiceGuide1");
              }}
            />
            <CustomButton
              style={{
                height: Platform.OS === "ios" ? 35 : 35,
                width: "48%",
                borderRadius: 4,
                backgroundColor: "#FFFFFF",
                borderColor: "#000000",
                borderWidth: 1,
              }}
              buttontext="서비스 요금"
              textStyle={{ fontSize: 14, lineHeight: 17, color: "#000000" }}
              click={() => {
                this.props.navigation.navigate("ServiceGuide2");
              }}
            />
          </View>
          <ScrollView style={{ height: "auto" }}>
            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <Text style={styles.commontxt}>포함 서비스</Text>
              <View style={styles.ruleBox}>
                <Text style={styles.commontxt}>* 진료실 안내 서비스 같은 </Text>
                <Text style={styles.commontxt}>* 할수있는 서비스1 </Text>
                <Text style={styles.commontxt}>* 할수있는 서비스2</Text>
                <Text style={styles.commontxt}>* 할수있는 서비스</Text>
                <Text style={styles.commontxt}>* 할수있는 서비스3</Text>
              </View>
            </View>
            <View>
              <Text style={styles.commontxt}>포함 서비스</Text>
              <View style={styles.ruleBox}>
                <Text style={styles.commontxt}>* 진료실 안내 서비스 같은 </Text>
                <Text style={styles.commontxt}>* 할수있는 서비스1 </Text>
                <Text style={styles.commontxt}>* 할수있는 서비스2</Text>
                <Text style={styles.commontxt}>* 할수있는 서비스</Text>
                <Text style={styles.commontxt}> * 할수있는 서비스3</Text>
              </View>
            </View>
          </ScrollView>
        </HorizontalMarginWrapper>
      </View>
    );
  }
}

ServiceGuide1.navigationOptions = (navData) => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  ruleBox: {
    marginLeft: 10,
  },
  commontxt: {
    fontSize: 11,
    lineHeight: 17,
  },
});
export default ServiceGuide1;
