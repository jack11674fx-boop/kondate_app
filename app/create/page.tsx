"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { searchIngredientOptions } from "@/lib/ingredient-options";

const CREATE_DRAFT_KEY = "menuCreateDraft";
const FAVORITE_AVOID_INGREDIENTS_KEY = "favoriteAvoidIngredients";
const FAVORITE_PREFERRED_INGREDIENTS_KEY = "favoritePreferredIngredients";
const MAX_FAVORITE_INGREDIENTS = 5;

type DropdownType =
  | "avoid"
  | "preferred"
  | "favoriteAvoid"
  | "favoritePreferred"
  | null;

const MOOD_OPTIONS = [
  "おまかせ",
  "和食",
  "洋食",
  "中華",
  "こってり",
  "あっさり",
] as const;


function normalizeMood(value: unknown) {
  if (value === "任意") {
    return "おまかせ";
  }

  if (
    typeof value === "string" &&
    MOOD_OPTIONS.includes(value as (typeof MOOD_OPTIONS)[number])
  ) {
    return value;
  }

  return "おまかせ";
}

function normalizeIngredientList(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, array) => array.indexOf(item) === index)
    .slice(0, MAX_FAVORITE_INGREDIENTS);
}

function addFavoriteIngredient(list: string[], value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return list;
  }

  if (list.includes(trimmedValue)) {
    return list;
  }

  if (list.length >= MAX_FAVORITE_INGREDIENTS) {
    return list;
  }

  return [...list, trimmedValue];
}

type FavoriteSectionProps = {
  titleColorClassName: string;
  chipVariant: "avoid" | "preferred";
  favoriteItems: string[];
  selectedItems: string[];
  onUseFavorite: (value: string) => void;
  onRemoveFavorite: (value: string) => void;
  onOpenAddPanel: () => void;
  canAddMore: boolean;
};

function FavoriteSection({
  titleColorClassName,
  chipVariant,
  favoriteItems,
  selectedItems,
  onUseFavorite,
  onRemoveFavorite,
  onOpenAddPanel,
  canAddMore,
}: FavoriteSectionProps) {
  const activeClassName =
    chipVariant === "avoid"
      ? "rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
      : "rounded-full border border-pink-100 bg-white px-3 py-2 text-sm font-medium text-pink-600 transition hover:bg-pink-50";

  const disabledClassName =
    chipVariant === "avoid"
      ? "rounded-full border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-400"
      : "rounded-full border border-pink-100 bg-pink-50 px-3 py-2 text-sm font-medium text-pink-300";

  const removeClassName =
    chipVariant === "avoid"
      ? "text-xs font-semibold text-gray-400 transition hover:text-gray-600"
      : "text-xs font-semibold text-pink-300 transition hover:text-pink-500";

  const addButtonClassName =
    chipVariant === "avoid"
      ? "rounded-full border border-dashed border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
      : "rounded-full border border-dashed border-pink-200 bg-white px-3 py-2 text-sm font-semibold text-pink-500 transition hover:bg-pink-50";

  const addButtonDisabledClassName =
    chipVariant === "avoid"
      ? "rounded-full border border-dashed border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-300"
      : "rounded-full border border-dashed border-pink-100 bg-pink-50 px-3 py-2 text-sm font-semibold text-pink-200";

  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between gap-3">
      <p className={`text-xs font-semibold ${titleColorClassName}`}>
  {chipVariant === "avoid" ? "よく避ける食材" : "よく使う食材"}
</p>
        <p className={`text-xs ${titleColorClassName}`}>
          {favoriteItems.length}/{MAX_FAVORITE_INGREDIENTS}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {favoriteItems.map((ingredient) => {
          const isSelected = selectedItems.includes(ingredient);

          return (
            <div key={`${chipVariant}-${ingredient}`} className="relative">
  <button
    type="button"
    onClick={() => onUseFavorite(ingredient)}
    disabled={isSelected}
    className={`${isSelected ? disabledClassName : activeClassName} pr-8`}
  >
    {ingredient}
  </button>
  <button
    type="button"
    onClick={() => onRemoveFavorite(ingredient)}
    className={`${removeClassName} absolute right-3 top-1/2 -translate-y-1/2`}
    aria-label={`${ingredient}をよく使う食材から削除`}
  >
    ×
  </button>
</div>
          );
        })}

        <button
          type="button"
          onClick={onOpenAddPanel}
          disabled={!canAddMore}
          className={canAddMore ? addButtonClassName : addButtonDisabledClassName}
        >
          ＋ タグを追加
        </button>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="mt-3 rounded-2xl bg-white/70 px-4 py-3 text-sm text-gray-400">
          まだ設定されていません
        </div>
      ) : null}
    </div>
  );
}

