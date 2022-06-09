import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../App";
import { FlatList } from "react-native-gesture-handler";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

type Props = StackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categoryId, categoryTitle } = route.params;

  // another wey of setting options dynamically
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [navigation, categoryTitle]);

  const filteredMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

  const renderMealItem = (meal: Meal): JSX.Element => {
    return (
      <MealItem
        title={meal.title}
        imageUrl={meal.imageUrl}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
