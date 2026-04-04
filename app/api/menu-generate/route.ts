import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

function parseAvoidIngredients(avoidIngredients: string) {
  return avoidIngredients
    .split(/[、,，\s]+/)
    .map((item) => normalizeIngredientText(item))
    .filter(Boolean);
}

function menuContainsAvoidIngredients(
  menu: GeneratedMenu,
  avoidIngredientList: string[]
) {
  if (avoidIngredientList.length === 0) {
    return false;
  }

  const joinedText = [
    menu.title,
    menu.mainDish,
    menu.sideDish,
    menu.soup,
    menu.reason,
  ]
    .join(" ")
    .toLowerCase();

  return avoidIngredientList.some((ingredient) =>
    joinedText.includes(ingredient)
  );
}

function filterMenusByAvoidIngredients(
  menus: GeneratedMenu[],
  avoidIngredients: string
) {
  const avoidIngredientList = parseAvoidIngredients(avoidIngredients);

  if (avoidIngredientList.length === 0) {
    return menus;
  }

  return menus.filter(
    (menu) => !menuContainsAvoidIngredients(menu, avoidIngredientList)
  );
}

function parsePreferredIngredients(preferredIngredients: string) {
  return preferredIngredients
    .split(/[、,，\s]+/)
    .map((item) => normalizeIngredientText(item))
    .filter(Boolean);
}

function countPreferredIngredientMatches(
  menu: GeneratedMenu,
  preferredIngredientList: string[]
) {
  if (preferredIngredientList.length === 0) {
    return 0;
  }

  const joinedText = [
    menu.title,
    menu.mainDish,
    menu.sideDish,
    menu.soup,
    menu.reason,
  ]
    .join(" ")
    .toLowerCase();

  return preferredIngredientList.filter((ingredient) =>
    joinedText.includes(ingredient)
  ).length;
}

function filterMenusByPreferredIngredients(
  menus: GeneratedMenu[],
  preferredIngredients: string
) {
  const preferredIngredientList = parsePreferredIngredients(preferredIngredients);

  if (preferredIngredientList.length === 0) {
    return menus;
  }

  const scoredMenus = menus
    .map((menu) => ({
      menu,
      matchCount: countPreferredIngredientMatches(menu, preferredIngredientList),
    }))
    .filter((item) => item.matchCount > 0);

  if (scoredMenus.length === 0) {
    return [];
  }

  return scoredMenus
    .sort((a, b) => b.matchCount - a.matchCount)
    .map((item) => item.menu);
}

