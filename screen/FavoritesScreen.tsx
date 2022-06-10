import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen: React.FC = () => {
  const nav: any = useNavigation();
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIds = favoriteMealsCtx.getIds();

  if (mealIds.length === 0) {
    return (
      <View
        style={[
          styles.screen,
          {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: "bold",
            color: "grey",
            marginRight: 8,
          }}
        >
          No Favorite Meals
        </Text>
        <Ionicons name="search-outline" color={"grey"} size={28} />
      </View>
    );
  }

  const favoriteMeals = MEALS.filter((m) => mealIds.includes(m.id));

  const mealItemPressHandler = (mealId: string) => {
    nav.navigate("MealsDetail", {
      mealId,
    });
  };

  return (
    <View style={styles.screen}>
      <MealsList meals={favoriteMeals} onMealItemPress={mealItemPressHandler} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
