import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../data/dummy-data";
import { CategoriesStackParamList } from "../App";
import MealsList from "../components/MealsList";

type Props = NativeStackScreenProps<CategoriesStackParamList, "MealsOverview">;

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

  const mealItemPressHandler = (mealId: string) => {
    navigation.navigate("MealsDetail", {
      mealId,
    });
  };

  return (
    <View style={styles.screen}>
      <MealsList meals={filteredMeals} onMealItemPress={mealItemPressHandler} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
