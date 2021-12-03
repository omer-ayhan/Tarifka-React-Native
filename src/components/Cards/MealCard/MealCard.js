import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./MealCard.style";

export default function MealCard({ mealData }) {
  const { strMeal, strMealThumb } = mealData;
  const image = { uri: strMealThumb };

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <Text style={styles.title}>{truncate(strMeal, 18)}</Text>
    </View>
  );
}
