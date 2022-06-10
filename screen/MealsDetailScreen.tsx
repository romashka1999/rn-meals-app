import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { CategoriesStackParamList } from "../App";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type Props = NativeStackScreenProps<CategoriesStackParamList, "MealsDetail">;

const MealsDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    const { mealId } = route.params;

    const currentMeal = MEALS.find((m) => m.id === mealId);
    setMeal(currentMeal);
  }, []);

  const favoritesPressHandler = () => {};

  useLayoutEffect(() => {
    if (!meal) {
      return;
    }
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={favoritesPressHandler}
              style={{ flex: 1, justifyContent: "center" }}
              android_ripple={{ color: "#ccc" }}
            >
              <Ionicons
                name="star"
                style={{ color: "white", width: "100%" }}
                size={22}
              />
            </Pressable>
          </View>
        );
      },
    });
  }, [navigation, meal]);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      <FlatList
        data={meal?.ingredients}
        keyExtractor={(a) => a}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      <FlatList
        data={meal?.steps}
        keyExtractor={(a) => a}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  listItem: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 42,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
  },
});
