/* SHAPE KIDS tanıtım videosu: dile göre TR/EN video, ekrandayken oynat, durdurma düğmesi. */
(function () {
  "use strict";
  var COPY = {
    en: { pause: "Pause video", play: "Play video", badge: "WATCH",
      k: "SHAPE KIDS · AGES 6–13", h: "Screens down, let's play!", p: "Every Saturday and Sunday, children jump, balance and take on obstacle courses with their coach in small, age-based groups.",
      c1: "Small groups", c2: "Age-based groups", c3: "Coach-led", c4: "Private 1-to-1 too",
      cta1: "Explore SHAPE KIDS →", cta2: "Ask on WhatsApp", wa: "Hello, I would like information about SHAPE KIDS." },
    tr: { pause: "Videoyu duraklat", play: "Videoyu oynat", badge: "İZLE",
      k: "SHAPE KIDS · 6–13 YAŞ", h: "Ekranı bırak, hadi oyna!", p: "Her cumartesi ve pazar çocuklar küçük, yaşa göre gruplarda antrenörleriyle zıplıyor, dengede kalıyor ve parkurlarda eğleniyor.",
      c1: "Küçük gruplar", c2: "Yaş gruplarına göre", c3: "Antrenör eşliğinde", c4: "Birebir özel ders de var",
      cta1: "SHAPE KIDS'i keşfet →", cta2: "WhatsApp'tan sor", wa: "Merhaba, SHAPE KIDS hakkında bilgi almak istiyorum." },
    de: { pause: "Video pausieren", play: "Video abspielen", badge: "ANSEHEN",
      k: "SHAPE KIDS · 6–13 JAHRE", h: "Bildschirm aus, Spielzeit!", p: "Jeden Samstag und Sonntag springen, balancieren und meistern Kinder Parcours mit ihrem Coach – in kleinen, altersgerechten Gruppen.",
      c1: "Kleine Gruppen", c2: "Altersgerechte Gruppen", c3: "Mit Coach", c4: "Auch 1:1-Training",
      cta1: "SHAPE KIDS entdecken →", cta2: "Per WhatsApp fragen", wa: "Hallo, ich hätte gern Informationen zu SHAPE KIDS." },
    ru: { pause: "Пауза", play: "Воспроизвести", badge: "СМОТРИ",
      k: "SHAPE KIDS · 6–13 ЛЕТ", h: "Отложи экран — давай играть!", p: "Каждую субботу и воскресенье дети прыгают, тренируют баланс и проходят полосы препятствий с тренером в небольших группах по возрасту.",
      c1: "Небольшие группы", c2: "Группы по возрасту", c3: "С тренером", c4: "Есть индивидуальные занятия",
      cta1: "Узнать о SHAPE KIDS →", cta2: "Спросить в WhatsApp", wa: "Здравствуйте, хочу узнать о SHAPE KIDS." }
  };
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lang = function () { var l = (root.lang || "en").slice(0, 2); return COPY[l] ? l : "en"; };

  function applyCopy() {
    var c = COPY[lang()];
    document.querySelectorAll("[data-kp]").forEach(function (el) { var v = c[el.getAttribute("data-kp")]; if (v) el.textContent = v; });
    document.querySelectorAll("[data-kp-wa]").forEach(function (a) {
      a.href = "https://wa.me/" + a.getAttribute("data-kp-wa") + "?text=" + encodeURIComponent(c.wa);
    });
  }

  function setup(phone) {
    var video = phone.querySelector("video");
    var btn = phone.querySelector(".reel-toggle");
    if (!video || !btn) return;
    var userPaused = reduce.matches, inView = false, current = "";
    function label() {
      var c = COPY[lang()], paused = video.paused;
      phone.classList.toggle("is-paused", paused);
      btn.textContent = paused ? "▶" : "Ⅱ";
      btn.setAttribute("aria-label", paused ? c.play : c.pause);
      btn.setAttribute("aria-pressed", String(!paused));
    }
    function source() {
      var l = lang() === "tr" ? "tr" : "en";
      if (l === current) return;
      current = l;
      var wasPlaying = !video.paused;
      video.poster = phone.getAttribute("data-poster-" + l);
      video.src = phone.getAttribute("data-src-" + l);
      if (wasPlaying || (inView && !userPaused)) play();
      label();
    }
    function play() { var p = video.play(); if (p && p.catch) p.catch(function () { label(); }); }
    function sync() { if (inView && !userPaused && !document.hidden) play(); else video.pause(); }
    video.muted = true; video.loop = true; video.playsInline = true;
    video.setAttribute("muted", ""); video.setAttribute("playsinline", "");
    video.addEventListener("play", label); video.addEventListener("pause", label);
    btn.addEventListener("click", function () { userPaused = !video.paused; if (userPaused) video.pause(); else play(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) { inView = e[0].isIntersecting; if (inView && !video.src) source(); sync(); }, { threshold: 0.35 }).observe(phone);
    } else { inView = true; }
    document.addEventListener("visibilitychange", sync);
    new MutationObserver(function () { if (video.src) source(); label(); }).observe(root, { attributes: true, attributeFilter: ["lang"] });
    // Kaynak ilk görünüşte yüklenir (sayfa hızını korumak için); poster hemen gösterilir
    video.poster = phone.getAttribute("data-poster-" + (lang() === "tr" ? "tr" : "en"));
    label();
  }

  applyCopy();
  new MutationObserver(applyCopy).observe(root, { attributes: true, attributeFilter: ["lang"] });
  document.querySelectorAll("[data-kids-reel]").forEach(setup);
})();
