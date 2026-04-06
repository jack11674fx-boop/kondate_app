export const RAW_SIDE_DISHES_BATCH_01 = [
    {
        id: "side-spinach-ohitashi",
        name: "ほうれん草のおひたし",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ほうれん草", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ほうれん草", amount: "1束" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "だし", amount: "小さじ2" },
              { name: "かつおぶし", amount: "1袋" },
            ],
          },
        ],
        steps: [
          {
            description: "ほうれん草はさっとゆでて冷水にとり、水気をしっかりしぼって食べやすい長さに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "器にほうれん草を盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bをかけ、全体を軽くなじませて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/spinach-ohitashi.png",
        hasImage: false,
      },
      {
        id: "side-potato-salad",
        name: "ポテトサラダ",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["じゃがいも", "きゅうり", "にんじん", "ハム"],
        nutritionTags: ["炭水化物", "食物繊維", "たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "じゃがいも", amount: "2個" },
              { name: "きゅうり", amount: "1/2本" },
              { name: "にんじん", amount: "1/4本" },
              { name: "ハム", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ3" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "酢", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "じゃがいもはゆでてつぶし、きゅうり、にんじん、ハムは食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れて全体を混ぜる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてなめらかに和え、味をととのえる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/potato-salad.png",
        hasImage: false,
      },
      {
        id: "side-kinpira-gobo",
        name: "きんぴらごぼう",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ごぼう", "にんじん", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ごぼう", amount: "1/2本" },
              { name: "にんじん", amount: "1/4本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ1" },
              { name: "白ごま", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "ごぼうとにんじんを細切りにして下ごしらえする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAをしんなりするまで炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて汁気が少なくなるまで炒めからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/kinpira-gobo.png",
        hasImage: false,
      },
      {
        id: "side-hijiki-no-nimono",
        name: "ひじきの煮物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ひじき", "にんじん", "油揚げ"],
        nutritionTags: ["食物繊維", "ミネラル"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "乾燥ひじき", amount: "10g" },
              { name: "にんじん", amount: "1/4本" },
              { name: "油揚げ", amount: "1/2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "だし", amount: "150ml" },
            ],
          },
        ],
        steps: [
          {
            description: "ひじきは戻し、にんじんと油揚げは細く切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋でAをさっと炒める。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて煮汁が少なくなるまで煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/hijiki-no-nimono.png",
        hasImage: false,
      },
      {
        id: "side-hiyayakko",
        name: "冷ややっこ",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["豆腐", "青ねぎ"],
        nutritionTags: ["たんぱく質", "カルシウム"],
        cookingTime: 5,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豆腐", amount: "1丁" },
              { name: "青ねぎ", amount: "1本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "かつおぶし", amount: "1袋" },
              { name: "しょうが", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "豆腐を食べやすく切り、器に盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "青ねぎをのせる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bをかけて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/hiyayakko.png",
        hasImage: false,
      },
      {
        id: "side-macaroni-salad",
        name: "マカロニサラダ",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["マカロニ", "きゅうり", "にんじん", "ハム"],
        nutritionTags: ["炭水化物", "食物繊維", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "マカロニ", amount: "50g" },
              { name: "きゅうり", amount: "1/2本" },
              { name: "にんじん", amount: "1/4本" },
              { name: "ハム", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ3" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "酢", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "マカロニをゆで、きゅうり、にんじん、ハムを食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れて混ぜる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/macaroni-salad.png",
        hasImage: false,
      },
      {
        id: "side-simmered-kabocha",
        name: "かぼちゃの煮物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["かぼちゃ", "野菜"],
        nutritionTags: ["炭水化物", "食物繊維", "ビタミン"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "かぼちゃ", amount: "1/4個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "だし", amount: "150ml" },
            ],
          },
        ],
        steps: [
          {
            description: "かぼちゃを食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にかぼちゃを並べる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてやわらかくなるまで煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/simmered-kabocha.png",
        hasImage: false,
      },
      {
        id: "side-komatsuna-goma-ae",
        name: "小松菜の胡麻和え",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["小松菜", "ごま", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維", "カルシウム"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "小松菜", amount: "1束" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "すりごま", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "砂糖", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "小松菜をゆでて水気をしぼり、食べやすい長さに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルに小松菜を入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/komatsuna-goma-ae.png",
        hasImage: false,
      },
      {
        id: "side-moyashi-namul",
        name: "もやしナムル",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["もやし", "ごま", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "もやし", amount: "1袋" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "ごま油", amount: "小さじ2" },
              { name: "塩", amount: "少々" },
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "白ごま", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "もやしをさっとゆでて水気を切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにもやしを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてよく和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/moyashi-namul.png",
        hasImage: false,
      },
      {
        id: "side-cucumber-sunomono",
        name: "きゅうりの酢の物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["きゅうり", "わかめ", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "きゅうり", amount: "1本" },
              { name: "わかめ", amount: "大さじ1" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "塩", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "きゅうりを薄切りにし、わかめは戻しておく。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cucumber-sunomono.png",
        hasImage: false,
      },
      {
        id: "side-tamagoyaki",
        name: "卵焼き",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["卵"],
        nutritionTags: ["たんぱく質", "脂質"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "卵", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "砂糖", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "塩", amount: "少々" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "ボウルで卵を溶き、Bを加えて混ぜる。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "フライパンで数回に分けて焼きながら巻く。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "形を整えて切り分ける。",
          },
        ],
        imageUrl: "/images/side-dishes/tamagoyaki.png",
        hasImage: false,
      },
      {
        id: "side-cabbage-coleslaw",
        name: "キャベツのコールスロー",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["キャベツ", "にんじん", "コーン", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "キャベツ", amount: "2枚" },
              { name: "にんじん", amount: "1/4本" },
              { name: "コーン", amount: "大さじ2" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ2" },
              { name: "酢", amount: "小さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "キャベツとにんじんを細かく切って下ごしらえする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を混ぜる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cabbage-coleslaw.png",
        hasImage: false,
      },
      {
        id: "side-broccoli-okaka-ae",
        name: "ブロッコリーのおかか和え",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ブロッコリー", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ブロッコリー", amount: "1/2株" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "かつおぶし", amount: "1袋" },
            ],
          },
        ],
        steps: [
          {
            description: "ブロッコリーを小房に分けてゆでる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "器にブロッコリーを盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/broccoli-okaka-ae.png",
        hasImage: false,
      },
      {
        id: "side-ninjin-shirishiri",
        name: "にんじんしりしり",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["にんじん", "卵", "ツナ", "野菜"],
        nutritionTags: ["ビタミン", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "にんじん", amount: "1本" },
              { name: "卵", amount: "1個" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "塩", amount: "少々" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "にんじんを細切りにし、卵は溶いておく。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をつけ、卵を加えて炒め合わせる。",
            ingredientGroupLabels: ["B", "A"],
          },
        ],
        imageUrl: "/images/side-dishes/ninjin-shirishiri.png",
        hasImage: false,
      },
      {
        id: "side-kiriboshi-daikon-nimono",
        name: "切り干し大根の煮物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["切り干し大根", "にんじん", "油揚げ"],
        nutritionTags: ["食物繊維", "ミネラル"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "切り干し大根", amount: "20g" },
              { name: "にんじん", amount: "1/4本" },
              { name: "油揚げ", amount: "1/2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "だし", amount: "150ml" },
            ],
          },
        ],
        steps: [
          {
            description: "切り干し大根を戻し、にんじんと油揚げを切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋でAをさっと炒める。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて汁気が少なくなるまで煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/kiriboshi-daikon-nimono.png",
        hasImage: false,
      },
      {
        id: "side-tuna-salad",
        name: "ツナサラダ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["ツナ", "レタス", "きゅうり", "トマト", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ツナ缶", amount: "1缶" },
              { name: "レタス", amount: "2枚" },
              { name: "きゅうり", amount: "1/2本" },
              { name: "トマト", amount: "1個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "レモン汁", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "野菜を食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "器にAを盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bをかけて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/tuna-salad.png",
        hasImage: false,
      },
      {
        id: "side-simmered-potatoes",
        name: "じゃがいもの煮っころがし",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["じゃがいも"],
        nutritionTags: ["炭水化物", "食物繊維"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "じゃがいも", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "だし", amount: "150ml" },
            ],
          },
        ],
        steps: [
          {
            description: "じゃがいもを食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にじゃがいもを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてやわらかくなるまで煮からめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/simmered-potatoes.png",
        hasImage: false,
      },
      {
        id: "side-cucumber-asazuke",
        name: "きゅうりの浅漬け",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["きゅうり", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "きゅうり", amount: "1本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "小さじ1/2" },
              { name: "酢", amount: "小さじ1" },
              { name: "昆布", amount: "5cm" },
            ],
          },
        ],
        steps: [
          {
            description: "きゅうりを食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "袋またはボウルにきゅうりを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてなじませ、しばらく置く。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cucumber-asazuke.png",
        hasImage: false,
      },
      {
        id: "side-harusame-salad",
        name: "春雨サラダ",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["春雨", "きゅうり", "にんじん", "ハム"],
        nutritionTags: ["炭水化物", "食物繊維", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "春雨", amount: "40g" },
              { name: "きゅうり", amount: "1/2本" },
              { name: "にんじん", amount: "1/4本" },
              { name: "ハム", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "春雨をゆで、きゅうり、にんじん、ハムを細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/harusame-salad.png",
        hasImage: false,
      },
      {
        id: "side-eggplant-nibitashi",
        name: "なすの煮びたし",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["なす", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "なす", amount: "2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "だし", amount: "150ml" },
              { name: "しょうが", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "なすを食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンまたは鍋でなすを軽く焼く。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてさっと煮て味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/eggplant-nibitashi.png",
        hasImage: false,
      },
      
      {
        id: "side-daikon-tuna-salad",
        name: "大根とツナのサラダ",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["大根", "ツナ", "野菜"],
        nutritionTags: ["たんぱく質", "食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "大根", amount: "5cm分" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
            ],
          },
        ],
        steps: [
          {
            description: "大根は細切りにし、ツナは油を軽く切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れて全体を混ぜる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和え、味をととのえる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/daikon-tuna-salad.png",
        hasImage: false,
      },
      {
        id: "side-spinach-bacon-butter-stir-fry",
        name: "ほうれん草とベーコンのバター炒め",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["ほうれん草", "ベーコン", "野菜"],
        nutritionTags: ["ビタミン", "たんぱく質", "脂質"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ほうれん草", amount: "1/2束" },
              { name: "ベーコン", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "しょうゆ", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "ほうれん草は4cm幅に切り、ベーコンは1cm幅に切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでベーコンを炒め、ほうれん草を加えて火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/spinach-bacon-butter-stir-fry.png",
        hasImage: false,
      },
      {
        id: "side-eggplant-miso-stir-fry",
        name: "なすの味噌炒め",
        category: "side",
        moods: ["和食", "こってり"],
        tags: ["なす", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン", "脂質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "なす", amount: "2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "味噌", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "大さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "なすは乱切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAをしんなりするまで炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体に味噌だれをからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/eggplant-miso-stir-fry.png",
        hasImage: false,
      },
      {
        id: "side-green-pepper-chikuwa-kinpira",
        name: "ピーマンとちくわのきんぴら",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ピーマン", "ちくわ", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ピーマン", amount: "2個" },
              { name: "ちくわ", amount: "2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "ごま油", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "みりん", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "ピーマンとちくわは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて汁気が少なくなるまで炒める。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/green-pepper-chikuwa-kinpira.png",
        hasImage: false,
      },
      {
        id: "side-cabbage-egg-chinese-stir-fry",
        name: "キャベツと卵の中華炒め",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["キャベツ", "卵", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "キャベツ", amount: "2枚" },
              { name: "卵", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "油", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "キャベツはざく切りにし、卵は溶いておく。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでキャベツを炒め、しんなりしたら卵を加える。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をととのえる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cabbage-egg-chinese-stir-fry.png",
        hasImage: false,
      },
      {
        id: "side-tomato-onion-marinade",
        name: "トマトと玉ねぎのマリネ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["トマト", "玉ねぎ", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "トマト", amount: "1個" },
              { name: "玉ねぎ", amount: "1/4個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ1" },
              { name: "オリーブオイル", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "トマトはくし形に切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和え、少し置いてなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/tomato-onion-marinade.png",
        hasImage: false,
      },
      {
        id: "side-moyashi-cucumber-chinese-ae",
        name: "もやしときゅうりの中華和え",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["もやし", "きゅうり", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "もやし", amount: "1/2袋" },
              { name: "きゅうり", amount: "1/2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "ごま油", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酢", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "もやしはさっとゆで、きゅうりは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れて混ぜる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/moyashi-cucumber-chinese-ae.png",
        hasImage: false,
      },
      {
        id: "side-satsumaimo-amani",
        name: "さつまいもの甘煮",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["さつまいも"],
        nutritionTags: ["炭水化物", "食物繊維", "ビタミン"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さつまいも", amount: "1/2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "砂糖", amount: "大さじ1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "水", amount: "200ml" },
            ],
          },
        ],
        steps: [
          {
            description: "さつまいもは輪切りまたは乱切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にAと水を入れてやわらかくなるまで煮る。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/satsumaimo-amani.png",
        hasImage: false,
      },
      {
        id: "side-hakusai-aburaage-nibitashi",
        name: "白菜と油揚げの煮びたし",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["白菜", "油揚げ", "野菜"],
        nutritionTags: ["食物繊維", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白菜", amount: "2枚" },
              { name: "油揚げ", amount: "1/2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "だし", amount: "150ml" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "白菜はざく切りにし、油揚げは短冊切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋でAをしんなりするまで煮る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて味をしみ込ませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/hakusai-aburaage-nibitashi.png",
        hasImage: false,
      },
      {
        id: "side-mushroom-butter-soy-stir-fry",
        name: "きのこのバター醤油炒め",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["きのこ", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン", "脂質"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "しめじ", amount: "1/2パック" },
              { name: "えのき", amount: "1/2袋" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "しょうゆ", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "しめじとえのきは石づきを取ってほぐす。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒めてしんなりさせる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/mushroom-butter-soy-stir-fry.png",
        hasImage: false,
      },
      {
        id: "side-okra-okaka-ae",
        name: "オクラのおかか和え",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["オクラ", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン", "ミネラル"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "オクラ", amount: "6本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "かつおぶし", amount: "1袋" },
            ],
          },
        ],
        steps: [
          {
            description: "オクラはさっとゆでて斜め切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/okra-okaka-ae.png",
        hasImage: false,
      },
      {
        id: "side-nagaimo-cucumber-ae",
        name: "長いもときゅうりの和え物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["長いも", "きゅうり", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "長いも", amount: "5cm分" },
              { name: "きゅうり", amount: "1/2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酢", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "長いもは短冊切りにし、きゅうりは薄切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和え、味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/nagaimo-cucumber-ae.png",
        hasImage: false,
      },
      {
        id: "side-mizuna-tuna-salad",
        name: "水菜とツナのサラダ",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["水菜", "ツナ", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "水菜", amount: "1/3袋" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "ごま油", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "水菜は4cm幅に切り、ツナは軽く油を切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "器にAを盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bをかけて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/mizuna-tuna-salad.png",
        hasImage: false,
      },
      {
        id: "side-carrot-tuna-salad",
        name: "にんじんとツナのサラダ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["にんじん", "ツナ", "野菜"],
        nutritionTags: ["ビタミン", "たんぱく質", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "にんじん", amount: "1/2本" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ1" },
              { name: "酢", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "にんじんは細切りにし、ツナは軽く油を切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/carrot-tuna-salad.png",
        hasImage: false,
      },
      {
        id: "side-atsuage-amakara-yaki",
        name: "厚揚げの甘辛焼き",
        category: "side",
        moods: ["和食", "こってり"],
        tags: ["厚揚げ"],
        nutritionTags: ["たんぱく質", "カルシウム", "脂質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
              { name: "砂糖", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "厚揚げはひと口大に切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAの表面に焼き色をつける。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/atsuage-amakara-yaki.png",
        hasImage: false,
      },
      {
        id: "side-green-pepper-tuna-ae",
        name: "ピーマンとツナの和え物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["ピーマン", "ツナ", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ピーマン", amount: "2個" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "ピーマンは細切りにしてさっと火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
       imageUrl: "/images/side-dishes/green-pepper-tuna-ae.png",
        hasImage: false,
      },
      {
        id: "side-broccoli-boiled-egg-salad",
        name: "ブロッコリーとゆで卵のサラダ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["ブロッコリー", "卵", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "食物繊維"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ブロッコリー", amount: "1/2株" },
              { name: "卵", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "ブロッコリーは小房に分けてゆで、ゆで卵は4等分に切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて軽く和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/broccoli-boiled-egg-salad.png",
        hasImage: false,
      },
      {
        id: "side-konnyaku-pirikara-itame",
        name: "こんにゃくのピリ辛炒め",
        category: "side",
        moods: ["和食", "こってり"],
        tags: ["こんにゃく"],
        nutritionTags: ["食物繊維", "ミネラル"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "こんにゃく", amount: "1枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
              { name: "豆板醤", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "こんにゃくは短冊切りにして下ゆでする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒めて水分を飛ばす。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/konnyaku-pirikara-itame.png",
        hasImage: false,
      },
      {
        id: "side-renkon-kinpira",
        name: "れんこんのきんぴら",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["れんこん", "にんじん", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン", "ミネラル"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "れんこん", amount: "80g" },
              { name: "にんじん", amount: "1/4本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
              { name: "ごま油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "れんこんとにんじんは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて汁気を飛ばしながら炒める。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/renkon-kinpira.png",
        hasImage: false,
      },
      {
        id: "side-tomato-egg-chinese-stir-fry",
        name: "トマトと卵の中華炒め",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["トマト", "卵", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン", "脂質"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "トマト", amount: "1個" },
              { name: "卵", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "トマトはくし形に切り、卵は溶いておく。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンで卵を軽く炒め、トマトを加える。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をととのえる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/tomato-egg-chinese-stir-fry.png",
        hasImage: false,
      },
      
      
      
      
      
      
      
      
      {
        id: "side-daikon-aburaage-satto-ni",
        name: "大根と油揚げのさっと煮",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["大根", "油揚げ", "野菜"],
        nutritionTags: ["食物繊維", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "大根", amount: "6cm分" },
              { name: "油揚げ", amount: "1/2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "だし", amount: "150ml" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "大根は薄めのいちょう切りにし、油揚げは食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にAを入れて軽く火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてやわらかくなるまでさっと煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/daikon-aburaage-satto-ni.png",
        hasImage: false,
      },
      {
        id: "side-chingensai-shiitake-chuka-itame",
        name: "チンゲン菜としいたけの中華炒め",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["チンゲン菜", "しいたけ", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "チンゲン菜", amount: "1株" },
              { name: "しいたけ", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "ごま油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "チンゲン菜は食べやすく切り、しいたけは薄切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体に味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/chingensai-shiitake-chuka-itame.png",
        hasImage: false,
      },
      {
        id: "side-moyashi-ham-namul",
        name: "もやしとハムのナムル",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["もやし", "ハム", "野菜"],
        nutritionTags: ["たんぱく質", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "もやし", amount: "1袋" },
              { name: "ハム", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "ごま油", amount: "小さじ2" },
              { name: "塩", amount: "少々" },
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "白ごま", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "もやしをさっとゆで、ハムは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/moyashi-ham-namul.png",
        hasImage: false,
      },
      {
        id: "side-cabbage-shirasu-ae",
        name: "キャベツとしらすの和え物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["キャベツ", "しらす", "野菜"],
        nutritionTags: ["たんぱく質", "カルシウム", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "キャベツ", amount: "2枚" },
              { name: "しらす", amount: "大さじ2" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ1/2" },
            ],
          },
        ],
        steps: [
          {
            description: "キャベツは細切りにしてさっとゆでる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにキャベツとしらすを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cabbage-shirasu-ae.png",
        hasImage: false,
      },
      {
        id: "side-jagaimo-piman-hosogiri-itame",
        name: "じゃがいもとピーマンの細切り炒め",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["じゃがいも", "ピーマン", "野菜"],
        nutritionTags: ["炭水化物", "ビタミン", "食物繊維"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "じゃがいも", amount: "2個" },
              { name: "ピーマン", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "塩", amount: "少々" },
              { name: "ごま油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "じゃがいもとピーマンを細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて味をととのえる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/jagaimo-piman-hosogiri-itame.png",
        hasImage: false,
      },
      {
        id: "side-ninjin-chikuwa-itameni",
        name: "にんじんとちくわの炒め煮",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["にんじん", "ちくわ", "野菜"],
        nutritionTags: ["ビタミン", "たんぱく質", "食物繊維"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "にんじん", amount: "1/2本" },
              { name: "ちくわ", amount: "2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "だし", amount: "100ml" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "にんじんとちくわを細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて汁気が少なくなるまで煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/ninjin-chikuwa-itameni.png",
        hasImage: false,
      },
      {
        id: "side-spinach-corn-butter-saute",
        name: "ほうれん草とコーンのバターソテー",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["ほうれん草", "コーン", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ほうれん草", amount: "1/2束" },
              { name: "コーン", amount: "大さじ3" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "ほうれん草は食べやすい長さに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体にからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/spinach-corn-butter-saute.png",
        hasImage: false,
      },
      {
        id: "side-hakusai-tuna-satto-ni",
        name: "白菜とツナのさっと煮",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["白菜", "ツナ", "野菜"],
        nutritionTags: ["たんぱく質", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白菜", amount: "2枚" },
              { name: "ツナ缶", amount: "1缶" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "だし", amount: "100ml" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "白菜をざく切りにし、ツナは軽く油を切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にAを入れて軽く火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてさっと煮て仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/hakusai-tuna-satto-ni.png",
        hasImage: false,
      },
      {
        id: "side-tomato-cucumber-salad",
        name: "トマトときゅうりのサラダ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["トマト", "きゅうり", "野菜"],
        nutritionTags: ["ビタミン", "食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "トマト", amount: "1個" },
              { name: "きゅうり", amount: "1本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "オリーブオイル", amount: "大さじ1" },
              { name: "酢", amount: "小さじ1" },
              { name: "塩", amount: "少々" },
            ],
          },
        ],
        steps: [
          {
            description: "トマトときゅうりを食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "器にAを盛る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bをかけて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/tomato-cucumber-salad.png",
        hasImage: false,
      },
      {
        id: "side-atsuage-piman-miso-itame",
        name: "厚揚げとピーマンの味噌炒め",
        category: "side",
        moods: ["和食", "こってり"],
        tags: ["厚揚げ", "ピーマン", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
              { name: "ピーマン", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "味噌", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "厚揚げは食べやすく切り、ピーマンは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体に味をからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/atsuage-piman-miso-itame.png",
        hasImage: false,
      },
      {
        id: "side-satsumaimo-ringo-salad",
        name: "さつまいもとりんごのサラダ",
        category: "side",
        moods: ["洋食", "あっさり"],
        tags: ["さつまいも", "りんご"],
        nutritionTags: ["炭水化物", "ビタミン", "食物繊維"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さつまいも", amount: "1/2本" },
              { name: "りんご", amount: "1/4個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "マヨネーズ", amount: "大さじ2" },
              { name: "塩", amount: "少々" },
              { name: "レモン汁", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "さつまいもはゆで、りんごは食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/satsumaimo-ringo-salad.png",
        hasImage: false,
      },
      {
        id: "side-renkon-amazu-itame",
        name: "れんこんの甘酢炒め",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["れんこん", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "れんこん", amount: "100g" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "れんこんを薄切りにして水にさらす。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでれんこんを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体に甘酢をからめる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/renkon-amazu-itame.png",
        hasImage: false,
      },
      {
        id: "side-kinoko-bacon-consomme-itame",
        name: "きのことベーコンのコンソメ炒め",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["きのこ", "ベーコン"],
        nutritionTags: ["食物繊維", "たんぱく質"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "しめじ", amount: "1/2パック" },
              { name: "えのき", amount: "1/2袋" },
              { name: "ベーコン", amount: "2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "コンソメ", amount: "小さじ1" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "きのこはほぐし、ベーコンは食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体に味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/kinoko-bacon-consomme-itame.png",
        hasImage: false,
      },
      {
        id: "side-mizuna-aburaage-satto-ni",
        name: "水菜と油揚げのさっと煮",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["水菜", "油揚げ", "野菜"],
        nutritionTags: ["食物繊維", "たんぱく質"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "水菜", amount: "1/2袋" },
              { name: "油揚げ", amount: "1/2枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "だし", amount: "100ml" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "水菜は食べやすい長さに切り、油揚げは細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にAを入れて軽く火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えてさっと煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/mizuna-aburaage-satto-ni.png",
        hasImage: false,
      },
      {
        id: "side-cabbage-wiener-itamemono",
        name: "キャベツとウインナーの炒め物",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["キャベツ", "ウインナー", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "キャベツ", amount: "2枚" },
              { name: "ウインナー", amount: "3本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "小さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "キャベツはざく切りにし、ウインナーは斜め切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をととのえて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/cabbage-wiener-itamemono.png",
        hasImage: false,
      },
      {
        id: "side-nira-tamago-itame",
        name: "にらと卵の炒め物",
        category: "side",
        moods: ["中華", "あっさり"],
        tags: ["にら", "卵", "野菜"],
        nutritionTags: ["たんぱく質", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "にら", amount: "1/2束" },
              { name: "卵", amount: "2個" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "鶏ガラスープの素", amount: "小さじ1" },
              { name: "しょうゆ", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "にらは食べやすい長さに切り、卵は溶いておく。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンで卵を炒め、続けてにらを加える。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をととのえて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/nira-tamago-itame.png",
        hasImage: false,
      },
      {
        id: "side-daikon-cucumber-shiokombu-ae",
        name: "大根ときゅうりの塩昆布和え",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["大根", "きゅうり", "塩昆布", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "大根", amount: "5cm分" },
              { name: "きゅうり", amount: "1/2本" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "塩昆布", amount: "大さじ1" },
              { name: "ごま油", amount: "小さじ1/2" },
            ],
          },
        ],
        steps: [
          {
            description: "大根ときゅうりを細切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "ボウルにAを入れる。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて全体を和える。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/daikon-cucumber-shiokombu-ae.png",
        hasImage: false,
      },
      {
        id: "side-jagaimo-bacon-garlic-itame",
        name: "じゃがいもとベーコンのガーリック炒め",
        category: "side",
        moods: ["洋食", "こってり"],
        tags: ["じゃがいも", "ベーコン", "にんにく"],
        nutritionTags: ["炭水化物", "たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "じゃがいも", amount: "2個" },
              { name: "ベーコン", amount: "2枚" },
              { name: "にんにく", amount: "1かけ" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "オリーブオイル", amount: "小さじ2" },
            ],
          },
        ],
        steps: [
          {
            description: "じゃがいもは細切りにし、ベーコンは食べやすく切り、にんにくは薄切りにする。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bで味をととのえて仕上げる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/jagaimo-bacon-garlic-itame.png",
        hasImage: false,
      },
      {
        id: "side-komatsuna-atsuage-nimono",
        name: "小松菜と厚揚げの煮物",
        category: "side",
        moods: ["和食", "あっさり"],
        tags: ["小松菜", "厚揚げ", "野菜"],
        nutritionTags: ["たんぱく質", "カルシウム", "ビタミン"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "小松菜", amount: "1束" },
              { name: "厚揚げ", amount: "1枚" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "だし", amount: "150ml" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "みりん", amount: "大さじ1" },
            ],
          },
        ],
        steps: [
          {
            description: "小松菜は食べやすい長さに切り、厚揚げは食べやすく切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "鍋にAを入れて軽く火を通す。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "Bを加えて味をなじませながら煮る。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/komatsuna-atsuage-nimono.png",
        hasImage: false,
      },
      {
        id: "side-moyashi-nira-pirikara-itame",
        name: "もやしとニラのピリ辛炒め",
        category: "side",
        moods: ["中華", "こってり"],
        tags: ["もやし", "にら", "野菜"],
        nutritionTags: ["食物繊維", "ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "もやし", amount: "1袋" },
              { name: "にら", amount: "1/3束" },
            ],
          },
          {
            label: "B",
            items: [
              { name: "豆板醤", amount: "小さじ1/2" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ1" },
              { name: "鶏ガラスープの素", amount: "小さじ1/2" },
            ],
          },
        ],
        steps: [
          {
            description: "もやしは洗い、にらは食べやすい長さに切る。",
            ingredientGroupLabels: ["A"],
          },
          {
            description: "フライパンでAを手早く炒める。",
            ingredientGroupLabels: ["A", "B"],
          },
          {
            description: "Bを加えて全体にピリ辛味をなじませる。",
            ingredientGroupLabels: ["B"],
          },
        ],
        imageUrl: "/images/side-dishes/moyashi-nira-pirikara-itame.png",
        hasImage: false,
      },{
        id: "side-pepper-jako-stir-fry",
        category: "side",
        name: "ピーマンとじゃこの炒め物",
        moods: ["和食","あっさり"],
        tags: ["ピーマン","じゃこ"],
        nutritionTags: ["カルシウム","ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "ピーマン", amount: "4個" },
        { name: "ちりめんじゃこ", amount: "20g" },
        { name: "ごま油", amount: "小さじ1" },
        { name: "しょうゆ", amount: "小さじ1" },
        { name: "白ごま", amount: "小さじ1" }
        ]
        }
        ],
        steps: [
        { description: "ピーマンは縦半分に切って種を取り、細切りにする。" },
        { description: "フライパンにごま油を熱し、ピーマンとちりめんじゃこを中火で炒める。" },
        { description: "しょうゆを回し入れて全体にからめ、白ごまをふって仕上げる。" }
        ],
        imageUrl: "/images/side-dishes/pepper-jako-stir-fry.png",
        hasImage: false
        },
        {
        id: "side-hakusai-ham-cream-ni",
        category: "side",
        name: "白菜とハムのクリーム煮",
        moods: ["洋食","こってり"],
        tags: ["白菜","ハム","牛乳"],
        nutritionTags: ["たんぱく質","カルシウム"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "白菜", amount: "3枚" },
        { name: "ハム", amount: "4枚" },
        { name: "牛乳", amount: "150ml" },
        { name: "バター", amount: "10g" },
        { name: "小麦粉", amount: "大さじ1" },
        { name: "コンソメ", amount: "小さじ1" },
        { name: "塩", amount: "小さじ1/4" }
        ]
        }
        ],
        steps: [
        { description: "白菜はざく切りにし、ハムは短冊切りにする。" },
        { description: "フライパンにバターを熱して白菜とハムを炒め、小麦粉を加えてなじませる。" },
        { description: "牛乳とコンソメと塩を加え、とろみがつくまで煮る。" }
        ],
        imageUrl: "/images/side-dishes/hakusai-ham-cream-ni.png",
        hasImage: false
        },
        {
        id: "side-cucumber-wakame-goma-ae",
        category: "side",
        name: "きゅうりとわかめのごま和え",
        moods: ["和食","あっさり"],
        tags: ["きゅうり","わかめ","ごま"],
        nutritionTags: ["食物繊維","ミネラル"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "きゅうり", amount: "1本" },
        { name: "乾燥わかめ", amount: "3g" },
        { name: "すりごま", amount: "大さじ1" },
        { name: "しょうゆ", amount: "小さじ2" },
        { name: "砂糖", amount: "小さじ1" },
        { name: "酢", amount: "小さじ1" }
        ]
        }
        ],
        steps: [
        { description: "きゅうりは薄切りにし、わかめは水で戻して水気を切る。" },
        { description: "ボウルにきゅうりとわかめを入れて軽く混ぜる。" },
        { description: "すりごま、しょうゆ、砂糖、酢を加えて和える。" }
        ],
        imageUrl: "/images/side-dishes/cucumber-wakame-goma-ae.png",
        hasImage: false
        },
        {
        id: "side-daikon-bacon-consomme-ni",
        category: "side",
        name: "大根とベーコンのコンソメ煮",
        moods: ["洋食","あっさり"],
        tags: ["大根","ベーコン"],
        nutritionTags: ["食物繊維","たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "大根", amount: "1/4本" },
        { name: "ベーコン", amount: "2枚" },
        { name: "水", amount: "250ml" },
        { name: "コンソメ", amount: "小さじ1" },
        { name: "塩", amount: "小さじ1/4" },
        { name: "こしょう", amount: "少々" }
        ]
        }
        ],
        steps: [
        { description: "大根はいちょう切りにし、ベーコンは2cm幅に切る。" },
        { description: "鍋に大根、ベーコン、水を入れて中火で煮る。" },
        { description: "大根がやわらかくなったらコンソメ、塩、こしょうで味をととのえる。" }
        ],
        imageUrl: "/images/side-dishes/daikon-bacon-consomme-ni.png",
        hasImage: false
        },
        {
        id: "side-eggplant-pepper-agebitashi",
        category: "side",
        name: "なすとピーマンの揚げびたし",
        moods: ["和食","あっさり"],
        tags: ["なす","ピーマン"],
        nutritionTags: ["ビタミン","食物繊維"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "なす", amount: "2本" },
        { name: "ピーマン", amount: "3個" },
        { name: "サラダ油", amount: "大さじ3" },
        { name: "めんつゆ", amount: "大さじ3" },
        { name: "水", amount: "大さじ3" },
        { name: "おろししょうが", amount: "小さじ1/2" }
        ]
        }
        ],
        steps: [
        { description: "なすは縦半分に切って食べやすい大きさにし、ピーマンは縦半分に切る。" },
        { description: "フライパンにサラダ油を熱し、なすとピーマンを両面こんがり焼く。" },
        { description: "めんつゆ、水、おろししょうがを合わせたつゆに熱いうちに漬ける。" }
        ],
        imageUrl: "/images/side-dishes/eggplant-pepper-agebitashi.png",
        hasImage: false
        },
        {
        id: "side-broccoli-tuna-mayo-ae",
        category: "side",
        name: "ブロッコリーとツナのマヨ和え",
        moods: ["洋食","あっさり"],
        tags: ["ブロッコリー","ツナ"],
        nutritionTags: ["たんぱく質","ビタミン"],
        cookingTime: 10,
        budgetLevel: "ふつう",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "ブロッコリー", amount: "1/2株" },
        { name: "ツナ缶", amount: "1缶" },
        { name: "マヨネーズ", amount: "大さじ2" },
        { name: "しょうゆ", amount: "小さじ1/2" },
        { name: "塩", amount: "少々" }
        ]
        }
        ],
        steps: [
        { description: "ブロッコリーは小房に分けてゆで、水気を切る。" },
        { description: "ツナは油を切り、ブロッコリーと一緒にボウルに入れる。" },
        { description: "マヨネーズ、しょうゆ、塩を加えて全体を和える。" }
        ],
        imageUrl: "/images/side-dishes/broccoli-tuna-mayo-ae.png",
        hasImage: false
        },
        {
        id: "side-komatsuna-shimeji-butter-stir-fry",
        category: "side",
        name: "小松菜としめじのバター炒め",
        moods: ["洋食","こってり"],
        tags: ["小松菜","しめじ"],
        nutritionTags: ["ビタミン","食物繊維"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "小松菜", amount: "1束" },
        { name: "しめじ", amount: "1パック" },
        { name: "バター", amount: "10g" },
        { name: "しょうゆ", amount: "小さじ1" },
        { name: "塩", amount: "少々" }
        ]
        }
        ],
        steps: [
        { description: "小松菜は4cm幅に切り、しめじは石づきを取ってほぐす。" },
        { description: "フライパンにバターを熱し、しめじと小松菜を中火で炒める。" },
        { description: "しょうゆと塩で味をととのえて仕上げる。" }
        ],
        imageUrl: "/images/side-dishes/komatsuna-shimeji-butter-stir-fry.png",
        hasImage: false
        },
        {
        id: "side-carrot-egg-chinese-stir-fry",
        category: "side",
        name: "にんじんと卵の中華炒め",
        moods: ["中華","あっさり"],
        tags: ["にんじん","卵"],
        nutritionTags: ["たんぱく質","ビタミン"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "にんじん", amount: "1本" },
        { name: "卵", amount: "2個" },
        { name: "ごま油", amount: "小さじ1" },
        { name: "鶏ガラスープの素", amount: "小さじ1" },
        { name: "しょうゆ", amount: "小さじ1" }
        ]
        }
        ],
        steps: [
        { description: "にんじんは細切りにし、卵は溶いておく。" },
        { description: "フライパンにごま油を熱し、にんじんを炒めてしんなりさせる。" },
        { description: "卵、鶏ガラスープの素、しょうゆを加えて炒め合わせる。" }
        ],
        imageUrl: "/images/side-dishes/carrot-egg-chinese-stir-fry.png",
        hasImage: false
        },
        {
        id: "side-cabbage-aburaage-miso-stir-fry",
        category: "side",
        name: "キャベツと油揚げの味噌炒め",
        moods: ["和食","こってり"],
        tags: ["キャベツ","油揚げ"],
        nutritionTags: ["食物繊維","たんぱく質"],
        cookingTime: 10,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "キャベツ", amount: "1/4玉" },
        { name: "油揚げ", amount: "1枚" },
        { name: "味噌", amount: "大さじ1" },
        { name: "みりん", amount: "大さじ1" },
        { name: "砂糖", amount: "小さじ1" },
        { name: "サラダ油", amount: "小さじ1" }
        ]
        }
        ],
        steps: [
        { description: "キャベツはざく切りにし、油揚げは短冊切りにする。" },
        { description: "フライパンにサラダ油を熱し、キャベツと油揚げを炒める。" },
        { description: "味噌、みりん、砂糖を加えて全体にからめる。" }
        ],
        imageUrl: "/images/side-dishes/cabbage-aburaage-miso-stir-fry.png",
        hasImage: false
        },
        {
        id: "side-potato-corn-salad",
        category: "side",
        name: "じゃがいもとコーンのサラダ",
        moods: ["洋食","あっさり"],
        tags: ["じゃがいも","コーン"],
        nutritionTags: ["炭水化物","食物繊維"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
        {
        label: "A",
        items: [
        { name: "じゃがいも", amount: "2個" },
        { name: "コーン", amount: "50g" },
        { name: "マヨネーズ", amount: "大さじ2" },
        { name: "酢", amount: "小さじ1" },
        { name: "塩", amount: "小さじ1/4" },
        { name: "こしょう", amount: "少々" }
        ]
        }
        ],
        steps: [
        { description: "じゃがいもは皮をむいて一口大に切り、やわらかくゆでる。" },
        { description: "じゃがいもの湯を切って軽くつぶし、コーンを加える。" },
        { description: "マヨネーズ、酢、塩、こしょうで和えて仕上げる。" }
        ],
        imageUrl: "/images/side-dishes/potato-corn-salad.png",
        hasImage: false
        },{
            id: "side-tomato-shiso-ae",
            category: "side",
            name: "トマトと大葉の和え物",
            moods: ["和食","あっさり"],
            tags: ["トマト","大葉"],
            nutritionTags: ["ビタミン"],
            cookingTime: 5,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "トマト", amount: "2個" },
            { name: "大葉", amount: "5枚" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "しょうゆ", amount: "小さじ2" },
            { name: "ごま油", amount: "小さじ1" }
            ]
            }
            ],
            steps: [
            { description: "トマトはくし切りにし、大葉は細切りにする。" },
            { description: "ボウルにトマトと大葉を入れて軽く混ぜる。" },
            { description: "Bを加えて全体を和える。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/tomato-shiso-ae.png",
            hasImage: false
            },
            {
            id: "side-moyashi-tuna-ponzu-ae",
            category: "side",
            name: "もやしとツナのポン酢和え",
            moods: ["和食","あっさり"],
            tags: ["もやし","ツナ"],
            nutritionTags: ["たんぱく質","食物繊維"],
            cookingTime: 10,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "もやし", amount: "1袋" },
            { name: "ツナ缶", amount: "1缶" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "ポン酢", amount: "大さじ2" },
            { name: "ごま油", amount: "小さじ1" }
            ]
            }
            ],
            steps: [
            { description: "もやしはさっとゆでて水気をしっかり切る。" },
            { description: "ツナは油を切り、もやしと合わせる。" },
            { description: "Bを加えてよく和える。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/moyashi-tuna-ponzu-ae.png",
            hasImage: false
            },
            {
            id: "side-renkon-bacon-stir-fry",
            category: "side",
            name: "れんこんとベーコンの炒め物",
            moods: ["洋食","こってり"],
            tags: ["れんこん","ベーコン"],
            nutritionTags: ["食物繊維","脂質"],
            cookingTime: 15,
            budgetLevel: "ふつう",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "れんこん", amount: "150g" },
            { name: "ベーコン", amount: "2枚" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "バター", amount: "10g" },
            { name: "しょうゆ", amount: "小さじ1" }
            ]
            }
            ],
            steps: [
            { description: "れんこんは薄切りにし、ベーコンは細切りにする。" },
            { description: "フライパンでベーコンを炒め、れんこんを加えて火を通す。" },
            { description: "Bを加えて全体にからめる。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/renkon-bacon-stir-fry.png",
            hasImage: false
            },
            {
            id: "side-mizuna-ham-salad",
            category: "side",
            name: "水菜とハムのサラダ",
            moods: ["洋食","あっさり"],
            tags: ["水菜","ハム"],
            nutritionTags: ["ビタミン","たんぱく質"],
            cookingTime: 5,
            budgetLevel: "ふつう",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "水菜", amount: "1束" },
            { name: "ハム", amount: "3枚" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "マヨネーズ", amount: "大さじ2" },
            { name: "しょうゆ", amount: "小さじ1/2" }
            ]
            }
            ],
            steps: [
            { description: "水菜は5cm幅に切り、ハムは細切りにする。" },
            { description: "ボウルに水菜とハムを入れる。" },
            { description: "Bを加えて全体を和える。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/mizuna-ham-salad.png",
            hasImage: false
            },
            {
            id: "side-chingensai-egg-oyster-stir-fry",
            category: "side",
            name: "チンゲン菜と卵のオイスター炒め",
            moods: ["中華","こってり"],
            tags: ["チンゲン菜","卵"],
            nutritionTags: ["たんぱく質","ビタミン"],
            cookingTime: 10,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "チンゲン菜", amount: "1株" },
            { name: "卵", amount: "2個" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "オイスターソース", amount: "小さじ2" },
            { name: "しょうゆ", amount: "小さじ1" },
            { name: "ごま油", amount: "小さじ1" }
            ]
            }
            ],
            steps: [
            { description: "チンゲン菜はざく切りにし、卵は溶いておく。" },
            { description: "フライパンで卵を半熟に炒めて取り出す。" },
            { description: "チンゲン菜とBを加えて炒め、卵を戻して混ぜる。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/chingensai-egg-oyster-stir-fry.png",
            hasImage: false
            },
            {
            id: "side-eggplant-tuna-stir-fry",
            category: "side",
            name: "なすとツナの炒め物",
            moods: ["和食","こってり"],
            tags: ["なす","ツナ"],
            nutritionTags: ["食物繊維","たんぱく質"],
            cookingTime: 15,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "なす", amount: "2本" },
            { name: "ツナ缶", amount: "1缶" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "しょうゆ", amount: "小さじ2" },
            { name: "みりん", amount: "小さじ2" },
            { name: "サラダ油", amount: "小さじ2" }
            ]
            }
            ],
            steps: [
            { description: "なすは乱切りにし、ツナは油を切る。" },
            { description: "フライパンでなすを炒め、やわらかくする。" },
            { description: "ツナとBを加えて全体を炒め合わせる。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/eggplant-tuna-stir-fry.png",
            hasImage: false
            },
            {
            id: "side-satsumaimo-butter-amani",
            category: "side",
            name: "さつまいもとバターの甘煮",
            moods: ["洋食","こってり"],
            tags: ["さつまいも","バター"],
            nutritionTags: ["炭水化物"],
            cookingTime: 20,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "さつまいも", amount: "1本" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "バター", amount: "10g" },
            { name: "砂糖", amount: "大さじ1" },
            { name: "水", amount: "150ml" }
            ]
            }
            ],
            steps: [
            { description: "さつまいもは輪切りにする。" },
            { description: "鍋にさつまいもと水を入れて中火で煮る。" },
            { description: "Bを加えて水分が少なくなるまで煮る。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/satsumaimo-butter-amani.png",
            hasImage: false
            },
            {
            id: "side-daikon-hikiniku-soboro-ni",
            category: "side",
            name: "大根とひき肉のそぼろ煮",
            moods: ["和食","こってり"],
            tags: ["大根","ひき肉"],
            nutritionTags: ["たんぱく質","食物繊維"],
            cookingTime: 20,
            budgetLevel: "ふつう",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "大根", amount: "1/4本" },
            { name: "豚ひき肉", amount: "150g" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "しょうゆ", amount: "大さじ1" },
            { name: "みりん", amount: "大さじ1" },
            { name: "砂糖", amount: "小さじ1" },
            { name: "水", amount: "200ml" }
            ]
            }
            ],
            steps: [
            { description: "大根は角切りにする。" },
            { description: "鍋でひき肉を炒め、大根を加える。" },
            { description: "Bを加えて大根がやわらかくなるまで煮る。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/daikon-hikiniku-soboro-ni.png",
            hasImage: false
            },
            {
            id: "side-cabbage-corn-butter-stir-fry",
            category: "side",
            name: "キャベツとコーンのバター炒め",
            moods: ["洋食","こってり"],
            tags: ["キャベツ","コーン"],
            nutritionTags: ["ビタミン","炭水化物"],
            cookingTime: 10,
            budgetLevel: "節約",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "キャベツ", amount: "1/4玉" },
            { name: "コーン", amount: "50g" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "バター", amount: "10g" },
            { name: "塩", amount: "小さじ1/4" },
            { name: "こしょう", amount: "少々" }
            ]
            }
            ],
            steps: [
            { description: "キャベツはざく切りにする。" },
            { description: "フライパンでキャベツとコーンを炒める。" },
            { description: "Bを加えて全体にからめる。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/cabbage-corn-butter-stir-fry.png",
            hasImage: false
            },
            {
            id: "side-mushroom-tuna-wafu-pasta-stir-fry",
            category: "side",
            name: "きのことツナの和風パスタ炒め",
            moods: ["洋食","こってり"],
            tags: ["パスタ","きのこ","ツナ"],
            nutritionTags: ["炭水化物","たんぱく質"],
            cookingTime: 20,
            budgetLevel: "ふつう",
            ingredientGroups: [
            {
            label: "A",
            items: [
            { name: "スパゲッティ", amount: "100g" },
            { name: "しめじ", amount: "1パック" },
            { name: "ツナ缶", amount: "1缶" }
            ]
            },
            {
            label: "B",
            items: [
            { name: "しょうゆ", amount: "小さじ2" },
            { name: "バター", amount: "10g" },
            { name: "にんにく", amount: "1片" }
            ]
            }
            ],
            steps: [
            { description: "スパゲッティは表示通りにゆでる。" },
            { description: "フライパンでにんにく、きのこ、ツナを炒める。" },
            { description: "パスタとBを加えて全体を炒め合わせる。", ingredientGroupLabels: ["B"] }
            ],
            imageUrl: "/images/side-dishes/mushroom-tuna-wafu-pasta-stir-fry.png",
            hasImage: false
            },
            
  ];