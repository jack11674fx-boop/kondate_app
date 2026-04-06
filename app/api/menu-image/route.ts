import { NextResponse } from "next/server";

type MenuImageRequest = {
  dishName?: string;
};

type PexelsPhoto = {
  src?: {
    medium?: string;
    large?: string;
  };
};

type PexelsResponse = {
  photos?: PexelsPhoto[];
};

function getDishSearchKeywords(dishName: string) {
  const name = dishName.trim();

  const keywordMap: Record<string, string[]> = {
    青椒肉絲: ["chinjao rosu", "pepper steak stir fry", "chinese stir fry"],
    回鍋肉: ["twice cooked pork", "pork cabbage stir fry", "chinese pork stir fry"],
    麻婆豆腐: ["mapo tofu", "spicy tofu", "tofu dish"],
    鶏の照り焼き: ["teriyaki chicken", "japanese chicken dish", "chicken dish"],
    ハンバーグ: ["hamburger steak", "japanese hamburger steak", "beef patty meal"],
    肉じゃが: ["nikujaga", "japanese beef potato stew", "japanese stew"],
    チキン南蛮: ["chicken nanban", "fried chicken with tartar sauce", "japanese fried chicken"],
    酢豚: ["sweet and sour pork", "pork stir fry", "pork dish"],
    豚のしょうが焼き: ["ginger pork", "japanese pork dish", "pork dish"],
    鮭の塩焼き: ["grilled salmon", "salmon dish", "japanese fish dish"],
    鮭のムニエル: ["salmon meuniere", "salmon fillet", "salmon dish"],
  };

  if (keywordMap[name]) {
    return keywordMap[name];
  }

  if (name.includes("青椒肉絲")) {
    return ["chinjao rosu", "pepper steak stir fry", "chinese stir fry"];
  }

  if (name.includes("回鍋肉")) {
    return ["twice cooked pork", "pork cabbage stir fry", "chinese pork stir fry"];
  }

  if (name.includes("麻婆豆腐")) {
    return ["mapo tofu", "spicy tofu", "tofu dish"];
  }

  if (name.includes("照り焼き")) {
    return ["teriyaki chicken", "japanese chicken dish", "chicken dish"];
  }

  if (name.includes("しょうが焼き")) {
    return ["ginger pork", "japanese pork dish", "pork dish"];
  }

  if (name.includes("ハンバーグ")) {
    return ["hamburger steak", "japanese hamburger steak", "meal plate"];
  }

  if (name.includes("鮭")) {
    return ["grilled salmon", "salmon dish", "fish meal"];
  }

  if (name.includes("鶏")) {
    return ["chicken dish", "japanese chicken meal", "meal plate"];
  }

  if (name.includes("豚")) {
    return ["pork dish", "japanese pork meal", "meal plate"];
  }

  if (name.includes("牛")) {
    return ["beef dish", "japanese beef meal", "meal plate"];
  }

  if (name.includes("魚")) {
    return ["fish dish", "japanese fish meal", "meal plate"];
  }

  if (name.includes("豆腐")) {
    return ["tofu dish", "japanese tofu meal", "meal plate"];
  }

  return ["japanese food", "meal plate", "home cooking"];
}

async function searchPexelsImage(
  keyword: string,
  apiKey: string
): Promise<string> {
  const query = encodeURIComponent(`${keyword} meal`);

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=3&orientation=landscape`,
    {
      headers: {
        Authorization: apiKey,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return "";
  }

  const data = (await response.json()) as PexelsResponse;
  const firstPhoto = data.photos?.[0];

  return firstPhoto?.src?.large || firstPhoto?.src?.medium || "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as MenuImageRequest;
    const dishName = body.dishName?.trim();

    if (!dishName) {
      return NextResponse.json({
        success: false,
        imageUrl: "",
        errorMessage: "料理名がありません",
      });
    }

    const apiKey = process.env.PEXELS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          imageUrl: "",
          errorMessage: "PEXELS_API_KEY が未設定です",
        },
        { status: 500 }
      );
    }

    const searchKeywords = getDishSearchKeywords(dishName);

    let imageUrl = "__NO_IMAGE__";

    for (const keyword of searchKeywords) {
      const candidateImageUrl = await searchPexelsImage(keyword, apiKey);

      if (candidateImageUrl) {
        imageUrl = candidateImageUrl;
        break;
      }
    }

    return NextResponse.json({
      success: true,
      imageUrl,
    });
  } catch (error: unknown) {
    console.error("menu-image POST error:", error);

    const message =
      error instanceof Error ? error.message : "不明なエラーです";

    return NextResponse.json(
      {
        success: false,
        imageUrl: "",
        errorMessage: message,
      },
      { status: 500 }
    );
  }
}