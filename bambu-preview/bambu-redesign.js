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

  // Shape-specific copy aligned to the content rhythm of the reference homepage.
  Object.assign(localized.en,{
    approachEyebrow:"THE SHAPE WAY",approachTitle:"Made for the way you move.",
    approachDesc:"The right space, supportive people and training that works for you.",
    approachFirstTitle:"Room to train",approachFirstText:"Strength, cardio and functional training areas for every routine.",
    approachSecondTitle:"Coaching that cares",approachSecondText:"Focused one-to-one support for consistent, meaningful progress.",
    approachThirdTitle:"Move together",approachThirdText:"Train among people who share your energy and goals.",
    coachEyebrow:"YOUR PEOPLE",coachTitle:"Meet the coaches.",coachDesc:"Real guidance, good energy and support in every session.",
    coachRole:"Personal Trainer",coachCta:"Explore training options",
    reviewsEyebrow:"SHAPE COMMUNITY",reviewsTitle:"Hear it from our members.",
    reviewsDesc:"The atmosphere is shaped by everyone who trains here. Read the latest experiences shared by our visitors.",
    reviewsCta:"Google reviews ↗",
    firstEyebrow:"YOUR FIRST VISIT",firstTitle:"Everything you need to know.",
    firstOneTitle:"Drop by the club",firstOneDesc:"Visiting Kalkan? Ask reception about day passes and memberships.",
    firstTwoTitle:"When we're open",firstThreeTitle:"Where to find us",
    firstVisitCta:"Plan your visit",firstContactCta:"Message us"
  });
  Object.assign(localized.tr,{
    approachEyebrow:"SHAPE YAKLAŞIMI",approachTitle:"Senin hareketine uyum sağlayan bir alan.",
    approachDesc:"Doğru alan, destekleyici insanlar ve sana uygun antrenman.",
    approachFirstTitle:"Rahatça antrenman yap",approachFirstText:"Serbest ağırlık, kardiyo ve fonksiyonel antrenman alanları.",
    approachSecondTitle:"Gerçek koçluk",approachSecondText:"İstikrarlı ilerleme için birebir destek ve antrenman takibi.",
    approachThirdTitle:"Birlikte güçlen",approachThirdText:"Enerjini ve hedeflerini paylaşan insanlarla antrenman yap.",
    coachEyebrow:"EKİBİMİZ",coachTitle:"Antrenörlerle tanış.",coachDesc:"Her antrenmanda destek, doğru yönlendirme ve pozitif enerji.",
    coachRole:"Kişisel Antrenör",coachCta:"Antrenman seçenekleri",
    reviewsEyebrow:"SHAPE TOPLULUĞU",reviewsTitle:"Üyelerimizin deneyimlerini keşfet.",
    reviewsDesc:"Salonumuzun atmosferini burada antrenman yapan insanlar oluşturuyor. Ziyaretçilerimizin güncel yorumlarını incele.",
    reviewsCta:"Google yorumları ↗",
    firstEyebrow:"İLK ZİYARETİN",firstTitle:"Bilmen gereken her şey.",
    firstOneTitle:"Salona uğra",firstOneDesc:"Kalkan'da mısın? Günlük giriş ve üyelik seçeneklerini resepsiyona sor.",
    firstTwoTitle:"Çalışma saatlerimiz",firstThreeTitle:"Bizi nerede bulabilirsin",
    firstVisitCta:"Ziyaret planla",firstContactCta:"Mesaj gönder"
  });
  Object.assign(localized.de,{
    approachEyebrow:"DIE SHAPE PHILOSOPHIE",approachTitle:"Raum für deine Bewegung.",
    approachDesc:"Ein guter Trainingsort, motivierende Menschen und Training, das zu dir passt.",
    approachFirstTitle:"Platz zum Trainieren",approachFirstText:"Freihanteln, Cardio und Functional Training für deine Routine.",
    approachSecondTitle:"Coaching mit Herz",approachSecondText:"Persönliche Betreuung für nachhaltigen Fortschritt.",
    approachThirdTitle:"Gemeinsam stärker",approachThirdText:"Trainiere mit Menschen, die deine Ziele teilen.",
    coachEyebrow:"UNSER TEAM",coachTitle:"Lerne die Trainer kennen.",coachDesc:"Erfahrung, Motivation und persönliche Betreuung.",
    coachRole:"Personal Trainer",coachCta:"Training entdecken",
    reviewsEyebrow:"SHAPE COMMUNITY",reviewsTitle:"Das sagen unsere Mitglieder.",
    reviewsDesc:"Unsere Atmosphäre entsteht durch die Menschen im Studio. Lies aktuelle Google-Bewertungen.",
    reviewsCta:"Google-Bewertungen ↗",
    firstEyebrow:"DEIN ERSTER BESUCH",firstTitle:"Alles auf einen Blick.",
    firstOneTitle:"Besuch uns im Studio",firstOneDesc:"In Kalkan zu Besuch? Frag an der Rezeption nach Tagespässen und Mitgliedschaften.",
    firstTwoTitle:"Öffnungszeiten",firstThreeTitle:"So findest du uns",
    firstVisitCta:"Besuch planen",firstContactCta:"Nachricht senden"
  });
  Object.assign(localized.ru,{
    approachEyebrow:"ПОДХОД SHAPE",approachTitle:"Пространство для вашего движения.",
    approachDesc:"Удобный зал, поддержка и тренировки для ваших целей.",
    approachFirstTitle:"Место для тренировок",approachFirstText:"Свободные веса, кардио и функциональные зоны.",
    approachSecondTitle:"Внимание тренера",approachSecondText:"Индивидуальное сопровождение для стабильного прогресса.",
    approachThirdTitle:"Сильнее вместе",approachThirdText:"Тренируйтесь вместе с людьми, которые разделяют ваши цели.",
    coachEyebrow:"НАША КОМАНДА",coachTitle:"Познакомьтесь с тренерами.",coachDesc:"Поддержка, опыт и хорошая атмосфера на каждой тренировке.",
    coachRole:"Персональный тренер",coachCta:"Варианты тренировок",
    reviewsEyebrow:"СООБЩЕСТВО SHAPE",reviewsTitle:"Отзывы наших гостей.",
    reviewsDesc:"Атмосферу зала создают наши посетители. Посмотрите актуальные отзывы в Google.",
    reviewsCta:"Отзывы Google ↗",
    firstEyebrow:"ПЕРВЫЙ ВИЗИТ",firstTitle:"Всё, что нужно знать.",
    firstOneTitle:"Приходите в клуб",firstOneDesc:"В Калкане? Спросите на стойке о разовых посещениях и абонементах.",
    firstTwoTitle:"Часы работы",firstThreeTitle:"Как нас найти",
    firstVisitCta:"Запланировать визит",firstContactCta:"Написать нам"
  });

  Object.assign(localized.en,{daysWeekdays:"Mon–Fri",daysSaturday:"Sat",daysSunday:"Sun"});
  Object.assign(localized.tr,{daysWeekdays:"Pzt–Cum",daysSaturday:"Cmt",daysSunday:"Paz"});
  Object.assign(localized.de,{daysWeekdays:"Mo–Fr",daysSaturday:"Sa",daysSunday:"So"});
  Object.assign(localized.ru,{daysWeekdays:"Пн–Пт",daysSaturday:"Сб",daysSunday:"Вс"});
  Object.assign(localized.en,{"storyEyebrow":"SHAPE TRAINING CLUB · KALKAN","storyTitle":"Training feels different when you belong.","storyText":"Strength training, coaching, group sessions and a welcoming atmosphere in the heart of Kalkan. Come for a workout. Find your community.","experienceEyebrow":"EXPLORE THE CLUB","experienceTitle":"Everything Shape has to offer.","experienceDesc":"Your training essentials, favourite classes and a place to refuel.","cardGymDesc":"An inviting space with strength, cardio and functional training areas.","cardMembershipDesc":"Flexible access, whether you’re visiting or training all year.","cardCoachingDesc":"Personal guidance shaped by your goals and your progress.","cardGroupDesc":"Share the energy of structured small-group training.","cardKidsDesc":"A dedicated programme for movement and coordination.","cardBarDesc":"Enjoy coffee, protein shakes and refreshments around your session.","approachEyebrow":"OUR TRAINING PHILOSOPHY","approachTitle":"A better way to show up for yourself.","approachDesc":"A well-equipped space, attentive trainers and the motivation of training together.","approachFirstTitle":"Your space to train","approachFirstText":"Choose the weights, cardio and functional areas that fit your session.","approachSecondTitle":"Guidance that moves you forward","approachSecondText":"Work one-to-one with a trainer who understands what you’re working towards.","approachThirdTitle":"Energy you can share","approachThirdText":"Find a supportive rhythm in our group training sessions.","coachEyebrow":"THE PEOPLE BEHIND SHAPE","coachTitle":"Get to know your trainers.","coachDesc":"Meet the people who coach, encourage and help you build consistency.","reviewsEyebrow":"WORDS FROM THE COMMUNITY","reviewsTitle":"Discover what training at Shape feels like.","reviewsDesc":"From first workouts to familiar faces, the people who visit Shape tell its story best. Explore their published Google reviews.","firstEyebrow":"BEFORE YOUR FIRST WORKOUT","firstTitle":"Good to know before you visit.","firstOneTitle":"Walk in and say hello","firstOneDesc":"Ask our reception team about a day pass, holiday access or a long-term membership.","firstTwoTitle":"Plan around your day","firstThreeTitle":"Right in central Kalkan","visitEyebrow":"COME FIND YOUR FLOW","visitTitle":"Your next session starts here.","visitText":"Find Shape Training Club at Yasemen Sokak No:17 in Kalkan. Drop by or send us a message.","communityEyebrow":"THE SHAPE COMMUNITY","communityTitle":"Progress is personal. The energy is shared.","communityText":"Build your routine, meet people who motivate you, and make each session count.","clubDetailTitle":"The space is ready. Make it yours."});
  Object.assign(localized.tr,{"storyEyebrow":"SHAPE TRAINING CLUB · KALKAN","storyTitle":"Kendini ait hissettiğinde antrenman değişir.","storyText":"Kalkan'ın merkezinde kuvvet antrenmanı, birebir koçluk, grup dersleri ve samimi bir atmosfer. Antrenman için gel, topluluğun bir parçası ol.","experienceEyebrow":"SALONU KEŞFET","experienceTitle":"Shape'de seni neler bekliyor?","experienceDesc":"Antrenman, grup dersleri ve enerji toplayacağın bir alan.","cardGymDesc":"Kuvvet, kardiyo ve fonksiyonel antrenman için ferah alanlar.","cardMembershipDesc":"Kısa süreli ziyaretlerden yıllık üyeliğe esnek seçenekler.","cardCoachingDesc":"Hedeflerine ve gelişimine göre şekillenen birebir destek.","cardGroupDesc":"Planlı grup antrenmanlarının enerjisini paylaş.","cardKidsDesc":"Hareket ve koordinasyonu geliştirmeye yönelik özel program.","cardBarDesc":"Antrenmanın öncesinde veya sonrasında kahve ve protein shake.","approachEyebrow":"ANTRENMAN ANLAYIŞIMIZ","approachTitle":"Kendine zaman ayırmanın daha iyi bir yolu.","approachDesc":"Donanımlı bir salon, ilgili antrenörler ve birlikte çalışmanın motivasyonu.","approachFirstTitle":"Senin antrenman alanın","approachFirstText":"Serbest ağırlık, kardiyo ve fonksiyonel alanlarda kendi rutinini oluştur.","approachSecondTitle":"Seni ileri taşıyan rehberlik","approachSecondText":"Hedeflerini anlayan bir antrenörle birebir çalış.","approachThirdTitle":"Paylaşabileceğin enerji","approachThirdText":"Grup derslerinde birlikte gelişmenin motivasyonunu yaşa.","coachEyebrow":"SHAPE'İN ARKASINDAKİ EKİP","coachTitle":"Antrenörlerini tanı.","coachDesc":"Sana yol gösteren, motive eden ve istikrar kazanmanı sağlayan ekiple tanış.","reviewsEyebrow":"TOPLULUĞUMUZUN GÖZÜNDEN","reviewsTitle":"Shape'de antrenman yapmak nasıl bir deneyim?","reviewsDesc":"İlk antrenmanlardan tanıdık yüzlere, Shape'i en iyi ziyaretçileri anlatır. Yayınlanmış Google yorumlarını incele.","firstEyebrow":"İLK ANTRENMANINDAN ÖNCE","firstTitle":"Gelmeden önce bilmen gerekenler.","firstOneTitle":"Uğra, tanışalım","firstOneDesc":"Günlük giriş, tatil dönemi ve uzun süreli üyelikler için resepsiyona danış.","firstTwoTitle":"Gününü planla","firstThreeTitle":"Kalkan'ın tam merkezinde","visitEyebrow":"BİZE UĞRA","visitTitle":"Sıradaki antrenmanın burada başlıyor.","visitText":"Yasemen Sokak No:17, Kalkan adresinde bizi bulabilirsin. Uğra veya mesaj gönder.","communityEyebrow":"SHAPE TOPLULUĞU","communityTitle":"Gelişim kişisel, enerji ortak.","communityText":"Rutinini oluştur, seni motive eden insanlarla tanış ve her antrenmanı değerlendir.","clubDetailTitle":"Alan hazır. Şimdi sıra sende."});
  Object.assign(localized.de,{"storyEyebrow":"SHAPE TRAINING CLUB · KALKAN","storyTitle":"Training fühlt sich besser an, wenn du dazugehörst.","storyText":"Krafttraining, Coaching, Gruppenkurse und eine offene Atmosphäre im Herzen von Kalkan.","experienceEyebrow":"ENTDECKE DAS STUDIO","experienceTitle":"Alles, was Shape zu bieten hat.","experienceDesc":"Dein Trainingsort mit Kursen und einem Platz zum Auftanken.","approachEyebrow":"UNSERE TRAININGSPHILOSOPHIE","approachTitle":"Mehr aus deiner Trainingszeit machen.","approachDesc":"Gute Ausstattung, engagierte Trainer und gemeinsame Motivation.","coachEyebrow":"DAS TEAM HINTER SHAPE","coachTitle":"Lerne deine Trainer kennen.","reviewsEyebrow":"STIMMEN DER COMMUNITY","reviewsTitle":"So fühlt sich Training bei Shape an.","firstEyebrow":"VOR DEINEM ERSTEN TRAINING","firstTitle":"Gut zu wissen vor deinem Besuch.","communityTitle":"Dein Fortschritt. Unsere gemeinsame Energie.","visitTitle":"Dein nächstes Training beginnt hier."});
  Object.assign(localized.ru,{"storyEyebrow":"SHAPE TRAINING CLUB · КАЛКАН","storyTitle":"Тренироваться приятнее, когда ты среди своих.","storyText":"Силовые тренировки, персональный тренер, групповые занятия и дружелюбная атмосфера в центре Калкана.","experienceEyebrow":"ОТКРОЙТЕ НАШ КЛУБ","experienceTitle":"Всё, что есть в Shape.","experienceDesc":"Пространство для тренировок, групповых занятий и отдыха.","approachEyebrow":"НАШ ПОДХОД","approachTitle":"Тренируйтесь с удовольствием и пользой.","approachDesc":"Хорошее оборудование, внимательные тренеры и поддержка сообщества.","coachEyebrow":"КОМАНДА SHAPE","coachTitle":"Познакомьтесь с вашими тренерами.","reviewsEyebrow":"ГОЛОС НАШЕГО СООБЩЕСТВА","reviewsTitle":"Что говорят о тренировках в Shape.","firstEyebrow":"ПЕРЕД ПЕРВОЙ ТРЕНИРОВКОЙ","firstTitle":"Полезно знать перед визитом.","communityTitle":"Личный прогресс. Общая энергия.","visitTitle":"Следующая тренировка начинается здесь."});
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
  // Keep editorial visit details in sync with Supabase-managed contact data.
  const syncVisitDetails=()=>{
    [["weekdayHours","weekdays"],["saturdayHours","saturday"],["sundayHours","sunday"]].forEach(([source,key])=>{
      const existing=document.getElementById(source);
      const target=document.querySelector("[data-bambu-open-"+key+"]");
      if(existing&&target)target.textContent=existing.textContent.trim();
    });
    const dynamicWhatsApp=document.getElementById("whatsappLink");
    const editorialWhatsApp=document.getElementById("bambuFirstWhatsapp");
    if(dynamicWhatsApp&&editorialWhatsApp)editorialWhatsApp.href=dynamicWhatsApp.href;
  };
  ["weekdayHours","saturdayHours","sundayHours"].forEach(id=>{
    const element=document.getElementById(id);
    if(element)new MutationObserver(syncVisitDetails).observe(element,{childList:true,characterData:true,subtree:true});
  });
  const dynamicWhatsapp=document.getElementById("whatsappLink");
  if(dynamicWhatsapp)new MutationObserver(syncVisitDetails).observe(dynamicWhatsapp,{attributes:true,attributeFilter:["href"]});
  syncVisitDetails();
  translate();
  const menuButton=document.querySelector(".bambu-menu-toggle");
  const nav=document.getElementById("shapeMobileMenu");
  if(menuButton&&nav){
    const closeMenu=()=>{
      menuButton.setAttribute("aria-expanded","false");
      menuButton.setAttribute("aria-label","Open menu");
      document.querySelector(".topbar")?.classList.remove("menu-open");
    };
    menuButton.addEventListener("click",()=>{
      const next=menuButton.getAttribute("aria-expanded")!=="true";
      menuButton.setAttribute("aria-expanded",String(next));
      menuButton.setAttribute("aria-label",next?"Close menu":"Open menu");
      document.querySelector(".topbar")?.classList.toggle("menu-open",next);
    });
    nav.addEventListener("click",event=>{
      if(event.target.closest("a"))closeMenu();
    });
    document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu()});
    document.addEventListener("click",event=>{
      if(!event.target.closest(".topbar"))closeMenu();
    });
    window.addEventListener("resize",()=>{if(window.innerWidth>900)closeMenu()},{passive:true});
  }
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
