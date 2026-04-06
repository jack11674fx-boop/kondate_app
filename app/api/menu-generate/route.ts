import { NextResponse } from "next/server";
import {
  MAIN_DISHES,
  SIDE_DISHES,
  SOUP_DISHES,
  type DishData,
} from "@/lib/menu-data";

type MenuGenerateRequest = {
  familySize?: string;
  cookingTime?: string;
  budgetLevel?: string;
  avoidIngredients?: string;
  preferredIngredients?: string;
  mood?: string;
};

type GeneratedMenu = {
  title: string;
  mainDish: string;
  sideDish: string;
  soup: string;
  reason: string;
};

function normalizeIngredientText(text: string) {
  return text.trim().toLowerCase();
}

function parseIngredientList(text: string) {
  return text
    .split(/[、,，\s]+/)
    .map((item) => normalizeIngredientText(item))
    .filter(Boolean);
}

function moodMatched(dish: DishData, mood: string) {
  return mood === "おまかせ" || dish.moods.includes(mood as DishData["moods"][number]);
}

function budgetMatched(dish: DishData, budgetLevel: string) {
  if (budgetLevel === "節約") {
    return dish.budgetLevel === "節約";
  }

  return true;
}

function cookingTimeMatched(dish: DishData, cookingTime: string) {
  return dish.cookingTime <= Number(cookingTime || "30");
}

function avoidMatched(dish: DishData, avoidIngredientList: string[]) {
  if (avoidIngredientList.length === 0) {
    return true;
  }

  const normalizedTags = dish.tags.map((tag) => normalizeIngredientText(tag));
  return !normalizedTags.some((tag) => avoidIngredientList.includes(tag));
}

function countPreferredMatches(dish: DishData, preferredIngredientList: string[]) {
  if (preferredIngredientList.length === 0) {
    return 0;
  }

  const normalizedTags = dish.tags.map((tag) => normalizeIngredientText(tag));
  return normalizedTags.filter((tag) => preferredIngredientList.includes(tag)).length;
}

function buildCandidates(
  dishes: DishData[],
  input: Required<MenuGenerateRequest>
) {
  const avoidIngredientList = parseIngredientList(input.avoidIngredients);
  const preferredIngredientList = parseIngredientList(input.preferredIngredients);

  const filtered = dishes.filter(
    (dish) =>
      moodMatched(dish, input.mood) &&
      budgetMatched(dish, input.budgetLevel) &&
      cookingTimeMatched(dish, input.cookingTime) &&
      avoidMatched(dish, avoidIngredientList)
  );

  if (preferredIngredientList.length === 0) {
    return filtered;
  }

  const preferredSorted = filtered
    .map((dish) => ({
      dish,
      score: countPreferredMatches(dish, preferredIngredientList),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.dish);

  return preferredSorted.length > 0 ? preferredSorted : filtered;
}

function getRandomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function buildReason(
  input: Required<MenuGenerateRequest>,
  mainDish: DishData,
  sideDish: DishData,
  soupDish: DishData
) {
  const preferredIngredientList = parseIngredientList(input.preferredIngredients);
  const avoidIngredientList = parseIngredientList(input.avoidIngredients);

  if (preferredIngredientList.length > 0) {
    return "入れたい食材を意識しながら、条件に合う組み合わせで作った献立です。";
  }

  if (avoidIngredientList.length > 0) {
    return "避けたい食材を外しながら、条件に合う組み合わせで作った献立です。";
  }

  if (input.mood !== "おまかせ") {
    return `${input.mood}の気分に合わせて、主菜・副菜・汁物を組み合わせた献立です。`;
  }

  if (
    mainDish.budgetLevel === "節約" &&
    sideDish.budgetLevel === "節約" &&
    soupDish.budgetLevel === "節約"
  ) {
    return "節約しやすい料理を中心に、毎日の夕食に使いやすい献立です。";
  }

  return "今の条件に合わせて、データベースから組み合わせた献立です。";
}

function generateMenusByDB(inputData: MenuGenerateRequest): GeneratedMenu[] {
  const input: Required<MenuGenerateRequest> = {
    familySize: inputData.familySize || "3",
    cookingTime: inputData.cookingTime || "30",
    budgetLevel: inputData.budgetLevel || "ふつう",
    avoidIngredients: inputData.avoidIngredients || "",
    preferredIngredients: inputData.preferredIngredients || "",
    mood: inputData.mood || "おまかせ",
  };

  const mainCandidates = buildCandidates(MAIN_DISHES, input);
  const sideCandidates = buildCandidates(SIDE_DISHES, input);
  const soupCandidates = buildCandidates(SOUP_DISHES, input);

  if (
    mainCandidates.length === 0 ||
    sideCandidates.length === 0 ||
    soupCandidates.length === 0
  ) {
    return [];
  }

  const menus: GeneratedMenu[] = [];
  const usedCombinations = new Set<string>();

  for (let index = 0; index < 3; index++) {
    let selectedMain: DishData | null = null;
    let selectedSide: DishData | null = null;
    let selectedSoup: DishData | null = null;
    let combinationKey = "";
    let guard = 0;

    do {
      selectedMain = getRandomItem(mainCandidates);
      selectedSide = getRandomItem(sideCandidates);
      selectedSoup = getRandomItem(soupCandidates);

      combinationKey = `${selectedMain.id}-${selectedSide.id}-${selectedSoup.id}`;
      guard += 1;

      if (guard > 30) {
        break;
      }
    } while (usedCombinations.has(combinationKey));

    if (!selectedMain || !selectedSide || !selectedSoup) {
      continue;
    }

    usedCombinations.add(combinationKey);

    menus.push({
      title: `${input.mood === "おまかせ" ? "おすすめ" : input.mood}の献立`,
      mainDish: selectedMain.name,
      sideDish: selectedSide.name,
      soup: selectedSoup.name,
      reason: buildReason(input, selectedMain, selectedSide, selectedSoup),
    });
  }

  return menus;
}

export async function GET() {
  try {
    const menus = generateMenusByDB({
      familySize: "3",
      cookingTime: "30",
      budgetLevel: "ふつう",
      avoidIngredients: "",
      preferredIngredients: "",
      mood: "おまかせ",
    });

    return NextResponse.json({
      success: true,
      menus,
    });
  } catch (error: unknown) {
    console.error("menu-generate GET error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        menus: [],
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuGenerateRequest;
    const menus = generateMenusByDB(body);

    return NextResponse.json({
      success: true,
      menus,
    });
  } catch (error: unknown) {
    console.error("menu-generate POST error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        menus: [],
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}