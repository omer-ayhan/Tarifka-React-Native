import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./DetailCard.style";

export default function DetailCard({ detailData }) {
  const { strMeal, strArea, strInstructions, strMealThumb } = detailData;
  const image = { uri: strMealThumb };
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.area}>{strArea}</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.instructions}>{strInstructions}</Text>
    </View>
  );
}
