import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../data/dummy-data";
import { CategoriesStackParamList } from "../App";
import { FlatList } from "react-native-gesture-handler";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

type Props = NativeStackScreenProps<CategoriesStackParamList, "MealsOverview">;

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

  const mealItemPressHandler = (mealId: string) => {
    navigation.navigate("MealsDetail", {
      mealId,
    });
  };

  const renderMealItem = (meal: Meal): JSX.Element => {
    return (
      <MealItem
        title={meal.title}
        imageUrl={meal.imageUrl}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        onPress={mealItemPressHandler.bind(this, meal.id)}
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
