import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./CategoryCard.style";

export default function CategoryCard({ categoryData }) {
  const { strCategoryThumb, strCategory } = categoryData;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: strCategoryThumb }} />
      <Text style={styles.title}>{strCategory}</Text>
    </View>
  );
}
