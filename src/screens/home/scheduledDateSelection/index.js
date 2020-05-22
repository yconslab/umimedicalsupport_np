// <<<<<<< HEAD
// import React, { Component } from "react";
// import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
// import CustomHeader from "../../components/Global/CustomHeader";
// import DatePicker from "../../components/UI/DatePicker";

// const MidLine = ({ lineStyle }) => {
//   return (
//     <View style={{ width: "100%", backgroundColor: "#EBEBEB", ...lineStyle }} />
//   );
// };
// const DateSelection = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//       <CustomHeader
//         title1="예약된 일정을 선택하세요."
//         click={() => {
//           navigation.goBack();
//         }}
//       />

//       <ScrollView contentContainerStyle={{ flex: 1 }}>
//         <View style={{ margin: 20 }}>
//           <View style={styles.firstbox}>
//             <Text>방문병원</Text>
//             <Text style={{ color: "#4086F0" }}>세브란스병원</Text>
//           </View>
//           <MidLine lineStyle={{ height: 1 }} />

//           <DatePicker
//             click={() => {
//               navigation.navigate("TimeSelection");
//             }}
//           />
//         </View>
//         <MidLine lineStyle={{ height: 14 }} />

//         <View />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// DateSelection.navigationOptions = (navData) => {
//   return {
//     header: null,
//   };
// };

// const styles = StyleSheet.create({
//   middleContent: {
//     height: "15%",
//     backgroundColor: "grey",
//   },
//   firstbox: {
//     height: 50,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });
// export default DateSelection;
// =======
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ArrowIcons from "react-native-vector-icons/Ionicons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Moment from "moment";

import { CustomHeader, Divider } from "../../../commons";
import Colors from "../../../constants/Colors";
import { Scale } from "../../../helper/HelperFunction";
LocaleConfig.locales["kr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],

  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = "kr";

const ScheduleDate = ({ navigation }) => {
  const [todaysDate, setTodaysDate] = useState(Moment().format("YYYY-MM-D"));
  const [selectedDate, setSelectedDate] = useState(
    Moment().format("YYYY-MM-D")
  );
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        navigation={navigation}
        headerText="예약된 일정을 선택하세요."
      />
      <View style={styles.TitleTextStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyleFirst}>방문병원</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textStyleNavigation}> 세브란스병원</Text>
          </TouchableOpacity>
        </View>
        <Divider />
      </View>

      <Calendar
        //   current="2020-03-01"
        minDate={todaysDate}
        LocaleConfig={LocaleConfig.defaultLocale}
        onDayPress={day => {
          navigation.navigate("ScheduleTime", { day: day });
          // console.log("selected day", day);
        }}
        monthFormat={"yyyy.MM "}
        onMonthChange={month => {
          console.log("month changed", month);
        }}
        renderArrow={direction =>
          direction === "left" ? (
            <ArrowIcons
              name="ios-arrow-back"
              size={25}
              style={{ color: Colors.lightTextColor }}
            />
          ) : (
            <ArrowIcons
              name="ios-arrow-forward"
              size={25}
              style={{ color: Colors.lightTextColor }}
            />
          )
        }
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={2}
        hideDayNames={false}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        theme={{
          dayTextColor: "black",
          textDayFontWeight: "bold",
          textDayFontSize: Scale(17)
        }}
        //   dayComponent={({ date, state }) => {
        //     return (
        //       <TouchableOpacity
        //         onPress={() => console.log(date, "selectedDate")}
        //         style={[
        //           styles.dayComponentWrapper,
        //           state === "today" && {
        //             borderRadius: 30,
        //             backgroundColor: Colors.activeColor
        //           }
        //         ]}
        //       >
        //         <Text>{date.day}</Text>
        //       </TouchableOpacity>
        //     );
        //   }}
      />
    </View>
  );
};

export default ScheduleDate;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appColor
  },
  todayComponent: {
    backgroundColor: "red",
    color: "blue",
    borderRadius: 15
  },
  dayComponentWrapper: {
    padding: 5,
    height: Scale(40),
    width: Scale(40),
    justifyContent: "center",
    alignItems: "center"
  },
  TitleTextStyle: {
    marginVertical: Scale(40)
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Scale(20),
    marginVertical: Scale(11)
  },
  textStyleFirst: {
    fontSize: Scale(16),
    color: Colors.textColor,
    fontWeight: "600"
  },
  textStyleNavigation: {
    color: Colors.activeColor,
    fontSize: Scale(16),
    fontWeight: "600"
  }
});
