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
  SafeAreaView
} from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
// import RoundCheckBox from "../../components/Global/RoundCheckBox";
// import NormalInput from "../../components/Global/NormalInput";
class VisitorNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      hasInput: false,
      name: ""
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CustomHeader
            title1="방문자의 이름을 입력하세요."
            click={() => {
              this.props.navigation.goBack();
            }}
          />
          <View style={{ marginHorizontal: 20, marginVertical: 40 }}>
            {/* <NormalInput
              label="방문자 이름"
              placeholder="실명을 입력해주세요."
              labelStyle={{ color: "#000000", opacity: 0.4 }}
              changeText={value =>
                this.setState({
                  name: value,
                  hasInput: this.state.name.length > 0
                })
              }
              value={this.state.name}
            /> */}

            {/* <View style={{ flexDirection: "row" }}>
              <RoundCheckBox
                title="대리 접수입니다."
                style={{ width: "50%" }}
              />
              <RoundCheckBox title="본인입니다." style={{ width: "50%" }} />
            </View> */}
          </View>
        </ScrollView>
        <View style={{ margin: 20 }}>
          <CustomButton
            style={{
              height: Platform.OS === "ios" ? 50 : 50,
              width: "100%",
              borderRadius: 4,
              backgroundColor:
                this.state.hasInput && this.state.name ? "#4388F0" : "#EBEBEB"
            }}
            buttontext="다음"
            textStyle={{
              fontSize: 17,
              lineHeight: 20,
              color:
                this.state.hasInput && this.state.name
                  ? "#FFFFFF"
                  : "#0000004D",
              fontWeight: "bold"
            }}
            click={() => {
              this.props.navigation.navigate("VisitorNumberInput");
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

VisitorNameInput.navigationOptions = navData => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey"
  },
  firstbox: {
    height: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#00000014",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  lastBox: {
    height: 56,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  value: {
    color: "#0000004D"
  },
  helpText: {
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "black"
  }
});
export default VisitorNameInput;
