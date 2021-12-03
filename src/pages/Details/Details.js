import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import DetailCard from "../../components/Cards/DetailCard";

export default function Details() {
  const router = useRoute();
  const url = `${Config.API_URL}/lookup.php?i=${router.params.id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const renderDetails = ({ item }) => <DetailCard detailData={item} />;
  const extractId = ({ idMeal }) => idMeal;

  return (
    <FlatList
      keyExtractor={extractId}
      data={data.meals}
      renderItem={renderDetails}
    />
  );
}
