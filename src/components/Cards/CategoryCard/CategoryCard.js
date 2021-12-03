import React from "react";
import { View, Text, Image } from "react-native";

export default function CategoryCard({ categoryData }) {
  const { strCategoryThumb, strCategory } = categoryData;
  return (
    <View>
      <Image source={{ uri: strCategoryThumb }} />
      <Text>{strCategory}</Text>
    </View>
  );
}
