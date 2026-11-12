/* ===== ここを編集すれば、サイト全体に反映されます ===== */
const KN = {
  // ① minneショップのURL（"#"のままだと動きません。公開前に必ず差し替え）
  minneShop: "#",

  // ② SNSのURL（仮）
  sns: [
    { name: "Instagram", url: "#" },
    { name: "TikTok",    url: "#" },
    { name: "YouTube",   url: "#" }
  ],

  // ③ メニュー（ready:false のページは「準備中」表示になります）
  nav: [
    { label: "HOME",     href: "index.html",    ready: true },
    { label: "PRODUCTS", href: "products.html", ready: true },
    { label: "ABOUT",    href: "about.html",    ready: false },
    { label: "HOW TO",   href: "howto.html",    ready: false }
  ],

  // ④ 商品（追加はこのブロックをコピーして増やすだけ）
  //   image : 画像ファイル名。例 "p001.jpg"（画像はこのフォルダの一番上に置く）
  //           null のあいだは「仮画像」を表示。ファイルが無い場合も自動で仮画像になります。
  //   price : 数字（例 2800）。null のあいだは「価格未定」と表示。
  //   minne : その商品のminneページURL。空ならショップトップへ。
  //   featured : true でHOMEの「おすすめ」に表示 ／ isNew : true で「新着」に表示
  products: [
    { id: "p001", name: "商品名（仮）A", price: null, image: null, minne: "", featured: true,  isNew: true  },
    { id: "p002", name: "商品名（仮）B", price: null, image: null, minne: "", featured: true,  isNew: true  },
    { id: "p003", name: "商品名（仮）C", price: null, image: null, minne: "", featured: true,  isNew: false },
    { id: "p004", name: "商品名（仮）D", price: null, image: null, minne: "", featured: false, isNew: true  },
    { id: "p005", name: "商品名（仮）E", price: null, image: null, minne: "", featured: false, isNew: false },
    { id: "p006", name: "商品名（仮）F", price: null, image: null, minne: "", featured: false, isNew: false }
  ]
};
