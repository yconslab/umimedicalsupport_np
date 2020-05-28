import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

class ScannerPage extends Component {

    componentWillMount() {
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload();
        }
    }

    scanCard() {
        CardIOModule
            .scanCard()
            .then(card => {
                alert(card.cardNumber);
            })
            .catch(() => {
                // the user cancelled
            })
    }

    render() {
        return (
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center'
            }}>
                <TouchableOpacity onPress={this.scanCard.bind(this)}>
                    <Text>Scan card!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ScannerPage