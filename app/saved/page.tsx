"use client";

import { useEffect, useState } from "react";
import Toast from "@/components/Toast";

type MenuItem = {
    id: string;
    title: string;
    mainDish: string;
    sideDish: string;
    soup: string;
    estimatedTime: string;
    budgetComment: string;
    shoppingList?: ShoppingListItem[];
    nutritionComment: string;
    reason: string;
    aiReason?: string;
    createdAt: string;
    memo?: string;
    sourceConditions?: {
      familySize: string;
      cookingTime: string;
      budgetLevel: string;
      avoidIngredients: string;
      mood: string;
    };
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

export default function SavedPage() {
    const [activeTab, setActiveTab] = useState<"favorite" | "history">("favorite");
    const [favoriteMenus, setFavoriteMenus] = useState<MenuItem[]>([]);
    const [historyMenus, setHistoryMenus] = useState<MenuItem[]>([]);
    const [moodFilter, setMoodFilter] = useState("すべて");
    const [budgetFilter, setBudgetFilter] = useState("すべて");
    const [sortOrder, setSortOrder] = useState("newest");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [openShoppingId, setOpenShoppingId] = useState("");
    const [toast, setToast] = useState<ToastState>(null);
    const [loadingShoppingId, setLoadingShoppingId] = useState("");
    const [recipeStepsMap, setRecipeStepsMap] = useState<Record<string, RecipeSteps>>({});
    const [checkedShoppingItems, setCheckedShoppingItems] = useState<
  Record<string, boolean>
>({});
const [loadingRecipeId, setLoadingRecipeId] = useState("");

  useEffect(() => {
    try {
      const favoriteRaw = localStorage.getItem("favoriteMenus");
      const historyRaw = localStorage.getItem("menuHistory");

      const favoriteParsed: MenuItem[] = favoriteRaw ? JSON.parse(favoriteRaw) : [];
      const historyParsed: MenuItem[] = historyRaw ? JSON.parse(historyRaw) : [];

      setFavoriteMenus(favoriteParsed);
      setHistoryMenus(historyParsed);
    } catch (error) {
      console.error(error);
      setFavoriteMenus([]);
      setHistoryMenus([]);
    }
  }, []);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  
    window.setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleDeleteFavorite = (id: string) => {
    try {
      const updated = favoriteMenus.filter((menu) => menu.id !== id);
      localStorage.setItem("favoriteMenus", JSON.stringify(updated));
      setFavoriteMenus(updated);
    } catch (error) {
      console.error(error);
      showToast("削除に失敗しました", "error");
    }
  };

  const handleDeleteHistory = (id: string) => {
    try {
      const updated = historyMenus.filter((menu) => menu.id !== id);
      localStorage.setItem("menuHistory", JSON.stringify(updated));
      setHistoryMenus(updated);
    } catch (error) {
      console.error(error);
      showToast("削除に失敗しました", "error");
    }
  };
  const handleFavoriteMemoChange = (id: string, memo: string) => {
    try {
      const updated = favoriteMenus.map((menu) =>
        menu.id === id ? { ...menu, memo } : menu
      );
  
      localStorage.setItem("favoriteMenus", JSON.stringify(updated));
      setFavoriteMenus(updated);
    } catch (error) {
      console.error(error);
      showToast("メモの保存に失敗しました", "error");
    }
  };
  const handleReuseConditions = (menu: MenuItem) => {
    if (!menu.sourceConditions) {
        showToast("この献立には再利用できる条件データがありません", "error");
      return;
    }
  
    const params = new URLSearchParams({
      familySize: menu.sourceConditions.familySize,
      cookingTime: menu.sourceConditions.cookingTime,
      budgetLevel: menu.sourceConditions.budgetLevel,
      avoidIngredients: menu.sourceConditions.avoidIngredients,
      mood: menu.sourceConditions.mood,
    });
  
    window.location.href = `/result?${params.toString()}`;
  };

  const handleEditConditions = (menu: MenuItem) => {
    if (!menu.sourceConditions) {
        showToast("この献立には編集できる条件データがありません", "error");
      return;
    }
  
    try {
      localStorage.setItem(
        "menuCreateDraft",
        JSON.stringify({
          familySize: menu.sourceConditions.familySize,
          cookingTime: menu.sourceConditions.cookingTime,
          budgetLevel: menu.sourceConditions.budgetLevel,
          avoidIngredients: menu.sourceConditions.avoidIngredients,
          mood: menu.sourceConditions.mood,
        })
      );
  
      window.location.href = "/create";
    } catch (error) {
      console.error(error);
      showToast("条件の引き継ぎに失敗しました", "error");
    }
  };

  const handleToggleShoppingList = async (menu: MenuItem) => {
    if (openShoppingId === menu.id) {
        setOpenShoppingId("");
      
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
  
    if (menu.shoppingList?.length) {
      setOpenShoppingId(menu.id);
      return;
    }
  
    try {
      setLoadingShoppingId(menu.id);
  
      const response = await fetch("/api/shopping-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          familySize: menu.sourceConditions?.familySize || "3",
          mainDish: menu.mainDish,
          sideDish: menu.sideDish,
          soup: menu.soup,
        }),
      });
      
  
      const data = await response.json();
  
      if (
        !data.success ||
        !Array.isArray(data.shoppingList) ||
        !data.shoppingList.every(
          (item: ShoppingListItem) =>
            item &&
            typeof item.name === "string" &&
            item.name.trim() !== "" &&
            typeof item.amount === "string" &&
            item.amount.trim() !== ""
        )
      ) {
        showToast("買い物リストの生成に失敗しました", "error");
        return;
      }
  
      const updatedMenu = {
        ...menu,
        shoppingList: data.shoppingList,
      };
  
      if (activeTab === "favorite") {
        const updatedFavoriteMenus = favoriteMenus.map((item) =>
          item.id === menu.id ? updatedMenu : item
        );
  
        setFavoriteMenus(updatedFavoriteMenus);
        localStorage.setItem("favoriteMenus", JSON.stringify(updatedFavoriteMenus));
      } else {
        const updatedHistoryMenus = historyMenus.map((item) =>
          item.id === menu.id ? updatedMenu : item
        );
  
        setHistoryMenus(updatedHistoryMenus);
        localStorage.setItem("menuHistory", JSON.stringify(updatedHistoryMenus));
      }
  
      setOpenShoppingId(menu.id);
    } catch (error) {
      console.error(error);
      showToast("作り方の生成に失敗しました", "error");
    } finally {
      setLoadingShoppingId("");
    }
  };

  const handleToggleRecipe = async (menu: MenuItem) => {
    if (recipeStepsMap[menu.id]) {
      setRecipeStepsMap((prev) => {
        const next = { ...prev };
        delete next[menu.id];
        return next;
      });
      return;
    }
  
    try {
      setLoadingRecipeId(menu.id);
  
      const response = await fetch("/api/menu-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          familySize: menu.sourceConditions?.familySize || "3",
          mainDish: menu.mainDish,
          sideDish: menu.sideDish,
          soup: menu.soup,
        }),
      });
  
      const data = await response.json();
  
      if (
        !data.success ||
        !data.recipe ||
        !Array.isArray(data.recipe.mainDishSteps) ||
        !Array.isArray(data.recipe.sideDishSteps) ||
        !Array.isArray(data.recipe.soupSteps)
      ) {
        showToast("作り方の生成に失敗しました", "error");
        return;
      }
  
      setRecipeStepsMap((prev) => ({
        ...prev,
        [menu.id]: data.recipe,
      }));
    } catch (error) {
      console.error(error);
      showToast("作り方の生成に失敗しました", "error");
    } finally {
      setLoadingRecipeId("");
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

  const handleResetFilters = () => {
    setSearchKeyword("");
    setMoodFilter("すべて");
    setBudgetFilter("すべて");
    setSortOrder("newest");
  };

  const currentMenus = activeTab === "favorite" ? favoriteMenus : historyMenus;

const filteredMenus = currentMenus.filter((menu) => {
  const moodMatched =
    moodFilter === "すべて" ||
    menu.sourceConditions?.mood === moodFilter;

  const budgetMatched =
    budgetFilter === "すべて" ||
    menu.sourceConditions?.budgetLevel === budgetFilter;

  const normalizedKeyword = searchKeyword.trim().toLowerCase();

  const searchableText = [
    menu.title,
    menu.mainDish,
    menu.sideDish,
    menu.soup,
    menu.memo || "",
  ]
    .join(" ")
    .toLowerCase();

  const searchMatched =
    normalizedKeyword === "" || searchableText.includes(normalizedKeyword);

  return moodMatched && budgetMatched && searchMatched;
});
  const sortedMenus = [...filteredMenus].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  
    if (sortOrder === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  
    if (sortOrder === "title") {
      return a.title.localeCompare(b.title, "ja");
    }
  
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
        {toast ? <Toast message={toast.message} type={toast.type} /> : null}
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <a
            href="/"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            ← トップへ戻る
          </a>
          <a
            href="/create"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            献立を作る
          </a>
        </div>

        <div className="mb-8 rounded-[32px] bg-white p-6 shadow-sm">

          <p className="mb-2 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            保存一覧
          </p>
          <h1 className="mb-3 text-3xl font-bold text-gray-800">
            保存した献立・履歴
          </h1>
          <p className="text-sm leading-6 text-gray-600">
            気に入った献立や、最近見た献立をあとで見返せます。
          </p>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("favorite")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                activeTab === "favorite"
                  ? "bg-pink-300 text-white shadow-md"
                  : "bg-pink-50 text-gray-700"
              }`}
            >
              保存済み ({favoriteMenus.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("history")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                activeTab === "history"
                  ? "bg-[#d8f3dc] text-gray-700 shadow-md"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              履歴 ({historyMenus.length})
            </button>
          </div>
          </div>          
          <div className="mt-6">
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    献立を検索
  </label>
  <input
    type="text"
    value={searchKeyword}
    onChange={(e) => setSearchKeyword(e.target.value)}
    placeholder="例：鮭、味噌汁、ハンバーグ、好評"
    className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none placeholder:text-gray-400 focus:border-pink-300"
  />
</div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                気分で絞り込み
                </label>
                <select
                value={moodFilter}
                onChange={(e) => setMoodFilter(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
                >
                <option value="すべて">すべて</option>
                <option value="おまかせ">おまかせ</option>
                <option value="和食">和食</option>
                <option value="洋食">洋食</option>
                <option value="中華">中華</option>
                <option value="こってり">こってり</option>
                <option value="あっさり">あっさり</option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                予算感で絞り込み
                </label>
                <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
                >
                <option value="すべて">すべて</option>
                <option value="節約">節約</option>
                <option value="ふつう">ふつう</option>
                </select>
            </div>
            </div>
        <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
                並び替え
            </label>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
            >
                <option value="newest">新しい順</option>
                <option value="oldest">古い順</option>
                <option value="title">タイトル順</option>
            </select>
        </div>
        <div className="mt-4">
  <button
    type="button"
    onClick={handleResetFilters}
    className="w-full rounded-full bg-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
  >
    検索・絞り込みをリセット
  </button>

        </div>

        {filteredMenus.length === 0 ? (
  <div className="rounded-[32px] bg-white p-10 text-center shadow-sm">
    <p className="mb-3 text-lg font-semibold text-gray-800">
      {activeTab === "favorite"
        ? "条件に合う保存済み献立がありません"
        : "条件に合う履歴がありません"}
    </p>
    <p className="mb-6 text-sm text-gray-600">
      絞り込み条件を変えるか、新しく献立を作ってみてください。
    </p>

    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <button
        type="button"
        onClick={handleResetFilters}
        className="inline-block rounded-full bg-gray-200 px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
      >
        絞り込みをリセット
      </button>

      <a
        href="/create"
        className="inline-block rounded-full bg-pink-300 px-6 py-3 font-bold text-white shadow-md transition hover:bg-pink-400"
      >
        献立を作りに行く
      </a>
    </div>
  </div>
) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedMenus.map((menu, index) => (
              <div
              key={`${activeTab}-${menu.id}-${menu.createdAt}-${index}`}
                className="rounded-[32px] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      activeTab === "favorite"
                        ? "bg-pink-100 text-pink-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {activeTab === "favorite" ? "保存済み" : "履歴"}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(menu.createdAt).toLocaleDateString("ja-JP")}
                  </span>
                </div>

                <h2 className="mb-4 text-xl font-bold text-gray-800">
                  {menu.title}
                </h2>

                <div className="mb-4 space-y-3 text-sm leading-6">
                    {menu.sourceConditions && (
                        <div className="mb-4 rounded-2xl bg-blue-50 px-4 py-3 text-xs text-gray-600">
                            <p className="mb-1 font-semibold text-gray-800">使用した条件</p>
                            <div className="grid grid-cols-2 gap-2">
                            <p>人数：{menu.sourceConditions.familySize}人</p>
                            <p>時間：{menu.sourceConditions.cookingTime}分</p>
                            <p>予算：{menu.sourceConditions.budgetLevel}</p>
                            <p>気分：{menu.sourceConditions.mood}</p>
                            </div>
                            {menu.sourceConditions.avoidIngredients && (
                            <p className="mt-1">
                                避けた食材：{menu.sourceConditions.avoidIngredients}
                            </p>
                            )}
                        </div>
                    )}
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
                    <p>{menu.aiReason || menu.reason}</p>
                </div>
                {activeTab === "favorite" && (
                    <div className="mb-5 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-gray-700">
                        <p className="mb-2 font-semibold text-gray-800">自分メモ</p>
                        <textarea
                        value={menu.memo || ""}
                        onChange={(e) => handleFavoriteMemoChange(menu.id, e.target.value)}
                        placeholder="例：家族に好評だった、次は玉ねぎ多めにしたい"
                        rows={4}
                        className="w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 outline-none placeholder:text-gray-400 focus:border-blue-300"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <button
                        type="button"
                        onClick={() => handleReuseConditions(menu)}
                        className="w-full rounded-full bg-pink-300 px-5 py-3 font-bold text-white shadow-md transition hover:scale-[1.01] hover:bg-pink-400"
                    >
                        この条件でもう一度見る
                    </button>

                    <button
                        type="button"
                        onClick={() => handleEditConditions(menu)}
                        className="w-full rounded-full bg-blue-100 px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-200"
                    >
                        この条件を編集する
                    </button>

                    <button
  type="button"
  onClick={() => handleToggleShoppingList(menu)}
  className="w-full rounded-full bg-blue-50 px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-100"
>
  {loadingShoppingId === menu.id
    ? "買い物リストを作成中..."
    : openShoppingId === menu.id
      ? "買い物リストを閉じる"
      : "買い物リストを見る"}
</button>

<button
  type="button"
  onClick={() => handleToggleRecipe(menu)}
  className="w-full rounded-full bg-orange-100 px-5 py-3 font-bold text-orange-700 transition hover:bg-orange-200"
>
  {loadingRecipeId === menu.id
    ? "作り方を作成中..."
    : recipeStepsMap[menu.id]
      ? "作り方を閉じる"
      : "作り方を見る"}
</button>

                    <button
                        type="button"
                        onClick={() =>
                        activeTab === "favorite"
                            ? handleDeleteFavorite(menu.id)
                            : handleDeleteHistory(menu.id)
                        }
                        className="w-full rounded-full bg-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
                    >
                        {activeTab === "favorite" ? "保存から削除" : "履歴から削除"}
                    </button>
                </div>

                {openShoppingId === menu.id && menu.shoppingList?.length ? (
                    <div className="mt-4 rounded-2xl bg-blue-50 px-4 py-4 text-sm text-gray-700">
                        <p className="mb-2 font-semibold text-gray-800">買い物リスト</p>
                        <ul className="space-y-2">
                        {menu.shoppingList.map((item, itemIndex) => {
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
        )}
      </div>
    </main>
  );
}