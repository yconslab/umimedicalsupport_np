import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../constants";

const InputField = ({
  numeric,
  footerText,
  placeholderText,
  leftIconDispay,
  title,
  handleOnPress,
  disabled,
  changeText,
  value,
  onSubmit,
  navigation,
  navigationFooter,
  clearButtonMode,
  onSubmitEditing,
  containerStyle,
  textStyle,
  externalStyle,
  externalBoxStyle,
  externalFontStyle,
}) => {
  return (
    <View style={(styles.InputFieldwrapper, { ...externalBoxStyle })}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Input
          selectionColor={Colors.activeBlueColor}
          placeholder={placeholderText}
          leftIcon={leftIconDispay}
          inputContainerStyle={{
            borderBottomColor: Colors.activeBlueColor,
            borderBottomWidth: 1,
            ...containerStyle,
            ...externalStyle,
          }}
          inputStyle={{ fontSize: 28, lineHeight: 33, ...textStyle }}
          // inputStyle={{fontSize: 28, lineHeight: 33, ...externalFontStyle}}
          disabled={disabled}
          onChangeText={changeText}
          value={value}
          onSubmitEditing={onSubmit}
          keyboardType={numeric ? "number-pad" : "default"}
          leftIconContainerStyle={{ marginLeft: 0 }}
          clearButtonMode={clearButtonMode}
          onSubmitEditing={onSubmitEditing}
          underlineColorAndroid="transparent"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigationFooter && navigation.navigate("HelpScreenList")
        }
      >
        <Text style={styles.footerTextStyle}>{footerText || ""}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  InputFieldwrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: "100%",
    // backgroundColor: 'red'
    paddingHorizontal: 10,
  },
  footerTextStyle: {
    fontSize: 12,
    color: Colors.loginHelpText,
    marginTop: 10,
    marginLeft: 10,
    // textDecorationLine: 'underline',
  },
  textStyle: {
    fontSize: 13,
    paddingHorizontal: 4,
    paddingVertical: 10,
    color: "#000000",
    opacity: 0.4,
  },
});
