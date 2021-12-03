import { useRoute } from "@react-navigation/core";
import React from "react";
import { Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import MealCard from "../../components/Cards/MealCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error";

export default function Meals() {
  const router = useRoute();

  const url = `${Config.API_URL}/filter.php?c=${router.params.category}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const renderMeals = ({ item }) => <MealCard mealData={item} />;
  const extractId = ({ idMeal }) => idMeal;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeals}
        keyExtractor={extractId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4caf50",
    flex: 1,
  },
});
