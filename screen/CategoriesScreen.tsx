import { StyleSheet, FlatList } from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import { CategoriesStackParamList } from "../App";

type Props = NativeStackScreenProps<CategoriesStackParamList, "Drawer">;

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const renderCategoryItem = (item: Category): JSX.Element => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
        categoryTitle: item.title,
      });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(info) => renderCategoryItem(info.item)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
