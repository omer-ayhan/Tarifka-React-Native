import { useNavigation } from "@react-navigation/core";
import React, { memo } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./MealCard.style";

function MealCard({ mealData }) {
  const navigation = useNavigation();
  const { strMeal, strMealThumb, idMeal } = mealData;
  const image = { uri: strMealThumb };

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleMealDetail = () => navigation.navigate("Details", { id: idMeal });

  return (
    <TouchableWithoutFeedback onPress={handleMealDetail}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image} />
        <Text style={styles.title}>{truncate(strMeal, 18)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default memo(MealCard);
