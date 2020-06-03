import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { CustomHeader, CustomButton } from "../../../commons";
import { DateConversionWithDot, DisplayStar } from "../commons";
import { Scale } from "../../../helper/HelperFunction";
import Colors from "../../../constants/Colors";
import Images from "../../../images";

const { width } = Dimensions.get("window");
const helperList = [
  {
    id: 1,
    name: "이유미",
    certificate: "연세대학생 인증",
    loc: "서울 마포구 연희동",
    star: 9.5,
    desc:
      "연세대학교 15학번 간호학과 이유미입니다. 최선을 다해 안내해드리겠습니다!",

    icon: Images.helperNurse
  },
  {
    id: 2,
    name: "김아인",
    certificate: "세브란스 간호사 인증",
    loc: "서울 마포구 연희동",
    star: 9.5,
    desc: "제 부모님을 모신다는 마음을 가지고 최선을 다해 모시겠습니다.",
    icon: Images.helperNurse
  },
  {
    id: 3,
    name: "이주혜",
    certificate: "연세대학생 인증",
    loc: "서울 마포구 연희동",
    star: 9.5,
    desc: "제 부모님을 모신다는 마음을 가지고 최선을 다해 모시겠습니다.",
    icon: Images.helperNurse
  }
];

const ScheduleHelper = ({ navigation, route }) => {
  const [selectedHelper, setSelectedHelper] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const { dateString } = route.params.dateString;
  const { time } = route.params;

  const handleSelectedHelper = id => {
    setSelectedHelper(id);
    setShowButton(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader
        headerText="우미 서포터를 선택해주세요."
        navigation={navigation}
      />

      <View style={styles.wrapper}>
        <Text style={styles.headerTextStyle}>
          선택시간에 예약 가능한 서포터 리스트입니다.
        </Text>
        <View style={styles.firstbox}>
          <Text style={styles.textStyle}>방문병원</Text>
          <Text style={styles.value}>세브란스병원</Text>
        </View>

        <View style={styles.firstbox}>
          <Text style={styles.textStyle}>방문날짜</Text>
          <Text style={styles.value}>{DateConversionWithDot(dateString)}</Text>
        </View>

        <View style={styles.firstbox}>
          <Text style={styles.textStyle}>방문시간</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.value}>am {time}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewStyleContainer}
        >
          {helperList.map(i => {
            return (
              <TouchableOpacity
                key={i.id}
                onPress={id => handleSelectedHelper(i.id)}
              >
                <View
                  style={
                    [
                      selectedHelper == i.id
                        ? {
                            borderColor: Colors.activeColor,
                            borderWidth: 1,
                            ...styles.helperListWrapper
                          }
                        : styles.helperListWrapper
                    ]
                    // styles.helperListWrapper)
                  }
                >
                  <View style={styles.imageContainer}>
                    <Image source={i.icon} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between"
                    }}
                  >
                    <View style={styles.test}>
                      <Text style={styles.helperNameStyle}>{i.name}</Text>
                      <View style={styles.certificateStyle}>
                        <Text style={styles.certificateTextStyle}>
                          {i.certificate}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.loctaion}>{i.loc}</Text>
                    <View style={styles.starContainer}>
                      <Text style={styles.starStyles}>{i.star}</Text>
                      <DisplayStar />
                    </View>
                    <View>
                      <Text style={styles.descriptionStyle}>{i.desc}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {showButton && (
        <View style={styles.BottomContainer}>
          <CustomButton
            title="다음"
            onPress={() => navigation.navigate("VisitorInformatioName")}
            innerStyle={{ marginHorizontal: Scale(20) }}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  BottomContainer: {
    marginBottom: Scale(20)
  },
  scrollViewStyleContainer: {
    marginBottom: Scale(20),
    paddingBottom: Scale(20)
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  loctaion: {
    color: Colors.bannerTextColor,
    fontSize: Scale(10)
  },
  certificateTextStyle: {
    color: Colors.activeColor
  },
  certificateStyle: {
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(5),
    borderRadius: Scale(10),
    backgroundColor: "#ECF3FD",
    marginLeft: Scale(15)
  },
  test: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Scale(5)
  },
  starStyles: {
    color: Colors.activeColor,
    marginVertical: Scale(10),
    fontWeight: "bold",
    fontSize: Scale(14)
  },

  helperNameStyle: {
    fontSize: Scale(14),
    fontWeight: "bold"
  },
  topWrapper: {
    elevation: 5,
    marginVertical: Scale(10),
    justifyContent: "center"
  },
  helperListWrapper: {
    flexDirection: "row",

    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: Scale(134),
    marginTop: Scale(20),
    borderRadius: Scale(6),
    // width: width - 50,
    padding: Scale(15),
    marginHorizontal: Scale(5)
  },
  imageContainer: {
    height: Scale(64),
    width: Scale(64),
    borderRadius: Scale(5),
    overflow: "hidden",
    marginRight: Scale(10)
  },
  firstComponentWrapper: {
    flexDirection: "row"
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: Scale(20)
  },
  middleContent: {
    height: "15%",
    backgroundColor: "grey"
  },
  firstbox: {
    height: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#00000014",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  lastBox: {
    height: 56,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  value: {
    color: "#4086F0",
    fontSize: Scale(16)
  },
  headerTextStyle: {
    fontSize: Scale(16),
    marginVertical: Scale(10),
    color: Colors.homeBannerBigText
  },
  textStyle: {
    fontSize: Scale(16)
  },
  descriptionStyle: {
    fontSize: Scale(10),
    color: "#404040"
  }
});

export default ScheduleHelper;
