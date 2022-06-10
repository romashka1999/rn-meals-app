import { createContext, useState } from "react";

interface IFavoritesContext {
  getIds: () => string[];
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
  exists: (mealId: string) => boolean;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  getIds: () => [],
  exists: (id) => {
    return true;
  },
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

interface Props {}

const FavoritesContextProvider: React.FC<Props> = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const mealExistsInFavorites = (mealId: string) => {
    return favoriteMealIds.includes(mealId);
  };

  const addFavoriteMeal = (mealId: string) => {
    if (mealExistsInFavorites(mealId)) {
      return;
    }
    setFavoriteMealIds((cur) => [...cur, mealId]);
  };

  const removeFavoriteMeal = (mealId: string) => {
    setFavoriteMealIds((cur) => cur.filter((id) => id !== mealId));
  };

  const getMealIds = () => {
    return [...favoriteMealIds];
  };

  const value: IFavoritesContext = {
    getIds: getMealIds,
    exists: mealExistsInFavorites,
    addFavorite: addFavoriteMeal,
    removeFavorite: removeFavoriteMeal,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
