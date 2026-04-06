"use client";

import { buildRecipeFromDb } from "@/lib/menu-recipe-db";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Toast from "@/components/Toast";
import {
  MAIN_DISHES,
  SIDE_DISHES,
  SOUP_DISHES,
  type DishData,
  DISHES,
} from "@/lib/menu-data";
import type {
  MenuItem,
  RecipeIngredientItem,
  RecipeSteps,
  ShoppingListItem,
} from "@/lib/menu-types";


  type GeneratedMenuFromAI = {
    title: string;
    mainDish: string;
    sideDish: string;
    soup: string;
    reason: string;
  };


  type ToastState = {
    message: string;
    type: "success" | "error";
  } | null;


function ResultContent() {
  const searchParams = useSearchParams();
  const viewMode = searchParams.get("view") || "";
const isDecidedView = viewMode === "decided";
  const router = useRouter();

  const familySize = searchParams.get("familySize") || "3";
  const cookingTime = searchParams.get("cookingTime") || "30";
  const budgetLevel = searchParams.get("budgetLevel") || "ふつう";
  const avoidIngredients = searchParams.get("avoidIngredients") || "";
  const mood = searchParams.get("mood") || "おまかせ";
  const preferredIngredients = searchParams.get("preferredIngredients") || "";

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
const [decidedMenuKey, setDecidedMenuKey] = useState("");
const [menuImageMap, setMenuImageMap] = useState<Record<string, string>>({});

const getMenuDecisionKey = (menu: MenuItem) => {
  return `${menu.title}__${menu.mainDish}__${menu.sideDish}__${menu.soup}`;
};


  
const handleDecideMenu = (menu: MenuItem) => {
    try {
      const nextKey = getMenuDecisionKey(menu);
  
      if (decidedMenuKey === nextKey) {
        localStorage.removeItem("decidedDinnerMenu");
        setDecidedMenuKey("");
        showToast("献立の決定を解除しました", "success");
        return;
      }
  
      localStorage.setItem(
        "decidedDinnerMenu",
        JSON.stringify({
          key: nextKey,
          menu,
        })
      );
  
      setDecidedMenuKey(nextKey);
      showToast("今日の献立を決定しました", "success");
    } catch (error) {
      console.error(error);
      showToast("献立の決定に失敗しました", "error");
    }
  };

          const avoidIngredientList = avoidIngredients
            .split(/[、,\s]+/)
            .map((item) => item.trim())
            .filter(Boolean);

            const preferredIngredientList = preferredIngredients
  .split(/[、,\s]+/)
  .map((item) => item.trim())
  .filter(Boolean);

  const generateMenus = (): MenuItem[] => {
    const now = new Date().toISOString();
    const usedCombinations = new Set<string>();
  
    const moodMatched = (dish: DishData) => {
      return mood === "おまかせ" || dish.moods.includes(mood as DishData["moods"][number]);
    };
  
    const budgetMatched = (dish: DishData) => {
      if (budgetLevel === "節約") {
        return dish.budgetLevel === "節約";
      }
  
      return true;
    };
  
    const cookingTimeMatched = (dish: DishData) => {
      return dish.cookingTime <= Number(cookingTime);
    };
  
    const avoidMatched = (dish: DishData) => {
      return !dish.tags.some((tag) => avoidIngredientList.includes(tag));
    };
  
    const countPreferredMatches = (dish: DishData) => {
      if (preferredIngredientList.length === 0) {
        return 0;
      }
  
      return dish.tags.filter((tag) => preferredIngredientList.includes(tag)).length;
    };
  
    const buildCandidates = (dishes: DishData[]) => {
      const filtered = dishes.filter(
        (dish) =>
          moodMatched(dish) &&
          budgetMatched(dish) &&
          cookingTimeMatched(dish) &&
          avoidMatched(dish)
      );
  
      if (preferredIngredientList.length === 0) {
        return filtered;
      }
  
      const preferredMatched = filtered
        .map((dish) => ({
          dish,
          score: countPreferredMatches(dish),
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.dish);
  
      return preferredMatched.length > 0 ? preferredMatched : filtered;
    };
  
    const mainCandidates = buildCandidates(MAIN_DISHES);
    const sideCandidates = buildCandidates(SIDE_DISHES);
    const soupCandidates = buildCandidates(SOUP_DISHES);
  
    if (
      mainCandidates.length === 0 ||
      sideCandidates.length === 0 ||
      soupCandidates.length === 0
    ) {
      return [];
    }
  
    const getRandomItem = <T,>(items: T[]): T => {
      return items[Math.floor(Math.random() * items.length)];
    };
  
    const nextMenus: MenuItem[] = [];
  
    for (let index = 0; index < 3; index++) {
      let combinationKey = "";
      let selectedMain: DishData | null = null;
      let selectedSide: DishData | null = null;
      let selectedSoup: DishData | null = null;
      let guard = 0;
  
      do {
        selectedMain = getRandomItem(mainCandidates);
        selectedSide = getRandomItem(sideCandidates);
        selectedSoup = getRandomItem(soupCandidates);
  
        combinationKey = `${selectedMain.id}-${selectedSide.id}-${selectedSoup.id}`;
        guard += 1;
  
        if (guard > 20) {
          break;
        }
      } while (usedCombinations.has(combinationKey));
  
      if (!selectedMain || !selectedSide || !selectedSoup) {
        continue;
      }
  
      usedCombinations.add(combinationKey);
  
      nextMenus.push({
        id: `${selectedMain.id}-${selectedSide.id}-${selectedSoup.id}-${index}-${refreshCount}`,
        title: `${mood === "おまかせ" ? "おすすめ" : mood}の献立`,
        mainDish: selectedMain.name,
        sideDish: selectedSide.name,
        soup: selectedSoup.name,
        estimatedTime: `${Math.max(
          selectedMain.cookingTime,
          selectedSide.cookingTime,
          selectedSoup.cookingTime
        )}分`,
        budgetComment:
          selectedMain.budgetLevel === "節約" &&
          selectedSide.budgetLevel === "節約" &&
          selectedSoup.budgetLevel === "節約"
            ? "節約寄り"
            : "ふつう",
        nutritionComment:
          "主菜・副菜・汁物を組み合わせて、バランスよくまとまりやすい献立です。",
        reason:
          preferredIngredientList.length > 0
            ? `入れたい食材を意識しながら、条件に合う組み合わせで作った献立です。`
            : avoidIngredients.trim()
            ? `避けたい食材を外しながら、条件に合う組み合わせで作った献立です。`
            : "今の条件に合わせて、データベースから組み合わせた献立です。",
        createdAt: now,
        sourceConditions: {
          familySize,
          cookingTime,
          budgetLevel,
          avoidIngredients,
          preferredIngredients,
          mood,
        },
      });
    }
  
    return nextMenus;
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
                preferredIngredients,
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
                if (isDecidedView) {
                  const saved = localStorage.getItem("decidedDinnerMenu");
          
                  if (saved && saved.startsWith("{")) {
                    const parsed = JSON.parse(saved);
                    const decidedMenu = parsed.menu;
          
                    if (decidedMenu) {
                      const decidedMenuItem: MenuItem = {
                        ...decidedMenu,
                        id: `${decidedMenu.mainDish}-${decidedMenu.sideDish}-${decidedMenu.soup}-decided`,
                        estimatedTime: decidedMenu.estimatedTime || `${cookingTime}分`,
                        budgetComment:
                          decidedMenu.budgetComment ||
                          (budgetLevel === "節約" ? "節約寄り" : "ふつう"),
                        nutritionComment:
                          decidedMenu.nutritionComment ||
                          "主菜・副菜・汁物を組み合わせて、バランスよくまとまりやすい献立です。",
                        reason:
                          decidedMenu.reason || "今日の献立として決定した内容です。",
                        aiReason: decidedMenu.aiReason || "",
                        shoppingList: decidedMenu.shoppingList || [],
                        createdAt: decidedMenu.createdAt || new Date().toISOString(),
                        sourceConditions:
                          decidedMenu.sourceConditions || {
                            familySize,
                            cookingTime,
                            budgetLevel,
                            avoidIngredients,
                            preferredIngredients,
                            mood,
                          },
                      };
          
                      setMenus([decidedMenuItem]);
                      setUsedFallback(false);
                      return;
                    }
                  }
          
                  setMenus([]);
                  setUsedFallback(false);
                  return;
                }
          
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
                    preferredIngredients,
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
            preferredIngredients,
            mood,
            refreshCount,
            isDecidedView,
          ]);

          useEffect(() => {
            try {
              const saved = localStorage.getItem("decidedDinnerMenu");
          
              if (!saved) {
                setDecidedMenuKey("");
                return;
              }
          
              if (saved.startsWith("{")) {
                const parsed = JSON.parse(saved);
                setDecidedMenuKey(parsed.key || "");
                return;
              }
          
              setDecidedMenuKey(saved);
            } catch (error) {
              console.error("決定済み献立の復元に失敗しました", error);
              setDecidedMenuKey("");
            }
          }, []);

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
            if (menus.length === 0) {
              setMenuImageMap({});
              return;
            }
          
            try {
              const nextMap = menus.reduce<Record<string, string>>((acc, menu) => {
                const matchedDish = DISHES.find((dish) => dish.name === menu.mainDish);
          
                if (matchedDish?.imageUrl) {
                  acc[menu.id] = matchedDish.imageUrl;
                }
          
                return acc;
              }, {});
          
              setMenuImageMap(nextMap);
            } catch (error) {
              console.error("DB画像の取得に失敗しました", error);
              setMenuImageMap({});
            }
          }, [menus]);

          const getDishImageUrlByName = (dishName: string) => {
            const matchedDish = DISHES.find((dish) => dish.name === dishName);
            return matchedDish?.imageUrl || "";
          };



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
          
              const dbRecipe = buildRecipeFromDb({
                mainDish: menu.mainDish,
                sideDish: menu.sideDish,
                soup: menu.soup,
              });
          
              if (dbRecipe) {
                setRecipeStepsMap((prev) => ({
                  ...prev,
                  [menu.id]: dbRecipe,
                }));
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

          const renderIngredientGroups = (
            groups: { label: string; items: { name: string; amount: string }[] }[] = [],
            fallbackItems: { name: string; amount: string }[] = [],
            menuId: string,
            sectionKey: "main" | "side" | "soup"
          ) => {
            if (groups.length > 0) {
              return (
                <div className="mb-3 space-y-3">
                  {groups.map((group, groupIndex) => (
                    <div
                      key={`${menuId}-${sectionKey}-group-${group.label}-${groupIndex}`}
                      className="rounded-2xl bg-[#fff7ed] px-3 py-3"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-700">
                          {group.label}
                        </span>
                      </div>
          
                      <ul className="space-y-2">
                        {group.items.map((item, itemIndex) => (
                          <li
                            key={`${menuId}-${sectionKey}-group-item-${groupIndex}-${itemIndex}`}
                            className="rounded-xl bg-white px-3 py-2"
                          >
                            {item.name}：{item.amount}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            }
          
            return (
              <ul className="mb-3 space-y-2">
                {fallbackItems.map((item, ingredientIndex) => (
                  <li
                    key={`${menuId}-${sectionKey}-ingredient-${ingredientIndex}`}
                    className="rounded-xl bg-[#fff7ed] px-3 py-2"
                  >
                    {item.name}：{item.amount}
                  </li>
                ))}
              </ul>
            );
          };
          
          const getRecipeLabel = (
            groups: { label: string; items: { name: string; amount: string }[] }[] = []
          ) => {
            if (groups.length === 0) {
              return "材料";
            }
          
            const labels = groups.map((group) => group.label).join("・");
            return `材料（${labels}）`;
          };

          const renderRecipeDishImage = (dishName: string) => {
            const imageUrl = getDishImageUrlByName(dishName);
          
            if (!imageUrl) {
              return null;
            }
          
            return (
              <img
                src={imageUrl}
                alt={dishName}
                className="mb-3 h-50 w-full rounded-2xl object-cover "
              />
            );
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
      preferredIngredients,
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
        {toast ? <Toast message={toast.message} type={toast.type} /> : null}
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
              {decidedMenuKey ? (
  <div className="mt-4 rounded-[24px] border border-green-200 bg-green-50 px-5 py-4">
    <p className="text-sm font-bold text-green-700">今日の献立は決定済みです</p>
    <p className="mt-1 text-sm text-gray-700">
      下の候補の中から、1つ選んで夕食を決めました。
    </p>

  </div>
) : (
  <div className="mt-4 rounded-[24px] border border-pink-100 bg-pink-50 px-5 py-4">
    <p className="text-sm font-bold text-pink-600">まだ決まっていません</p>
    <p className="mt-1 text-sm text-gray-700">
      気に入った候補があれば「この献立に決める」を押してください。
    </p>
  </div>
)}
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
  <p className="text-xs text-gray-500">入れたい食材</p>
  <p className="font-semibold text-gray-800">
    {preferredIngredients || "なし"}
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
              className={`rounded-[32px] p-6 shadow-sm ${
                decidedMenuKey === getMenuDecisionKey(menu)
                  ? "border-2 border-green-300 bg-green-50"
                  : "bg-white"
              }`}
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

              {menuImageMap[menu.id] ? (
  <img
    src={menuImageMap[menu.id]}
    alt={menu.mainDish}
    className="mb-4 h-50 w-full rounded-[24px] object-cover"
  />
) : (
  <div className="mb-4 flex h-50 w-full items-center justify-center rounded-[24px] bg-pink-50 text-sm text-gray-500">
    画像を読み込み中...
  </div>
)}

<div className="mb-4 space-y-4 text-sm leading-6">
  <div>
    <p className="font-semibold text-gray-800">主菜</p>
    <p className="mb-2 text-gray-600">{menu.mainDish}</p>
  </div>

  <div>
    <p className="font-semibold text-gray-800">副菜</p>
    {getDishImageUrlByName(menu.sideDish) ? (
      <img
        src={getDishImageUrlByName(menu.sideDish)}
        alt={menu.sideDish}
        className="mt-2 mb-2 h-50 w-full rounded-2xl object-cover"
      />
    ) : null}
    <p className="text-gray-600">{menu.sideDish}</p>
  </div>

  <div>
    <p className="font-semibold text-gray-800">汁物</p>
    {getDishImageUrlByName(menu.soup) ? (
      <img
        src={getDishImageUrlByName(menu.soup)}
        alt={menu.soup}
        className="mt-2 mb-2 h-50 w-full rounded-2xl object-cover"
      />
    ) : null}
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
  onClick={() => handleDecideMenu(menu)}
  className={`mb-3 w-full rounded-full px-5 py-3 font-bold transition ${
    decidedMenuKey === getMenuDecisionKey(menu)
      ? "bg-green-500 text-white shadow-md"
      : "bg-green-100 text-green-700 hover:bg-green-200"
  }`}
>
  {decidedMenuKey === getMenuDecisionKey(menu)
    ? "この献立に決定済み"
    : "この献立に決める"}
</button>

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
  {renderRecipeDishImage(menu.mainDish)}
  <p className="mb-2 text-xs font-semibold text-gray-500">
    {getRecipeLabel(recipeStepsMap[menu.id].mainDishIngredientGroups)}
  </p>
  {renderIngredientGroups(
    recipeStepsMap[menu.id].mainDishIngredientGroups,
    recipeStepsMap[menu.id].mainDishIngredients,
    menu.id,
    "main"
  )}
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
  {renderRecipeDishImage(menu.sideDish)}
  <p className="mb-2 text-xs font-semibold text-gray-500">
    {getRecipeLabel(recipeStepsMap[menu.id].sideDishIngredientGroups)}
  </p>
  {renderIngredientGroups(
    recipeStepsMap[menu.id].sideDishIngredientGroups,
    recipeStepsMap[menu.id].sideDishIngredients,
    menu.id,
    "side"
  )}
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
  {renderRecipeDishImage(menu.soup)}
  <p className="mb-2 text-xs font-semibold text-gray-500">
    {getRecipeLabel(recipeStepsMap[menu.id].soupIngredientGroups)}
  </p>
  {renderIngredientGroups(
    recipeStepsMap[menu.id].soupIngredientGroups,
    recipeStepsMap[menu.id].soupIngredients,
    menu.id,
    "soup"
  )}
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