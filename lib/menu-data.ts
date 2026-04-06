import { MAIN_DISHES_BATCH_01_CONVERTED } from "@/data/main-dishes-batch-01-converted";
import { SIDE_DISHES_BATCH_01_CONVERTED } from "@/data/side-dishes-batch-01-converted";
import { SOUP_DISHES_BATCH_01_CONVERTED } from "@/data/soup-dishes-batch-01-converted";

export type DishCategory = "main" | "side" | "soup";

export type DishBudgetLevel = "節約" | "ふつう";

export type DishMood =
  | "和食"
  | "洋食"
  | "中華"
  | "こってり"
  | "あっさり"
  | "おまかせ";

export type DishIngredientItem = {
  name: string;
  amount: string;
};

export type DishData = {
  id: string;
  name: string;
  category: DishCategory;
  moods: DishMood[];
  tags: string[];
  imageUrl: string;
  cookingTime: number;
  budgetLevel: DishBudgetLevel;
  ingredients: DishIngredientItem[];
  steps: string[];
};

export const DISHES: DishData[] = [
  ...MAIN_DISHES_BATCH_01_CONVERTED,
  ...SIDE_DISHES_BATCH_01_CONVERTED,
  ...SOUP_DISHES_BATCH_01_CONVERTED,
];

export const MAIN_DISHES = DISHES.filter((dish) => dish.category === "main");
export const SIDE_DISHES = DISHES.filter((dish) => dish.category === "side");
export const SOUP_DISHES = DISHES.filter((dish) => dish.category === "soup");