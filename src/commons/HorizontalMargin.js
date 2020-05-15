import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class HorizontalMargin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{...styles.marginWrapper, ...this.props.style}}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marginWrapper: {
    marginHorizontal: 20,
  },
});

export default HorizontalMargin;
