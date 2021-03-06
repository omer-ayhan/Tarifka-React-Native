import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Config from "react-native-config";
import CategoryCard from "../../components/Cards/CategoryCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

export default function Categories() {
  const url = `${Config.API_URL}/categories.php`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const renderCategories = ({ item }) => <CategoryCard categoryData={item} />;
  const extractId = ({ idCategory }) => idCategory;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={extractId}
        renderItem={renderCategories}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4caf50",
  },
});
