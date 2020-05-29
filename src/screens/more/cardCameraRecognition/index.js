import React, { Component, useEffect } from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { CardIOModule, CardIOUtilities } from "react-native-awesome-card-io";

const ScannerPage = () => {
  useEffect(() => {
    if (Platform.OS === "ios") {
      CardIOUtilities.preload();
    }
  }, []);

  const scanCard = () => {
    CardIOModule.scanCard()
      .then((card) => {
        alert(card.cardNumber);
      })
      .catch(() => {
        // the user cancelled
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => scanCard()}>
        <Text>Scan card!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScannerPage;