export default function CreatePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [familySize, setFamilySize] = useState("3");
  const [cookingTime, setCookingTime] = useState("30");
  const [budgetLevel, setBudgetLevel] = useState("ふつう");
  const [avoidIngredients, setAvoidIngredients] = useState("");
  const [preferredIngredients, setPreferredIngredients] = useState("");
  const [mood, setMood] = useState("おまかせ");
  const [isLoaded, setIsLoaded] = useState(false);

  const [avoidIngredientQuery, setAvoidIngredientQuery] = useState("");
  const [preferredIngredientQuery, setPreferredIngredientQuery] = useState("");
  const [favoriteAvoidQuery, setFavoriteAvoidQuery] = useState("");
  const [favoritePreferredQuery, setFavoritePreferredQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const [favoriteAvoidIngredients, setFavoriteAvoidIngredients] = useState<
    string[]
  >([]);
  const [favoritePreferredIngredients, setFavoritePreferredIngredients] =
    useState<string[]>([]);

  const selectedAvoidIngredients = useMemo(() => {
    return avoidIngredients
      .split(/[、,，]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }, [avoidIngredients]);

  const selectedPreferredIngredients = useMemo(() => {
    return preferredIngredients
      .split(/[、,，]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }, [preferredIngredients]);

  const filteredAvoidIngredientOptions = useMemo(() => {
    const results = searchIngredientOptions(avoidIngredientQuery);

    return results.filter(
      (option) => !selectedAvoidIngredients.includes(option.value)
    );
  }, [avoidIngredientQuery, selectedAvoidIngredients]);

  const filteredPreferredIngredientOptions = useMemo(() => {
    const results = searchIngredientOptions(preferredIngredientQuery);

    return results.filter(
      (option) => !selectedPreferredIngredients.includes(option.value)
    );
  }, [preferredIngredientQuery, selectedPreferredIngredients]);

  const filteredFavoriteAvoidOptions = useMemo(() => {
    return searchIngredientOptions(favoriteAvoidQuery).filter(
      (option) => !favoriteAvoidIngredients.includes(option.value)
    );
  }, [favoriteAvoidIngredients, favoriteAvoidQuery]);

 const filteredFavoritePreferredOptions = useMemo(() => {
    return searchIngredientOptions(favoritePreferredQuery).filter(
      (option) => !favoritePreferredIngredients.includes(option.value)
    );
  }, [favoritePreferredIngredients, favoritePreferredQuery]);


  const handleAddAvoidIngredient = (value: string) => {
    if (selectedAvoidIngredients.includes(value)) {
      return;
    }

    const nextValues = [...selectedAvoidIngredients, value];
    setAvoidIngredients(nextValues.join("、"));
    setAvoidIngredientQuery("");
    setActiveDropdown(null);
  };

  const handleRemoveAvoidIngredient = (value: string) => {
    const nextValues = selectedAvoidIngredients.filter((item) => item !== value);
    setAvoidIngredients(nextValues.join("、"));
  };

  const handleAddPreferredIngredient = (value: string) => {
    if (selectedPreferredIngredients.includes(value)) {
      return;
    }

    const nextValues = [...selectedPreferredIngredients, value];
    setPreferredIngredients(nextValues.join("、"));
    setPreferredIngredientQuery("");
    setActiveDropdown(null);
  };

  const handleRemovePreferredIngredient = (value: string) => {
    const nextValues = selectedPreferredIngredients.filter((item) => item !== value);
    setPreferredIngredients(nextValues.join("、"));
  };

  const handleAddFavoriteAvoidIngredient = (value: string) => {
    setFavoriteAvoidIngredients((prev) => addFavoriteIngredient(prev, value));
    setFavoriteAvoidQuery("");
  };

  const handleRemoveFavoriteAvoidIngredient = (value: string) => {
    setFavoriteAvoidIngredients((prev) => prev.filter((item) => item !== value));
  };

  const handleAddFavoritePreferredIngredient = (value: string) => {
    setFavoritePreferredIngredients((prev) => addFavoriteIngredient(prev, value));
    setFavoritePreferredQuery("");
  };

  const handleRemoveFavoritePreferredIngredient = (value: string) => {
    setFavoritePreferredIngredients((prev) =>
      prev.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(CREATE_DRAFT_KEY);
      const savedFavoriteAvoidIngredients = localStorage.getItem(
        FAVORITE_AVOID_INGREDIENTS_KEY
      );
      const savedFavoritePreferredIngredients = localStorage.getItem(
        FAVORITE_PREFERRED_INGREDIENTS_KEY
      );

      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);

        setFamilySize(parsed.familySize ?? "3");
        setCookingTime(parsed.cookingTime ?? "30");
        setBudgetLevel(parsed.budgetLevel ?? "ふつう");
        setAvoidIngredients(parsed.avoidIngredients ?? "");
        setPreferredIngredients(parsed.preferredIngredients ?? "");
        setMood(normalizeMood(parsed.mood));
      }

      if (savedFavoriteAvoidIngredients) {
        setFavoriteAvoidIngredients(
          normalizeIngredientList(JSON.parse(savedFavoriteAvoidIngredients))
        );
      }

      if (savedFavoritePreferredIngredients) {
        setFavoritePreferredIngredients(
          normalizeIngredientList(JSON.parse(savedFavoritePreferredIngredients))
        );
      }
    } catch (error) {
      console.error("入力内容の復元に失敗しました", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      const draftData = {
        familySize,
        cookingTime,
        budgetLevel,
        avoidIngredients,
        preferredIngredients,
        mood: normalizeMood(mood),
      };

      localStorage.setItem(CREATE_DRAFT_KEY, JSON.stringify(draftData));
    } catch (error) {
      console.error("入力内容の保存に失敗しました", error);
    }
  }, [
    familySize,
    cookingTime,
    budgetLevel,
    avoidIngredients,
    preferredIngredients,
    mood,
    isLoaded,
  ]);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        FAVORITE_AVOID_INGREDIENTS_KEY,
        JSON.stringify(favoriteAvoidIngredients)
      );
    } catch (error) {
      console.error("避けたい食材のよく使う食材保存に失敗しました", error);
    }
  }, [favoriteAvoidIngredients, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        FAVORITE_PREFERRED_INGREDIENTS_KEY,
        JSON.stringify(favoritePreferredIngredients)
      );
    } catch (error) {
      console.error("入れたい食材のよく使う食材保存に失敗しました", error);
    }
  }, [favoritePreferredIngredients, isLoaded]);

  const handleReset = () => {
    try {
      localStorage.removeItem(CREATE_DRAFT_KEY);
    } catch (error) {
      console.error("入力内容の削除に失敗しました", error);
    }

    setFamilySize("3");
    setCookingTime("30");
    setBudgetLevel("ふつう");
    setAvoidIngredients("");
    setPreferredIngredients("");
    setMood("おまかせ");
    setAvoidIngredientQuery("");
    setPreferredIngredientQuery("");
    setFavoriteAvoidQuery("");
    setFavoritePreferredQuery("");
    setActiveDropdown(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({
      familySize,
      cookingTime,
      budgetLevel,
      avoidIngredients,
      preferredIngredients,
      mood: normalizeMood(mood),
    });

    window.location.href = `/result?${params.toString()}`;
  };

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm text-gray-600">読み込み中...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
      <div ref={containerRef} className="mx-auto max-w-2xl">
        <div className="mb-6">
          <a
            href="/"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            ← トップに戻る
          </a>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <div className="mb-6">
            <p className="mb-2 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              かんたん入力
            </p>
            <h1 className="mb-3 text-3xl font-bold text-gray-800">
              今日の献立条件を入力
            </h1>
            <p className="text-sm leading-6 text-gray-600">
              家族人数や調理時間などを選ぶだけで、
              今日の夕食候補を提案できる形にします。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                家族人数
              </label>
              <select
                value={familySize}
                onChange={(e) => setFamilySize(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none transition focus:border-pink-300"
              >
                <option value="1">1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4">4人</option>
                <option value="5">5人</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                調理時間
              </label>
              <select
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none transition focus:border-pink-300"
              >
                <option value="30">30分</option>
                <option value="45">45分</option>
                <option value="60">60分</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                予算感
              </label>
              <select
                value={budgetLevel}
                onChange={(e) => setBudgetLevel(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none transition focus:border-pink-300"
              >
                <option value="節約">節約</option>
                <option value="ふつう">ふつう</option>
              </select>
            </div>

            <div className="rounded-[24px] border border-gray-100 bg-[#fcfcfc] px-4 py-4">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                避けたい食材
              </label>
              <p className="mb-3 text-xs leading-5 text-gray-500">
                苦手な食材や、今日は外したい食材を候補から除外できます。
              </p>

              <FavoriteSection
                titleColorClassName="text-gray-500"
                chipVariant="avoid"
                favoriteItems={favoriteAvoidIngredients}
                selectedItems={selectedAvoidIngredients}
                onUseFavorite={handleAddAvoidIngredient}
                onRemoveFavorite={handleRemoveFavoriteAvoidIngredient}
                onOpenAddPanel={() => setActiveDropdown("favoriteAvoid")}
                canAddMore={favoriteAvoidIngredients.length < MAX_FAVORITE_INGREDIENTS}
              />

              {activeDropdown === "favoriteAvoid" ? (
                <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-gray-700">
                      よく使う食材を追加
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFavoriteAvoidQuery("");
                        setActiveDropdown(null);
                      }}
                      className="text-xs font-semibold text-gray-400 transition hover:text-gray-600"
                    >
                      閉じる
                    </button>
                  </div>

                  

                  <div className="relative">
                  <input
  type="text"
  value={favoriteAvoidQuery}
  onChange={(e) => setFavoriteAvoidQuery(e.target.value)}
  onFocus={() => setActiveDropdown("favoriteAvoid")}
  placeholder="食材名で検索して追加"
  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-300"
/>

<div className="mt-2 max-h-56 overflow-y-auto rounded-2xl border border-gray-100 bg-white">
  {filteredFavoriteAvoidOptions.length > 0 ? (
    filteredFavoriteAvoidOptions.map((option) => (
      <button
        key={`favorite-avoid-option-${option.value}`}
        type="button"
        onClick={() => handleAddFavoriteAvoidIngredient(option.value)}
        disabled={favoriteAvoidIngredients.length >= MAX_FAVORITE_INGREDIENTS}
        className="block w-full border-b border-gray-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-gray-50 disabled:text-gray-300"
      >
        <div className="text-sm font-medium text-gray-800">
          {option.label}
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {option.category}
        </div>
      </button>
    ))
  ) : (
    <div className="px-4 py-3 text-sm text-gray-500">
      該当する食材がありません
    </div>
  )}
</div>

                  </div>
                </div>
              ) : null}

              {selectedAvoidIngredients.length > 0 ? (
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedAvoidIngredients.map((ingredient) => (
                    <button
                      key={ingredient}
                      type="button"
                      onClick={() => handleRemoveAvoidIngredient(ingredient)}
                      className="rounded-full bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
                    >
                      {ingredient} ×
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mb-3 rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-400">
                  まだ選択されていません
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={avoidIngredientQuery}
                  onChange={(e) => {
                    setAvoidIngredientQuery(e.target.value);
                    setActiveDropdown("avoid");
                  }}
                  onFocus={() => setActiveDropdown("avoid")}
                  placeholder="食材名で検索して追加"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-300"
                />

                {activeDropdown === "avoid" ? (
                  <div className="absolute z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-pink-100 bg-white shadow-sm">
                    {filteredAvoidIngredientOptions.length > 0 ? (
                      filteredAvoidIngredientOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleAddAvoidIngredient(option.value)}
                          className="block w-full border-b border-pink-50 px-4 py-3 text-left transition last:border-b-0 hover:bg-pink-50"
                        >
                          <div className="text-sm font-medium text-gray-800">
                            {option.label}
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            {option.category}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        該当する食材がありません
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-[24px] border border-pink-100 bg-[#fff7fb] px-4 py-4">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                入れたい食材
              </label>
              <p className="mb-3 text-xs leading-5 text-gray-500">
                今日は使いたい食材を選ぶと、それを優先して候補を出しやすくなります。
              </p>

              <FavoriteSection
                titleColorClassName="text-pink-500"
                chipVariant="preferred"
                favoriteItems={favoritePreferredIngredients}
                selectedItems={selectedPreferredIngredients}
                onUseFavorite={handleAddPreferredIngredient}
                onRemoveFavorite={handleRemoveFavoritePreferredIngredient}
                onOpenAddPanel={() => setActiveDropdown("favoritePreferred")}
                canAddMore={
                  favoritePreferredIngredients.length < MAX_FAVORITE_INGREDIENTS
                }
              />

              {activeDropdown === "favoritePreferred" ? (
                <div className="mb-4 rounded-2xl border border-pink-100 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-pink-600">
                      よく使う食材を追加
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFavoritePreferredQuery("");
                        setActiveDropdown(null);
                      }}
                      className="text-xs font-semibold text-pink-300 transition hover:text-pink-500"
                    >
                      閉じる
                    </button>
                  </div>

                  <div className="relative">
                  <input
  type="text"
  value={favoritePreferredQuery}
  onChange={(e) => setFavoritePreferredQuery(e.target.value)}
  onFocus={() => setActiveDropdown("favoritePreferred")}
  placeholder="食材名で検索して追加"
  className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-300"
/>

<div className="mt-2 max-h-56 overflow-y-auto rounded-2xl border border-pink-100 bg-white">
  {filteredFavoritePreferredOptions.length > 0 ? (
    filteredFavoritePreferredOptions.map((option) => (
      <button
        key={`favorite-preferred-option-${option.value}`}
        type="button"
        onClick={() =>
          handleAddFavoritePreferredIngredient(option.value)
        }
        disabled={
          favoritePreferredIngredients.length >=
          MAX_FAVORITE_INGREDIENTS
        }
        className="block w-full border-b border-pink-50 px-4 py-3 text-left transition last:border-b-0 hover:bg-pink-50 disabled:text-pink-200"
      >
        <div className="text-sm font-medium text-gray-800">
          {option.label}
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {option.category}
        </div>
      </button>
    ))
  ) : (
    <div className="px-4 py-3 text-sm text-gray-500">
      該当する食材がありません
    </div>
  )}
</div>

                  </div>
                </div>
              ) : null}

              {selectedPreferredIngredients.length > 0 ? (
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedPreferredIngredients.map((ingredient) => (
                    <button
                      key={ingredient}
                      type="button"
                      onClick={() => handleRemovePreferredIngredient(ingredient)}
                      className="rounded-full bg-pink-100 px-3 py-2 text-sm font-medium text-pink-600 transition hover:bg-pink-200"
                    >
                      {ingredient} ×
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mb-3 rounded-2xl bg-pink-50 px-4 py-3 text-sm text-gray-400">
                  まだ選択されていません
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={preferredIngredientQuery}
                  onChange={(e) => {
                    setPreferredIngredientQuery(e.target.value);
                    setActiveDropdown("preferred");
                  }}
                  onFocus={() => setActiveDropdown("preferred")}
                  placeholder="食材名で検索して追加"
                  className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-300"
                />

                {activeDropdown === "preferred" ? (
                  <div className="absolute z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-pink-100 bg-white shadow-sm">
                    {filteredPreferredIngredientOptions.length > 0 ? (
                      filteredPreferredIngredientOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleAddPreferredIngredient(option.value)}
                          className="block w-full border-b border-pink-50 px-4 py-3 text-left transition last:border-b-0 hover:bg-pink-50"
                        >
                          <div className="text-sm font-medium text-gray-800">
                            {option.label}
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            {option.category}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        該当する食材がありません
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                今日の気分
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none transition focus:border-pink-300"
              >
                <option value="おまかせ">おまかせ</option>
                <option value="和食">和食</option>
                <option value="洋食">洋食</option>
                <option value="中華">中華</option>
                <option value="こってり">こってり</option>
                <option value="あっさり">あっさり</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="w-full rounded-full bg-pink-300 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:scale-[1.01] hover:bg-pink-400"
              >
                献立候補を見る
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-full bg-gray-200 px-6 py-4 text-lg font-bold text-gray-700 transition hover:bg-gray-300"
              >
                入力をリセット
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}