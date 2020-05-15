import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Input } from "react-native-elements";
// import Images from '../images';
const InputBox = ({ label, disabled, changeText, value, click }) => {
  return (
    <Input
      keyboardType="number-pad"
      label={label}
      labelStyle={styles.label}
      placeholder="0000-0000"
      inputStyle={styles.inputText}
      containerStyle={styles.container}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      disabled={disabled}
      onChangeText={changeText}
      value={value}
      leftIcon={
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            //   backgroundColor: 'yellow',
            width: 90
          }}
          onPress={click}
        >
          {/* <Icon
                        name='phone'
                        size={28}
                        color='black'
                        style={{ marginRight: 5 }}
                    /> */}
          <View style={{ justifyContent: "center" }}>
            {/* <Image
              source={Images.callIcon}
              style={{
                height: 20,
                width: 22,
                tintColor: 'black',
              }}
            /> */}
          </View>

          <Text style={styles.inputText}>010-</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    lineHeight: 16
  },
  inputarea: {
    height: 48,
    width: "100%",
    borderBottomColor: "#4388F0",
    borderBottomWidth: 1,
    borderStyle: "dashed"
  },
  inputText: {
    fontSize: 28,
    lineHeight: 33
  },
  label: {
    fontSize: 13,
    lineHeight: 16,
    color: "#000000",
    opacity: 0.4
  },
  container: {
    borderBottomColor: "#4388F0",
    borderBottomWidth: 1
  }
});

export default InputBox;
