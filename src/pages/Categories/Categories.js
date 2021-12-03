import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";

export default function Categories() {
  return (
    <View>
      <Text>Categories Page {Config.API_URL} </Text>
    </View>
  );
}
