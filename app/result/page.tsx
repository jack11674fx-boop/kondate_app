"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type MenuItem = {
    id: string;
    title: string;
    mainDish: string;
    sideDish: string;
    soup: string;
    estimatedTime: string;
    budgetComment: string;
    nutritionComment: string;
    reason: string;
    aiReason?: string;
    shoppingList?: ShoppingListItem[];
    createdAt: string;
    sourceConditions: {
      familySize: string;
      cookingTime: string;
      budgetLevel: string;
      avoidIngredients: string;
      mood: string;
    };
  };

  type GeneratedMenuFromAI = {
    title: string;
    mainDish: string;
    sideDish: string;
    soup: string;
    reason: string;
  };

  type ShoppingListItem = {
    name: string;
    amount: string;
  };

  type RecipeIngredientItem = {
    name: string;
    amount: string;
  };
  
  type RecipeSteps = {
    mainDishIngredients: RecipeIngredientItem[];
    sideDishIngredients: RecipeIngredientItem[];
    soupIngredients: RecipeIngredientItem[];
    mainDishSteps: string[];
    sideDishSteps: string[];
    soupSteps: string[];
  };

  type ToastState = {
    message: string;
    type: "success" | "error";
  } | null;

  type DishOption = {
    name: string;
    tags: string[];
  };

  type NamedFoodOption = {
    name: string;
    tags: string[];
  };

  type MaybeTaggedFoodOption = string | NamedFoodOption;


function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const familySize = searchParams.get("familySize") || "3";
  const cookingTime = searchParams.get("cookingTime") || "30";
  const budgetLevel = searchParams.get("budgetLevel") || "ふつう";
  const avoidIngredients = searchParams.get("avoidIngredients") || "";
  const mood = searchParams.get("mood") || "おまかせ";

  const [refreshCount, setRefreshCount] = useState(0);
const [menus, setMenus] = useState<MenuItem[]>([]);
const [isMenuReady, setIsMenuReady] = useState(false);
const [aiReasons, setAiReasons] = useState<string[]>([]);
const [shoppingLists, setShoppingLists] = useState<
  Record<string, ShoppingListItem[]>
>({});
const [checkedShoppingItems, setCheckedShoppingItems] = useState<
  Record<string, boolean>
>({});
const [loadingShoppingId, setLoadingShoppingId] = useState("");
const [isAiGenerating, setIsAiGenerating] = useState(false);
const [usedFallback, setUsedFallback] = useState(false);
const [recipeStepsMap, setRecipeStepsMap] = useState<Record<string, RecipeSteps>>({});
const [loadingRecipeId, setLoadingRecipeId] = useState("");
const [toast, setToast] = useState<ToastState>(null);

    const dishOptions = useMemo<
  Record<
    string,
    {
      mainDishes: DishOption[];
      sideDishes: MaybeTaggedFoodOption[];
      soups: MaybeTaggedFoodOption[];
    }
  >
