import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type MenuItemInput = {
  mainDish?: string;
  sideDish?: string;
  soup?: string;
};

type MenuReasonRequest = {
  familySize?: string;
  cookingTime?: string;
  budgetLevel?: string;
  avoidIngredients?: string;
  mood?: string;
  menus?: MenuItemInput[];
};

async function generateReasons(menuData: MenuReasonRequest) {
  const {
    familySize = "3",
    cookingTime = "30",
    budgetLevel = "ふつう",
    avoidIngredients = "",
    mood = "おまかせ",
    menus = [],
  } = menuData;

  const menuLines = menus
    .map((menu, index) => {
      return `候補${index + 1}
- 主菜: ${menu.mainDish || ""}
- 副菜: ${menu.sideDish || ""}
- 汁物: ${menu.soup || ""}`;
    })
    .join("\n\n");

  const prompt = `
あなたは、家庭向け献立アプリのやさしい案内役です。
以下の献立候補それぞれについて、「なぜ今日の夕食に合っているか」を日本語で短く説明してください。

条件:
- 家族人数: ${familySize}人
- 調理時間: ${cookingTime}分
- 予算感: ${budgetLevel}
- 気分: ${mood}
- 避けたい食材: ${avoidIngredients || "なし"}

献立候補:
${menuLines}

ルール:
- 各候補ごとに1つずつ理由を書く
- 理由は1候補あたり30〜80文字くらい
- やさしい日本語にする
- 難しい言葉は使わない
- 「主菜・副菜・汁物の組み合わせ」「時短」「バランス」「気分との合いやすさ」のどれかを自然に入れる
- 嘘っぽい栄養断定はしない
- 必ずJSONだけを返す
- 形式は次の通り:
{"reasons":["候補1の理由","候補2の理由","候補3の理由"]}
`;

  const response = await client.responses.create({
    model: "gpt-5.4",
    input: prompt,
  });

  const text = response.output_text.trim();
  const parsed = JSON.parse(text) as { reasons?: string[] };

  return parsed.reasons ?? [];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuReasonRequest;
    const reasons = await generateReasons(body);

    return NextResponse.json({
      success: true,
      reasons,
    });
  } catch (error: unknown) {
    console.error("OpenAI API POST error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        reasons: [],
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}