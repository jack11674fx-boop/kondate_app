import OpenAI from "openai";
import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuRecipeRequest;

    const {
      familySize = "3",
      mainDish = "",
      sideDish = "",
      soup = "",
    } = body;

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

    return NextResponse.json({
        success: true,
        recipe: {
          mainDishIngredients: Array.isArray(parsed.mainDishIngredients)
            ? parsed.mainDishIngredients
            : [],
          sideDishIngredients: Array.isArray(parsed.sideDishIngredients)
            ? parsed.sideDishIngredients
            : [],
          soupIngredients: Array.isArray(parsed.soupIngredients)
            ? parsed.soupIngredients
            : [],
          mainDishSteps: Array.isArray(parsed.mainDishSteps)
            ? parsed.mainDishSteps
            : [],
          sideDishSteps: Array.isArray(parsed.sideDishSteps)
            ? parsed.sideDishSteps
            : [],
          soupSteps: Array.isArray(parsed.soupSteps)
            ? parsed.soupSteps
            : [],
        },
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