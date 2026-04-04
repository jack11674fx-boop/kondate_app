"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [decidedMenu, setDecidedMenu] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("decidedDinnerMenu");
  
      if (!saved) {
        setDecidedMenu(null);
        return;
      }
  
      if (saved.startsWith("{")) {
        const parsed = JSON.parse(saved);
        setDecidedMenu(parsed.menu || null);
        return;
      }
  
      setDecidedMenu(null);
    } catch (error) {
      console.error("決定済み献立の取得に失敗しました", error);
      setDecidedMenu(null);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[32px] bg-white p-8 shadow-sm sm:p-10">
          <p className="mb-3 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            毎日の夕食決めを、もっとラクに
          </p>
  
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            こんだてポン！
          </h1>
  
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            家族人数や気分に合わせて、今日の夕食候補をすばやく決められる献立アプリです。
          </p>
  
          {decidedMenu ? (
            <div className="mt-6 rounded-[24px] border border-green-200 bg-green-50 px-5 py-5">
              <p className="text-sm font-bold text-green-700">
                今日の献立は決まっています
              </p>
  
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-800">主菜：</span>
                  {decidedMenu.mainDish}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">副菜：</span>
                  {decidedMenu.sideDish}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">汁物：</span>
                  {decidedMenu.soup}
                </p>
              </div>
  
              <a
                href="/result?view=decided"
                className="mt-4 inline-block rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
              >
                決定した献立を見る
              </a>
            </div>
          ) : (
            <div className="mt-6 rounded-[24px] border border-pink-100 bg-pink-50 px-5 py-5">
              <p className="text-sm font-bold text-pink-600">
                まだ今日の献立は決まっていません
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                条件を入力すると、夕食候補を3つ提案します。
              </p>
            </div>
          )}
  
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/create"
              className="rounded-full bg-pink-300 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition hover:bg-pink-400"
            >
              献立を作る
            </a>
  
            <a
              href="/saved"
              className="rounded-full bg-gray-200 px-6 py-4 text-center text-lg font-bold text-gray-700 transition hover:bg-gray-300"
            >
              保存一覧を見る
            </a>
          </div>
  
          <div className="mt-8 rounded-[24px] bg-[#fff0f5] px-5 py-5">
            <p className="text-sm font-bold text-gray-800">使い方</p>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p>1. 家族人数や気分を入力</p>
              <p>2. 献立候補を3つ見る</p>
              <p>3. そのまま今日の献立を決める</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}