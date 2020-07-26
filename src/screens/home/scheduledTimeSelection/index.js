import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import CustomHeader from "../../../commons/CustomHeader";
import { Scale } from "../../../helper/HelperFunction";
import { Time } from "./TimeConstant";

const TimeBox = ({
  time1,
  time2,
  onPressSecondColumn,
  onPressFirstColumn,
  selectedTimeOne,
  selectedTimeTwo,
  navigation,
}) => {
  return (
    <View style={styles.timeBox}>
      <TouchableOpacity
        onPress={onPressFirstColumn}
        style={selectedTimeOne && styles.selectedColor}
      >
        <Text style={styles.timeText}>{time1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressSecondColumn}
        style={selectedTimeTwo && styles.selectedColor}
      >
        <Text style={styles.timeText}>{time2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const TimeSelection = ({ navigation, route }) => {
  const [leftTime, setLeftTime] = useState("");
  const [rightTime, setRightTime] = useState("");

  const handleOnPresFirstColumn = (
    navigation,
    { time1Store = "", time2Store = "" }
  ) => {
    setLeftTime(time1Store);
    setRightTime("");
    navigation.navigate("ScheduleHelper", {
      dateString: route.params.day,
      time: time1Store,
    });
  };
  const handleOnPressSecondColumn = (
    navigation,
    { time1Store = "", time2Store = "" }
  ) => {
    setRightTime(time2Store);
    setLeftTime("");
    navigation.navigate("ScheduleHelper", {
      dateString: route.params.day,
      time: time2Store,
    });
  };
  {
  }

  const { dateString } = route.params.day;
  return (
    <View style={styles.wrapper}>
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
            <Text style={styles.value}>{dateString}</Text>
          </View>

          <View style={styles.lastBox}>
            <Text style={styles.textStyle}>방문날짜</Text>
          </View>

          <Text style={styles.textWrapper}>오전</Text>

          <View style={{ marginHorizontal: Scale(60) }}>
            <TimeBox time1="8:00" time2="8:30" />
            <TimeBox time1="9:00" time2="9:30" />
            <TimeBox time1="10:00" time2="11:00" />
          </View>
          <Text style={styles.textWrapper}>오전</Text>
          <View style={{ marginHorizontal: Scale(60) }}>
            {Time.map((i) => {
              return (
                <TimeBox
                  time1={i.time1}
                  time2={i.time2}
                  onPressFirstColumn={() =>
                    handleOnPresFirstColumn(navigation, {
                      time1Store: i.time1,
                    })
                  }
                  selectedTimeOne={i.time1 === leftTime}
                  selectedTimeTwo={i.time2 === rightTime}
                  navigation={navigation}
                  onPressSecondColumn={() =>
                    handleOnPressSecondColumn(navigation, {
                      time2Store: i.time2,
                    })
                  }
                />
              );
            })}
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    fontSize: 17,
    color: "#404040",
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
    margin: 8,
  },
  selectedColor: {
    backgroundColor: "#236ED24B",
    borderRadius: Scale(10),
  },
  wrapper: { flex: 1, backgroundColor: "#FFFFFF" },
  textWrapper: { marginRight: "25%", color: "#BEBEBE" },
});
export default TimeSelection;
