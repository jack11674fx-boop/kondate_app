import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ShoppingListRequest = {
  familySize?: string;
  mainDish?: string;
  sideDish?: string;
  soup?: string;
};

type ShoppingListItem = {
    name: string;
    amount: string;
  };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ShoppingListRequest;

    const {
      familySize = "3",
      mainDish = "",
      sideDish = "",
      soup = "",
    } = body;

    const prompt = `
あなたは家庭向け献立アプリの補助役です。
以下の献立から、買い物リストを日本語で作ってください。

条件:
- 家族人数: ${familySize}人

献立:
- 主菜: ${mainDish}
- 副菜: ${sideDish}
- 汁物: ${soup}

ルール:
- 主菜・副菜・汁物を合わせて、その献立全体で必要な買い物リストを作る
- 各食材について、家族人数に合わせた必要量を出す
- 同じ食材が複数の料理で必要なら、合計量にまとめる
- 調味料も、必要量がわかると便利なものは含めてよい
- amount は「300g」「1個」「1/2玉」「2本」「大さじ2」など日本の家庭でわかりやすい表現にする
- スーパーで買うものとして自然な名前にする
- 必ずJSONだけを返す
- 形式は次の通り:
{
  "shoppingList": [
    { "name": "鶏もも肉", "amount": "300g" },
    { "name": "玉ねぎ", "amount": "1個" },
    { "name": "豆腐", "amount": "1/2丁" }
  ]
}
`;

    const response = await client.responses.create({
      model: "gpt-5.4",
      input: prompt,
    });

    const text = response.output_text.trim();
const parsed = JSON.parse(text) as { shoppingList?: ShoppingListItem[] };

const normalizedShoppingList = Array.isArray(parsed.shoppingList)
  ? parsed.shoppingList.filter(
      (item) =>
        item &&
        typeof item.name === "string" &&
        item.name.trim() !== "" &&
        typeof item.amount === "string" &&
        item.amount.trim() !== ""
    )
  : [];

return NextResponse.json({
  success: true,
  shoppingList: normalizedShoppingList,
});
  } catch (error: unknown) {
    console.error("OpenAI API shopping-list error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        shoppingList: [],
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}