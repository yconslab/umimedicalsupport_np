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
import CustomHeader from "../../../commons/CustomHeader";
import { DateConversionWithDot } from "../commons";
import { Scale } from "../../../helper/HelperFunction";

const newStyle = { backgroundColor: "#236ED24B", borderRadius: 10 };

// class TimeSelection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       check: false,
//       color1: "#FFFFFF",
//       setColor1: false,
//       setColor2: false,
//       setColor3: false,
//       setColor4: false,
//       setColor5: false,
//     };
//   }

//   selectHandler = (myColor) => {
//     return {
//       height: 40,
//       width: 60,
//       borderRadius: 10,
//       backgroundColor: myColor,
//     };
//   };

//   handleNavigation = (val) =>
//     this.props.navigation.navigate("ScheduleHelper", {
//       dateString: this.props.route.params.day,
//       time: val,
//     });

//   clickTimeHanlder1 = (val) => {
//     if (val === "8:00") {
//       this.setState({
//         setColor1: !this.state.setColor1,
//         setColor2: false,
//         setColor3: false,
//         setColor4: false,
//         setColor5: false,
//       });
//       this.handleNavigation(val);
//     } else if (val === "8:30") {
//       this.setState({
//         setColor2: !this.state.setColor2,
//         setColor1: false,
//         setColor3: false,
//         setColor4: false,
//         setColor5: false,
//       });
//       this.handleNavigation(val);
//     } else if (val === "9:00") {
//       this.setState({
//         setColor3: !this.state.setColor3,
//         setColor2: false,
//         setColor1: false,
//         setColor4: false,
//         setColor5: false,
//       });
//       this.handleNavigation(val);
//     } else if (val === "9:30") {
//       this.setState({
//         setColor4: !this.state.setColor4,
//         setColor2: false,
//         setColor1: false,
//         setColor3: false,
//         setColor5: false,
//       });
//       this.handleNavigation(val);
//     } else {
//       this.setState({
//         setColor5: !this.state.setColor5,
//         setColor2: false,
//         setColor1: false,
//         setColor3: false,
//         setColor4: false,
//       });
//       this.handleNavigation(val);
//     }
//     console.log(val);
//   };

//   render() {
//     const {
//       setColor1,
//       setColor2,
//       setColor3,
//       setColor4,
//       setColor5,
//     } = this.state;
//     const { dateString } = this.props.route.params.day;
//     const replaceDate = DateConversionWithDot(dateString);
//     return (
//       <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//         <CustomHeader
//           headerText="예약된 일정을 선택하세요."
//           navigation={this.props.navigation}
//         />
//         <View contentContainerStyle={{ flexGrow: 1 }}>
//           <View style={{ margin: 20 }}>
//             <View style={styles.firstbox}>
//               <Text style={styles.textStyle}>방문병원</Text>
//               <Text style={styles.value}>세브란스병원</Text>
//             </View>

//             <View style={styles.firstbox}>
//               <Text style={styles.textStyle}>방문날짜</Text>
//               <Text style={styles.value}>{replaceDate}</Text>
//             </View>

//             <View style={styles.lastBox}>
//               <Text style={styles.textStyle}>방문날짜</Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <Text style={{ marginRight: "25%", color: "#BEBEBE" }}>오전</Text>
//               <View style={styles.timepicker}>
//                 <View style={styles.timeBox}>
//                   <TouchableOpacity
//                     // style={this.selectHandler(this.state.color1)}
//                     style={[setColor1 && { ...newStyle }]}
//                     onPress={() => this.clickTimeHanlder1("8:00")}
//                   >
//                     <Text style={styles.timeText}>8:00</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={[setColor2 && { ...newStyle }]}
//                     onPress={() => this.clickTimeHanlder1("8:30")}
//                   >
//                     <Text style={styles.timeText}>8:30</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.timeBox}>
//                   <TouchableOpacity
//                     style={[setColor3 && { ...newStyle }]}
//                     onPress={() => this.clickTimeHanlder1("9:00")}
//                   >
//                     <Text style={styles.timeText}>9:00</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={[setColor4 && { ...newStyle }]}
//                     onPress={() => this.clickTimeHanlder1("9:30")}
//                   >
//                     <Text style={styles.timeText}>9:30</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.timeBox}>
//                   <TouchableOpacity
//                     style={[setColor5 && { ...newStyle }]}
//                     onPress={() => this.clickTimeHanlder1("10:00")}
//                   >
//                     <Text style={styles.timeText}>10:00</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>

//             <View />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// TimeSelection.navigationOptions = (navData) => {
//   return {
//     header: null,
//   };
// };

const TimeBox = ({ time1, time2 }) => {
  return (
    <View style={styles.timeBox}>
      <TouchableOpacity>
        <Text style={styles.timeText}>{time1}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.timeText}>{time2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    id: 1,
    time1: "8:00",
    time2: "8:30",
  },
  {
    id: 2,
    time1: "9:00",
    time2: "9:30",
  },
  {
    id: 3,
    time1: "10:00",
    time2: "",
  },
];
const TimeSelection = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        headerText="예약된 일정을 선택하세요."
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ margin: 20 }}>
          <View style={styles.firstbox}>
            <Text style={styles.textStyle}>방문병원</Text>
            <Text style={styles.value}>세브란스병원</Text>
          </View>

          <View style={styles.firstbox}>
            <Text style={styles.textStyle}>방문날짜</Text>
            {/* <Text style={styles.value}>{replaceDate}</Text> */}
          </View>

          <View style={styles.lastBox}>
            <Text style={styles.textStyle}>방문날짜</Text>
          </View>

          <Text style={{ marginRight: "25%", color: "#BEBEBE" }}>오전</Text>

          <View style={{ marginHorizontal: Scale(60) }}>
            <TimeBox time1="8:00" time2="8:30" />
            <TimeBox time1="9:00" time2="9:30" />
            <TimeBox time1="10:00" time2="11:00" />
          </View>
          <Text style={{ marginRight: "25%", color: "#BEBEBE" }}>오전</Text>
          <View style={{ marginHorizontal: Scale(60) }}>
            <TimeBox time1="13:00" time2="13:30" />
            <TimeBox time1="14:00" time2="14:30" />
            <TimeBox time1="15:00" time2="15:30" />
            <TimeBox time1="16:00" time2="16:30" />
            <TimeBox time1="17:00" time2="17:30" />
            <TimeBox time1="18:00" time2="18:30" />
            <TimeBox time1="19:00" time2="19:30" />
            <TimeBox time1="20:00" time2="20:30" />
            <TimeBox time1="21:00" time2="21:30" />
            <TimeBox time1="22:00" time2="22:30" />
            <TimeBox time1="23:00" time2="23:30" />
            <TimeBox time1="24:00" time2="24:30" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: { fontSize: 16, color: "#404040" },
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  firstbox: {
    height: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#00000014",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastBox: {
    height: 56,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: {
    color: "#4086F0",
    fontSize: 16,
  },
  timepicker: {
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },
  timeBox: {
    // width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    fontSize: 17,
    // lineHeight: 40,
    color: "#404040",
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
    margin: 8,
  },
});
export default TimeSelection;
