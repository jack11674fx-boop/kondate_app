"use client";

import { useEffect, useState } from "react";

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
  createdAt: string;
};

export default function SavedPage() {
  const [savedMenus, setSavedMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    try {
      const existing = localStorage.getItem("favoriteMenus");
      const parsed: MenuItem[] = existing ? JSON.parse(existing) : [];
      setSavedMenus(parsed);
    } catch (error) {
      console.error(error);
      setSavedMenus([]);
    }
  }, []);

  const handleDelete = (id: string) => {
    try {
      const updated = savedMenus.filter((menu) => menu.id !== id);
      localStorage.setItem("favoriteMenus", JSON.stringify(updated));
      setSavedMenus(updated);
    } catch (error) {
      console.error(error);
      alert("削除に失敗しました");
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
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
            保存した献立
          </h1>
          <p className="text-sm leading-6 text-gray-600">
            気に入った献立をあとで見返せます。
          </p>
        </div>

        {savedMenus.length === 0 ? (
          <div className="rounded-[32px] bg-white p-10 text-center shadow-sm">
            <p className="mb-3 text-lg font-semibold text-gray-800">
              まだ保存した献立はありません
            </p>
            <p className="mb-6 text-sm text-gray-600">
              献立候補ページから気に入った案を保存してください。
            </p>
            <a
              href="/create"
              className="inline-block rounded-full bg-pink-300 px-6 py-3 font-bold text-white shadow-md transition hover:bg-pink-400"
            >
              献立を作りに行く
            </a>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedMenus.map((menu) => (
              <div
                key={menu.id}
                className="rounded-[32px] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
                    保存済み
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(menu.createdAt).toLocaleDateString("ja-JP")}
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
                  <p>{menu.reason}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(menu.id)}
                  className="w-full rounded-full bg-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
                >
                  削除する
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}