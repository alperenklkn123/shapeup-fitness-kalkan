/* SHAPE Motion Layer (V29)
   Mevcut site koduna dokunmadan animasyon ekler. Supabase/yönetim paneli verileri
   yeniden çizildiğinde (dil/para birimi değişimi) yeni kartları otomatik tanır. */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!("IntersectionObserver" in window) || !("classList" in root)) return;

  root.classList.add("fx", "fx-intro");
  setTimeout(function () { root.classList.remove("fx-intro"); }, 2600);

  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Progress bar + topbar ---------- */
  var bar = document.createElement("div");
  bar.className = "fx-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var topbar = $(".topbar");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = root.scrollHeight - window.innerHeight;
      var y = window.scrollY || window.pageYOffset;
      root.style.setProperty("--fx-progress", max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
      if (topbar) topbar.classList.toggle("fx-scrolled", y > 40);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero aurora + pointer glow ---------- */
  var hero = $(".hero");
  if (hero) {
    var aurora = document.createElement("div");
    aurora.className = "fx-aurora";
    aurora.setAttribute("aria-hidden", "true");
    aurora.innerHTML = "<i></i><i></i><i></i>";
    hero.insertBefore(aurora, hero.firstChild);
    if (finePointer) {
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        hero.style.setProperty("--hx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
        hero.style.setProperty("--hy", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
      }, { passive: true });
    }
  }
  $$(".quick-link").forEach(function (el, i) { el.style.setProperty("--i", i); });

  /* ---------- Reveal ---------- */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fx-in");
      revealIO.unobserve(entry.target);
      if (entry.target.classList.contains("fx-stagger")) countUp(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  function mark(el, kind, delay) {
    if (!el || el.hasAttribute("data-fx")) return;
    el.setAttribute("data-fx", kind || "");
    if (delay) el.style.setProperty("--fx-delay", delay + "ms");
    revealIO.observe(el);
  }
  $$("section.content .heading").forEach(function (el) { mark(el, ""); });
  $$("section.content .currency-row, .features, .online-actions, .group-points, .group-book, .group-schedule, .contact-intro .actions").forEach(function (el) { mark(el, "", 120); });
  mark($(".online-card"), "right", 120);
  mark($("footer .foot"), "");

  var STAGGER = ["#plans", "#coachCards", "#groupPrices", "#menus", "#onlineFeatures", "#groupTypes", "#contact .cards", "#contact .grid", "#features"];
  function prepStagger(list) {
    if (!list) return;
    var kids = Array.prototype.slice.call(list.children);
    kids.forEach(function (k, i) { k.style.setProperty("--i", Math.min(i, 8)); });
    if (!list.classList.contains("fx-stagger")) {
      list.classList.add("fx-stagger");
      revealIO.observe(list);
    } else if (list.classList.contains("fx-in")) {
      // Yeniden çizim (dil/kur değişimi): bekletmeden göster
      kids.forEach(function (k) { k.classList.add("fx-settled"); });
    }
    if (finePointer) kids.forEach(bindTilt);
  }
  // İletişim kartlarının kapsayıcısını bul
  var contactCard = $("#contact .card");
  if (contactCard && contactCard.parentElement && !contactCard.parentElement.id) contactCard.parentElement.setAttribute("data-fx-list", "");
  function allLists() {
    var lists = STAGGER.map(function (s) { return $(s); });
    $$("[data-fx-list]").forEach(function (l) { lists.push(l); });
    return lists.filter(function (l, i, a) { return l && a.indexOf(l) === i; });
  }
  allLists().forEach(prepStagger);
  if ("MutationObserver" in window) {
    var mo = new MutationObserver(function (records) {
      var seen = [];
      records.forEach(function (r) { if (seen.indexOf(r.target) === -1) seen.push(r.target); });
      seen.forEach(prepStagger);
    });
    allLists().forEach(function (l) { mo.observe(l, { childList: true }); });
  }

  /* ---------- Kart ışık + hafif 3B eğim (masaüstü) ---------- */
  function bindTilt(card) {
    if (card.__fxTilt || !card.matches || !card.matches(".plan,.coach,.group-price-card,.menu,.card")) return;
    card.__fxTilt = true;
    card.addEventListener("pointermove", function (e) {
      if (reduce.matches) return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      card.style.setProperty("--ry", ((x - 0.5) * 7).toFixed(2) + "deg");
      card.style.setProperty("--rx", ((0.5 - y) * 6).toFixed(2) + "deg");
      card.classList.add("fx-tilt");
    }, { passive: true });
    card.addEventListener("pointerleave", function () {
      card.classList.remove("fx-tilt");
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    });
  }
  if (finePointer) $$(".online-card").forEach(function (c) {
    c.addEventListener("pointermove", function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      c.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    }, { passive: true });
  });

  /* ---------- Fiyat sayacı (yalnızca ilk görünüşte) ---------- */
  var PRICE_SEL = ".price, .cash strong, .coach-price, .group-price-values strong";
  function countUp(list) {
    if (reduce.matches) return;
    $$(PRICE_SEL, list).forEach(function (el) {
      var node = null;
      for (var i = el.childNodes.length - 1; i >= 0; i--) {
        var n = el.childNodes[i];
        if (n.nodeType === 3 && /\d/.test(n.nodeValue)) { node = n; break; }
      }
      if (!node) return;
      var m = node.nodeValue.match(/^(\D*?)(\d{1,3}(?:([.,  ])\d{3})*|\d+)(\D*)$/);
      if (!m) return; // ondalıklı veya beklenmeyen biçim: dokunma
      var prefix = m[1], digits = m[2], sep = m[3] || "", suffix = m[4];
      var target = parseInt(digits.replace(/\D/g, ""), 10);
      if (!(target > 0)) return;
      var fmt = function (v) {
        var s = String(v);
        return sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s;
      };
      var original = node.nodeValue, start = null, dur = 900 + Math.min(600, target / 100);
      function step(t) {
        if (start === null) start = t;
        var p = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - p, 3);
        if (!node.parentNode) return;
        node.nodeValue = p < 1 ? prefix + fmt(Math.round(target * e)) + suffix : original;
        if (p < 1) requestAnimationFrame(step);
        else { el.classList.add("fx-count-done"); }
      }
      node.nodeValue = prefix + fmt(0) + suffix;
      requestAnimationFrame(step);
    });
  }

  /* ---------- Mobil alt aksiyon çubuğu ---------- */
  var wa = $("#whatsappLink") || $("#heroWhatsappLink");
  var call = $("#callButton");
  if (wa && call) {
    var dock = document.createElement("nav");
    dock.className = "fx-dock";
    dock.setAttribute("aria-label", "Quick contact");
    dock.innerHTML =
      '<a class="fx-dock-wa" target="_blank" rel="noopener" href="' + wa.getAttribute("href") + '">' +
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>' +
      "<span>WhatsApp</span></a>" +
      '<a class="fx-dock-call" href="' + call.getAttribute("href") + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>' +
      "<span></span></a>";
    document.body.appendChild(dock);
    var callLabel = dock.querySelector(".fx-dock-call span");
    var syncDock = function () {
      callLabel.textContent = (call.textContent || "Call").trim();
      dock.querySelector(".fx-dock-wa").setAttribute("href", (wa.getAttribute("href") || ""));
    };
    syncDock();
    new MutationObserver(syncDock).observe(root, { attributes: true, attributeFilter: ["lang"] });
    var heroGone = false, contactIn = false;
    var paint = function () { dock.classList.toggle("fx-show", heroGone && !contactIn); };
    if (hero) new IntersectionObserver(function (e) { heroGone = !e[0].isIntersecting; paint(); }, { threshold: 0, rootMargin: "-55% 0px 0px 0px" }).observe(hero);
    var contact = $("#contact");
    if (contact) new IntersectionObserver(function (e) { contactIn = e[0].isIntersecting; paint(); }, { threshold: 0.15 }).observe(contact);
  }
})();
