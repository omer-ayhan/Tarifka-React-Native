import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./MealCard.style";

export default function MealCard({ mealData }) {
  const { strMeal, strMealThumb } = mealData;
  const image = { uri: strMealThumb };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <Text style={styles.title}>{strMeal}</Text>
    </View>
  );
}
