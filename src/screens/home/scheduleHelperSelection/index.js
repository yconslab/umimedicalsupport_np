import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../components/Global/CustomHeader';
import CustomButton from '../../components/UI/CustomButton';

class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <CustomHeader
          title1="예약 내용이 정확한지 확인해주세요."
          click={() => {
            this.props.navigation.goBack();
          }}
        />

        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{margin: 20}}>
            <View style={styles.firstbox}>
              <Text>방문병원</Text>
              <Text style={styles.value}>세브란스병원</Text>
            </View>

            <View style={styles.firstbox}>
              <Text>방문날짜</Text>
              <Text style={styles.value}>2020.01.15</Text>
            </View>

            <View style={styles.firstbox}>
              <Text>방문시간</Text>
              <Text style={styles.value}>am 10:00s</Text>
            </View>

            <View />
          </View>
        </ScrollView>
        <View style={{margin: 20}}>
          <CustomButton
            style={{
              height: Platform.OS === 'ios' ? 50 : 50,
              width: '100%',
              borderRadius: 4,
            }}
            buttontext="다음"
            textStyle={{fontSize: 17, lineHeight: 20}}
            click={() => {
              this.props.navigation.navigate('VisitorNameInput');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

ReviewPage.navigationOptions = navData => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: '15%',
    backgroundColor: 'grey',
  },
  firstbox: {
    height: 56,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#00000014',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastBox: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    color: '#4086F0',
  },
});
export default ReviewPage;
import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../components/Global/CustomHeader';
import CustomButton from '../../components/UI/CustomButton';

class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <CustomHeader
          title1="예약 내용이 정확한지 확인해주세요."
          click={() => {
            this.props.navigation.goBack();
          }}
        />

        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{margin: 20}}>
            <View style={styles.firstbox}>
              <Text>방문병원</Text>
              <Text style={styles.value}>세브란스병원</Text>
            </View>

            <View style={styles.firstbox}>
              <Text>방문날짜</Text>
              <Text style={styles.value}>2020.01.15</Text>
            </View>

            <View style={styles.firstbox}>
              <Text>방문시간</Text>
              <Text style={styles.value}>am 10:00s</Text>
            </View>

            <View />
          </View>
        </ScrollView>
        <View style={{margin: 20}}>
          <CustomButton
            style={{
              height: Platform.OS === 'ios' ? 50 : 50,
              width: '100%',
              borderRadius: 4,
            }}
            buttontext="다음"
            textStyle={{fontSize: 17, lineHeight: 20}}
            click={() => {
              this.props.navigation.navigate('VisitorNameInput');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

ReviewPage.navigationOptions = navData => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  middleContent: {
    height: '15%',
    backgroundColor: 'grey',
  },
  firstbox: {
    height: 56,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#00000014',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastBox: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    color: '#4086F0',
  },
});
export default ReviewPage;
