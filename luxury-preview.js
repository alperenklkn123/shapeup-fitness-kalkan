/* Minimal Luxury preview: additive presentation only.
   Main website's language, pricing, FX, content and Supabase functions remain authoritative. */
(() => {
  "use strict";
  const translations = {
    en: {
      menuGroup:"Group classes",menuGallery:"Gallery",
      servicesLabel:"THE SHAPE EXPERIENCE",servicesTitle:"Find your way to move.",
      servicesNote:"Whether you're here for a day or building a routine, there is a place for you.",
      memberOver:"01 / ACCESS",memberTitle:"MEMBERSHIP",memberCopy:"Train on your terms, at your pace.",memberMore:"Explore plans",
      coachOver:"02 / GUIDANCE",coachTitle:"PERSONAL COACHING",coachCopy:"A plan built around your goals.",coachMore:"Explore coaching",
      groupOver:"03 / TOGETHER",groupTitle:"GROUP CLASSES",groupCopy:"Move together. Grow stronger.",groupMore:"See classes",
      kidsOver:"SHAPE KIDS",kidsTitle:"MOVE · PLAY · GROW.",kidsCopy:"Age-appropriate fitness, coordination and movement for ages 6–13. Small groups and optional one-to-one sessions.",kidsMore:"Explore Shape Kids",
      barOver:"SHAPE BAR",barTitle:"FUEL THE MOMENT.",barCopy:"Coffee, protein shakes and performance drinks—before or after your session.",barMore:"See the menu",
      galleryOver:"INSIDE THE CLUB",galleryTitle:"Made for movement.",galleryMore:"View full gallery",
      galleryHyrox:"HYROX AREA",galleryWeights:"FREE WEIGHTS",galleryCardio:"TRAINING",galleryFacility:"FACILITIES",preview:"PREVIEW · NOT LIVE"
    },
    tr: {
      menuGroup:"Grup dersleri",menuGallery:"Galeri",
      servicesLabel:"SHAPE DENEYİMİ",servicesTitle:"Kendi ritmini bul.",
      servicesNote:"İster bir günlüğüne ister uzun vadeli; burada sana uygun bir alan var.",
      memberOver:"01 / ERİŞİM",memberTitle:"ÜYELİK",memberCopy:"Kendi programına ve hızına göre antrenman.",memberMore:"Üyelikleri gör",
      coachOver:"02 / REHBERLİK",coachTitle:"KİŞİSEL ANTRENMAN",coachCopy:"Hedeflerine göre hazırlanmış bir plan.",coachMore:"Koçluğu keşfet",
      groupOver:"03 / BİRLİKTE",groupTitle:"GRUP DERSLERİ",groupCopy:"Birlikte hareket et, güçlen.",groupMore:"Dersleri gör",
      kidsOver:"SHAPE KIDS",kidsTitle:"HAREKET · OYUN · GELİŞİM.",kidsCopy:"6–13 yaş için yaşa uygun fitness, koordinasyon ve hareket eğitimi. Küçük gruplar ve isteğe bağlı birebir ders.",kidsMore:"Shape Kids'i keşfet",
      barOver:"SHAPE BAR",barTitle:"ENERJİNİ TAZELE.",barCopy:"Antrenmandan önce veya sonra kahve, protein shake ve performans içecekleri.",barMore:"Menüyü gör",
      galleryOver:"SALONUMUZ",galleryTitle:"Harekete özel tasarlandı.",galleryMore:"Tüm galeriyi gör",
      galleryHyrox:"HYROX ALANI",galleryWeights:"SERBEST AĞIRLIKLAR",galleryCardio:"ANTRENMAN",galleryFacility:"TESİS",preview:"ÖNİZLEME · YAYINDA DEĞİL"
    },
    de: {
      menuGroup:"Gruppenkurse",menuGallery:"Galerie",
      servicesLabel:"DAS SHAPE ERLEBNIS",servicesTitle:"Finde deinen Rhythmus.",
      servicesNote:"Ob für einen Tag oder langfristig: Hier findest du deinen Platz.",
      memberOver:"01 / ZUGANG",memberTitle:"MITGLIEDSCHAFT",memberCopy:"Trainiere nach deinem eigenen Plan.",memberMore:"Tarife ansehen",
      coachOver:"02 / BETREUUNG",coachTitle:"PERSONAL TRAINING",coachCopy:"Ein Plan, der zu deinen Zielen passt.",coachMore:"Coaching entdecken",
      groupOver:"03 / GEMEINSAM",groupTitle:"GRUPPENKURSE",groupCopy:"Gemeinsam bewegen. Stärker werden.",groupMore:"Kurse ansehen",
      kidsOver:"SHAPE KIDS",kidsTitle:"BEWEGEN · SPIELEN · WACHSEN.",kidsCopy:"Altersgerechtes Training und Koordination für 6–13 Jahre. Kleine Gruppen und optionale Einzelstunden.",kidsMore:"Shape Kids entdecken",
      barOver:"SHAPE BAR",barTitle:"NEUE ENERGIE.",barCopy:"Kaffee, Proteinshakes und Performance-Drinks vor oder nach dem Training.",barMore:"Menü ansehen",
      galleryOver:"UNSER CLUB",galleryTitle:"Raum für Bewegung.",galleryMore:"Alle Fotos",
      galleryHyrox:"HYROX BEREICH",galleryWeights:"FREIHANTELN",galleryCardio:"TRAINING",galleryFacility:"AUSSTATTUNG",preview:"VORSCHAU · NICHT LIVE"
    },
    ru: {
      menuGroup:"Групповые занятия",menuGallery:"Галерея",
      servicesLabel:"ОПЫТ SHAPE",servicesTitle:"Найди свой ритм.",
      servicesNote:"На один день или надолго — здесь есть место для вас.",
      memberOver:"01 / ДОСТУП",memberTitle:"АБОНЕМЕНТ",memberCopy:"Тренируйтесь в своем темпе.",memberMore:"Посмотреть тарифы",
      coachOver:"02 / ПОДДЕРЖКА",coachTitle:"ЛИЧНЫЙ ТРЕНЕР",coachCopy:"Программа под ваши цели.",coachMore:"Узнать больше",
      groupOver:"03 / ВМЕСТЕ",groupTitle:"ГРУППОВЫЕ ЗАНЯТИЯ",groupCopy:"Двигайтесь вместе. Становитесь сильнее.",groupMore:"Посмотреть занятия",
      kidsOver:"SHAPE KIDS",kidsTitle:"ДВИЖЕНИЕ · ИГРА · РОСТ.",kidsCopy:"Фитнес и координация для детей 6–13 лет. Небольшие группы и индивидуальные занятия по желанию.",kidsMore:"Узнать о Shape Kids",
      barOver:"SHAPE BAR",barTitle:"ЗАРЯД ЭНЕРГИИ.",barCopy:"Кофе, протеиновые коктейли и спортивные напитки.",barMore:"Посмотреть меню",
      galleryOver:"НАШ КЛУБ",galleryTitle:"Создано для движения.",galleryMore:"Вся галерея",
      galleryHyrox:"ЗОНА HYROX",galleryWeights:"СВОБОДНЫЕ ВЕСА",galleryCardio:"ТРЕНИРОВКИ",galleryFacility:"ПОМЕЩЕНИЯ",preview:"ПРЕДПРОСМОТР · НЕ ОПУБЛИКОВАНО"
    }
  };
  function translate(){
    const locale=(document.documentElement.lang||"en").split("-")[0];
    const terms=translations[locale]||translations.en;
    document.querySelectorAll("[data-lux-key]").forEach(element=>{
      const text=terms[element.dataset.luxKey];
      if(text)element.textContent=text;
    });
  }
  function initialize(){
    const quick=document.querySelector(".hero .quick-access");
    const services=document.querySelector(".lux-services");
    if(quick&&services)services.insertAdjacentElement("afterend",quick);
    translate();
    new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initialize,{once:true});
  else initialize();
})();