>(() => {

  return {
    和食: {
        mainDishes: [
            { name: "鶏の照り焼き", tags: ["肉", "鶏肉"] },
            { name: "鮭の塩焼き", tags: ["魚", "鮭"] },
            { name: "豚のしょうが焼き", tags: ["肉", "豚肉"] },
            { name: "肉じゃが", tags: ["肉", "牛肉", "じゃがいも", "玉ねぎ"] },
            { name: "さばの味噌煮", tags: ["魚", "さば"] },
            { name: "ぶりの照り焼き", tags: ["魚", "ぶり"] },
            { name: "鶏むね肉の塩こうじ焼き", tags: ["肉", "鶏肉"] },
            { name: "豚しゃぶ", tags: ["肉", "豚肉"] },
            { name: "鶏の甘辛煮", tags: ["肉", "鶏肉"] },
            { name: "厚揚げと豚肉の炒め煮", tags: ["肉", "厚揚げ", "豚肉"] },
            { name: "さわらの西京焼き", tags: ["魚", "さわら"] },
            { name: "和風おろしハンバーグ", tags: ["肉", "ひき肉", "大根"] },
          ],
          sideDishes: [
            { name: "ほうれん草のおひたし", tags: ["ほうれん草"] },
            { name: "ひじきの煮物", tags: ["ひじき"] },
            { name: "きゅうりの酢の物", tags: ["きゅうり"] },
            { name: "冷ややっこ", tags: ["豆腐"] },
            { name: "かぼちゃの煮物", tags: ["かぼちゃ"] },
            { name: "小松菜のごま和え", tags: ["小松菜", "ごま"] },
            { name: "切り干し大根", tags: ["大根"] },
            { name: "きんぴらごぼう", tags: ["ごぼう"] },
            { name: "キャベツの浅漬け", tags: ["キャベツ"] },
            { name: "なすの煮びたし", tags: ["なす"] },
          ],
          soups: [
            { name: "豆腐とわかめの味噌汁", tags: ["豆腐", "わかめ"] },
            { name: "大根の味噌汁", tags: ["大根"] },
            { name: "白菜の味噌汁", tags: ["白菜"] },
            { name: "じゃがいもの味噌汁", tags: ["じゃがいも"] },
            { name: "なめこの味噌汁", tags: ["なめこ", "きのこ"] },
            { name: "玉ねぎの味噌汁", tags: ["玉ねぎ"] },
            { name: "豆腐とねぎのすまし汁", tags: ["豆腐", "ねぎ"] },
            { name: "油揚げとわかめの味噌汁", tags: ["油揚げ", "わかめ"] },
          ],
    },
    洋食: {
      mainDishes: [
        { name: "ハンバーグ", tags: ["ひき肉"] },
        { name: "チキンソテー", tags: ["鶏肉"] },
        { name: "鮭のムニエル", tags: ["鮭", "魚"] },
        { name: "ポークチャップ", tags: ["豚肉"] },
        { name: "ミートボールのトマト煮", tags: ["ひき肉", "トマト"] },
        { name: "チキンのトマト煮", tags: ["鶏肉", "トマト"] },
        { name: "白身魚のソテー", tags: ["白身魚", "魚"] },
        { name: "豚ロースのソテー", tags: ["豚肉"] },
        { name: "照り焼きチキンステーキ", tags: ["鶏肉"] },
        { name: "鶏むね肉のチーズ焼き", tags: ["鶏肉", "チーズ"] },
        { name: "オムレツ", tags: ["卵"] },
        { name: "クリーム煮チキン", tags: ["鶏肉", "乳"] },
      ],
      sideDishes: [
        { name: "ポテトサラダ", tags: ["じゃがいも"] },
        { name: "コールスロー", tags: ["キャベツ"] },
        { name: "ブロッコリーサラダ", tags: ["ブロッコリー"] },
        { name: "にんじんラペ", tags: ["にんじん"] },
        { name: "レタスとツナのサラダ", tags: ["レタス", "ツナ", "魚"] },
        { name: "マカロニサラダ", tags: ["マカロニ"] },
        { name: "キャベツサラダ", tags: ["キャベツ"] },
        { name: "コーンバター", tags: ["コーン", "乳"] },
        { name: "温野菜サラダ", tags: ["野菜"] },
        { name: "トマトサラダ", tags: ["トマト"] },
      ],
      soups: [
        { name: "コンソメスープ", tags: [] },
        { name: "玉ねぎスープ", tags: ["玉ねぎ"] },
        { name: "キャベツのスープ", tags: ["キャベツ"] },
        { name: "にんじんスープ", tags: ["にんじん"] },
        { name: "じゃがいものスープ", tags: ["じゃがいも"] },
        { name: "きのこスープ", tags: ["きのこ"] },
        { name: "ベーコンと野菜のスープ", tags: ["豚肉", "肉", "野菜"] },
        { name: "コーンスープ", tags: ["コーン", "乳"] },
      ],
    },
    中華: {
      mainDishes: [
        { name: "麻婆豆腐", tags: ["豆腐", "ひき肉"] },
        { name: "回鍋肉", tags: ["豚肉", "キャベツ"] },
        { name: "青椒肉絲", tags: ["豚肉", "ピーマン"] },
        { name: "酢豚", tags: ["豚肉"] },
        { name: "鶏と白菜の中華煮", tags: ["鶏肉", "白菜"] },
        { name: "八宝菜", tags: ["豚肉", "えび", "白菜"] },
        { name: "ニラ玉", tags: ["ニラ", "卵"] },
        { name: "鶏の甘酢炒め", tags: ["鶏肉"] },
        { name: "豚肉ともやしの中華炒め", tags: ["豚肉", "もやし"] },
        { name: "豆腐とひき肉の炒め物", tags: ["豆腐", "ひき肉"] },
        { name: "えびと卵の炒め物", tags: ["えび", "卵"] },
        { name: "油淋鶏", tags: ["鶏肉"] },
      ],
      sideDishes: [
        { name: "もやしのナムル", tags: ["もやし"] },
        { name: "春雨サラダ", tags: ["春雨"] },
        { name: "きゅうりの中華和え", tags: ["きゅうり"] },
        { name: "トマトの中華だれ", tags: ["トマト"] },
        { name: "きゅうりのごま和え", tags: ["きゅうり", "ごま"] },
        { name: "棒棒鶏風サラダ", tags: ["鶏肉", "肉"] },
        { name: "中華風冷ややっこ", tags: ["豆腐"] },
        { name: "青菜炒め", tags: ["青菜"] },
        { name: "ザーサイあえ", tags: ["ザーサイ"] },
        { name: "豆苗炒め", tags: ["豆苗"] },
      ],
      soups: [
        { name: "卵スープ", tags: ["卵"] },
        { name: "わかめスープ", tags: ["わかめ"] },
        { name: "中華風コーンスープ", tags: ["コーン", "卵"] },
        { name: "中華風わかめスープ", tags: ["わかめ"] },
        { name: "たまごとねぎのスープ", tags: ["卵", "ねぎ"] },
        { name: "豆腐スープ", tags: ["豆腐"] },
        { name: "もやしスープ", tags: ["もやし"] },
        { name: "中華野菜スープ", tags: ["野菜"] },
      ],
    },
    こってり: {
      mainDishes: [
        { name: "チキン南蛮", tags: ["鶏肉", "卵"] },
        { name: "照りマヨチキン", tags: ["鶏肉", "卵"] },
        { name: "チーズハンバーグ", tags: ["ひき肉", "チーズ"] },
        { name: "甘辛だれの唐揚げ", tags: ["鶏肉"] },
        { name: "豚バラとキャベツの味噌炒め", tags: ["豚肉", "キャベツ"] },
        { name: "豚のしょうが焼き", tags: ["豚肉"] },
        { name: "ヤンニョムチキン風", tags: ["鶏肉"] },
        { name: "甘辛チキン", tags: ["鶏肉"] },
        { name: "ガーリックチキン", tags: ["鶏肉", "にんにく"] },
        { name: "味噌だれ豚丼風おかず", tags: ["豚肉"] },
        { name: "こってり鶏の照り焼き", tags: ["鶏肉"] },
        { name: "タルタルチキン", tags: ["鶏肉", "卵"] },
      ],
      sideDishes: [
        { name: "ポテトサラダ", tags: ["じゃがいも"] },
        { name: "マカロニサラダ", tags: ["マカロニ"] },
        { name: "キャベツのサラダ", tags: ["キャベツ"] },
        { name: "コーン入りサラダ", tags: ["コーン"] },
        { name: "ブロッコリーサラダ", tags: ["ブロッコリー"] },
        { name: "フライドポテト風じゃがいも", tags: ["じゃがいも"] },
        { name: "たまごサラダ", tags: ["卵"] },
        { name: "ツナサラダ", tags: ["ツナ", "魚"] },
        { name: "かぼちゃサラダ", tags: ["かぼちゃ"] },
        { name: "コールスロー", tags: ["キャベツ"] },
      ],
      soups: [
        { name: "たまごスープ", tags: ["卵"] },
        { name: "玉ねぎスープ", tags: ["玉ねぎ"] },
        { name: "豆腐の味噌汁", tags: ["豆腐"] },
        { name: "わかめスープ", tags: ["わかめ"] },
        { name: "じゃがいもの味噌汁", tags: ["じゃがいも"] },
        { name: "コンソメスープ", tags: [] },
        { name: "コーンスープ", tags: ["コーン", "乳"] },
        { name: "キャベツスープ", tags: ["キャベツ"] },
      ],
    },
    あっさり: {
      mainDishes: [
        { name: "鶏ささみの梅しそ焼き", tags: ["鶏肉", "梅"] },
        { name: "白身魚の蒸し焼き", tags: ["白身魚", "魚"] },
        { name: "豚しゃぶサラダ", tags: ["豚肉"] },
        { name: "鮭の酒蒸し", tags: ["鮭", "魚"] },
        { name: "鶏むね肉のみぞれ煮", tags: ["鶏肉", "大根"] },
        { name: "湯豆腐", tags: ["豆腐"] },
        { name: "白だし豚しゃぶ", tags: ["豚肉"] },
        { name: "鶏むね肉の和風蒸し", tags: ["鶏肉"] },
        { name: "豆腐ハンバーグ", tags: ["豆腐", "ひき肉"] },
        { name: "鮭のホイル焼き", tags: ["鮭", "魚"] },
        { name: "鶏と大根のやさし煮", tags: ["鶏肉", "大根"] },
        { name: "ささみの塩レモン焼き", tags: ["鶏肉", "レモン"] },
      ],
      sideDishes: [
        { name: "冷ややっこ", tags: ["豆腐"] },
        { name: "小松菜のおひたし", tags: ["小松菜"] },
        { name: "きゅうりの酢の物", tags: ["きゅうり"] },
        { name: "トマトの和風サラダ", tags: ["トマト"] },
        { name: "ほうれん草のおひたし", tags: ["ほうれん草"] },
        { name: "白菜のおかか和え", tags: ["白菜"] },
        { name: "大根サラダ", tags: ["大根"] },
        { name: "わかめときゅうりの酢の物", tags: ["わかめ", "きゅうり"] },
        { name: "オクラのおひたし", tags: ["オクラ"] },
        { name: "もやしのさっぱり和え", tags: ["もやし"] },
      ],
      soups: [
        { name: "白菜の味噌汁", tags: ["白菜"] },
        { name: "豆腐の味噌汁", tags: ["豆腐"] },
        { name: "大根のすまし汁", tags: ["大根"] },
        { name: "豆腐とねぎのすまし汁", tags: ["豆腐", "ねぎ"] },
        { name: "なめこの味噌汁", tags: ["なめこ", "きのこ"] },
        { name: "わかめのすまし汁", tags: ["わかめ"] },
        { name: "玉ねぎの味噌汁", tags: ["玉ねぎ"] },
        { name: "きのこすまし汁", tags: ["きのこ"] },
      ],
    },
    おまかせ: {
      mainDishes: [
        { name: "鶏の照り焼き", tags: ["鶏肉"] },
        { name: "豚のしょうが焼き", tags: ["豚肉"] },
        { name: "鮭のムニエル", tags: ["鮭", "魚"] },
        { name: "ハンバーグ", tags: ["ひき肉"] },
        { name: "麻婆豆腐", tags: ["豆腐", "ひき肉"] },
        { name: "肉じゃが", tags: ["牛肉", "じゃがいも", "玉ねぎ"] },
        { name: "チキンソテー", tags: ["鶏肉"] },
        { name: "酢豚", tags: ["豚肉"] },
        { name: "鮭の塩焼き", tags: ["鮭", "魚"] },
        { name: "チキン南蛮", tags: ["鶏肉", "卵"] },
        { name: "鶏むね肉のみぞれ煮", tags: ["鶏肉", "大根"] },
        { name: "青椒肉絲", tags: ["豚肉", "ピーマン"] },
      ],
      sideDishes: [
        { name: "ポテトサラダ", tags: ["じゃがいも"] },
        { name: "ほうれん草のおひたし", tags: ["ほうれん草"] },
        { name: "コールスロー", tags: ["キャベツ"] },
        { name: "かぼちゃサラダ", tags: ["かぼちゃ"] },
        { name: "もやしのナムル", tags: ["もやし"] },
        { name: "冷ややっこ", tags: ["豆腐"] },
        { name: "きんぴらごぼう", tags: ["ごぼう"] },
        { name: "ブロッコリーサラダ", tags: ["ブロッコリー"] },
        { name: "きゅうりの酢の物", tags: ["きゅうり"] },
        { name: "にんじんラペ", tags: ["にんじん"] },
      ],
      soups: [
        { name: "豆腐の味噌汁", tags: ["豆腐"] },
        { name: "コンソメスープ", tags: [] },
        { name: "卵スープ", tags: ["卵"] },
        { name: "わかめの味噌汁", tags: ["わかめ"] },
        { name: "玉ねぎスープ", tags: ["玉ねぎ"] },
        { name: "白菜の味噌汁", tags: ["白菜"] },
        { name: "コーンスープ", tags: ["コーン", "乳"] },
        { name: "中華野菜スープ", tags: ["野菜"] },
      ],
    },
  };
}, []);
      const getRandomItem = <T,>(items: T[]): T => {
        return items[Math.floor(Math.random() * items.length)];
      };

      const normalizeFoodOptions = (
        items: MaybeTaggedFoodOption[]
      ): NamedFoodOption[] => {
        return items.map((item) => {
          if (typeof item === "string") {
            return {
              name: item,
              tags: [],
            };
          }
      
          return item;
        });
      };
          const avoidIngredientList = avoidIngredients
            .split(/[、,\s]+/)
            .map((item) => item.trim())
            .filter(Boolean);

          const generateMenus = (): MenuItem[] => {
            const now = new Date().toISOString();
            const selectedMood = dishOptions[mood] || dishOptions["おまかせ"];
            const usedCombinations = new Set<string>();

            const filteredMainDishes = selectedMood.mainDishes.filter((dish) => {
                return !dish.tags.some((tag) => avoidIngredientList.includes(tag));
              });
              
              if (filteredMainDishes.length === 0) {
                return [];
              }
              
              const normalizedSideDishes = normalizeFoodOptions(selectedMood.sideDishes);
              const normalizedSoups = normalizeFoodOptions(selectedMood.soups);
              
              const filteredSideDishes = normalizedSideDishes.filter((dish) => {
                return !dish.tags.some((tag) => avoidIngredientList.includes(tag));
              });
              
              const filteredSoups = normalizedSoups.filter((soup) => {
                return !soup.tags.some((tag) => avoidIngredientList.includes(tag));
              });
              
              if (filteredSideDishes.length === 0 || filteredSoups.length === 0) {
                return [];
              }

                  console.log("avoidIngredientList", avoidIngredientList);
                  console.log(
                    "selectedMood.mainDishes",
                    selectedMood.mainDishes.map((dish) => ({
                      name: dish.name,
                      tags: dish.tags,
                    }))
                  );
                  console.log(
                    "filteredMainDishes",
                    filteredMainDishes.map((dish) => ({
                      name: dish.name,
                      tags: dish.tags,
                    }))
                  );
          
            return Array.from({ length: 3 }).map((_, index) => {
              let mainDish = "";
              let sideDish = "";
              let soup = "";
              let combinationKey = "";
          
              do {
                const selectedMainDish = getRandomItem(filteredMainDishes);
                mainDish = selectedMainDish.name;
                sideDish = getRandomItem(filteredSideDishes).name;
                soup = getRandomItem(filteredSoups).name;
                combinationKey = `${mainDish}-${sideDish}-${soup}`;
              } while (usedCombinations.has(combinationKey));
          
              usedCombinations.add(combinationKey);
          
              return {
                id: `${mainDish}-${sideDish}-${soup}-${index}-${refreshCount}`,
                title: `${mood === "おまかせ" ? "おすすめ" : mood}の献立`,
                mainDish,
                sideDish,
                soup,
                estimatedTime: `${cookingTime}分`,
                budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
                nutritionComment:
                  "主菜・副菜・汁物を組み合わせて、バランスよくまとまりやすい献立です。",
                reason: avoidIngredients.trim()
                  ? `「${avoidIngredients}」を避けやすい候補を考えながら、組み合わせで作った献立です。`
                  : "今の条件に合わせて、組み合わせで作った献立です。",
                createdAt: now,
                sourceConditions: {
                  familySize,
                  cookingTime,
                  budgetLevel,
                  avoidIngredients,
                  mood,
                },
              };
            });
          };

          const convertAiMenusToMenuItems = (
            aiMenus: GeneratedMenuFromAI[]
          ): MenuItem[] => {
            const now = new Date().toISOString();
          
            return aiMenus.map((menu, index) => ({
              id: `${menu.mainDish}-${menu.sideDish}-${menu.soup}-${index}-${refreshCount}`,
              title: menu.title || `${mood === "おまかせ" ? "おすすめ" : mood}の献立`,
              mainDish: menu.mainDish,
              sideDish: menu.sideDish,
              soup: menu.soup,
              estimatedTime: `${cookingTime}分`,
              budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
              nutritionComment:
                "主菜・副菜・汁物を組み合わせて、バランスよくまとまりやすい献立です。",
              reason: menu.reason || "今の条件に合わせて、AIが提案した献立です。",
              aiReason: menu.reason || "",
              shoppingList: [],
              createdAt: now,
              sourceConditions: {
                familySize,
                cookingTime,
                budgetLevel,
                avoidIngredients,
                mood,
              },
            }));
          };

          useEffect(() => {
            const generateMenusWithAI = async () => {
              setIsMenuReady(false);
              setIsAiGenerating(true);
              setUsedFallback(false);
          
              try {
                const response = await fetch("/api/menu-generate", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    familySize,
                    cookingTime,
                    budgetLevel,
                    avoidIngredients,
                    mood,
                  }),
                });
          
                const data = await response.json();
          
                if (data.success && Array.isArray(data.menus) && data.menus.length > 0) {
                  const nextMenus = convertAiMenusToMenuItems(data.menus);
                  setMenus(nextMenus);
                  setUsedFallback(false);
                  return;
                }
          
                const fallbackMenus = generateMenus();
                setMenus(fallbackMenus);
                setUsedFallback(true);
              } catch (error) {
                console.error("AI献立生成に失敗しました。固定ロジックにフォールバックします。", error);
          
                const fallbackMenus = generateMenus();
                setMenus(fallbackMenus);
                setUsedFallback(true);
              } finally {
                setIsAiGenerating(false);
                setIsMenuReady(true);
              }
            };
          
            generateMenusWithAI();
          }, [
            familySize,
            cookingTime,
            budgetLevel,
            avoidIngredients,
            mood,
            refreshCount,
          ]);

          useEffect(() => {
            if (menus.length === 0) {
              setAiReasons([]);
              return;
            }
          
            const fetchAllReasons = async () => {
              try {
                const response = await fetch("/api/menu-reason", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    familySize,
                    cookingTime,
                    budgetLevel,
                    avoidIngredients,
                    mood,
                    menus: menus.map((menu) => ({
                      mainDish: menu.mainDish,
                      sideDish: menu.sideDish,
                      soup: menu.soup,
                    })),
                  }),
                });
          
                const data = await response.json();
          
                if (data.success && Array.isArray(data.reasons)) {
                  setAiReasons(data.reasons);
                  return;
                }
          
                setAiReasons([]);
              } catch (error) {
                console.error("AI理由文の取得に失敗しました", error);
                setAiReasons([]);
              }
            };
          
            fetchAllReasons();
          }, [menus, familySize, cookingTime, budgetLevel, avoidIngredients, mood]);

          

          useEffect(() => {
            try {
              const existing = localStorage.getItem("menuHistory");
              const parsed: MenuItem[] = existing ? JSON.parse(existing) : [];
          
              const menusWithAiReason: MenuItem[] = menus.map((menu, index) => ({
                ...menu,
                aiReason: aiReasons[index] || menu.aiReason || "",
              }));
          
              const newHistoryItems = menusWithAiReason.filter((menu) => {
                return !parsed.some(
                  (item) =>
                    item.title === menu.title &&
                    item.mainDish === menu.mainDish &&
                    item.sideDish === menu.sideDish &&
                    item.soup === menu.soup
                );
              });
          
              if (newHistoryItems.length === 0) {
                return;
              }
          
              const updated = [...newHistoryItems, ...parsed].slice(0, 30);
              localStorage.setItem("menuHistory", JSON.stringify(updated));
            } catch (error) {
              console.error(error);
            }
          }, [menus, aiReasons]);

          const handleSave = (menu: MenuItem, index: number) => {
            try {
              const existing = localStorage.getItem("favoriteMenus");
              const parsed: MenuItem[] = existing ? JSON.parse(existing) : [];
          
              const menuWithDetails: MenuItem = {
                ...menu,
                aiReason: aiReasons[index] || menu.aiReason || "",
                shoppingList: shoppingLists[menu.id] || menu.shoppingList || [],
              };
          
              const alreadyExists = parsed.some(
                (item) =>
                  item.title === menuWithDetails.title &&
                  item.mainDish === menuWithDetails.mainDish &&
                  item.sideDish === menuWithDetails.sideDish &&
                  item.soup === menuWithDetails.soup
              );
          
              if (alreadyExists) {
                showToast("この献立はすでに保存されています", "error");
                return;
              }
          
              const updated = [menuWithDetails, ...parsed];
              localStorage.setItem("favoriteMenus", JSON.stringify(updated));
showToast("保存しました", "success");
            } catch (error) {
              console.error(error);
              showToast("保存に失敗しました", "error");
            }
          };

          const showToast = (message: string, type: "success" | "error") => {
            setToast({ message, type });
          
            window.setTimeout(() => {
              setToast(null);
            }, 3000);
          };


          const handleGenerateShoppingList = async (menu: MenuItem) => {
            try {
                if (shoppingLists[menu.id]) {
                    setShoppingLists((prev) => ({
                      ...prev,
                      [menu.id]: [],
                    }));
                  
                    setCheckedShoppingItems((prev) => {
                      const next = { ...prev };
                  
                      Object.keys(next).forEach((key) => {
                        if (key.startsWith(`${menu.id}-`)) {
                          delete next[key];
                        }
                      });
                  
                      return next;
                    });
                  
                    return;
                  }
          
              setLoadingShoppingId(menu.id);
          
              const response = await fetch("/api/shopping-list", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  familySize,
                  mainDish: menu.mainDish,
                  sideDish: menu.sideDish,
                  soup: menu.soup,
                }),
              });
          
              const data = await response.json();
          
              if (
                data.success &&
                Array.isArray(data.shoppingList) &&
                data.shoppingList.every(
                  (item: ShoppingListItem) =>
                    item &&
                    typeof item.name === "string" &&
                    typeof item.amount === "string"
                )
              ) {
                setShoppingLists((prev) => ({
                  ...prev,
                  [menu.id]: data.shoppingList,
                }));
                return;
              }
          
              alert("買い物リストの生成に失敗しました");
            } catch (error) {
              console.error(error);
              alert("買い物リストの生成に失敗しました");
            } finally {
              setLoadingShoppingId("");
            }
          };

          const handleToggleShoppingItem = (
            menuId: string,
            itemName: string,
            itemAmount: string
          ) => {
            const key = `${menuId}-${itemName}-${itemAmount}`;
          
            setCheckedShoppingItems((prev) => ({
              ...prev,
              [key]: !prev[key],
            }));
          };

          const handleGenerateRecipe = async (menu: MenuItem) => {
            try {
              if (recipeStepsMap[menu.id]) {
                setRecipeStepsMap((prev) => {
                  const next = { ...prev };
                  delete next[menu.id];
                  return next;
                });
                return;
              }
          
              setLoadingRecipeId(menu.id);
          
              const response = await fetch("/api/menu-recipe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  familySize,
                  mainDish: menu.mainDish,
                  sideDish: menu.sideDish,
                  soup: menu.soup,
                }),
              });
          
              const data = await response.json();
          
              if (
                data.success &&
                data.recipe &&
                Array.isArray(data.recipe.mainDishSteps) &&
                Array.isArray(data.recipe.sideDishSteps) &&
                Array.isArray(data.recipe.soupSteps)
              ) {
                setRecipeStepsMap((prev) => ({
                  ...prev,
                  [menu.id]: data.recipe,
                }));
                return;
              }
          
              alert("作り方の生成に失敗しました");
            } catch (error) {
              console.error(error);
              alert("作り方の生成に失敗しました");
            } finally {
              setLoadingRecipeId("");
            }
          };

  const handleRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  const handleEditConditions = () => {
    router.push("/create");
  };
  const handleRetryWithoutAvoidIngredients = () => {
    const params = new URLSearchParams({
      familySize,
      cookingTime,
      budgetLevel,
      avoidIngredients: "",
      mood,
    });
  
    router.push(`/result?${params.toString()}`);
  };

  if (!isMenuReady) {
    return (
      <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold text-gray-800">献立を準備中...</p>
          <p className="mt-2 text-sm text-gray-600">
            条件に合う候補を作っています。
          </p>
        </div>
      </main>
    );
  }
  if (menus.length === 0) {
    return (
      <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-lg font-semibold text-gray-800">
            条件に合う献立が見つかりませんでした
          </p>
          <p className="mt-2 text-sm text-gray-600">
            避けたい食材を少し減らすか、気分を変えてもう一度試してください。
          </p>
  
          <div className="mt-4 rounded-2xl bg-pink-50 px-4 py-3 text-sm text-gray-700">
            <p className="font-semibold text-gray-800">現在の条件</p>
            <p className="mt-2">家族人数：{familySize}人</p>
            <p>調理時間：{cookingTime}分</p>
            <p>予算感：{budgetLevel}</p>
            <p>気分：{mood}</p>
            <p>避けたい食材：{avoidIngredients || "なし"}</p>
          </div>
  
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRetryWithoutAvoidIngredients}
              className="rounded-full bg-green-200 px-6 py-3 font-bold text-gray-800 transition hover:bg-green-300"
            >
              避けたい食材をクリアして再検索
            </button>
  
            <a
              href="/create"
              className="rounded-full bg-pink-300 px-6 py-3 font-bold text-white shadow-md transition hover:bg-pink-400"
            >
              条件を編集する
            </a>
  
            <a
              href="/"
              className="rounded-full bg-gray-200 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
            >
              トップへ戻る
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
        {toast ? (
  <div className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] max-w-sm">
    <div
      className={`rounded-2xl border px-5 py-4 text-sm font-semibold shadow-lg ${
        toast.type === "success"
          ? "border-green-200 bg-green-50 text-green-700"
          : "border-red-200 bg-red-50 text-red-700"
      }`}
    >
      {toast.message}
    </div>
  </div>
) : null}
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleEditConditions}
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            ← 条件を編集する
          </button>
          <a
            href="/"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            トップへ戻る
          </a>
          <a
            href="/saved"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            保存一覧へ
          </a>
        </div>

        <div className="mb-8 rounded-[32px] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-2 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
                献立候補
              </p>
              <h1 className="mb-3 text-3xl font-bold text-gray-800">
                今日のおすすめ献立
              </h1>
              <p className="text-sm leading-6 text-gray-600">
                入力条件に合わせて、夕食候補を3つ表示しています。
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                条件を少し変えたいときは「条件を編集する」からすぐ調整できます。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleEditConditions}
                className="rounded-full bg-pink-100 px-6 py-3 text-sm font-bold text-pink-600 transition hover:bg-pink-200"
              >
                条件を編集する
              </button>

              <button
                type="button"
                onClick={handleRefresh}
                className="rounded-full bg-[#d8f3dc] px-6 py-3 text-sm font-bold text-gray-700 shadow-md transition hover:scale-[1.01]"
              >
                別の候補にする
              </button>
            </div>
          </div>

          {isAiGenerating ? (
  <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
    AIが条件に合う献立を考えています...
  </div>
) : null}

