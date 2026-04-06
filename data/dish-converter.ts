import type {
    DishBudgetLevel,
    DishCategory,
    DishData,
    DishMood,
  } from "@/lib/menu-data";
  
  type RawIngredientItem = {
    name?: string;
    amount?: string;
  };
  
  type RawIngredientGroup = {
    label?: string;
    title?: string;
    items?: RawIngredientItem[];
  };
  
  type RawStep = {
    stepNumber?: number;
    description?: string;
    ingredientGroupLabels?: string[];
  };
  
  export type RawDish = {
    id?: string;
    name?: string;
    category?: string;
    moods?: string[];
    tags?: string[];
    nutritionTags?: string[];
    cookingTime?: number;
    budgetLevel?: string;
    ingredientGroups?: RawIngredientGroup[];
    steps?: RawStep[];
    imageUrl?: string;
    hasImage?: boolean;
  };
  
  function normalizeCategory(
    category?: string,
    fallbackCategory: DishCategory = "main"
  ): DishCategory {
    if (category === "main" || category === "side" || category === "soup") {
      return category;
    }
  
    return fallbackCategory;
  }
  
  function normalizeBudgetLevel(budgetLevel?: string): DishBudgetLevel {
    if (budgetLevel === "節約" || budgetLevel === "ふつう") {
      return budgetLevel;
    }
  
    return "ふつう";
  }
  
  function normalizeMoods(moods?: string[]): DishMood[] {
    const validMoods: DishMood[] = [
      "和食",
      "洋食",
      "中華",
      "こってり",
      "あっさり",
      "おまかせ",
    ];
  
    const filtered = Array.isArray(moods)
      ? moods.filter((mood): mood is DishMood =>
          validMoods.includes(mood as DishMood)
        )
      : [];
  
    return filtered.length > 0 ? filtered : ["おまかせ"];
  }
  
  function getDishLabel(rawDish: RawDish) {
    return rawDish.name || rawDish.id || "unknown-dish";
  }
  
  function convertIngredientGroupsToIngredients(
    rawDish: RawDish
  ): DishData["ingredients"] {
    if (!Array.isArray(rawDish.ingredientGroups)) {
      console.warn(
        `[dish-converter] ingredientGroups がありません: ${getDishLabel(rawDish)}`
      );
      return [];
    }
  
    const ingredients = rawDish.ingredientGroups.flatMap((group, groupIndex) => {
      if (!Array.isArray(group.items) || group.items.length === 0) {
        console.warn(
          `[dish-converter] items が空です: ${getDishLabel(rawDish)} / group ${group.label || group.title || groupIndex + 1}`
        );
        return [];
      }
  
      return group.items.flatMap((item, itemIndex) => {
        const name =
          typeof item.name === "string" ? item.name.trim() : "";
        const amount =
          typeof item.amount === "string" ? item.amount.trim() : "";
  
        if (!name) {
          console.warn(
            `[dish-converter] name が不正です: ${getDishLabel(rawDish)} / group ${group.label || group.title || groupIndex + 1} / item ${itemIndex + 1}`
          );
          return [];
        }
  
        if (!amount) {
          console.warn(
            `[dish-converter] amount が不正です: ${getDishLabel(rawDish)} / ${name}`
          );
          return [];
        }
  
        return [{ name, amount }];
      });
    });
  
    if (ingredients.length === 0) {
      console.warn(
        `[dish-converter] 有効な ingredients が 0 件です: ${getDishLabel(rawDish)}`
      );
    }
  
    return ingredients;
  }
  
  function convertStepsToStrings(rawDish: RawDish): string[] {
    if (!Array.isArray(rawDish.steps)) {
      console.warn(`[dish-converter] steps がありません: ${getDishLabel(rawDish)}`);
      return [];
    }
  
    const steps = rawDish.steps
      .map((step, index) => {
        const description =
          typeof step.description === "string" ? step.description.trim() : "";
  
        if (!description) {
          console.warn(
            `[dish-converter] step.description が不正です: ${getDishLabel(rawDish)} / step ${index + 1}`
          );
        }
  
        return description;
      })
      .filter((description) => description.length > 0);
  
    if (steps.length === 0) {
      console.warn(
        `[dish-converter] 有効な steps が 0 件です: ${getDishLabel(rawDish)}`
      );
    }
  
    return steps;
  }
  
  export function convertRawDishToDishData(
    rawDish: RawDish,
    fallbackCategory: DishCategory = "main"
  ): DishData {
    return {
      id: rawDish.id || "",
      name: rawDish.name || "",
      category: normalizeCategory(rawDish.category, fallbackCategory),
      moods: normalizeMoods(rawDish.moods),
      tags: Array.isArray(rawDish.tags) ? rawDish.tags : [],
      imageUrl: rawDish.imageUrl || "",
      cookingTime:
        typeof rawDish.cookingTime === "number" ? rawDish.cookingTime : 20,
      budgetLevel: normalizeBudgetLevel(rawDish.budgetLevel),
      ingredients: convertIngredientGroupsToIngredients(rawDish),
      steps: convertStepsToStrings(rawDish),
    };
  }
  
  export function convertRawDishesToDishData(
    rawDishes: RawDish[],
    fallbackCategory: DishCategory
  ): DishData[] {
    return rawDishes.map((rawDish) =>
      convertRawDishToDishData(rawDish, fallbackCategory)
    );
  }