function buildFallbackMenus(inputData: MenuGenerateRequest): GeneratedMenu[] {
  const {
    mood = "おまかせ",
    avoidIngredients = "",
    preferredIngredients = "",
  } = inputData;
  const avoidText = avoidIngredients.trim();
  const preferredText = preferredIngredients.trim();

  const fallbackByMood: Record<string, GeneratedMenu[]> = {
    和食: [
      {
        title: "和食の献立",
        mainDish: "鶏の照り焼き",
        sideDish: "ほうれん草のおひたし",
        soup: "豆腐とわかめの味噌汁",
        reason: "和食らしい組み合わせで、毎日の夕食に取り入れやすい献立です。",
      },
      {
        title: "和食の献立",
        mainDish: "鮭の塩焼き",
        sideDish: "かぼちゃの煮物",
        soup: "じゃがいもの味噌汁",
        reason: "焼き魚を中心に、やさしい味でまとめやすい夕食候補です。",
      },
      {
        title: "和食の献立",
        mainDish: "豚のしょうが焼き",
        sideDish: "冷ややっこ",
        soup: "玉ねぎの味噌汁",
        reason: "食べやすい主菜に副菜と汁物を合わせた、定番で使いやすい献立です。",
      },
    ],
    洋食: [
      {
        title: "洋食の献立",
        mainDish: "チキンソテー",
        sideDish: "ブロッコリーサラダ",
        soup: "玉ねぎスープ",
        reason: "主菜とサラダとスープでまとめやすい、作りやすい洋食献立です。",
      },
      {
        title: "洋食の献立",
        mainDish: "ハンバーグ",
        sideDish: "にんじんラペ",
        soup: "コンソメスープ",
        reason: "人気が高い主菜を中心に、食卓がまとまりやすい組み合わせです。",
      },
      {
        title: "洋食の献立",
        mainDish: "鮭のムニエル",
        sideDish: "コールスロー",
        soup: "じゃがいものスープ",
        reason: "魚メニューでも作りやすく、重すぎない洋食にしやすい候補です。",
      },
    ],
    中華: [
      {
        title: "中華の献立",
        mainDish: "麻婆豆腐",
        sideDish: "もやしのナムル",
        soup: "卵スープ",
        reason: "中華らしい定番の組み合わせで、満足感を出しやすい献立です。",
      },
      {
        title: "中華の献立",
        mainDish: "鶏と白菜の中華煮",
        sideDish: "きゅうりの中華和え",
        soup: "わかめスープ",
        reason: "やさしい味の主菜にさっぱりした副菜を合わせやすい中華献立です。",
      },
      {
        title: "中華の献立",
        mainDish: "油淋鶏",
        sideDish: "春雨サラダ",
        soup: "豆腐スープ",
        reason: "しっかりした主菜を中心に、夕食らしい満足感を出しやすい候補です。",
      },
    ],
    こってり: [
      {
        title: "こってり献立",
        mainDish: "チキン南蛮",
        sideDish: "ポテトサラダ",
        soup: "たまごスープ",
        reason: "食べごたえのある主菜を中心に、満足感を出しやすい献立です。",
      },
      {
        title: "こってり献立",
        mainDish: "豚のしょうが焼き",
        sideDish: "マカロニサラダ",
        soup: "玉ねぎスープ",
        reason: "定番のおかずで家族が食べやすく、しっかりした夕食にしやすいです。",
      },
      {
        title: "こってり献立",
        mainDish: "甘辛だれの唐揚げ",
        sideDish: "コールスロー",
        soup: "豆腐の味噌汁",
        reason: "人気の主菜を中心に、食卓がまとまりやすいこってり系の候補です。",
      },
    ],
    あっさり: [
      {
        title: "あっさり献立",
        mainDish: "豚しゃぶサラダ",
        sideDish: "冷ややっこ",
        soup: "大根のすまし汁",
        reason: "軽めに食べたい日に合わせやすい、やさしい組み合わせの献立です。",
      },
      {
        title: "あっさり献立",
        mainDish: "白身魚の蒸し焼き",
        sideDish: "小松菜のおひたし",
        soup: "豆腐とねぎのすまし汁",
        reason: "重すぎず食べやすい主菜を中心に、すっきりまとまりやすい候補です。",
      },
      {
        title: "あっさり献立",
        mainDish: "鶏むね肉のみぞれ煮",
        sideDish: "きゅうりの酢の物",
        soup: "白菜の味噌汁",
        reason: "やさしい味でまとめやすく、あっさり気分の日に使いやすい献立です。",
      },
    ],
    おまかせ: [
      {
        title: "おすすめ献立",
        mainDish: "鶏の照り焼き",
        sideDish: "ほうれん草のおひたし",
        soup: "豆腐の味噌汁",
        reason: "定番で使いやすく、夕食に取り入れやすい組み合わせです。",
      },
      {
        title: "おすすめ献立",
        mainDish: "ハンバーグ",
        sideDish: "ブロッコリーサラダ",
        soup: "コンソメスープ",
        reason: "主菜・副菜・汁物のバランスが取りやすい、人気の献立です。",
      },
      {
        title: "おすすめ献立",
        mainDish: "麻婆豆腐",
        sideDish: "もやしのナムル",
        soup: "わかめスープ",
        reason: "しっかり食べたい日にも使いやすい、満足感のある候補です。",
      },
    ],
  };

  const baseMenus = fallbackByMood[mood] || fallbackByMood["おまかせ"];
const avoidFilteredMenus = filterMenusByAvoidIngredients(baseMenus, avoidText);
const preferredFilteredMenus = filterMenusByPreferredIngredients(
  avoidFilteredMenus,
  preferredText
);

if (preferredText) {
  return preferredFilteredMenus.slice(0, 3);
}

return avoidFilteredMenus.slice(0, 3);
}

