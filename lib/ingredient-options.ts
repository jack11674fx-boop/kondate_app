export type IngredientOption = {
    value: string;
    label: string;
    aliases?: string[];
    category:
      | "肉"
      | "魚"
      | "野菜"
      | "きのこ"
      | "豆腐・大豆"
      | "卵・乳"
      | "その他";
  };
  
  export const INGREDIENT_OPTIONS: IngredientOption[] = [
    { value: "豚肉", label: "豚肉", aliases: ["ぶたにく"], category: "肉" },
    {
      value: "豚こま肉",
      label: "豚こま肉",
      aliases: ["豚小間肉", "豚こま", "ぶたこま", "豚細切れ", "豚切り落とし"],
      category: "肉",
    },
    {
      value: "豚バラ肉",
      label: "豚バラ肉",
      aliases: ["豚バラ", "ぶたばら"],
      category: "肉",
    },
    {
      value: "豚ロース肉",
      label: "豚ロース肉",
      aliases: ["豚ロース", "ぶたろーす"],
      category: "肉",
    },
    {
      value: "豚肩ロース肉",
      label: "豚肩ロース肉",
      aliases: ["豚肩ロース", "ぶたかたろーす"],
      category: "肉",
    },
    { value: "鶏肉", label: "鶏肉", aliases: ["とりにく"], category: "肉" },
    {
      value: "鶏もも肉",
      label: "鶏もも肉",
      aliases: ["鶏もも", "とりもも"],
      category: "肉",
    },
    {
      value: "鶏むね肉",
      label: "鶏むね肉",
      aliases: ["鶏胸肉", "鶏むね", "とりむね"],
      category: "肉",
    },
    {
      value: "ささみ",
      label: "ささみ",
      aliases: ["ササミ"],
      category: "肉",
    },
    { value: "牛肉", label: "牛肉", aliases: ["ぎゅうにく"], category: "肉" },
    {
      value: "牛こま肉",
      label: "牛こま肉",
      aliases: ["牛小間肉", "牛こま", "牛切り落とし"],
      category: "肉",
    },
    {
      value: "合いびき肉",
      label: "合いびき肉",
      aliases: ["合挽き肉", "あいびき肉"],
      category: "肉",
    },
    {
      value: "豚ひき肉",
      label: "豚ひき肉",
      aliases: ["豚挽き肉", "ぶたひきにく"],
      category: "肉",
    },
    {
      value: "鶏ひき肉",
      label: "鶏ひき肉",
      aliases: ["鶏挽き肉", "とりひきにく"],
      category: "肉",
    },
  
    { value: "魚", label: "魚", aliases: ["さかな"], category: "魚" },
    { value: "鮭", label: "鮭", aliases: ["さけ", "サケ"], category: "魚" },
    { value: "さば", label: "さば", aliases: ["サバ"], category: "魚" },
    { value: "ぶり", label: "ぶり", aliases: ["ブリ"], category: "魚" },
    { value: "あじ", label: "あじ", aliases: ["アジ"], category: "魚" },
    {
      value: "白身魚",
      label: "白身魚",
      aliases: ["しろみざかな"],
      category: "魚",
    },
  
    { value: "玉ねぎ", label: "玉ねぎ", aliases: ["たまねぎ"], category: "野菜" },
    { value: "長ねぎ", label: "長ねぎ", aliases: ["ねぎ", "白ねぎ", "青ねぎ"], category: "野菜" },
    { value: "にんじん", label: "にんじん", aliases: ["人参"], category: "野菜" },
    { value: "じゃがいも", label: "じゃがいも", aliases: ["ジャガイモ"], category: "野菜" },
    { value: "大根", label: "大根", aliases: ["だいこん"], category: "野菜" },
    { value: "白菜", label: "白菜", aliases: ["はくさい"], category: "野菜" },
    { value: "キャベツ", label: "キャベツ", aliases: [], category: "野菜" },
    { value: "小松菜", label: "小松菜", aliases: ["こまつな"], category: "野菜" },
    { value: "ほうれん草", label: "ほうれん草", aliases: ["ほうれんそう"], category: "野菜" },
    { value: "ピーマン", label: "ピーマン", aliases: [], category: "野菜" },
    { value: "きゅうり", label: "きゅうり", aliases: ["胡瓜"], category: "野菜" },
    { value: "トマト", label: "トマト", aliases: [], category: "野菜" },
    { value: "なす", label: "なす", aliases: ["ナス"], category: "野菜" },
    { value: "かぼちゃ", label: "かぼちゃ", aliases: ["南瓜"], category: "野菜" },
    { value: "ブロッコリー", label: "ブロッコリー", aliases: [], category: "野菜" },
    { value: "もやし", label: "もやし", aliases: [], category: "野菜" },
    { value: "たけのこ", label: "たけのこ", aliases: ["筍"], category: "野菜" },
  
    { value: "きのこ", label: "きのこ", aliases: [], category: "きのこ" },
    { value: "しめじ", label: "しめじ", aliases: ["シメジ"], category: "きのこ" },
    { value: "えのき", label: "えのき", aliases: ["エノキ"], category: "きのこ" },
    { value: "しいたけ", label: "しいたけ", aliases: ["椎茸", "シイタケ"], category: "きのこ" },
    { value: "まいたけ", label: "まいたけ", aliases: ["舞茸", "マイタケ"], category: "きのこ" },
    { value: "なめこ", label: "なめこ", aliases: ["ナメコ"], category: "きのこ" },
  
    { value: "豆腐", label: "豆腐", aliases: ["とうふ"], category: "豆腐・大豆" },
    { value: "木綿豆腐", label: "木綿豆腐", aliases: ["もめん豆腐"], category: "豆腐・大豆" },
    { value: "絹豆腐", label: "絹豆腐", aliases: ["きぬ豆腐"], category: "豆腐・大豆" },
    { value: "厚揚げ", label: "厚揚げ", aliases: ["あつあげ"], category: "豆腐・大豆" },
    { value: "油揚げ", label: "油揚げ", aliases: ["あぶらあげ"], category: "豆腐・大豆" },
  
    { value: "卵", label: "卵", aliases: ["たまご"], category: "卵・乳" },
    { value: "牛乳", label: "牛乳", aliases: ["ぎゅうにゅう"], category: "卵・乳" },
    { value: "チーズ", label: "チーズ", aliases: [], category: "卵・乳" },
  
    { value: "ハム", label: "ハム", aliases: [], category: "その他" },
    { value: "ベーコン", label: "ベーコン", aliases: [], category: "その他" },
    { value: "春雨", label: "春雨", aliases: ["はるさめ"], category: "その他" },
    { value: "マカロニ", label: "マカロニ", aliases: [], category: "その他" },
  ];
  
  function normalizeText(text: string) {
    return text.trim().toLowerCase().replace(/\s+/g, "").replace(/　+/g, "");
  }
  
  export function searchIngredientOptions(keyword: string) {
    const normalizedKeyword = normalizeText(keyword);
  
    if (!normalizedKeyword) {
      return INGREDIENT_OPTIONS;
    }
  
    return INGREDIENT_OPTIONS.filter((option) => {
      const targets = [option.label, option.value, ...(option.aliases || [])];
  
      return targets.some((target) =>
        normalizeText(target).includes(normalizedKeyword)
      );
    });
  }