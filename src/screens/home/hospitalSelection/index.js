import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../constants";
import { CustomButton, CustomHeader } from "../../../commons";
import { ReservationModal } from "../commons";
import { Scale } from "../../../helper/HelperFunction";
const data = [
  {
    id: 1,
    name: "연세 세브란스",
  },
  {
    id: 2,
    name: "연세 암병원",
  },
  {
    id: 3,
    name: "재활병원",
  },
  {
    id: 4,
    name: "심혈관병원",
  },
  { id: 5, name: "안과병원" },
  {
    id: 6,
    name: "어린이병원",
  },
];
const ListItem = ({
  title,
  navigation,
  onHandlesetSelectedHospital,
  selectedHospital,
}) => {
  return (
    <View style={styles.product}>
      <TouchableOpacity>
        <CheckBox
          leftText={title}
          leftTextStyle={
            selectedHospital === title
              ? styles.selectedHospitalStyle
              : styles.unSelectHosipitalStyle
          }
          onClick={() => {
            onHandlesetSelectedHospital(title);
          }}
          isChecked={selectedHospital === title}
          uncheckedCheckBoxColor="#FFFFFF"
          checkBoxColor="#4388F0"
          checkedImage={<Icon name="done" color="#4388F0" size={24} />}
        />
      </TouchableOpacity>
    </View>
  );
};
const HospitalSelection = ({ navigation }) => {
  const [selectedHospital, setSelectedHospital] = useState("연세 세브란스");
  const [showReservationModal, setShowReservationModal] = useState(false);

  const handletoggleOverlay = () => {
    setShowReservationModal(!showReservationModal);
  };
  return (
    <View style={styles.wrapper}>
      <CustomHeader
        headerText="방문할 병원을 선택해주세요."
        navigation={navigation}
      />

      <FlatList
        style={styles.flatlistStyle}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => (
          <ListItem
            title={itemData.item.name}
            navigation={navigation}
            onHandlesetSelectedHospital={(val) => setSelectedHospital(val)}
            selectedHospital={selectedHospital}
          />
        )}
      />

      <ReservationModal
        showReservationModal={showReservationModal}
        toggleOverlay={() => handletoggleOverlay()}
        navigation={navigation}
      />
      <View style={styles.buttonStyle}>
        <CustomButton
          title="선택하기"
          innerStyle={{ backgroundColor: Colors.activeBlueColor }}
          onPress={() => setShowReservationModal(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middleContent: {
    height: "15%",
    backgroundColor: "grey",
  },
  product: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D1D1",
    height: "auto",
  },
  title: {
    fontSize: 18,
    marginVertical: 15,
  },
  buttonStyle: {
    margin: 20,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flatlistStyle: {
    marginTop: Scale(20),
    backgroundColor: "#FFFFFF",
    marginHorizontal: Scale(20),
  },
  selectedHospitalStyle: {
    color: "#4388F0",
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 19,
  },
  unSelectHosipitalStyle: {
    color: "#404040",
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 19,
  },
});
export default HospitalSelection;
