import React from "react";
import { View, Text } from "react-native";

export default function DetailCard({ detailData }) {
  const { strMeal } = detailData;
  return (
    <View>
      <Text>{strMeal}</Text>
    </View>
  );
}
