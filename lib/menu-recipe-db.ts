import { RAW_MAIN_DISHES_BATCH_01 } from "@/data/main-dishes-batch-01-raw";
import { RAW_SIDE_DISHES_BATCH_01 } from "@/data/side-dishes-batch-01-raw";
import { RAW_SOUP_DISHES_BATCH_01 } from "@/data/soup-dishes-batch-01-raw";
import type { RawDish } from "@/data/dish-converter";
import type { RecipeIngredientGroup, RecipeSteps } from "@/lib/menu-types";

type RawIngredientGroup = NonNullable<RawDish["ingredientGroups"]>[number];
type RawStep = NonNullable<RawDish["steps"]>[number];

const ALL_RAW_DISHES: RawDish[] = [
  ...RAW_MAIN_DISHES_BATCH_01,
  ...RAW_SIDE_DISHES_BATCH_01,
  ...RAW_SOUP_DISHES_BATCH_01,
];

function normalizeIngredientGroups(
  groups?: RawIngredientGroup[]
): RecipeIngredientGroup[] {
  if (!Array.isArray(groups)) {
    return [];
  }

  return groups
    .map((group, groupIndex) => {
      const label =
        typeof group.label === "string" && group.label.trim().length > 0
          ? group.label.trim()
          : `材料${groupIndex + 1}`;

      const items = Array.isArray(group.items)
        ? group.items
            .map((item) => ({
              name: typeof item.name === "string" ? item.name.trim() : "",
              amount: typeof item.amount === "string" ? item.amount.trim() : "",
            }))
            .filter((item) => item.name.length > 0 && item.amount.length > 0)
        : [];

      return {
        label,
        items,
      };
    })
    .filter((group) => group.items.length > 0);
}

function normalizeSteps(steps?: RawStep[]): string[] {
  if (!Array.isArray(steps)) {
    return [];
  }

  return steps
    .map((step) =>
      typeof step.description === "string" ? step.description.trim() : ""
    )
    .filter((step) => step.length > 0);
}

function findDishByName(name: string) {
  return ALL_RAW_DISHES.find((dish) => dish.name === name);
}

export function buildRecipeFromDb(menu: {
  mainDish: string;
  sideDish: string;
  soup: string;
}): RecipeSteps | null {
  const mainDish = findDishByName(menu.mainDish);
  const sideDish = findDishByName(menu.sideDish);
  const soup = findDishByName(menu.soup);

  if (!mainDish || !sideDish || !soup) {
    return null;
  }

  return {
    mainDishIngredients: [],
    sideDishIngredients: [],
    soupIngredients: [],
    mainDishIngredientGroups: normalizeIngredientGroups(mainDish.ingredientGroups),
    sideDishIngredientGroups: normalizeIngredientGroups(sideDish.ingredientGroups),
    soupIngredientGroups: normalizeIngredientGroups(soup.ingredientGroups),
    mainDishSteps: normalizeSteps(mainDish.steps),
    sideDishSteps: normalizeSteps(sideDish.steps),
    soupSteps: normalizeSteps(soup.steps),
  };
}