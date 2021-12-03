import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryCard.style";

export default function CategoryCard({ categoryData }) {
  const navigation = useNavigation();

  const { strCategoryThumb, strCategory } = categoryData;
  const handleCategory = () =>
    navigation.navigate("Meals", { category: strCategory });

  return (
    <TouchableWithoutFeedback onPress={handleCategory}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: strCategoryThumb }} />
        <Text style={styles.title}>{strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
