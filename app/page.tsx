"use client";

import { useEffect, useState } from "react";
import { DISHES } from "@/lib/menu-data";

type DecidedMenu = {
  mainDish: string;
  sideDish: string;
  soup: string;
} | null;

export default function HomePage() {
  const [decidedMenu, setDecidedMenu] = useState<DecidedMenu>(null);

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

  const getDishImageUrlByName = (dishName: string) => {
    const matchedDish = DISHES.find((dish) => dish.name === dishName);
    return matchedDish?.imageUrl || "";
  };

  const handleClearDecidedMenu = () => {
    try {
      localStorage.removeItem("decidedDinnerMenu");
      setDecidedMenu(null);
    } catch (error) {
      console.error("決定済み献立の解除に失敗しました", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] px-5 py-6 text-gray-700 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[32px] bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              毎日の夕食決めを、もっとラクに
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              こんだてポン！
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              家族人数、調理時間、予算感、気分を選ぶだけ。
              毎日の「何作ろう…」を減らして、すぐ夕食候補を決められる献立アプリです。
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="/create"
              className="rounded-full bg-pink-300 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition hover:bg-pink-400"
            >
              今すぐ献立を作る
            </a>

            <a
              href="/saved"
              className="rounded-full bg-gray-200 px-6 py-4 text-center text-lg font-bold text-gray-700 transition hover:bg-gray-300"
            >
              保存した献立を見る
            </a>
          </div>

          <div className="mt-4 rounded-[24px] bg-[#fff7fb] px-5 py-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-800">
              こんなときに便利です
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3">
                考えるのが面倒な日でも、すぐ候補が出る
              </div>
              <div className="rounded-2xl bg-white px-4 py-3">
                避けたい食材・入れたい食材も反映できる
              </div>
              <div className="rounded-2xl bg-white px-4 py-3">
                主菜・副菜・汁物をまとめて決められる
              </div>
            </div>
          </div>

          {decidedMenu ? (
            <div className="mt-8 rounded-[28px] border border-green-200 bg-green-50 px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-green-700">
                    今日の献立は決まっています
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    すでに今日の夕食を決定済みです。内容を見直したい場合は、下のボタンから確認できます。
                  </p>

                  <div className="mt-4">
  <div className="grid gap-3 sm:grid-cols-3">
    <div className="rounded-2xl bg-white/70 p-3">
      {getDishImageUrlByName(decidedMenu.mainDish) ? (
        <img
          src={getDishImageUrlByName(decidedMenu.mainDish)}
          alt={decidedMenu.mainDish}
          className="mb-3 h-40 w-full rounded-2xl object-cover"
        />
      ) : null}
      <p className="text-xs font-bold text-green-700">主菜</p>
      <p className="mt-1 text-sm text-gray-800">{decidedMenu.mainDish}</p>
    </div>

    <div className="rounded-2xl bg-white/70 p-3">
      {getDishImageUrlByName(decidedMenu.sideDish) ? (
        <img
          src={getDishImageUrlByName(decidedMenu.sideDish)}
          alt={decidedMenu.sideDish}
          className="mb-3 h-40 w-full rounded-2xl object-cover"
        />
      ) : null}
      <p className="text-xs font-bold text-green-700">副菜</p>
      <p className="mt-1 text-sm text-gray-800">{decidedMenu.sideDish}</p>
    </div>

    <div className="rounded-2xl bg-white/70 p-3">
      {getDishImageUrlByName(decidedMenu.soup) ? (
        <img
          src={getDishImageUrlByName(decidedMenu.soup)}
          alt={decidedMenu.soup}
          className="mb-3 h-40 w-full rounded-2xl object-cover"
        />
      ) : null}
      <p className="text-xs font-bold text-green-700">汁物</p>
      <p className="mt-1 text-sm text-gray-800">{decidedMenu.soup}</p>
    </div>
  </div>
</div>


                </div>

                <div className="sm:shrink-0">
  <div className="flex flex-col gap-3">
    <a
      href="/result?view=decided"
      className="inline-block rounded-full bg-green-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-green-600"
    >
      決定した献立を見る
    </a>

    <button
      type="button"
      onClick={handleClearDecidedMenu}
      className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-100"
    >
      決定を解除する
    </button>
  </div>
</div>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-[28px] border border-pink-100 bg-pink-50 px-5 py-5 sm:px-6">
              <p className="text-sm font-bold text-pink-600">
                まだ今日の献立は決まっていません
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                まずは条件を入力すると、今日の夕食候補を3つまとめて提案します。
              </p>

              <div className="mt-4">
                <a
                  href="/create"
                  className="inline-block rounded-full bg-pink-300 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-pink-400"
                >
                  献立候補を見にいく
                </a>
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] bg-[#fff0f5] px-5 py-5">
              <p className="text-sm font-bold text-gray-800">1. 条件を選ぶ</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                家族人数、調理時間、予算感、気分を選ぶだけ。
                入れたい食材や避けたい食材も設定できます。
              </p>
            </div>

            <div className="rounded-[24px] bg-[#fff0f5] px-5 py-5">
              <p className="text-sm font-bold text-gray-800">2. 候補を比べる</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                主菜・副菜・汁物のセットを3つ表示。
                写真や理由も見ながら、迷わず比較できます。
              </p>
            </div>

            <div className="rounded-[24px] bg-[#fff0f5] px-5 py-5">
              <p className="text-sm font-bold text-gray-800">3. そのまま決める</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                気に入った献立は保存して、今日の献立として決定。
                買い物リストや作り方の確認にもつなげられます。
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#fffdf4] px-5 py-5">
            <p className="text-sm font-bold text-gray-800">
              まずは1回、条件を入れて試してみてください
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              夕食を考える時間を減らして、「これでいいか」ではなく
              「これにしよう」とすぐ決められるようにするのが、このアプリの役割です。
            </p>

            <div className="mt-4">
              <a
                href="/create"
                className="inline-block rounded-full bg-pink-300 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-pink-400"
              >
                献立を作り始める
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}