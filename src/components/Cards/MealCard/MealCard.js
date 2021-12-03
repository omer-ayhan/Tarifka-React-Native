import React from "react";
import { View, Text } from "react-native";

export default function MealCard({ mealData }) {
  const { strMeal, strMealThumb } = mealData;
  return (
    <View>
      <Text>{strMeal}</Text>
    </View>
  );
}
