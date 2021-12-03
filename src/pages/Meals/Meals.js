import { useRoute } from "@react-navigation/core";
import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import MealCard from "../../components/Cards/MealCard";

export default function Meals() {
  const router = useRoute();

  const url = `${Config.API_URL}/filter.php?c=${router.params.category}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderMeals = ({ item }) => <MealCard mealData={item} />;

  return <FlatList data={data.meals} renderItem={renderMeals} />;
}
