/* Bambu-inspired site navigation and editorial labels.
   The pricing, contact, language and CMS engines remain in index.html. */
(()=>{
  "use strict";
  const views=["home","club","membership","training","bar","visit"];
  const view=views.includes(document.documentElement.dataset.shapeView)?document.documentElement.dataset.shapeView:"home";
  const localized={
    en:{
      navHome:"Home",navClub:"The Club",navMembership:"Memberships",navTraining:"Training",navBar:"Shape Bar",navVisit:"Visit",
      heroExplore:"Explore memberships",storyEyebrow:"THIS IS SHAPE · KALKAN",storyTitle:"A space to move. A place to belong.",
      storyText:"Thoughtful training, real coaching and a community that makes showing up feel natural. Welcome to your training home in Kalkan.",
      storyLink:"Discover the club",experienceEyebrow:"DISCOVER SHAPE",experienceTitle:"The Shape experience",
      experienceDesc:"One space, many ways to train, grow and connect.",
      cardGym:"The Club",cardGymDesc:"Get to know our training space and equipment.",
      cardMembership:"Memberships",cardMembershipDesc:"Drop in for a day or make Shape part of your routine.",
      cardCoaching:"Personal Training",cardCoachingDesc:"Focused one-to-one coaching built around you.",
      cardGroup:"Group Classes",cardGroupDesc:"Move together with HYROX, conditioning and more.",
      cardKids:"Shape Kids",cardKidsDesc:"Movement, coordination and confidence for younger athletes.",
      cardBar:"Shape Bar",cardBarDesc:"Coffee, protein shakes and post-workout favourites.",
      communityEyebrow:"MORE THAN A GYM",communityTitle:"The best part of training is who you do it with.",
      communityText:"Train with purpose. Make connections. Feel at home every time you walk in.",
      communityLink:"Explore the gallery",visitEyebrow:"COME TRAIN WITH US",visitTitle:"See you in Kalkan.",
      visitText:"Yasemen Sokak No:17 · Kalkan, Kaş / Antalya. Open seven days a week.",
      visitLink:"Plan your visit",visitMembership:"See memberships",
      clubEyebrow:"WELCOME TO SHAPE",clubTitle:"Your training space in Kalkan.",clubText:"A gym built around strength, consistency and good energy.",
      clubDetailEyebrow:"THE CLUB",clubDetailTitle:"Train in a space that feels like yours.",
      clubDetailText:"Discover our free weights, cardio and functional training areas. Explore real photos from the club before your first visit.",
      clubGallery:"Explore photo gallery",clubMembership:"View memberships",
      membershipEyebrow:"FIND YOUR ROUTINE",membershipTitle:"Memberships",membershipText:"Day passes, short stays and longer plans. Choose what works for you.",
      trainingEyebrow:"MOVE WITH PURPOSE",trainingTitle:"Train your way.",trainingText:"Personal coaching, online programming and group sessions for different goals and experience levels.",
      barEyebrow:"REFUEL AT SHAPE",barTitle:"Shape Bar",barText:"A coffee before training, protein after or something refreshing in between.",
      visitPageEyebrow:"COME SAY HELLO",visitPageTitle:"Visit Shape.",visitPageText:"Find us in central Kalkan, see our opening hours or get in touch."
    },
    tr:{
      navHome:"Ana Sayfa",navClub:"Salonumuz",navMembership:"Üyelikler",navTraining:"Antrenman",navBar:"Shape Bar",navVisit:"İletişim",
      heroExplore:"Üyelikleri keşfet",storyEyebrow:"BURASI SHAPE · KALKAN",storyTitle:"Hareket etmek için bir alan. Ait olmak için bir yer.",
      storyText:"Özenle tasarlanmış antrenman deneyimi, gerçek koçluk ve seni motive eden bir topluluk. Kalkan'daki antrenman evine hoş geldin.",
      storyLink:"Salonu keşfet",experienceEyebrow:"SHAPE'İ KEŞFET",experienceTitle:"Shape deneyimi",
      experienceDesc:"Tek bir yerde antrenman, gelişim ve güçlü bir topluluk.",
      cardGym:"Salonumuz",cardGymDesc:"Antrenman alanlarımızı ve ekipmanlarımızı tanı.",
      cardMembership:"Üyelikler",cardMembershipDesc:"Günlük giriş veya uzun süreli üyelik seçenekleri.",
      cardCoaching:"Personal Training",cardCoachingDesc:"Hedeflerine yönelik birebir antrenman ve koçluk.",
      cardGroup:"Grup Dersleri",cardGroupDesc:"HYROX, kondisyon ve daha fazlasında birlikte güçlen.",
      cardKids:"Shape Kids",cardKidsDesc:"Çocuklar için hareket, koordinasyon ve özgüven.",
      cardBar:"Shape Bar",cardBarDesc:"Kahve, protein shake ve antrenman sonrası lezzetler.",
      communityEyebrow:"BİR SPOR SALONUNDAN FAZLASI",communityTitle:"Antrenmanın en güzel yanı birlikte ilerlediğin insanlar.",
      communityText:"Amaçla çalış, bağ kur ve her geldiğinde kendini evinde hisset.",
      communityLink:"Galeriyi keşfet",visitEyebrow:"BİZİ ZİYARET ET",visitTitle:"Kalkan'da görüşürüz.",
      visitText:"Yasemen Sokak No:17 · Kalkan, Kaş / Antalya. Haftanın yedi günü açığız.",
      visitLink:"Ziyaret planla",visitMembership:"Üyelikleri gör",
      clubEyebrow:"SHAPE'E HOŞ GELDİN",clubTitle:"Kalkan'daki antrenman alanın.",clubText:"Güç, istikrar ve iyi enerji etrafında şekillenen bir spor salonu.",
      clubDetailEyebrow:"SALONUMUZ",clubDetailTitle:"Kendini ait hissedeceğin bir yerde antrenman yap.",
      clubDetailText:"Serbest ağırlık, kardiyo ve fonksiyonel antrenman alanlarımızı keşfet. İlk ziyaretinden önce salonumuzun gerçek fotoğraflarını incele.",
      clubGallery:"Fotoğraf galerisi",clubMembership:"Üyelikleri incele",
      membershipEyebrow:"KENDİ RUTİNİNİ BUL",membershipTitle:"Üyelikler",membershipText:"Günlük giriş, kısa dönem ve uzun dönem seçenekleri. Sana uyanı seç.",
      trainingEyebrow:"HEDEFİNE ODAKLAN",trainingTitle:"Kendi tarzında antrenman yap.",trainingText:"Farklı hedefler ve seviyeler için birebir koçluk, online programlar ve grup dersleri.",
      barEyebrow:"SHAPE BAR",barTitle:"Shape Bar",barText:"Antrenman öncesi kahve, sonrası protein ya da ferahlatıcı bir içecek.",
      visitPageEyebrow:"BİZE UĞRA",visitPageTitle:"Shape'i ziyaret et.",visitPageText:"Kalkan merkezde bizi bul, çalışma saatlerini incele veya iletişime geç."
    },
    de:{
      navHome:"Start",navClub:"Das Studio",navMembership:"Mitgliedschaft",navTraining:"Training",navBar:"Shape Bar",navVisit:"Kontakt",
      heroExplore:"Mitgliedschaften ansehen",storyEyebrow:"DAS IST SHAPE · KALKAN",storyTitle:"Raum für Bewegung. Ein Ort zum Ankommen.",
      storyText:"Durchdachtes Training, persönliches Coaching und eine Community, die motiviert. Willkommen in deinem Trainingsstudio in Kalkan.",
      storyLink:"Studio entdecken",experienceEyebrow:"ENTDECKE SHAPE",experienceTitle:"Das Shape Erlebnis",
      experienceDesc:"Ein Ort für Training, Fortschritt und Gemeinschaft.",
      cardGym:"Das Studio",cardGymDesc:"Entdecke unsere Trainingsbereiche und Geräte.",
      cardMembership:"Mitgliedschaft",cardMembershipDesc:"Tagespass oder längere Mitgliedschaft – du entscheidest.",
      cardCoaching:"Personal Training",cardCoachingDesc:"Individuelles Coaching für deine Ziele.",
      cardGroup:"Gruppenkurse",cardGroupDesc:"Gemeinsam trainieren mit HYROX und mehr.",
      cardKids:"Shape Kids",cardKidsDesc:"Bewegung und Koordination für Kinder.",
      cardBar:"Shape Bar",cardBarDesc:"Kaffee, Protein-Shakes und Erfrischungen.",
      communityEyebrow:"MEHR ALS EIN FITNESSSTUDIO",communityTitle:"Gemeinsam trainiert es sich am besten.",
      communityText:"Mit einem Ziel trainieren, Kontakte knüpfen und dich wohlfühlen.",
      communityLink:"Galerie entdecken",visitEyebrow:"BESUCH UNS",visitTitle:"Wir sehen uns in Kalkan.",
      visitText:"Yasemen Sokak No:17 · Kalkan, Kaş / Antalya. Sieben Tage die Woche geöffnet.",
      visitLink:"Besuch planen",visitMembership:"Mitgliedschaften ansehen",
      clubEyebrow:"WILLKOMMEN BEI SHAPE",clubTitle:"Dein Trainingsort in Kalkan.",clubText:"Ein Studio für Kraft, Beständigkeit und gute Energie.",
      clubDetailEyebrow:"DAS STUDIO",clubDetailTitle:"Trainiere dort, wo du dich wohlfühlst.",
      clubDetailText:"Entdecke unsere Freihantel-, Cardio- und funktionellen Trainingsbereiche. Sieh dir echte Fotos an.",
      clubGallery:"Fotogalerie ansehen",clubMembership:"Mitgliedschaften",
      membershipEyebrow:"FINDE DEINE ROUTINE",membershipTitle:"Mitgliedschaften",membershipText:"Tagespässe, Kurzzeit- und Langzeitpakete.",
      trainingEyebrow:"TRAINIERE MIT ZIEL",trainingTitle:"Training, das zu dir passt.",trainingText:"Personal Coaching, Online-Programme und Gruppenkurse für jedes Level.",
      barEyebrow:"ENERGIE TANKEN",barTitle:"Shape Bar",barText:"Kaffee vor dem Training, Protein danach oder eine kühle Erfrischung.",
      visitPageEyebrow:"KOMM VORBEI",visitPageTitle:"Besuche Shape.",visitPageText:"Du findest uns im Zentrum von Kalkan. Öffnungszeiten und Kontakt auf einen Blick."
    },
    ru:{
      navHome:"Главная",navClub:"Наш зал",navMembership:"Абонементы",navTraining:"Тренировки",navBar:"Shape Bar",navVisit:"Контакты",
      heroExplore:"Выбрать абонемент",storyEyebrow:"ЭТО SHAPE · КАЛКАН",storyTitle:"Пространство для движения. Место для своих.",
      storyText:"Продуманные тренировки, личный тренер и сообщество, которое вдохновляет. Добро пожаловать в Shape в Калкане.",
      storyLink:"Открыть зал",experienceEyebrow:"ОТКРОЙТЕ SHAPE",experienceTitle:"Атмосфера Shape",
      experienceDesc:"Место для тренировок, роста и общения.",
      cardGym:"Наш зал",cardGymDesc:"Посмотрите тренировочные зоны и оборудование.",
      cardMembership:"Абонементы",cardMembershipDesc:"Разовое посещение или длительный абонемент.",
      cardCoaching:"Персональный тренер",cardCoachingDesc:"Индивидуальная работа под ваши цели.",
      cardGroup:"Групповые занятия",cardGroupDesc:"HYROX, функциональные тренировки и не только.",
      cardKids:"Shape Kids",cardKidsDesc:"Движение и координация для детей.",
      cardBar:"Shape Bar",cardBarDesc:"Кофе, протеиновые коктейли и напитки.",
      communityEyebrow:"БОЛЬШЕ ЧЕМ СПОРТЗАЛ",communityTitle:"Вместе тренироваться интереснее.",
      communityText:"Тренируйтесь с целью, знакомьтесь и чувствуйте себя как дома.",
      communityLink:"Фотогалерея",visitEyebrow:"ПРИХОДИТЕ К НАМ",visitTitle:"Увидимся в Калкане.",
      visitText:"Yasemen Sokak No:17 · Калкан, Каш / Анталья. Открыты семь дней в неделю.",
      visitLink:"Запланировать визит",visitMembership:"Абонементы",
      clubEyebrow:"ДОБРО ПОЖАЛОВАТЬ В SHAPE",clubTitle:"Ваш спортзал в Калкане.",clubText:"Тренировки, сила и отличная атмосфера.",
      clubDetailEyebrow:"НАШ ЗАЛ",clubDetailTitle:"Тренируйтесь там, где вам комфортно.",
      clubDetailText:"Свободные веса, кардио и функциональные зоны. Посмотрите реальные фотографии нашего клуба.",
      clubGallery:"Посмотреть фотографии",clubMembership:"Абонементы",
      membershipEyebrow:"ВЫБЕРИТЕ СВОЙ РИТМ",membershipTitle:"Абонементы",membershipText:"Разовые посещения и гибкие пакеты на любой срок.",
      trainingEyebrow:"ТРЕНИРУЙТЕСЬ С ЦЕЛЬЮ",trainingTitle:"Тренировки для вас.",trainingText:"Персональный тренер, онлайн-программы и групповые занятия для разных целей.",
      barEyebrow:"SHAPE BAR",barTitle:"Shape Bar",barText:"Кофе перед тренировкой, протеин после или освежающий напиток.",
      visitPageEyebrow:"ЗАХОДИТЕ К НАМ",visitPageTitle:"Приходите в Shape.",visitPageText:"Мы в центре Калкана. Адрес, часы работы и контакты."
    }
  };
  const pageKeys={
    club:["clubEyebrow","clubTitle","clubText"],
    membership:["membershipEyebrow","membershipTitle","membershipText"],
    training:["trainingEyebrow","trainingTitle","trainingText"],
    bar:["barEyebrow","barTitle","barText"],
    visit:["visitPageEyebrow","visitPageTitle","visitPageText"]
  };
  const titleSuffix=" | Shape Training Club Kalkan";
  const pageNames={home:"Shape Training Club Kalkan",club:"The Club",membership:"Memberships",training:"Training",bar:"Shape Bar",visit:"Visit"};
  function translate(){
    const language=document.documentElement.lang.slice(0,2).toLowerCase();
    const t=localized[language]||localized.en;
    document.querySelectorAll("[data-bambu]").forEach(element=>{
      const key=element.dataset.bambu;
      if(t[key])element.textContent=t[key];
    });
    if(pageKeys[view]){
      const keys=pageKeys[view];
      ["eyebrow","title","text"].forEach((part,index)=>{
        const el=document.querySelector("[data-bambu-page-"+part+"]");
        if(el)el.textContent=t[keys[index]];
      });
    }
    document.title=view==="home"?"Shape Training Club Kalkan | Gym & Personal Training":(t[pageKeys[view]?.[1]]||pageNames[view])+titleSuffix;
    const desc=view==="home"?"Premium training, personal coaching and a welcoming community in central Kalkan.":(t[pageKeys[view]?.[2]]||"Shape Training Club in Kalkan.");
    const description=document.querySelector('meta[name="description"]');
    if(description)description.content=desc;
  }
  document.querySelectorAll(".topbar nav a[data-shape-nav]").forEach(a=>{
    if(a.dataset.shapeNav===view)a.setAttribute("aria-current","page");
    else a.removeAttribute("aria-current");
  });
  const canonical=document.querySelector('link[rel="canonical"]');
  if(canonical)canonical.href="https://shapetrainingclub.net/"+(view==="home"?"":"?page="+encodeURIComponent(view));
  translate();
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
