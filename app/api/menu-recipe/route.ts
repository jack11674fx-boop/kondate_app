import OpenAI from "openai";
import { NextResponse } from "next/server";
import { DISHES } from "@/lib/menu-data";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type MenuRecipeRequest = {
  familySize?: string;
  mainDish?: string;
  sideDish?: string;
  soup?: string;
};

type RecipeIngredientItem = {
  name: string;
  amount: string;
};

type RecipeStepResponse = {
  mainDishIngredients: RecipeIngredientItem[];
  sideDishIngredients: RecipeIngredientItem[];
  soupIngredients: RecipeIngredientItem[];
  mainDishSteps: string[];
  sideDishSteps: string[];
  soupSteps: string[];
};

function findDishByName(name: string) {
  return DISHES.find((dish) => dish.name === name);
}

function isValidIngredientArray(value: unknown): value is RecipeIngredientItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.name === "string" &&
        item.name.trim() !== "" &&
        typeof item.amount === "string" &&
        item.amount.trim() !== ""
    )
  );
}

function isValidStepArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === "string" && item.trim() !== "")
  );
}

async function generateRecipeByAI(input: MenuRecipeRequest): Promise<RecipeStepResponse> {
  const {
    familySize = "3",
    mainDish = "",
    sideDish = "",
    soup = "",
  } = input;

  const prompt = `
あなたは家庭向け献立アプリの料理アシスタントです。
以下の献立について、初心者でもわかる簡単な作り方を日本語で作成してください。

条件:
- 家族人数: ${familySize}人
- 主菜: ${mainDish}
- 副菜: ${sideDish}
- 汁物: ${soup}

ルール:
- 主菜・副菜・汁物それぞれについて「材料・調味料と分量」「作り方」を分ける
- 分量は家族人数に合う、家庭料理として自然な量にする
- 材料と調味料はまとめて出してよい
- amount は「200g」「1/2本」「大さじ1」「小さじ2」など日本の家庭でわかりやすい表現にする
- 各料理は材料を3〜8個程度にする
- 各料理は3〜5ステップで簡潔に書く
- 1ステップは短く、やさしい日本語にする
- 家庭料理として自然な内容にする
- 必ずJSONだけを返す
- 形式は次の通り:
{
  "mainDishIngredients": [
    { "name": "鶏もも肉", "amount": "300g" },
    { "name": "しょうゆ", "amount": "大さじ2" }
  ],
  "sideDishIngredients": [
    { "name": "ほうれん草", "amount": "1束" }
  ],
  "soupIngredients": [
    { "name": "豆腐", "amount": "1/2丁" }
  ],
  "mainDishSteps": ["手順1", "手順2", "手順3"],
  "sideDishSteps": ["手順1", "手順2", "手順3"],
  "soupSteps": ["手順1", "手順2", "手順3"]
}
`;

  const response = await client.responses.create({
    model: "gpt-5.4",
    input: prompt,
  });

  const text = response.output_text.trim();
  const parsed = JSON.parse(text) as Partial<RecipeStepResponse>;

  return {
    mainDishIngredients: isValidIngredientArray(parsed.mainDishIngredients)
      ? parsed.mainDishIngredients
      : [],
    sideDishIngredients: isValidIngredientArray(parsed.sideDishIngredients)
      ? parsed.sideDishIngredients
      : [],
    soupIngredients: isValidIngredientArray(parsed.soupIngredients)
      ? parsed.soupIngredients
      : [],
    mainDishSteps: isValidStepArray(parsed.mainDishSteps) ? parsed.mainDishSteps : [],
    sideDishSteps: isValidStepArray(parsed.sideDishSteps) ? parsed.sideDishSteps : [],
    soupSteps: isValidStepArray(parsed.soupSteps) ? parsed.soupSteps : [],
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuRecipeRequest;

    const {
      familySize = "3",
      mainDish = "",
      sideDish = "",
      soup = "",
    } = body;

    const mainDishData = findDishByName(mainDish);
    const sideDishData = findDishByName(sideDish);
    const soupData = findDishByName(soup);

    const allFound = Boolean(mainDishData && sideDishData && soupData);

    if (allFound) {
      return NextResponse.json({
        success: true,
        recipe: {
          mainDishIngredients: mainDishData?.ingredients ?? [],
          sideDishIngredients: sideDishData?.ingredients ?? [],
          soupIngredients: soupData?.ingredients ?? [],
          mainDishSteps: mainDishData?.steps ?? [],
          sideDishSteps: sideDishData?.steps ?? [],
          soupSteps: soupData?.steps ?? [],
        },
        source: "db",
      });
    }

    const aiRecipe = await generateRecipeByAI({
      familySize,
      mainDish,
      sideDish,
      soup,
    });

    return NextResponse.json({
      success: true,
      recipe: aiRecipe,
      source: "ai",
    });
  } catch (error: unknown) {
    console.error("menu-recipe POST error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        recipe: {
          mainDishIngredients: [],
          sideDishIngredients: [],
          soupIngredients: [],
          mainDishSteps: [],
          sideDishSteps: [],
          soupSteps: [],
        },
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}