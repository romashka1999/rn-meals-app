import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Meal from "../models/meal";
import MealItem from "./MealItem";

interface Props {
  meals: Meal[];
  onMealItemPress: any;
}

const MealsList: React.FC<Props> = ({ meals, onMealItemPress }) => {
  const renderMealItem = (meal: Meal): JSX.Element => {
    return (
      <MealItem
        title={meal.title}
        imageUrl={meal.imageUrl}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        onPress={onMealItemPress.bind(this, meal.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
