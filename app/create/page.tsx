"use client";

import { useEffect, useState } from "react";

const CREATE_DRAFT_KEY = "menuCreateDraft";

export default function CreatePage() {
  const [familySize, setFamilySize] = useState("3");
  const [cookingTime, setCookingTime] = useState("30");
  const [budgetLevel, setBudgetLevel] = useState("ふつう");
  const [avoidIngredients, setAvoidIngredients] = useState("");
  const [mood, setMood] = useState("おまかせ");
  const [isLoaded, setIsLoaded] = useState(false);

  // 初回表示時に保存済みの入力内容を復元
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(CREATE_DRAFT_KEY);

      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);

        setFamilySize(parsed.familySize ?? "3");
        setCookingTime(parsed.cookingTime ?? "30");
        setBudgetLevel(parsed.budgetLevel ?? "ふつう");
        setAvoidIngredients(parsed.avoidIngredients ?? "");
        setMood(parsed.mood ?? "おまかせ");
      }
    } catch (error) {
      console.error("入力内容の復元に失敗しました", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 入力が変わるたびに自動保存
  useEffect(() => {
    if (!isLoaded) return;

    try {
      const draftData = {
        familySize,
        cookingTime,
        budgetLevel,
        avoidIngredients,
        mood,
      };

      localStorage.setItem(CREATE_DRAFT_KEY, JSON.stringify(draftData));
    } catch (error) {
      console.error("入力内容の保存に失敗しました", error);
    }
  }, [familySize, cookingTime, budgetLevel, avoidIngredients, mood, isLoaded]);

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
    setMood("おまかせ");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams({
      familySize,
      cookingTime,
      budgetLevel,
      avoidIngredients,
      mood,
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
      <div className="mx-auto max-w-2xl">
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
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
              >
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
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
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
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
              >
                <option value="節約">節約</option>
                <option value="ふつう">ふつう</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                避けたい食材
              </label>
              <input
                type="text"
                value={avoidIngredients}
                onChange={(e) => setAvoidIngredients(e.target.value)}
                placeholder="例：ピーマン、きのこ"
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none placeholder:text-gray-400 focus:border-pink-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                今日の気分
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 outline-none focus:border-pink-300"
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