{usedFallback ? (
  <div className="mt-4 rounded-2xl bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
    今回は通常候補を表示しています。
  </div>
) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl bg-pink-50 px-4 py-3">
              <p className="text-xs text-gray-500">家族人数</p>
              <p className="font-semibold text-gray-800">{familySize}人</p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-4 py-3">
              <p className="text-xs text-gray-500">調理時間</p>
              <p className="font-semibold text-gray-800">{cookingTime}分</p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-4 py-3">
              <p className="text-xs text-gray-500">予算感</p>
              <p className="font-semibold text-gray-800">{budgetLevel}</p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-4 py-3">
              <p className="text-xs text-gray-500">避けたい食材</p>
              <p className="font-semibold text-gray-800">
                {avoidIngredients || "なし"}
              </p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-4 py-3">
              <p className="text-xs text-gray-500">気分</p>
              <p className="font-semibold text-gray-800">{mood}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menus.map((menu, index) => (
            <div
              key={menu.id}
              className="rounded-[32px] bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
                  候補 {index + 1}
                </span>
                <span className="text-sm text-gray-500">
                  {menu.estimatedTime}
                </span>
              </div>

              <h2 className="mb-4 text-xl font-bold text-gray-800">
                {menu.title}
              </h2>

              <div className="mb-4 space-y-3 text-sm leading-6">
                <div>
                  <p className="font-semibold text-gray-800">主菜</p>
                  <p className="text-gray-600">{menu.mainDish}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">副菜</p>
                  <p className="text-gray-600">{menu.sideDish}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">汁物</p>
                  <p className="text-gray-600">{menu.soup}</p>
                </div>
              </div>

              <div className="mb-3 rounded-2xl bg-[#fff7fb] px-4 py-3 text-sm text-gray-600">
                <p className="mb-1 font-semibold text-gray-800">予算感</p>
                <p>{menu.budgetComment}</p>
              </div>

              <div className="mb-3 rounded-2xl bg-[#f8fff8] px-4 py-3 text-sm text-gray-600">
                <p className="mb-1 font-semibold text-gray-800">
                  栄養バランス
                </p>
                <p>{menu.nutritionComment}</p>
              </div>

              <div className="mb-5 rounded-2xl bg-[#fffdf4] px-4 py-3 text-sm text-gray-600">
  <p className="mb-1 font-semibold text-gray-800">
    おすすめ理由
  </p>
  <p>{aiReasons[index] || menu.reason}</p>
</div>

              <button
                type="button"
                onClick={() => handleSave(menu, index)}
                className="w-full rounded-full bg-pink-300 px-5 py-3 font-bold text-white shadow-md transition hover:scale-[1.01] hover:bg-pink-400"
              >
                この献立を保存
              </button>
              <button
  type="button"
  onClick={() => handleGenerateShoppingList(menu)}
  className="mt-3 w-full rounded-full bg-blue-100 px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-200"
>
  {loadingShoppingId === menu.id
    ? "買い物リストを作成中..."
    : shoppingLists[menu.id]?.length
      ? "買い物リストを閉じる"
      : "買い物リストを見る"}
</button>

<button
  type="button"
  onClick={() => handleGenerateRecipe(menu)}
  className="mt-3 w-full rounded-full bg-orange-100 px-5 py-3 font-bold text-orange-700 transition hover:bg-orange-200"
>
  {loadingRecipeId === menu.id
    ? "作り方を作成中..."
    : recipeStepsMap[menu.id]
      ? "作り方を閉じる"
      : "作り方を見る"}
</button>

{shoppingLists[menu.id]?.length ? (
  <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-4 text-sm text-gray-700">
    <p className="mb-2 font-semibold text-gray-800">買い物リスト</p>
    <ul className="space-y-2">
      {shoppingLists[menu.id].map((item, itemIndex) => {
        const checkKey = `${menu.id}-${item.name}-${item.amount}`;
        const isChecked = checkedShoppingItems[checkKey] || false;

        return (
          <li
            key={`${menu.id}-${item.name}-${item.amount}-${itemIndex}`}
            className={`rounded-xl px-3 py-2 transition ${
              isChecked ? "bg-gray-100 text-gray-400" : "bg-white text-gray-700"
            }`}
          >
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() =>
                  handleToggleShoppingItem(menu.id, item.name, item.amount)
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className={isChecked ? "line-through" : ""}>
                {item.name}：{item.amount}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  </div>
) : null}

{recipeStepsMap[menu.id] ? (
  <div className="mt-4 rounded-2xl bg-orange-50 px-4 py-4 text-sm text-gray-700">
    <p className="mb-3 font-semibold text-gray-800">作り方</p>

    <div className="space-y-4">
      <div>
        <p className="mb-2 font-semibold text-gray-800">主菜：{menu.mainDish}</p>
        <ul className="mb-3 space-y-2">
  {recipeStepsMap[menu.id].mainDishIngredients.map((item, ingredientIndex) => (
    <li
      key={`${menu.id}-main-ingredient-${ingredientIndex}`}
      className="rounded-xl bg-[#fff7ed] px-3 py-2"
    >
      {item.name}：{item.amount}
    </li>
  ))}
</ul>
        <ol className="space-y-2">
          {recipeStepsMap[menu.id].mainDishSteps.map((step, stepIndex) => (
            <li
              key={`${menu.id}-main-${stepIndex}`}
              className="rounded-xl bg-white px-3 py-2"
            >
              {stepIndex + 1}. {step}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="mb-2 font-semibold text-gray-800">副菜：{menu.sideDish}</p>
        <ul className="mb-3 space-y-2">
  {recipeStepsMap[menu.id].sideDishIngredients.map((item, ingredientIndex) => (
    <li
      key={`${menu.id}-side-ingredient-${ingredientIndex}`}
      className="rounded-xl bg-[#fff7ed] px-3 py-2"
    >
      {item.name}：{item.amount}
    </li>
  ))}
</ul>
        <ol className="space-y-2">
          {recipeStepsMap[menu.id].sideDishSteps.map((step, stepIndex) => (
            <li
              key={`${menu.id}-side-${stepIndex}`}
              className="rounded-xl bg-white px-3 py-2"
            >
              {stepIndex + 1}. {step}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="mb-2 font-semibold text-gray-800">汁物：{menu.soup}</p>
        <ul className="mb-3 space-y-2">
  {recipeStepsMap[menu.id].soupIngredients.map((item, ingredientIndex) => (
    <li
      key={`${menu.id}-soup-ingredient-${ingredientIndex}`}
      className="rounded-xl bg-[#fff7ed] px-3 py-2"
    >
      {item.name}：{item.amount}
    </li>
  ))}
</ul>
        <ol className="space-y-2">
          {recipeStepsMap[menu.id].soupSteps.map((step, stepIndex) => (
            <li
              key={`${menu.id}-soup-${stepIndex}`}
              className="rounded-xl bg-white px-3 py-2"
            >
              {stepIndex + 1}. {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
) : null}

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
          <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-gray-800">読み込み中...</p>
            <p className="mt-2 text-sm text-gray-600">
              献立候補を準備しています。
            </p>
          </div>
        </main>
      }
    >
      <ResultContent />
    </Suspense>
  );
}