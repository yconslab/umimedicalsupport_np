import React from "react";
import LottieView from "lottie-react-native";
import Images from "../../images";
export default class BasicExample extends React.Component {
  render() {
    return <LottieView source={Images.splashLogo} autoPlay loop />;
  }
}
