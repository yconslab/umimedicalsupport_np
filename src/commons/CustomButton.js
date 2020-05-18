//

import React from "react";
import { Button } from "react-native-elements";

const ButtonComponent = ({
  title,
  onPress,
  innerStyle,
  innerTextStyle,
  disabled,
}) => {
  return (
    <Button
      onPress={onPress}
      buttonStyle={{
        height: 50,
        borderRadius: 4,
        marginVertical: 10,
        ...innerStyle,
      }}
      title={title || ""}
      titleStyle={{
        color: "#FFFFFF",
        ...innerTextStyle,
        fontSize: 15,
        lineHeight: 19,
        fontWeight: "bold",
      }}
      disabled={disabled}
    />
  );
};

export default ButtonComponent;
