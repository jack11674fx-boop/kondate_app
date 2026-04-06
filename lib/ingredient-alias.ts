const INGREDIENT_ALIAS_MAP: Record<string, string[]> = {
    豚小間肉: ["豚肉"],
    豚こま: ["豚肉"],
    豚こま肉: ["豚肉"],
    豚細切れ: ["豚肉"],
    豚切り落とし: ["豚肉"],
    豚肩ロース: ["豚肉"],
    豚ロース: ["豚肉"],
    豚バラ: ["豚肉"],
    豚もも: ["豚肉"],
  
    鶏もも: ["鶏肉"],
    鶏もも肉: ["鶏肉"],
    鶏むね: ["鶏肉"],
    鶏むね肉: ["鶏肉"],
    ささみ: ["鶏肉"],
  
    牛こま: ["牛肉"],
    牛こま肉: ["牛肉"],
    牛切り落とし: ["牛肉"],
    牛バラ: ["牛肉"],
    牛もも: ["牛肉"],
  
    白身魚: ["魚"],
    鮭: ["魚"],
    さけ: ["魚"],
    サケ: ["魚"],
    さば: ["魚"],
    サバ: ["魚"],
    ぶり: ["魚"],
    ブリ: ["魚"],
    あじ: ["魚"],
    アジ: ["魚"],
  
    しめじ: ["きのこ"],
    えのき: ["きのこ"],
    まいたけ: ["きのこ"],
    舞茸: ["きのこ"],
    しいたけ: ["きのこ"],
    椎茸: ["きのこ"],
    なめこ: ["きのこ"],
  
    木綿豆腐: ["豆腐"],
    絹豆腐: ["豆腐"],
    焼き豆腐: ["豆腐"],
    厚揚げ: ["豆腐"],
    油揚げ: ["豆腐"],
  
    長ねぎ: ["ねぎ"],
    青ねぎ: ["ねぎ"],
    白ねぎ: ["ねぎ"],
  
    キャベツ: ["野菜"],
    白菜: ["野菜"],
    小松菜: ["野菜"],
    ほうれん草: ["野菜"],
    にんじん: ["野菜"],
    玉ねぎ: ["野菜"],
    大根: ["野菜"],
    ピーマン: ["野菜"],
    もやし: ["野菜"],
    ブロッコリー: ["野菜"],
    トマト: ["野菜"],
    きゅうり: ["野菜"],
    かぼちゃ: ["野菜"],
    なす: ["野菜"],
  };
  
  function normalizeText(text: string) {
    return text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/　+/g, "");
  }
  
  const NORMALIZED_ALIAS_MAP = Object.entries(INGREDIENT_ALIAS_MAP).reduce<
    Record<string, string[]>
  >((acc, [key, values]) => {
    acc[normalizeText(key)] = values;
    return acc;
  }, {});
  
  export function expandIngredientInput(input: string): string[] {
    const normalized = normalizeText(input);
  
    if (!normalized) {
      return [];
    }
  
    const aliases = NORMALIZED_ALIAS_MAP[normalized] || [];
  
    return Array.from(new Set([input.trim(), ...aliases]));
  }
  
  export function parseIngredientInputList(text: string): string[] {
    const rawItems = text
      .split(/[、,，\s]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  
    const expanded = rawItems.flatMap((item) => expandIngredientInput(item));
  
    return Array.from(new Set(expanded));
  }