import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} />
        <Stack.Screen name="MealsPage" component={Meals} />
        <Stack.Screen name="DetailsPage" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
