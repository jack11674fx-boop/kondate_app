export type DishCategory = "main" | "side" | "soup";

export type DishBudgetLevel = "節約" | "ふつう";

export type DishMood =
  | "和食"
  | "洋食"
  | "中華"
  | "こってり"
  | "あっさり"
  | "おまかせ";

export type NutritionBalanceTag =
  | "たんぱく質"
  | "野菜多め"
  | "炭水化物少なめ"
  | "汁物"
  | "発酵食品"
  | "食物繊維"
  | "あっさり"
  | "こってり";

export type DishIngredientGroup = {
  label: string;
  items: {
    name: string;
    amount: string;
  }[];
};

export type DishStep = {
  stepNumber: number;
  description: string;
  ingredientGroupLabels?: string[];
};

export type DishDataV2 = {
  id: string;
  name: string;
  category: DishCategory;
  moods: DishMood[];
  tags: string[];
  nutritionTags: NutritionBalanceTag[];
  imageUrl: string;
  hasImage: boolean;
  cookingTime: number;
  budgetLevel: DishBudgetLevel;
  ingredientGroups: DishIngredientGroup[];
  steps: DishStep[];
};

export const DISH_DB_TEMPLATE_SAMPLE: DishDataV2 = {
  id: "main-teriyaki-chicken",
  name: "鶏の照り焼き",
  category: "main",
  moods: ["和食", "こってり", "おまかせ"],
  tags: ["鶏肉", "肉", "甘辛"],
  nutritionTags: ["たんぱく質", "こってり"],
  imageUrl: "/images/dishes/teriyaki-chicken.png",
  hasImage: true,
  cookingTime: 20,
  budgetLevel: "ふつう",
  ingredientGroups: [
    {
      label: "A",
      items: [
        { name: "しょうゆ", amount: "大さじ2" },
        { name: "みりん", amount: "大さじ2" },
        { name: "酒", amount: "大さじ1" },
        { name: "砂糖", amount: "大さじ1" },
      ],
    },
    {
      label: "B",
      items: [
        { name: "鶏もも肉", amount: "2枚" },
      ],
    },
  ],
  steps: [
    {
      stepNumber: 1,
      description: "鶏もも肉の余分な脂を取り、食べやすく切る。",
      ingredientGroupLabels: ["B"],
    },
    {
      stepNumber: 2,
      description: "フライパンで鶏もも肉を皮目から焼き、裏返して火を通す。",
      ingredientGroupLabels: ["B"],
    },
    {
      stepNumber: 3,
      description: "Aを加えて煮からめる。",
      ingredientGroupLabels: ["A"],
    },
  ],
};