function dedupeMenus(menus: GeneratedMenu[]) {
  return Array.from(
    new Map(
      menus.map((menu) => [
        `${menu.title}-${menu.mainDish}-${menu.sideDish}-${menu.soup}`,
        menu,
      ])
    ).values()
  );
}

async function generateMenusByAI(
  inputData: MenuGenerateRequest
): Promise<GeneratedMenu[]> {
  const {
    familySize = "3",
    cookingTime = "30",
    budgetLevel = "ふつう",
    avoidIngredients = "",
    preferredIngredients = "",
    mood = "おまかせ",
  } = inputData;

  const prompt = `
あなたは家庭向け献立アプリの献立提案AIです。
以下の条件に合う夕食の献立候補を3つ作ってください。

条件:
- 家族人数: ${familySize}人
- 調理時間: ${cookingTime}分
- 予算感: ${budgetLevel}
- 避けたい食材: ${avoidIngredients || "なし"}
- 入れたい食材: ${preferredIngredients || "なし"}
- 気分: ${mood}

ルール:
- 3つの候補を出す
- 各候補に title, mainDish, sideDish, soup, reason を含める
- 「避けたい食材」に書かれた食材は、主菜・副菜・汁物・理由文のどこにも含めない
- 「入れたい食材」に書かれた食材がある場合は、各候補で主菜・副菜・汁物のどれか1つ以上に必ず使う
- 入れたい食材が複数ある場合は、各候補の中で少なくとも1つ以上を必ず使う
- 入れたい食材を使えない候補は出さない
- 似た食材名や関連表現もできるだけ避ける
- 家庭の夕食として自然な献立にする
- 必ずJSONだけを返す
- 形式は次のどちらかにする
  1. [{"title":"","mainDish":"","sideDish":"","soup":"","reason":""}]
  2. {"menus":[{"title":"","mainDish":"","sideDish":"","soup":"","reason":""}]}
`;

  let collectedMenus: GeneratedMenu[] = [];

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await client.responses.create({
        model: "gpt-5.4",
        input: prompt,
      });

      const text = response.output_text.trim();
      console.log(`menu-generate raw text attempt ${attempt + 1}:`, text);

      const parsed = JSON.parse(text) as
        | GeneratedMenu[]
        | { menus?: GeneratedMenu[] };

        const menus = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed.menus)
          ? parsed.menus
          : [];
      
      const avoidFilteredMenus = filterMenusByAvoidIngredients(
        menus,
        avoidIngredients
      );
      
      const preferredFilteredMenus = filterMenusByPreferredIngredients(
        avoidFilteredMenus,
        preferredIngredients
      );
      
      collectedMenus = dedupeMenus([...collectedMenus, ...preferredFilteredMenus]);

      if (collectedMenus.length >= 3) {
        return collectedMenus.slice(0, 3);
      }
    } catch (error) {
      console.error(`menu-generate attempt ${attempt + 1} failed:`, error);
    }
  }

  const fallbackMenus = buildFallbackMenus(inputData);
  const mergedMenus = dedupeMenus([...collectedMenus, ...fallbackMenus]);

  return mergedMenus.slice(0, 3);
}

export async function GET() {
  try {
    const menus = await generateMenusByAI({
      familySize: "3",
      cookingTime: "30",
      budgetLevel: "ふつう",
      avoidIngredients: "ピーマン",
      preferredIngredients: "ほうれん草",
      mood: "和食",
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
    const menus = await generateMenusByAI(body);

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