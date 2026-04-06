export const RAW_MAIN_DISHES_BATCH_01 = [
    // ここに、別チャットで生成した20件の配列の中身だけを貼る
    {
        id: "main-hamburg-steak",
        category: "main",
        name: "ハンバーグ",
        moods: ["洋食", "こってり"],
        tags: ["牛肉", "豚肉", "合いびき肉", "玉ねぎ", "卵"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "合いびき肉", amount: "250g" },
              { name: "玉ねぎ", amount: "1/2個" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1/2カップ" },
              { name: "牛乳", amount: "大さじ2" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ケチャップ", amount: "大さじ2" },
              { name: "中濃ソース", amount: "大さじ2" },
              { name: "みりん", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎをみじん切りにし、Aをよく混ぜて2等分し、小判形にまとめる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBを熱し、肉だねを並べて両面に焼き色をつけ、ふたをして中まで火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "ハンバーグを取り出したあと、同じフライパンにCを入れて軽く煮立て、ハンバーグにかけて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/hamburg-steak.png",
        hasImage: false
      },
      {
        id: "main-teriyaki-chicken",
        category: "main",
        name: "鶏の照り焼き",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "塩", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1と1/2" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉は厚みを整えてAで下味をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、鶏肉を皮目から焼いて両面に焼き色をつけ、中まで火を通す。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "余分な脂をふき取り、Bを加えて煮絡め、照りが出たら食べやすく切って仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/teriyaki-chicken.png",
        hasImage: false
      },
      {
        id: "main-pork-ginger-yaki",
        category: "main",
        name: "豚のしょうが焼き",
        moods: ["和食", "こってり"],
        tags: ["豚肉", "豚ロース肉", "玉ねぎ", "しょうが"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚ロース薄切り肉", amount: "200g" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "しょうが", amount: "小さじ2" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎは薄切りにし、豚肉は大きければ食べやすく切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、豚肉と玉ねぎを炒めて全体に火を通す。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "Bを加えて汁気が少なくなるまで炒め合わせ、豚肉にしょうがだれをしっかり絡めて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-ginger-yaki.png",
        hasImage: false
      },
      {
        id: "main-chinjao-rosu",
        category: "main",
        name: "青椒肉絲",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "ピーマン", "たけのこ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "180g" },
              { name: "片栗粉", amount: "小さじ1" },
              { name: "酒", amount: "小さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "ピーマン", amount: "3個" },
              { name: "たけのこ水煮", amount: "80g" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "豚肉にAをもみ込み、ピーマンとたけのこは細切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにCの油を熱し、豚肉を炒めて色が変わったらBを加え、強火で手早く炒める。",
            ingredientGroupLabels: ["B", "C"]
          },
          {
            description: "Cの残りを加えて全体に味を絡め、とろみが出たら仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/chinjao-rosu.png",
        hasImage: false
      },
      {
        id: "main-mapo-tofu",
        category: "main",
        name: "麻婆豆腐",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚ひき肉", "木綿豆腐", "長ねぎ"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "木綿豆腐", amount: "1丁" },
              { name: "豚ひき肉", amount: "120g" },
              { name: "長ねぎ", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "みそ", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "鶏がらスープの素", amount: "小さじ1" },
              { name: "水", amount: "150ml" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "片栗粉", amount: "小さじ2" },
              { name: "水", amount: "小さじ2" },
              { name: "ごま油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豆腐は食べやすい大きさに切り、長ねぎはみじん切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCのごま油を熱し、ひき肉と長ねぎを炒め、香りが立ったらBと豆腐を加えて2〜3分煮る。",
            ingredientGroupLabels: ["A", "B", "C"]
          },
          {
            description: "最後にCの水溶き片栗粉を回し入れ、とろみがつくまで混ぜて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/mapo-tofu.png",
        hasImage: false
      },
      {
        id: "main-chicken-nanban",
        category: "main",
        name: "チキン南蛮",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏むね肉", "卵", "マヨネーズ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 30,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏むね肉", amount: "1枚" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ1と1/2" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ゆで卵", amount: "1個" },
              { name: "マヨネーズ", amount: "大さじ2" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "大さじ3" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏むね肉はそぎ切りにしてAで下味をつけ、小麦粉と溶き卵を順につける。Cのゆで卵は粗く刻んでマヨネーズと混ぜ、タルタルソースを作る。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "フライパンにCの油を熱し、鶏肉を両面こんがり焼いて中まで火を通す。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "熱いうちにBを絡めて器に盛り、Cのタルタルソースをかけて仕上げる。",
            ingredientGroupLabels: ["B", "C"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-nanban.png",
        hasImage: false
      },
      {
        id: "main-subuta",
        category: "main",
        name: "酢豚",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "玉ねぎ", "にんじん", "ピーマン"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "180g" },
              { name: "片栗粉", amount: "大さじ1" },
              { name: "酒", amount: "小さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "玉ねぎ", amount: "1/2個" },
              { name: "にんじん", amount: "1/3本" },
              { name: "ピーマン", amount: "2個" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "酢", amount: "大さじ1と1/2" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "ケチャップ", amount: "大さじ1" },
              { name: "片栗粉", amount: "小さじ1" },
              { name: "水", amount: "100ml" },
              { name: "油", amount: "大さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "豚肉にAをもみ込み、玉ねぎはくし切り、にんじんは薄切り、ピーマンは乱切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにCの油を熱し、豚肉を炒めてからBを加え、野菜に火が通るまで炒める。",
            ingredientGroupLabels: ["B", "C"]
          },
          {
            description: "混ぜ合わせたCの甘酢だれを加え、とろみがついて全体に絡んだら仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/subuta.png",
        hasImage: false
      },
      {
        id: "main-nikujaga",
        category: "main",
        name: "肉じゃが",
        moods: ["和食", "あっさり"],
        tags: ["牛肉", "牛こま肉", "じゃがいも", "玉ねぎ", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 30,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "150g" },
              { name: "じゃがいも", amount: "2個" },
              { name: "玉ねぎ", amount: "1/2個" },
              { name: "にんじん", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "和風だし", amount: "200ml" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "じゃがいもは大きめのひと口大、玉ねぎはくし切り、にんじんは乱切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋にBの油を熱し、牛肉と野菜を軽く炒めて全体に油を回す。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて煮込み、じゃがいもがやわらかくなって味がしみたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/nikujaga.png",
        hasImage: false
      },
      {
        id: "main-salted-grilled-salmon",
        category: "main",
        name: "鮭の塩焼き",
        moods: ["和食", "あっさり"],
        tags: ["魚", "鮭"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "生鮭", amount: "2切れ" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鮭にAをふって10分ほど置き、出てきた水分をふき取る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "グリルまたはフライパンで皮目から焼き、香ばしい焼き色をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "裏返して中まで火を通し、ふっくら焼き上げて仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/salted-grilled-salmon.png",
        hasImage: false
      },
      {
        id: "main-salmon-meuniere",
        category: "main",
        name: "鮭のムニエル",
        moods: ["洋食", "あっさり"],
        tags: ["魚", "鮭"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "生鮭", amount: "2切れ" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "小麦粉", amount: "大さじ2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "15g" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鮭にAで下味をつけ、小麦粉を薄くまぶす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBを熱し、鮭を並べて両面をこんがり焼き、中まで火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "焼き上がりにフライパンのバターを全体に絡め、香りよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/salmon-meuniere.png",
        hasImage: false
      },


      {
        id: "main-chicken-breast-cheese-yaki",
        category: "main",
        name: "鶏むね肉のチーズ焼き",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏むね肉", "チーズ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏むね肉", amount: "1枚" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" },
              { name: "小麦粉", amount: "大さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "ピザ用チーズ", amount: "50g" },
              { name: "ケチャップ", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏むね肉はそぎ切りにしてAで下味をつけ、小麦粉を薄くまぶす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、鶏肉を両面焼いて中まで火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "表面にBのケチャップとチーズをのせ、ふたをしてチーズが溶けるまで加熱して仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-breast-cheese-yaki.png",
        hasImage: false
      },
      {
        id: "main-hoikoro",
        category: "main",
        name: "回鍋肉",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "キャベツ", "ピーマン"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "180g" },
              { name: "キャベツ", amount: "3枚" },
              { name: "ピーマン", amount: "2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "みそ", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ごま油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "キャベツはざく切り、ピーマンは乱切りにし、豚肉は食べやすくほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、豚肉を炒めて色が変わったらキャベツとピーマンを加え、強火で炒める。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "Bを加えて全体に濃いめの味をしっかり絡め、野菜がしんなりしたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/hoikoro.png",
        hasImage: false
      },
      {
        id: "main-pork-shabu-salad",
        category: "main",
        name: "豚しゃぶサラダ",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚しゃぶ用肉", "レタス", "きゅうり", "トマト"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚しゃぶ用肉", amount: "180g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "レタス", amount: "3枚" },
              { name: "きゅうり", amount: "1/2本" },
              { name: "トマト", amount: "1個" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ポン酢", amount: "大さじ2" },
              { name: "ごま油", amount: "小さじ1" },
              { name: "白ごま", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "レタスはちぎり、きゅうりは細切り、トマトはくし切りにして器に盛る。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "鍋に湯を沸かし、Aをさっとゆでて火を通し、水気を切って野菜の上にのせる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Cを混ぜて全体にかけ、さっぱり食べられるように仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-shabu-salad.png",
        hasImage: false
      },
      {
        id: "main-steamed-white-fish",
        category: "main",
        name: "白身魚の蒸し焼き",
        moods: ["和食", "あっさり"],
        tags: ["魚", "白身魚", "しめじ", "玉ねぎ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白身魚", amount: "2切れ" },
              { name: "しめじ", amount: "1/2袋" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酒", amount: "大さじ2" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎは薄切りにし、しめじは小房に分け、白身魚はBの塩とこしょうで下味をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにBの油を薄くひき、玉ねぎ、しめじ、白身魚の順にのせてBの酒をふる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "ふたをして蒸し焼きにし、魚がふっくらして中まで火が通ったら仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/steamed-white-fish.png",
        hasImage: false
      },
      {
        id: "main-omelet",
        category: "main",
        name: "オムレツ",
        moods: ["洋食", "あっさり"],
        tags: ["卵", "玉ねぎ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "卵", amount: "3個" },
              { name: "牛乳", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "玉ねぎ", amount: "1/4個" },
              { name: "バター", amount: "10g" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ケチャップ", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "卵はAと一緒に溶き、玉ねぎはみじん切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにBを入れて玉ねぎを炒め、しんなりしたら卵液を流し入れて大きく混ぜながらまとめる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "形を整えて器に盛り、Cをかけて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/omelet.png",
        hasImage: false
      },
      {
        id: "main-miso-simmered-mackerel",
        category: "main",
        name: "さばの味噌煮",
        moods: ["和食", "こってり"],
        tags: ["魚", "さば", "しょうが"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さば", amount: "2切れ" },
              { name: "しょうが", amount: "1片" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "みそ", amount: "大さじ1と1/2" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "水", amount: "120ml" }
            ]
          }
        ],
        steps: [
          {
            description: "しょうがは薄切りにし、さばは皮に切り込みを入れる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋にBとしょうがを入れて煮立て、さばを重ならないように並べる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "落としぶたをして煮汁をかけながら煮詰め、味がしっかりしみたら仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/miso-simmered-mackerel.png",
        hasImage: false
      },
      {
        id: "main-teriyaki-yellowtail",
        category: "main",
        name: "ぶりの照り焼き",
        moods: ["和食", "こってり"],
        tags: ["魚", "ぶり"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "ぶり", amount: "2切れ" },
              { name: "塩", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1と1/2" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "ぶりにAで下味をつけ、5分ほど置いて水分を軽くふき取る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、ぶりを両面焼いて中まで火を通す。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "Bを加えて煮絡め、たれに照りが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/teriyaki-yellowtail.png",
        hasImage: false
      },
      {
        id: "main-chicken-amakara-ni",
        category: "main",
        name: "鶏の甘辛煮",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "水", amount: "80ml" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、鶏肉の表面を焼いて香ばしさを出す。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "Bを加えて汁気が少なくなるまで煮絡め、甘辛いたれをしっかりまとわせて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-amakara-ni.png",
        hasImage: false
      },
      {
        id: "main-stir-fried-shrimp-and-egg",
        category: "main",
        name: "えびと卵の炒め物",
        moods: ["中華", "あっさり"],
        tags: ["えび", "むきえび", "卵", "長ねぎ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "むきえび", amount: "120g" },
              { name: "卵", amount: "2個" },
              { name: "長ねぎ", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" },
              { name: "鶏がらスープの素", amount: "小さじ1/2" },
              { name: "ごま油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "卵は溶き、長ねぎは斜め薄切りにし、えびは水気をふき取る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油半量を熱して卵を半熟状に炒めて取り出し、残りの油でえびと長ねぎを炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "卵を戻してBの調味料で味を整え、ふんわりと炒め合わせて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/stir-fried-shrimp-and-egg.png",
        hasImage: false
      },
      {
        id: "main-chicken-saute",
        category: "main",
        name: "チキンソテー",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "にんにく"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "油", amount: "小さじ1" },
              { name: "にんにく", amount: "1片" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "バター", amount: "10g" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉は厚みを整えてAで下味をつける。にんにくは薄切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにBを熱し、にんにくの香りを出してから鶏肉を皮目から焼き、両面に焼き色をつけて中まで火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "仕上げにCを加えて全体に絡め、香ばしいソースをまとわせて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-saute.png",
        hasImage: false
      }
      
      
      
      
      
      ,
      {
        id: "main-chicken-thigh-shio-koji-yaki",
        category: "main",
        name: "鶏もも肉の塩こうじ焼き",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "塩こうじ", amount: "大さじ1と1/2" },
              { name: "酒", amount: "大さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉にAをもみ込み、10分ほど置く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBを熱し、鶏肉を皮目から焼いてこんがりと焼き色をつける。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "裏返してふたをし、中まで火を通して香ばしく焼き上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/chicken-thigh-shio-koji-yaki.png",
        hasImage: false
      },
      {
        id: "main-pork-belly-daikon",
        category: "main",
        name: "豚バラ大根",
        moods: ["和食", "こってり"],
        tags: ["豚肉", "豚バラ肉", "大根"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 30,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚バラ肉", amount: "180g" },
              { name: "大根", amount: "250g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "和風だし", amount: "150ml" }
            ]
          }
        ],
        steps: [
          {
            description: "大根は厚めのいちょう切りにし、豚バラ肉は食べやすい長さに切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋で豚バラ肉を軽く炒め、脂が出たら大根を加えて全体になじませる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて中火で煮込み、大根がやわらかくなって味がしみたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-belly-daikon.png",
        hasImage: false
      },
      {
        id: "main-beef-and-onion-sweet-savory-stir-fry",
        category: "main",
        name: "牛肉と玉ねぎの甘辛炒め",
        moods: ["和食", "こってり"],
        tags: ["牛肉", "牛こま肉", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎは薄切りにし、牛肉は大きければ食べやすくほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、牛肉と玉ねぎを順に炒めてしっかり火を通す。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて汁気が少なくなるまで炒め合わせ、照りよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-onion-sweet-savory-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-cabbage-miso-stir-fry",
        category: "main",
        name: "鶏肉とキャベツの味噌炒め",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "キャベツ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "キャベツ", amount: "3枚" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "みそ", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、キャベツは大きめのざく切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、鶏肉を炒めて色が変わったらキャベツを加えてしんなりするまで炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に味噌だれを絡め、味が均一になったら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-cabbage-miso-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-pork-and-green-pepper-oyster-stir-fry",
        category: "main",
        name: "豚肉とピーマンのオイスター炒め",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "ピーマン"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "150g" },
              { name: "ピーマン", amount: "3個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豚肉はほぐし、ピーマンは細切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して豚肉を炒め、色が変わったらピーマンを加えて炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて手早く炒め合わせ、つやよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-green-pepper-oyster-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-white-fish-fry",
        category: "main",
        name: "白身魚のフライ",
        moods: ["洋食", "こってり"],
        tags: ["魚", "白身魚", "卵", "パン粉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白身魚", amount: "2切れ" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1カップ" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "250ml" }
            ]
          }
        ],
        steps: [
          {
            description: "白身魚にAで下味をつけ、Bの小麦粉、溶き卵、パン粉の順に衣をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンまたは鍋にCを熱し、白身魚を両面こんがりと揚げる。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "中まで火が通ったら取り出して油を切り、食べやすく盛りつける。"
          }
        ],
        imageUrl: "/images/main-dishes/white-fish-fry.png",
        hasImage: false
      },
      {
        id: "main-horse-mackerel-nanban-zuke",
        category: "main",
        name: "あじの南蛮漬け",
        moods: ["和食", "あっさり"],
        tags: ["魚", "あじ", "玉ねぎ", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 30,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "あじ", amount: "2尾" },
              { name: "小麦粉", amount: "大さじ2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "玉ねぎ", amount: "1/4個" },
              { name: "にんじん", amount: "1/4本" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "酢", amount: "大さじ2" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "水", amount: "50ml" },
              { name: "油", amount: "大さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "あじは三枚おろしにしてAの小麦粉をまぶし、玉ねぎとにんじんは細切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにCの油を熱し、あじを両面焼いて火を通す。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "保存容器にBを入れ、混ぜたCの南蛮だれと焼いたあじを加えてしばらく漬け、味をなじませる。",
            ingredientGroupLabels: ["B", "C"]
          }
        ],
        imageUrl: "/images/main-dishes/horse-mackerel-nanban-zuke.png",
        hasImage: false
      },
      {
        id: "main-salted-grilled-mackerel",
        category: "main",
        name: "さばの塩焼き",
        moods: ["和食", "あっさり"],
        tags: ["魚", "さば"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さば", amount: "2切れ" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "さばにAをふって10分ほど置き、出た水分をふき取る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "グリルまたはフライパンで皮目から焼き、香ばしい焼き色をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "裏返して中まで火を通し、ふっくら焼き上げて仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/salted-grilled-mackerel.png",
        hasImage: false
      },
      {
        id: "main-chicken-drumettes-sappari-ni",
        category: "main",
        name: "鶏手羽元のさっぱり煮",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏手羽元"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 30,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏手羽元", amount: "6本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "大さじ3" },
              { name: "しょうゆ", amount: "大さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "水", amount: "120ml" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏手羽元は表面に軽く切り込みを入れる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋にAを入れて表面を軽く焼き、香ばしさを出す。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて中火で煮込み、汁気が少なくなるまで煮詰めて味をしっかり含ませる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-drumettes-sappari-ni.png",
        hasImage: false
      },
      {
        id: "main-pork-loin-tonkatsu",
        category: "main",
        name: "豚ロースのとんかつ",
        moods: ["洋食", "こってり"],
        tags: ["豚肉", "豚ロース肉", "卵", "パン粉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚ロース肉", amount: "2枚" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1カップ" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "300ml" }
            ]
          }
        ],
        steps: [
          {
            description: "豚ロース肉は筋切りをしてAで下味をつけ、Bの小麦粉、溶き卵、パン粉の順に衣をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンまたは鍋にCを熱し、とんかつを両面こんがりと揚げる。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "中まで火が通ったら取り出して油を切り、食べやすく切って仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/pork-loin-tonkatsu.png",
        hasImage: false
      },
      {
        id: "main-chicken-tomato-stew",
        category: "main",
        name: "鶏肉のトマト煮込み",
        moods: ["洋食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "トマト", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "トマト缶", amount: "1/2缶" },
              { name: "コンソメ", amount: "小さじ1" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、鶏肉を焼いて色が変わったら玉ねぎを加えて炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて中火で煮込み、鶏肉にトマトのうまみがなじんだら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-tomato-stew.png",
        hasImage: false
      }
      
      
      
      
      
      
      
      
      
      ,
      {
        id: "main-beef-and-broccoli-stir-fry",
        category: "main",
        name: "牛肉とブロッコリーの炒め物",
        moods: ["中華", "こってり"],
        tags: ["牛肉", "牛こま肉", "ブロッコリー"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "ブロッコリー", amount: "1/2株" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "にんにく", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "ブロッコリーは小房に分け、牛肉は食べやすくほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、牛肉を炒めて色が変わったらブロッコリーを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に味を絡め、ブロッコリーがほどよい食感になったら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-broccoli-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-atsuage-and-pork-sweet-savory-stir-fry",
        category: "main",
        name: "厚揚げと豚肉の甘辛炒め",
        moods: ["和食", "こってり"],
        tags: ["豚肉", "豚こま肉", "厚揚げ"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
              { name: "豚こま肉", amount: "120g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "厚揚げは食べやすく切り、豚肉はほぐしておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、豚肉を炒めてから厚揚げを加え、表面を軽く焼く。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に甘辛い味を絡め、照りが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/atsuage-and-pork-sweet-savory-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-tofu-and-minced-meat-ankake",
        category: "main",
        name: "豆腐とひき肉のあんかけ",
        moods: ["和食", "中華", "あっさり"],
        tags: ["豚肉", "豚ひき肉", "木綿豆腐"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "木綿豆腐", amount: "1丁" },
              { name: "豚ひき肉", amount: "120g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "水", amount: "120ml" },
              { name: "油", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "片栗粉", amount: "小さじ2" },
              { name: "水", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "豆腐は食べやすく切って水気を切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、ひき肉を炒めて火が通ったらBの残りを加えてひと煮立ちさせる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "豆腐を加えて温め、Cの水溶き片栗粉でとろみをつけて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/tofu-and-minced-meat-ankake.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-potato-nimono",
        category: "main",
        name: "鶏肉とじゃがいもの煮物",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "じゃがいも", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "じゃがいも", amount: "2個" },
              { name: "にんじん", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "和風だし", amount: "180ml" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、じゃがいもとにんじんは食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋に鶏肉を入れて軽く炒め、じゃがいもとにんじんも加えて全体に油を回す。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて煮込み、具材がやわらかくなって味がしみたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-potato-nimono.png",
        hasImage: false
      },
      {
        id: "main-sardine-kabayaki",
        category: "main",
        name: "いわしの蒲焼き",
        moods: ["和食", "こってり"],
        tags: ["魚", "いわし"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "いわし", amount: "4尾" },
              { name: "小麦粉", amount: "大さじ2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "いわしは開いた状態にしてAの小麦粉を薄くまぶす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにCを熱し、いわしを両面こんがり焼く。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "Bを加えて煮絡め、たれに照りが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/sardine-kabayaki.png",
        hasImage: false
      },
      {
        id: "main-pork-and-chinese-cabbage-layered-steam",
        category: "main",
        name: "豚肉と白菜の重ね蒸し",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚バラ肉", "白菜"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚バラ肉", amount: "180g" },
              { name: "白菜", amount: "4枚" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酒", amount: "大さじ2" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ぽん酢", amount: "大さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "白菜と豚肉を交互に重ねて食べやすい大きさに切り、フライパンまたは鍋に並べる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bをふりかけてふたをし、中火で蒸し煮にして全体に火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "器に盛り、Cをかけてさっぱりと仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-chinese-cabbage-layered-steam.png",
        hasImage: false
      },
      
      
      
      
      
      {
        id: "main-chicken-and-mushroom-butter-soy-stir-fry",
        category: "main",
        name: "鶏肉ときのこのバター醤油炒め",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "しめじ", "えのき"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "しめじ", amount: "1/2袋" },
              { name: "えのき", amount: "1/2袋" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、きのこは石づきを取ってほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのバターを熱し、鶏肉を焼いて火が通ってきたらきのこを加えて炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に風味をなじませ、バター醤油の香りが立ったら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-mushroom-butter-soy-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-sukiyaki-style-ni",
        category: "main",
        name: "牛肉のすき焼き風煮",
        moods: ["和食", "こってり"],
        tags: ["牛肉", "牛こま肉", "焼き豆腐", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "大豆製品", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "焼き豆腐", amount: "1/2丁" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "和風だし", amount: "120ml" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎは薄切りにし、焼き豆腐は食べやすい大きさに切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋に牛肉と玉ねぎを入れて軽く炒め、香りが立ったら焼き豆腐を加える。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて煮込み、全体にすき焼き風の甘辛い味がしみたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-sukiyaki-style-ni.png",
        hasImage: false
      },
      {
        id: "main-chicken-karaage",
        category: "main",
        name: "鶏肉の唐揚げ",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "しょうが", "にんにく"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "しょうが", amount: "小さじ1" },
              { name: "にんにく", amount: "小さじ1/2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "片栗粉", amount: "大さじ4" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "300ml" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉をひと口大に切り、Aをもみ込んで10分ほど置く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "汁気を軽く切ってBをまぶし、Cを熱した鍋またはフライパンでこんがり揚げる。",
            ingredientGroupLabels: ["B", "C"]
          },
          {
            description: "表面がカリッとして中まで火が通ったら取り出し、油を切って仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/chicken-karaage.png",
        hasImage: false
      },{
        id: "main-salted-grilled-mackerel",
        category: "main",
        name: "さばの塩焼き",
        moods: ["和食", "あっさり"],
        tags: ["魚", "さば"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さば", amount: "2切れ" },
              { name: "塩", amount: "少々" },
              { name: "酒", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "さばに塩をふって少し置き、出た水分をふき取って臭みを抑える。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "グリルまたはフライパンで皮目から焼き、香ばしい焼き色をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "裏返して中まで火を通し、ふっくら焼き上げて完成。",
            ingredientGroupLabels: ["A"]
          }
        ],
        imageUrl: "/images/main-dishes/salted-grilled-mackerel.png",
        hasImage: false
      },
      {
        id: "main-chicken-drumettes-sour-simmered",
        category: "main",
        name: "鶏手羽元のさっぱり煮",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏手羽元"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 30,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏手羽元", amount: "6本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酢", amount: "100ml" },
              { name: "しょうゆ", amount: "50ml" },
              { name: "みりん", amount: "50ml" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "水", amount: "150ml" }
            ]
          }
        ],
        steps: [
          {
            description: "手羽元は表面に軽く切り込みを入れて、味がしみやすいようにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋で手羽元の表面を軽く焼き、余分な脂を落としながら香ばしさを出す。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて煮込み、汁気が少なくなるまで煮詰めてしっかり味を含ませる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-drumettes-sour-simmered.png",
        hasImage: false
      },
      {
        id: "main-pork-loin-tonkatsu",
        category: "main",
        name: "豚ロースのとんかつ",
        moods: ["洋食", "こってり"],
        tags: ["豚肉", "豚ロース肉", "卵", "パン粉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚ロース肉", amount: "2枚" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1カップ" },
              { name: "油", amount: "適量" }
            ]
          }
        ],
        steps: [
          {
            description: "豚ロース肉は筋切りをして塩、こしょうをふり、小麦粉、卵、パン粉の順に衣をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "油を熱したフライパンまたは鍋で、両面をこんがりと揚げ焼きにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "中まで火が通ったら取り出して油を切り、食べやすく切って盛りつける。",
            ingredientGroupLabels: ["A"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-loin-tonkatsu.png",
        hasImage: false
      },
      {
        id: "main-chicken-tomato-stew",
        category: "main",
        name: "鶏肉のトマト煮込み",
        moods: ["洋食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "トマト", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "トマト缶", amount: "1/2缶" },
              { name: "コンソメ", amount: "小さじ2" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏肉はひと口大に切り、玉ねぎは薄切りにしておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンで鶏肉を焼き、色が変わったら玉ねぎを加えて炒める。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて少し煮込み、鶏肉にトマトのうまみがなじんだら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-tomato-stew.png",
        hasImage: false
      },
      {
        id: "main-beef-and-broccoli-stir-fry",
        category: "main",
        name: "牛肉とブロッコリーの炒め物",
        moods: ["中華", "こってり"],
        tags: ["牛肉", "牛こま肉", "ブロッコリー"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "ブロッコリー", amount: "1/2株" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "にんにく", amount: "1/2かけ" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "ブロッコリーは小房に分け、火が通りやすいように下ごしらえする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンに油を熱し、牛肉を炒めてからブロッコリーを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bを加えて全体に味を絡め、ブロッコリーがほどよい食感になったら完成。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-broccoli-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-thick-fried-tofu-and-pork-sweet-savory-stir-fry",
        category: "main",
        name: "厚揚げと豚肉の甘辛炒め",
        moods: ["和食", "こってり"],
        tags: ["豚肉", "豚こま肉", "厚揚げ"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
              { name: "豚こま肉", amount: "150g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "厚揚げは食べやすく切り、豚肉は大きければほぐしておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンで豚肉を炒め、火が通ったら厚揚げを加えて表面を軽く焼く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて全体に甘辛い味を絡め、照りが出たら完成。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/thick-fried-tofu-and-pork-sweet-savory-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-tofu-and-minced-meat-ankake",
        category: "main",
        name: "豆腐とひき肉のあんかけ",
        moods: ["和食", "中華", "あっさり"],
        tags: ["豚肉", "豚ひき肉", "豆腐"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豆腐", amount: "1丁" },
              { name: "豚ひき肉", amount: "120g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "片栗粉", amount: "小さじ2" },
              { name: "水", amount: "150ml" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豆腐は食べやすく切って水気を切り、豚ひき肉は使いやすく準備しておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンでひき肉を炒め、火が通ったら調味料を加えてうまみを引き出す。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "水溶き片栗粉でとろみをつけ、豆腐にかけるようにして仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/tofu-and-minced-meat-ankake.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-potato-nimono",
        category: "main",
        name: "鶏肉とじゃがいもの煮物",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "じゃがいも", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "じゃがいも", amount: "2個" },
              { name: "にんじん", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ2" },
              { name: "みりん", amount: "大さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "和風だし", amount: "250ml" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏肉と野菜は食べやすい大きさに切り、じゃがいもは水にさらしておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋で鶏肉を軽く炒め、にんじんとじゃがいもも加えて油を回す。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて煮込み、具材がやわらかくなって味がしみたら完成。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-potato-nimono.png",
        hasImage: false
      },
      {
        id: "main-sardine-kabayaki",
        category: "main",
        name: "いわしの蒲焼き",
        moods: ["和食", "こってり"],
        tags: ["魚", "いわし"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "いわし", amount: "2尾" },
              { name: "小麦粉", amount: "大さじ1" },
              { name: "油", amount: "小さじ2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "いわしの水気をふいて小麦粉を薄くまぶし、焼いたときに崩れにくくする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンに油を熱し、いわしの両面をこんがりと焼く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて煮絡め、たれに照りが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/sardine-kabayaki.png",
        hasImage: false
      },
      {
        id: "main-pork-and-chinese-cabbage-layered-steam",
        category: "main",
        name: "豚肉と白菜の重ね蒸し",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚バラ肉", "白菜"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚バラ肉", amount: "180g" },
              { name: "白菜", amount: "4枚" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酒", amount: "大さじ2" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "ぽん酢", amount: "適量" }
            ]
          }
        ],
        steps: [
          {
            description: "白菜と豚肉を交互に重ね、食べやすい大きさで鍋またはフライパンに並べる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bの酒と塩、こしょうで下味をつけ、ふたをして蒸し煮にする。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "具材がしんなりして火が通ったら、ぽん酢を添えて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-chinese-cabbage-layered-steam.png",
        hasImage: false
      }
      
      
      
      
      ,
      {
        id: "main-salted-grilled-horse-mackerel",
        category: "main",
        name: "あじの塩焼き",
        moods: ["和食", "あっさり"],
        tags: ["魚", "あじ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "あじ", amount: "2尾" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "あじにAをふって10分ほど置き、出た水分をふき取る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "グリルまたはフライパンで皮目から焼き、香ばしい焼き色をつける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "裏返して中まで火を通し、身がふっくらしたら仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/salted-grilled-horse-mackerel.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-green-pepper-sweet-savory-stir-fry",
        category: "main",
        name: "鶏肉とピーマンの甘辛炒め",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "ピーマン"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "ピーマン", amount: "3個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、ピーマンは細切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して鶏肉を炒め、火が通ってきたらピーマンを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に甘辛い味を絡め、手早く仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-green-pepper-sweet-savory-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-pork-and-komatsuna-garlic-stir-fry",
        category: "main",
        name: "豚肉と小松菜のにんにく炒め",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "小松菜", "にんにく"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "150g" },
              { name: "小松菜", amount: "1/2束" },
              { name: "にんにく", amount: "1片" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "鶏がらスープの素", amount: "小さじ1/2" },
              { name: "ごま油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "小松菜は4cm幅に切り、にんにくは薄切りにして豚こま肉はほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油を熱し、にんにくの香りを出してから豚肉と小松菜を順に炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて水分を飛ばしながら全体を炒め合わせ、香りよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-komatsuna-garlic-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-and-shirataki-nimono",
        category: "main",
        name: "牛肉としらたきの煮物",
        moods: ["和食", "あっさり"],
        tags: ["牛肉", "牛こま肉", "しらたき", "玉ねぎ"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "150g" },
              { name: "しらたき", amount: "1袋" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "和風だし", amount: "150ml" }
            ]
          }
        ],
        steps: [
          {
            description: "しらたきは下ゆでして食べやすく切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋に牛肉と玉ねぎを入れて軽く炒め、しらたきを加えて全体になじませる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて汁気が少なくなるまで煮含め、味をしっかりしみ込ませて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-shirataki-nimono.png",
        hasImage: false
      },
      {
        id: "main-chicken-tsukune-yaki",
        category: "main",
        name: "鶏ひき肉のつくね焼き",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏ひき肉", "長ねぎ", "卵"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏ひき肉", amount: "200g" },
              { name: "長ねぎ", amount: "1/3本" },
              { name: "卵", amount: "1/2個" },
              { name: "片栗粉", amount: "大さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "長ねぎをみじん切りにし、Aをよく混ぜて食べやすい形にまとめる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、つくねを並べて両面を焼き、中まで火を通す。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "Bの残りを加えて煮絡め、照りが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-tsukune-yaki.png",
        hasImage: false
      },
      {
        id: "main-atsuage-soboro-ankake",
        category: "main",
        name: "厚揚げのそぼろあんかけ",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏ひき肉", "厚揚げ"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
              { name: "鶏ひき肉", amount: "120g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "和風だし", amount: "120ml" },
              { name: "油", amount: "小さじ1" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "片栗粉", amount: "小さじ2" },
              { name: "水", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "厚揚げは食べやすく切って軽く湯通しする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、鶏ひき肉を炒めて火が通ったらBの残りを加えてひと煮立ちさせる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "厚揚げを加えて温め、Cの水溶き片栗粉でとろみをつけて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/atsuage-soboro-ankake.png",
        hasImage: false
      },
      {
        id: "main-pork-and-lotus-root-kinpira",
        category: "main",
        name: "豚肉とれんこんのきんぴら",
        moods: ["和食", "こってり"],
        tags: ["豚肉", "豚こま肉", "れんこん", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "120g" },
              { name: "れんこん", amount: "150g" },
              { name: "にんじん", amount: "1/4本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "ごま油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "れんこんは薄切りにして水にさらし、にんじんは細切り、豚こま肉はほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油を熱し、豚肉、れんこん、にんじんの順に炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを回し入れ、汁気を飛ばしながら全体に甘辛い味を絡めて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-lotus-root-kinpira.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-long-onion-salt-stir-fry",
        category: "main",
        name: "鶏肉と長ねぎの塩炒め",
        moods: ["中華", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "長ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "長ねぎ", amount: "1本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" },
              { name: "鶏がらスープの素", amount: "小さじ1/2" },
              { name: "ごま油", amount: "小さじ2" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、長ねぎは斜め切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油を熱し、鶏肉を炒めて焼き色がついたら長ねぎを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて手早く炒め合わせ、ねぎの香りを生かして仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-long-onion-salt-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-sardine-ume-ni",
        category: "main",
        name: "いわしの梅煮",
        moods: ["和食", "あっさり"],
        tags: ["魚", "いわし", "梅干し", "しょうが"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "いわし", amount: "4尾" },
              { name: "梅干し", amount: "2個" },
              { name: "しょうが", amount: "1片" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "水", amount: "120ml" }
            ]
          }
        ],
        steps: [
          {
            description: "いわしは下ごしらえをし、しょうがは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋にBとAの梅干し、しょうがを入れて煮立て、いわしを並べてやさしく煮る。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "煮汁をかけながら煮詰め、梅の風味を魚にしみ込ませて仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/sardine-ume-ni.png",
        hasImage: false
      },
      {
        id: "main-pork-and-tofu-champuru",
        category: "main",
        name: "豚肉と豆腐のチャンプルー",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚こま肉", "木綿豆腐", "卵", "にら"],
        nutritionTags: ["たんぱく質", "大豆製品"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "120g" },
              { name: "木綿豆腐", amount: "1丁" },
              { name: "卵", amount: "2個" },
              { name: "にら", amount: "1/2束" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "和風だしの素", amount: "小さじ1/2" },
              { name: "油", amount: "小さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "豆腐は水切りして食べやすくちぎり、にらは4cm幅に切り、卵は溶いておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、豆腐と豚肉を炒めて火が通ったらにらを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りで味を整え、溶き卵を回し入れてふんわりとまとめて仕上げる。",
            ingredientGroupLabels: ["A", "B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-tofu-champuru.png",
        hasImage: false
      }
      
      
      
      
      ,
      
      {
        id: "main-chicken-and-broccoli-salt-stir-fry",
        category: "main",
        name: "鶏肉とブロッコリーの塩炒め",
        moods: ["中華", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "ブロッコリー"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "ブロッコリー", amount: "1/2株" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" },
              { name: "鶏がらスープの素", amount: "小さじ1/2" },
              { name: "ごま油", amount: "小さじ2" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、ブロッコリーは小房に分ける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油を熱し、鶏肉を炒めて色が変わったらブロッコリーを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に味をなじませ、さっぱりした塩味に仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-broccoli-salt-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-and-green-pepper-thin-stir-fry",
        category: "main",
        name: "牛肉とピーマンの細切り炒め",
        moods: ["中華", "こってり"],
        tags: ["牛肉", "牛こま肉", "ピーマン", "たけのこ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "ピーマン", amount: "3個" },
              { name: "たけのこ水煮", amount: "80g" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "小さじ2" },
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "片栗粉", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "牛肉、ピーマン、たけのこは細切りにそろえ、牛肉にはBの片栗粉をまぶす。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにBの油を熱し、牛肉を炒めてからピーマンとたけのこを加えて手早く火を通す。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に絡め、とろみとつやが出たら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-green-pepper-thin-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-white-fish-foil-yaki",
        category: "main",
        name: "白身魚のホイル焼き",
        moods: ["洋食", "あっさり"],
        tags: ["魚", "白身魚", "玉ねぎ", "しめじ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白身魚", amount: "2切れ" },
              { name: "玉ねぎ", amount: "1/4個" },
              { name: "しめじ", amount: "1/2袋" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "酒", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "玉ねぎは薄切りにし、しめじはほぐし、白身魚にはBの塩とこしょうで下味をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "アルミホイルに玉ねぎ、白身魚、しめじ、Bのバターの順にのせ、酒をふって包む。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンまたはトースターで蒸し焼きにし、魚がふっくらして中まで火が通ったら仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/white-fish-foil-yaki.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-chinese-cabbage-cream-ni",
        category: "main",
        name: "鶏肉と白菜のクリーム煮",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "白菜", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "白菜", amount: "3枚" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "牛乳", amount: "200ml" },
              { name: "小麦粉", amount: "大さじ1" },
              { name: "コンソメ", amount: "小さじ1" },
              { name: "バター", amount: "10g" },
              { name: "塩", amount: "小さじ1/4" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、白菜はざく切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋またはフライパンにBのバターを熱し、鶏肉と玉ねぎを炒めてから白菜を加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて煮込み、とろみがついて全体がまろやかになったら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-chinese-cabbage-cream-ni.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-carrot-teri-stir-fry",
        category: "main",
        name: "鶏肉とにんじんの照り炒め",
        moods: ["和食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "にんじん", amount: "1/2本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、にんじんは短冊切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱し、鶏肉を炒めて色が変わったらにんじんを加えて炒め合わせる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加え、全体に照りが出るまで炒めて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-carrot-teri-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-pork-and-onion-ponzu-stir-fry",
        category: "main",
        name: "豚肉と玉ねぎのポン酢炒め",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚こま肉", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "180g" },
              { name: "玉ねぎ", amount: "1/2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "ポン酢", amount: "大さじ2" },
              { name: "酒", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豚こま肉は食べやすくほぐし、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して豚肉を炒め、色が変わったら玉ねぎを加えてしんなりするまで炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの酒とポン酢を加えてさっと炒め合わせ、全体に味を絡めて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-onion-ponzu-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-and-cabbage-salt-sauce-stir-fry",
        category: "main",
        name: "牛肉とキャベツの塩だれ炒め",
        moods: ["中華", "あっさり"],
        tags: ["牛肉", "牛こま肉", "キャベツ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "キャベツ", amount: "3枚" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "鶏がらスープの素", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "ごま油", amount: "小さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "牛こま肉は食べやすくほぐし、キャベツは大きめのざく切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油を熱して牛肉を炒め、色が変わったらキャベツを加えて強めの火で炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体を炒め合わせ、塩だれがなじんだら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-cabbage-salt-sauce-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-atsuage-nimono",
        category: "main",
        name: "鶏肉と厚揚げの煮物",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉", "厚揚げ", "にんじん"],
        nutritionTags: ["たんぱく質", "大豆製品", "野菜"],
        cookingTime: 25,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "厚揚げ", amount: "1枚" },
              { name: "にんじん", amount: "1/3本" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "砂糖", amount: "小さじ1" },
              { name: "和風だし", amount: "150ml" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉と厚揚げは食べやすく切り、にんじんは薄めの半月切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋に鶏肉を入れて軽く炒め、表面の色が変わったら厚揚げとにんじんを加える。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "Bを加えて中火で煮込み、具材に味がしみたら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-atsuage-nimono.png",
        hasImage: false
      },
      {
        id: "main-pork-and-nira-egg-stir-fry",
        category: "main",
        name: "豚肉とニラの卵炒め",
        moods: ["中華", "こってり"],
        tags: ["豚肉", "豚こま肉", "ニラ", "卵"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "150g" },
              { name: "ニラ", amount: "1/2束" },
              { name: "卵", amount: "2個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "ごま油", amount: "小さじ2" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "豚こま肉は食べやすくほぐし、ニラは4cm幅に切り、卵は溶いておく。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのごま油半量を熱して卵を半熟状に炒めて取り出し、残りの油で豚肉とニラを炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "卵を戻し入れてBの残りで味をつけ、全体をさっと炒め合わせて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-nira-egg-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-white-fish-sweet-sour-ankake",
        category: "main",
        name: "白身魚の甘酢あんかけ",
        moods: ["中華", "あっさり"],
        tags: ["魚", "白身魚", "玉ねぎ", "にんじん"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白身魚", amount: "2切れ" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" },
              { name: "片栗粉", amount: "大さじ2" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "玉ねぎ", amount: "1/4個" },
              { name: "にんじん", amount: "1/4本" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "酢", amount: "大さじ1と1/2" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "砂糖", amount: "大さじ1" },
              { name: "水", amount: "100ml" },
              { name: "片栗粉", amount: "小さじ1" },
              { name: "油", amount: "大さじ2" }
            ]
          }
        ],
        steps: [
          {
            description: "白身魚にAで下味をつけて片栗粉をまぶし、玉ねぎとにんじんは細切りにする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンにCの油を熱して白身魚を両面こんがり焼き、別皿に取り出す。",
            ingredientGroupLabels: ["A", "C"]
          },
          {
            description: "同じフライパンでBを炒め、混ぜ合わせたCの甘酢だれを加えてとろみをつけ、白身魚にかけて仕上げる。",
            ingredientGroupLabels: ["B", "C"]
          }
        ],
        imageUrl: "/images/main-dishes/white-fish-sweet-sour-ankake.png",
        hasImage: false
      }
      
      
      
      ,
      {
        id: "main-horse-mackerel-fry",
        category: "main",
        name: "あじのフライ",
        moods: ["洋食", "こってり"],
        tags: ["魚", "あじ", "卵", "パン粉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "あじ", amount: "2尾" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1カップ" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "300ml" }
            ]
          }
        ],
        steps: [
          {
            description: "あじは三枚おろしの状態にしてAで下味をつけ、Bの小麦粉、溶き卵、パン粉の順に衣をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンまたは鍋にCを熱し、あじを両面こんがりと揚げ焼きにする。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "中まで火が通ったら取り出して油を切り、食べやすく盛りつける。"
          }
        ],
        imageUrl: "/images/main-dishes/horse-mackerel-fry.png",
        hasImage: false
      },
      {
        id: "main-mackerel-tatsuta-age",
        category: "main",
        name: "さばの竜田揚げ",
        moods: ["和食", "こってり"],
        tags: ["魚", "さば", "しょうが"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "さば", amount: "2切れ" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "しょうが", amount: "小さじ1" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "片栗粉", amount: "大さじ3" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "300ml" }
            ]
          }
        ],
        steps: [
          {
            description: "さばは食べやすい大きさに切り、Aをもみ込んで10分ほど置く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "汁気を軽くふいてBをまぶし、Cを熱したフライパンまたは鍋でこんがり揚げ焼きにする。",
            ingredientGroupLabels: ["B", "C"]
          },
          {
            description: "表面がカリッとして中まで火が通ったら取り出し、油を切って仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/mackerel-tatsuta-age.png",
        hasImage: false
      },
      {
        id: "main-chicken-wings-salt-yaki",
        category: "main",
        name: "鶏手羽先の塩焼き",
        moods: ["和食", "あっさり"],
        tags: ["鶏肉", "鶏手羽先"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏手羽先", amount: "6本" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏手羽先にAをなじませて10分ほど置く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBを熱し、手羽先を皮目から並べてじっくり焼く。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "両面に焼き色がついて中まで火が通ったら、そのまま香ばしく仕上げる。"
          }
        ],
       imageUrl: "/images/main-dishes/chicken-wings-salt-yaki.png",
        hasImage: false
      },
      {
        id: "main-pork-and-potato-garlic-stir-fry",
        category: "main",
        name: "豚肉とじゃがいものガーリック炒め",
        moods: ["洋食", "こってり"],
        tags: ["豚肉", "豚こま肉", "じゃがいも", "にんにく"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "150g" },
              { name: "じゃがいも", amount: "2個" },
              { name: "にんにく", amount: "1片" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "油", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "じゃがいもは細めの拍子木切りにし、にんにくは薄切り、豚こま肉は食べやすくほぐす。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱してにんにくを炒め、香りが出たらじゃがいもと豚肉を加えて炒める。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを回し入れ、じゃがいもに火が通るまで炒めて味を整え、仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-potato-garlic-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-and-shimeji-butter-stir-fry",
        category: "main",
        name: "牛肉としめじのバター炒め",
        moods: ["洋食", "こってり"],
        tags: ["牛肉", "牛こま肉", "しめじ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "しめじ", amount: "1袋" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "牛こま肉は食べやすくほぐし、しめじは石づきを落として小房に分ける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのバターを熱し、牛肉を炒めて色が変わったらしめじを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に絡め、香りよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-shimeji-butter-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-spinach-cream-stir-fry",
        category: "main",
        name: "鶏肉とほうれん草のクリーム炒め",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "ほうれん草", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "ほうれん草", amount: "1/2束" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "牛乳", amount: "150ml" },
              { name: "小麦粉", amount: "大さじ1" },
              { name: "バター", amount: "10g" },
              { name: "コンソメ", amount: "小さじ1/2" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、ほうれん草は4cm幅、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのバターを溶かし、鶏肉と玉ねぎを炒め、火が通ったらほうれん草を加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えてとろみがつくまで炒め煮にし、全体がまろやかになったら仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-spinach-cream-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-atsuage-and-komatsuna-stir-fry",
        category: "main",
        name: "厚揚げと小松菜の炒め物",
        moods: ["和食", "あっさり"],
        tags: ["厚揚げ", "小松菜"],
        nutritionTags: ["たんぱく質", "野菜", "大豆製品"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "厚揚げ", amount: "1枚" },
              { name: "小松菜", amount: "1/2束" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "みりん", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" },
              { name: "かつお節", amount: "2g" }
            ]
          }
        ],
        steps: [
          {
            description: "厚揚げはひと口大に切り、小松菜は4cm幅に切って茎と葉に分ける。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して厚揚げを焼き目がつくまで炒め、小松菜の茎、葉の順に加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて味をつけ、仕上げにかつお節を加えて全体になじませる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/atsuage-and-komatsuna-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-pork-and-green-pepper-curry-stir-fry",
        category: "main",
        name: "豚肉とピーマンのカレー炒め",
        moods: ["洋食", "こってり"],
        tags: ["豚肉", "豚こま肉", "ピーマン", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚こま肉", amount: "150g" },
              { name: "ピーマン", amount: "3個" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "カレー粉", amount: "小さじ1" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豚こま肉は食べやすくほぐし、ピーマンと玉ねぎは細切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して豚肉を炒め、色が変わったら玉ねぎとピーマンを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に香りよく絡め、手早く仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-green-pepper-curry-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-chicken-salt-lemon-yaki",
        category: "main",
        name: "鶏肉の塩レモン焼き",
        moods: ["洋食", "あっさり"],
        tags: ["鶏肉", "鶏もも肉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "レモン汁", amount: "大さじ1" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "酒", amount: "大さじ1" },
              { name: "にんにく", amount: "小さじ1/2" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "油", amount: "小さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉にAをもみ込み、10分ほど置く。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBを熱し、鶏肉を皮目から焼いてこんがりと焼き色をつける。",
            ingredientGroupLabels: ["B"]
          },
          {
            description: "裏返して中まで火を通し、レモンの風味を残して仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/chicken-salt-lemon-yaki.png",
        hasImage: false
      },
      {
        id: "main-white-fish-nitsuke",
        category: "main",
        name: "白身魚の煮付け",
        moods: ["和食", "あっさり"],
        tags: ["魚", "白身魚", "しょうが"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 20,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "白身魚", amount: "2切れ" },
              { name: "しょうが", amount: "1片" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "しょうゆ", amount: "大さじ1と1/2" },
              { name: "みりん", amount: "大さじ1" },
              { name: "酒", amount: "大さじ2" },
              { name: "砂糖", amount: "小さじ2" },
              { name: "水", amount: "120ml" }
            ]
          }
        ],
        steps: [
          {
            description: "しょうがは薄切りにし、白身魚は皮に切り込みを入れる。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "鍋にBとAのしょうがを入れて煮立て、白身魚を重ならないように並べる。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "落としぶたをして煮汁をかけながら煮て、魚に味がしみたら仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/white-fish-nitsuke.png",
        hasImage: false
      }
      
      
      
      
      ,
      {
        id: "main-sardine-fry",
        category: "main",
        name: "いわしのフライ",
        moods: ["洋食", "こってり"],
        tags: ["魚", "いわし", "卵", "パン粉"],
        nutritionTags: ["たんぱく質"],
        cookingTime: 25,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "いわし", amount: "4尾" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "小麦粉", amount: "大さじ2" },
              { name: "卵", amount: "1個" },
              { name: "パン粉", amount: "1カップ" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "油", amount: "300ml" }
            ]
          }
        ],
       steps: [
          {
            description: "いわしは開いた状態にしてAで下味をつけ、Bの小麦粉、溶き卵、パン粉の順に衣をつける。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "フライパンまたは鍋にCを熱し、いわしを両面こんがりと揚げ焼きにする。",
            ingredientGroupLabels: ["C"]
          },
          {
            description: "衣がカリッとして中まで火が通ったら取り出し、油を切って仕上げる。"
          }
        ],
        imageUrl: "/images/main-dishes/sardine-fry.png",
        hasImage: false
      },
      {
        id: "main-beef-and-garlic-scapes-stir-fry",
        category: "main",
        name: "牛肉とにんにくの芽の炒め物",
        moods: ["中華", "こってり"],
        tags: ["牛肉", "牛こま肉", "にんにくの芽"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "ふつう",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "牛こま肉", amount: "180g" },
              { name: "にんにくの芽", amount: "1束" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "オイスターソース", amount: "大さじ1" },
              { name: "しょうゆ", amount: "小さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "油", amount: "小さじ1" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "牛こま肉は食べやすくほぐし、にんにくの芽は4cm幅に切る。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBの油を熱して牛肉を炒め、色が変わったらにんにくの芽を加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に絡め、最後にこしょうで味を整えて仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/beef-and-garlic-scapes-stir-fry.png",
        hasImage: false
      },
      {
        id: "main-pork-and-cabbage-mushi-ni",
        category: "main",
        name: "豚肉とキャベツの蒸し煮",
        moods: ["和食", "あっさり"],
        tags: ["豚肉", "豚バラ肉", "キャベツ", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 20,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "豚バラ肉", amount: "180g" },
              { name: "キャベツ", amount: "4枚" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "酒", amount: "大さじ2" },
              { name: "塩", amount: "小さじ1/3" },
              { name: "こしょう", amount: "少々" }
            ]
          },
          {
            label: "C",
            items: [
              { name: "ポン酢", amount: "大さじ1" }
            ]
          }
        ],
        steps: [
          {
            description: "豚バラ肉は食べやすく切り、キャベツはざく切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンに玉ねぎ、キャベツ、豚肉の順に重ね、Bをふってふたをする。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "中火で蒸し煮にして全体に火が通ったら、Cを回しかけてなじませて仕上げる。",
            ingredientGroupLabels: ["C"]
          }
        ],
        imageUrl: "/images/main-dishes/pork-and-cabbage-mushi-ni.png",
        hasImage: false
      },
      {
        id: "main-chicken-and-corn-butter-stir-fry",
        category: "main",
        name: "鶏肉とコーンのバター炒め",
        moods: ["洋食", "こってり"],
        tags: ["鶏肉", "鶏もも肉", "コーン", "玉ねぎ"],
        nutritionTags: ["たんぱく質", "野菜"],
        cookingTime: 15,
        budgetLevel: "節約",
        ingredientGroups: [
          {
            label: "A",
            items: [
              { name: "鶏もも肉", amount: "1枚" },
              { name: "コーン", amount: "80g" },
              { name: "玉ねぎ", amount: "1/4個" }
            ]
          },
          {
            label: "B",
            items: [
              { name: "バター", amount: "10g" },
              { name: "しょうゆ", amount: "大さじ1" },
              { name: "酒", amount: "大さじ1" },
              { name: "塩", amount: "少々" },
              { name: "こしょう", amount: "少々" }
            ]
          }
        ],
        steps: [
          {
            description: "鶏もも肉はひと口大に切り、玉ねぎは薄切りにする。",
            ingredientGroupLabels: ["A"]
          },
          {
            description: "フライパンにBのバターを溶かして鶏肉を炒め、色が変わったら玉ねぎとコーンを加える。",
            ingredientGroupLabels: ["A", "B"]
          },
          {
            description: "Bの残りを加えて全体に絡め、香りよく仕上げる。",
            ingredientGroupLabels: ["B"]
          }
        ],
        imageUrl: "/images/main-dishes/chicken-and-corn-butter-stir-fry.png",
        hasImage: false
      }






      ];