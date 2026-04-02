"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

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

type BaseMenuItem = Omit<MenuItem, "id" | "createdAt">;

function ResultContent() {
  const searchParams = useSearchParams();

  const familySize = searchParams.get("familySize") || "3";
  const cookingTime = searchParams.get("cookingTime") || "30";
  const budgetLevel = searchParams.get("budgetLevel") || "ふつう";
  const avoidIngredients = searchParams.get("avoidIngredients") || "";
  const mood = searchParams.get("mood") || "おまかせ";

  const [refreshCount, setRefreshCount] = useState(0);

  const menuPatterns = useMemo<Record<string, BaseMenuItem[][]>>(() => {
    return {
      和食: [
        [
          {
            title: "ほっとする和定食",
            mainDish: "鶏むね肉の照り焼き",
            sideDish: "ほうれん草のおひたし",
            soup: "豆腐とわかめの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "たんぱく質・野菜・汁物がそろった、バランスのよい献立です。",
            reason:
              "やさしい味で食べやすく、家庭の夕食として失敗しにくい組み合わせです。",
          },
          {
            title: "魚メインの和ごはん",
            mainDish: "鮭の塩焼き",
            sideDish: "かぼちゃの煮物",
            soup: "じゃがいもと玉ねぎの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "やや節約寄り" : "ふつう",
            nutritionComment:
              "魚と野菜をしっかり入れた、落ち着いた和食献立です。",
            reason:
              "こってりしすぎず、毎日の夕食で使いやすい定番構成です。",
          },
          {
            title: "ごはんが進む和風献立",
            mainDish: "豚こまのしょうが焼き",
            sideDish: "キャベツの浅漬け",
            soup: "大根と油揚げの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約しやすい" : "ふつう",
            nutritionComment:
              "肉・野菜・汁物がそろっていて、満足感も出しやすいです。",
            reason:
              "短時間で作りやすく、家族みんなが食べやすい味です。",
          },
        ],
        [
          {
            title: "やさしい和のおうちごはん",
            mainDish: "さばの味噌煮",
            sideDish: "小松菜のごま和え",
            soup: "豆腐と長ねぎの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "やや節約寄り" : "ふつう",
            nutritionComment:
              "魚・野菜・汁物がそろい、和食らしい整った献立です。",
            reason:
              "落ち着いた味つけで、普段の夕食に取り入れやすいです。",
          },
          {
            title: "定番の和風しっかり献立",
            mainDish: "肉じゃが",
            sideDish: "きゅうりの酢の物",
            soup: "なめこの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約しやすい" : "ふつう",
            nutritionComment:
              "主菜に野菜も入っていて、全体としてやさしくまとまります。",
            reason:
              "家族で食べやすく、献立に悩んだ日に使いやすいです。",
          },
          {
            title: "軽めの和食献立",
            mainDish: "鶏むね肉の塩こうじ焼き",
            sideDish: "ひじきの煮物",
            soup: "白菜と油揚げの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "肉・海藻・野菜が入り、落ち着いた夕食にしやすいです。",
            reason:
              "重すぎない和食にしたい日に向いています。",
          },
        ],
      ],
      洋食: [
        [
          {
            title: "やさしい洋食プレート風献立",
            mainDish: "ハンバーグ",
            sideDish: "にんじんとコーンのサラダ",
            soup: "じゃがいものコンソメスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment:
              budgetLevel === "節約" ? "ふつう〜やや節約" : "ふつう",
            nutritionComment:
              "主菜にボリュームがありつつ、野菜も取りやすい献立です。",
            reason:
              "家庭で人気が出やすく、満足感が高い洋食メニューです。",
          },
          {
            title: "時短しやすい洋食献立",
            mainDish: "鶏もも肉のソテー",
            sideDish: "ブロッコリーとゆで卵のサラダ",
            soup: "キャベツのコンソメスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "肉・卵・野菜を入れやすく、夕食向きのバランスです。",
            reason:
              "焼くだけ中心で進めやすく、初心者でも作るイメージがしやすいです。",
          },
          {
            title: "家族向けの定番洋食",
            mainDish: "ポークチャップ",
            sideDish: "ポテトサラダ",
            soup: "玉ねぎとベーコンのスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "食べごたえがあり、野菜も加えやすい定番構成です。",
            reason:
              "味がわかりやすく、献立に迷った日に選びやすいです。",
          },
        ],
        [
          {
            title: "親しみやすい洋食ごはん",
            mainDish: "ミートボールのトマト煮",
            sideDish: "レタスとツナのサラダ",
            soup: "にんじんスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "やや節約" : "ふつう",
            nutritionComment:
              "肉と野菜を取りやすく、やさしい洋食献立です。",
            reason:
              "トマト系の味で食べやすく、家族向けにまとめやすいです。",
          },
          {
            title: "焼くだけ中心の洋食献立",
            mainDish: "鮭のムニエル",
            sideDish: "じゃがいもときゅうりのサラダ",
            soup: "きのこのコンソメスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ふつう" : "ふつう",
            nutritionComment:
              "魚・野菜・汁物を合わせた、整いやすい献立です。",
            reason:
              "肉以外の主菜にしたい日にも使いやすいです。",
          },
          {
            title: "満足感のある洋食セット",
            mainDish: "チキンのトマトチーズ焼き",
            sideDish: "コールスロー",
            soup: "玉ねぎスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "主菜の満足感を出しつつ、野菜も取り入れやすいです。",
            reason:
              "少し特別感のある夕食にしやすいです。",
          },
        ],
      ],
      中華: [
        [
          {
            title: "満足感のある中華献立",
            mainDish: "麻婆豆腐",
            sideDish: "もやしのナムル",
            soup: "卵スープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約しやすい" : "ふつう",
            nutritionComment:
              "豆腐・卵・野菜を入れやすく、食べごたえもあります。",
            reason:
              "短時間で作りやすく、ごはんが進みやすい定番中華です。",
          },
          {
            title: "野菜も取れる中華ごはん",
            mainDish: "八宝菜",
            sideDish: "きゅうりの中華和え",
            soup: "わかめスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: "ふつう",
            nutritionComment:
              "野菜をたくさん使いやすく、全体のバランスを取りやすいです。",
            reason:
              "一皿で具材が多く取れて、献立全体が組みやすいです。",
          },
          {
            title: "食べやすい中華定食風",
            mainDish: "回鍋肉",
            sideDish: "トマトの中華だれ",
            soup: "中華風コーンスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "肉と野菜をしっかり取れて、満足感も高い献立です。",
            reason:
              "味がはっきりしていて、夕食として決めやすい中華構成です。",
          },
        ],
        [
          {
            title: "定番で作りやすい中華献立",
            mainDish: "青椒肉絲",
            sideDish: "春雨サラダ",
            soup: "中華風わかめスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ふつう" : "ふつう",
            nutritionComment:
              "肉と野菜の組み合わせで、夕食としてまとまりやすいです。",
            reason:
              "炒め物中心で進めやすく、中華らしさも出せます。",
          },
          {
            title: "やさしめ中華ごはん",
            mainDish: "鶏と白菜の中華煮",
            sideDish: "きゅうりのごま和え",
            soup: "たまごとねぎのスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "重すぎず、野菜も入れやすい中華寄りの献立です。",
            reason:
              "中華にしたいけど、少しやさしめにしたい日に向いています。",
          },
          {
            title: "ごはんが進む中華セット",
            mainDish: "酢豚",
            sideDish: "もやしときゅうりの和え物",
            soup: "コーン中華スープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "主菜の満足感が高く、副菜と汁物でバランスを補えます。",
            reason:
              "しっかり食べたい日の中華献立として使いやすいです。",
          },
        ],
      ],
      こってり: [
        [
          {
            title: "しっかり食べたい日の献立",
            mainDish: "豚バラとキャベツの味噌炒め",
            sideDish: "マカロニサラダ",
            soup: "たまごスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: "ふつう",
            nutritionComment:
              "満足感の高い主菜に、副菜と汁物を足してバランスを取っています。",
            reason: "今日はがっつり食べたい日に向いた構成です。",
          },
          {
            title: "ごはんが進む満腹献立",
            mainDish: "チキン南蛮",
            sideDish: "キャベツのサラダ",
            soup: "じゃがいもの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "主菜にボリュームがあり、副菜で野菜を補いやすいです。",
            reason:
              "家族に喜ばれやすく、特別感も出しやすいです。",
          },
          {
            title: "食べごたえ重視の夕食",
            mainDish: "照りマヨチキン",
            sideDish: "ブロッコリーサラダ",
            soup: "玉ねぎスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "肉の満足感を出しつつ、野菜と汁物も入れた構成です。",
            reason:
              "こってり気分の日でも、組み合わせで重すぎないようにしています。",
          },
        ],
        [
          {
            title: "満足感しっかりの夕食",
            mainDish: "豚のしょうが焼き",
            sideDish: "ポテトサラダ",
            soup: "豆腐の味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "肉料理の満足感がありつつ、副菜と汁物でまとまります。",
            reason:
              "しっかり食べたい日の定番として使いやすいです。",
          },
          {
            title: "こってり洋風献立",
            mainDish: "チーズハンバーグ",
            sideDish: "コーン入りサラダ",
            soup: "コンソメスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "主菜の満足感が高く、野菜も取り入れやすいです。",
            reason:
              "家族に喜ばれやすいこってり系の洋食です。",
          },
          {
            title: "ごはん向きのがっつり献立",
            mainDish: "甘辛だれの唐揚げ",
            sideDish: "キャベツの浅漬け",
            soup: "わかめスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ふつう" : "ふつう",
            nutritionComment:
              "揚げ物系でも副菜と汁物を合わせて重すぎないようにしています。",
            reason:
              "しっかり食べたい気分の日に向いています。",
          },
        ],
      ],
      あっさり: [
        [
          {
            title: "軽めに食べたい日の献立",
            mainDish: "鶏ささみの梅しそ焼き",
            sideDish: "冷ややっこ",
            soup: "白菜の味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "軽めでもたんぱく質を取りやすく、夕食としてまとまりがあります。",
            reason:
              "あっさり食べたい日でも満足感を残しやすい献立です。",
          },
          {
            title: "やさしい味の夕食",
            mainDish: "白身魚の蒸し焼き",
            sideDish: "小松菜のおひたし",
            soup: "豆腐とねぎのすまし汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: "ふつう",
            nutritionComment:
              "重くなりにくく、野菜や汁物も取りやすい献立です。",
            reason:
              "疲れている日でも食べやすい、やさしい構成です。",
          },
          {
            title: "すっきり食べられる和風献立",
            mainDish: "豚しゃぶサラダ",
            sideDish: "かぼちゃの煮物",
            soup: "なめこの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "肉と野菜を無理なく取れて、全体的に軽めです。",
            reason:
              "あっさりしつつ、家族の夕食としても成立しやすいです。",
          },
        ],
        [
          {
            title: "体にやさしい夕食",
            mainDish: "鮭の酒蒸し",
            sideDish: "ほうれん草のおひたし",
            soup: "大根のすまし汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ふつう" : "ふつう",
            nutritionComment:
              "魚・野菜・汁物でまとめた、軽めの献立です。",
            reason:
              "重たいものを避けたい日でも決めやすいです。",
          },
          {
            title: "あっさり和風ごはん",
            mainDish: "鶏むね肉のみぞれ煮",
            sideDish: "きゅうりの酢の物",
            soup: "豆腐の味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "軽めでも肉と野菜を取りやすく、整えやすいです。",
            reason:
              "胃に重たくない夕食にしたい日に向いています。",
          },
          {
            title: "さっぱり食べられる献立",
            mainDish: "白だし豚しゃぶ",
            sideDish: "トマトの和風サラダ",
            soup: "白菜の味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "肉・野菜・汁物がそろい、全体的にやさしい構成です。",
            reason:
              "あっさりしながらも満足感を残しやすいです。",
          },
        ],
      ],
      おまかせ: [
        [
          {
            title: "定番で失敗しにくい献立",
            mainDish: "鶏の照り焼き",
            sideDish: "ポテトサラダ",
            soup: "玉ねぎとわかめの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "主菜・副菜・汁物がそろっていて、使いやすい定番構成です。",
            reason:
              "迷った日に選びやすく、家族向けの夕食として無難です。",
          },
          {
            title: "野菜も取りやすい献立",
            mainDish: "豚こまと野菜の炒め物",
            sideDish: "かぼちゃサラダ",
            soup: "豆腐の味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約しやすい" : "ふつう",
            nutritionComment:
              "肉と野菜のバランスが良く、家庭向きの献立です。",
            reason:
              "材料の準備も比較的しやすく、日常使いしやすいです。",
          },
          {
            title: "食べやすい夕食セット",
            mainDish: "鮭のムニエル",
            sideDish: "キャベツとコーンのサラダ",
            soup: "じゃがいものスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ややふつう" : "ふつう",
            nutritionComment:
              "魚・野菜・汁物を組み合わせた、まとまりのある献立です。",
            reason:
              "少し変化を出しつつも、食べやすさを残した提案です。",
          },
        ],
        [
          {
            title: "毎日使いやすい夕食献立",
            mainDish: "豚のしょうが焼き",
            sideDish: "ブロッコリーサラダ",
            soup: "豆腐とねぎの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約寄り" : "ふつう",
            nutritionComment:
              "肉・野菜・汁物がそろい、日常向きのバランスです。",
            reason:
              "定番感があり、迷った日に選びやすいです。",
          },
          {
            title: "家庭向けのやさしい献立",
            mainDish: "鶏肉とじゃがいもの甘辛煮",
            sideDish: "キャベツのごま和え",
            soup: "わかめの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "節約しやすい" : "ふつう",
            nutritionComment:
              "肉と野菜の組み合わせで、夕食としてまとまりやすいです。",
            reason:
              "やさしい味つけで家族向けにしやすいです。",
          },
          {
            title: "少し変化をつけた夕食",
            mainDish: "チキンソテー",
            sideDish: "にんじんラペ",
            soup: "キャベツのスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "やや節約" : "ふつう",
            nutritionComment:
              "肉を主菜にしつつ、野菜も取りやすい献立です。",
            reason:
              "定番すぎないけど作りやすい構成です。",
          },
        ],
        [
          {
            title: "節約しやすい普段ごはん",
            mainDish: "鶏むね肉の甘酢焼き",
            sideDish: "もやしのナムル",
            soup: "玉ねぎの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: "節約しやすい",
            nutritionComment:
              "肉・野菜・汁物の基本がそろった、普段使いしやすい献立です。",
            reason:
              "コスパを意識しながら、夕食としての満足感も出しやすいです。",
          },
          {
            title: "魚も入れたい日の献立",
            mainDish: "鮭の塩焼き",
            sideDish: "ひじき煮",
            soup: "じゃがいもの味噌汁",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "やや節約寄り" : "ふつう",
            nutritionComment:
              "魚・海藻・汁物が入り、和風でまとまりやすいです。",
            reason:
              "肉以外にしたい日にも使いやすいです。",
          },
          {
            title: "食べやすさ重視の献立",
            mainDish: "照り焼きつくね",
            sideDish: "コールスロー",
            soup: "コンソメスープ",
            estimatedTime: `${cookingTime}分`,
            budgetComment: budgetLevel === "節約" ? "ふつう" : "ふつう",
            nutritionComment:
              "主菜の満足感を出しつつ、副菜と汁物で整えています。",
            reason:
              "子どもがいても食べやすい方向の組み合わせです。",
          },
        ],
      ],
    };
  }, [cookingTime, budgetLevel]);

  const menus = useMemo<MenuItem[]>(() => {
    const now = new Date().toISOString();
    const selectedPatterns = menuPatterns[mood] || menuPatterns["おまかせ"];
    const selectedSet = selectedPatterns[refreshCount % selectedPatterns.length];

    return selectedSet.map((menu, index) => ({
      ...menu,
      id: `${menu.title}-${index}-${Date.now()}-${refreshCount}`,
      createdAt: now,
      reason: avoidIngredients.trim()
        ? `「${avoidIngredients}」を避けやすいように少し配慮した案です。${menu.reason}`
        : menu.reason,
    }));
  }, [menuPatterns, mood, refreshCount, avoidIngredients]);

  const handleSave = (menu: MenuItem) => {
    try {
      const existing = localStorage.getItem("favoriteMenus");
      const parsed: MenuItem[] = existing ? JSON.parse(existing) : [];

      const alreadyExists = parsed.some(
        (item) =>
          item.title === menu.title &&
          item.mainDish === menu.mainDish &&
          item.sideDish === menu.sideDish &&
          item.soup === menu.soup
      );

      if (alreadyExists) {
        alert("この献立はすでに保存されています");
        return;
      }

      const updated = [menu, ...parsed];
      localStorage.setItem("favoriteMenus", JSON.stringify(updated));
      alert("保存しました");
    } catch (error) {
      console.error(error);
      alert("保存に失敗しました");
    }
  };

  const handleRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-gray-700">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <a
            href="/create"
            className="text-sm font-medium text-pink-500 hover:text-pink-600"
          >
            ← 条件入力に戻る
          </a>
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
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="rounded-full bg-[#d8f3dc] px-6 py-3 text-sm font-bold text-gray-700 shadow-md transition hover:scale-[1.01]"
            >
              別の候補にする
            </button>
          </div>

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
                <span className="text-sm text-gray-500">{menu.estimatedTime}</span>
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
                onClick={() => handleSave(menu)}
                className="w-full rounded-full bg-pink-300 px-5 py-3 font-bold text-white shadow-md transition hover:scale-[1.01] hover:bg-pink-400"
              >
                この献立を保存
              </button>
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