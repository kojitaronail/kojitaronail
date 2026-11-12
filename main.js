(function () {
  const page = document.body.dataset.page || "";
  const ext = 'target="_blank" rel="noopener"';
  const hand = '<svg viewBox="0 0 40 60" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><rect x="8" y="6" width="9" height="20" rx="4.5"/><rect x="21" y="2" width="9" height="24" rx="4.5"/><path d="M8 20v22a12 12 0 0 0 12 12h2a12 12 0 0 0 12-12V20"/></svg>';
  const tones = ["#e6e6e4", "#dcdcda", "#ececea", "#d6d6d4", "#e2e2e0", "#efefed"];
  const yen = n => (n == null ? "価格未定" : "¥" + Number(n).toLocaleString("ja-JP"));
  const link = p => p.minne || KN.minneShop;
  const $ = id => document.getElementById(id);

  const items = KN.nav.map(n => {
    const href = n.ready ? n.href : "coming-soon.html?p=" + encodeURIComponent(n.label);
    const cur = n.href === page + ".html" || (page === "home" && n.href === "index.html");
    return `<li><a href="${href}"${cur ? ' aria-current="page"' : ""}>${n.label}</a></li>`;
  }).join("");
  $("site-header").innerHTML = `<div class="wrap bar">
    <a class="logo" href="index.html" aria-label="kojitaro nail ホーム">kojitaro <span>nail</span></a>
    <div class="bar-r"><a class="mini" href="${KN.minneShop}" ${ext}>minneで購入</a>
    <button class="menu-btn" aria-label="メニュー" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button></div>
    <nav id="nav" aria-label="メインメニュー"><ul>${items}<li><a href="${KN.minneShop}" ${ext}>SHOP</a></li></ul></nav></div>`;
  const snsList = KN.sns.map(s => `<li><a href="${s.url}" ${ext}>${s.name}</a></li>`).join("");
  $("site-footer").innerHTML = `<div class="wrap f"><div><div class="logo" style="margin-bottom:8px">kojitaro nail</div>ネイルをもっと自由に。</div>
    <ul>${snsList}</ul><div class="copy">© kojitaro nail</div></div>`;
  if ($("sns-list")) $("sns-list").innerHTML = KN.sns.map(s => `<a class="btn ghost" href="${s.url}" ${ext}>${s.name}</a>`).join("");
  const btn = document.querySelector(".menu-btn"), nav = $("nav");
  btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
  document.querySelectorAll("[data-minne]").forEach(a => { a.href = KN.minneShop; a.target = "_blank"; a.rel = "noopener"; });

  function ph(i) { return `<span class="dummy">仮画像</span><div class="ph-art" style="background:${tones[i % 6]}">${hand}</div>`; }
  function card(p, i) {
    const img = p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" width="800" height="1000" data-i="${i}">` : ph(i);
    return `<article class="card"><a class="ph" href="${link(p)}" ${ext} aria-label="${p.name}をminneで見る">${img}</a>
      <h3>${p.name}</h3><div class="price">${yen(p.price)}</div>
      <a class="buy" href="${link(p)}" ${ext}>minneで購入</a></article>`;
  }
  function fill(id, list) {
    const el = $(id); if (!el) return;
    el.innerHTML = list.map(card).join("");
    el.querySelectorAll("img").forEach(im => im.addEventListener("error", () => { im.parentElement.innerHTML = ph(+im.dataset.i); }));
  }
  fill("g-featured", KN.products.filter(p => p.featured).slice(0, 3));
  fill("g-new", KN.products.filter(p => p.isNew).slice(0, 3));
  fill("g-all", KN.products);

  if (page === "soon") $("soon-t").textContent = new URLSearchParams(location.search).get("p") || "COMING SOON";
})();
