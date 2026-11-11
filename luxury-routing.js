/* Dedicated-page navigation for the Minimal Luxury staging site. */
(() => {
  "use strict";
  const text={
    en:{
      member:"Membership prices",coach:"Coaching",group:"Group classes",kids:"SHAPE KIDS",bar:"Shape Bar",gallery:"Photo gallery",more:"More",
      online:"Online coaching",hours:"Opening hours",reviews:"Google Reviews",contact:"Contact",home:"← Back to home",
      membershipTitle:"Membership",membershipLead:"Flexible access for every way you train.",
      coachingTitle:"Personal coaching",coachingLead:"One-to-one coaching, tailored to your goals.",
      onlineTitle:"Online coaching",onlineLead:"Your training plan. Wherever you are.",
      groupTitle:"Group classes",groupLead:"Move together. Grow stronger.",
      barTitle:"Shape Bar",barLead:"Coffee, protein and performance drinks.",
      hoursTitle:"Opening hours",hoursLead:"Plan your next visit to Shape Training Club Kalkan.",
      reviewsTitle:"Google Reviews",reviewsLead:"Find our business profile and share your experience.",
      contactTitle:"Contact & location",contactLead:"Find us, get directions or contact our team.",
      reviewsHeading:"Your feedback matters.",reviewsBody:"Read the latest visitor experiences on our Google business profile, or leave an honest review of your own.",readReviews:"See our Google profile",writeReview:"Write a Google review",
      footerContact:"Contact",footerHours:"Opening hours"
    },
    tr:{
      member:"Üyelik fiyatları",coach:"Koçluk",group:"Grup dersleri",kids:"SHAPE KIDS",bar:"Shape Bar",gallery:"Fotoğraf galerisi",more:"Diğer",
      online:"Online koçluk",hours:"Çalışma saatlerimiz",reviews:"Google Yorumları",contact:"İletişim",home:"← Ana sayfaya dön",
      membershipTitle:"Üyelik",membershipLead:"Antrenman düzenine uygun esnek üyelik seçenekleri.",
      coachingTitle:"Kişisel antrenman",coachingLead:"Hedeflerine özel birebir koçluk.",
      onlineTitle:"Online koçluk",onlineLead:"Nerede olursan ol, sana özel antrenman planı.",
      groupTitle:"Grup dersleri",groupLead:"Birlikte hareket et, birlikte güçlen.",
      barTitle:"Shape Bar",barLead:"Kahve, protein ve performans içecekleri.",
      hoursTitle:"Çalışma saatleri",hoursLead:"Shape Training Club Kalkan ziyaretini planla.",
      reviewsTitle:"Google Yorumları",reviewsLead:"Google işletme profilimizde yorumları gör ve deneyimini paylaş.",
      contactTitle:"İletişim ve konum",contactLead:"Bize ulaş, yol tarifi al veya mesaj gönder.",
      reviewsHeading:"Görüşlerin bizim için değerli.",reviewsBody:"Google işletme profilimizde gerçek ziyaretçi deneyimlerini incele veya kendi yorumunu paylaş.",readReviews:"Google profilini gör",writeReview:"Google'da yorum yaz",
      footerContact:"İletişim",footerHours:"Çalışma saatleri"
    },
    de:{
      member:"Mitgliedschaftspreise",coach:"Coaching",group:"Gruppenkurse",kids:"SHAPE KIDS",bar:"Shape Bar",gallery:"Fotogalerie",more:"Mehr",
      online:"Online-Coaching",hours:"Öffnungszeiten",reviews:"Google-Bewertungen",contact:"Kontakt",home:"← Zur Startseite",
      membershipTitle:"Mitgliedschaft",membershipLead:"Flexible Mitgliedschaften für dein Training.",
      coachingTitle:"Personal Training",coachingLead:"Individuelles Training für deine Ziele.",
      onlineTitle:"Online-Coaching",onlineLead:"Dein Trainingsplan. Egal wo du bist.",
      groupTitle:"Gruppenkurse",groupLead:"Gemeinsam bewegen. Gemeinsam stärker werden.",
      barTitle:"Shape Bar",barLead:"Kaffee, Protein und Performance-Drinks.",
      hoursTitle:"Öffnungszeiten",hoursLead:"Plane deinen Besuch im Shape Training Club Kalkan.",
      reviewsTitle:"Google-Bewertungen",reviewsLead:"Besuche unser Google-Profil und teile deine Erfahrungen.",
      contactTitle:"Kontakt und Standort",contactLead:"Schreib uns oder finde den Weg zu uns.",
      reviewsHeading:"Deine Meinung zählt.",reviewsBody:"Lies echte Erfahrungen in unserem Google-Unternehmensprofil oder hinterlasse eine eigene ehrliche Bewertung.",readReviews:"Google-Profil ansehen",writeReview:"Google-Bewertung schreiben",
      footerContact:"Kontakt",footerHours:"Öffnungszeiten"
    },
    ru:{
      member:"Цены на абонементы",coach:"Тренер",group:"Групповые занятия",kids:"SHAPE KIDS",bar:"Shape Bar",gallery:"Фотогалерея",more:"Ещё",
      online:"Онлайн-тренировки",hours:"Часы работы",reviews:"Отзывы Google",contact:"Контакты",home:"← На главную",
      membershipTitle:"Абонементы",membershipLead:"Гибкие варианты посещения для любого графика.",
      coachingTitle:"Персональный тренер",coachingLead:"Индивидуальные тренировки для ваших целей.",
      onlineTitle:"Онлайн-тренировки",onlineLead:"Ваш план тренировок, где бы вы ни находились.",
      groupTitle:"Групповые занятия",groupLead:"Двигайтесь и становитесь сильнее вместе.",
      barTitle:"Shape Bar",barLead:"Кофе, протеиновые коктейли и напитки.",
      hoursTitle:"Часы работы",hoursLead:"Планируйте визит в Shape Training Club Kalkan.",
      reviewsTitle:"Отзывы Google",reviewsLead:"Посетите наш профиль в Google и поделитесь впечатлениями.",
      contactTitle:"Контакты и адрес",contactLead:"Свяжитесь с нами или проложите маршрут.",
      reviewsHeading:"Ваше мнение важно.",reviewsBody:"Читайте реальные отзывы в нашем профиле Google или оставьте свой честный отзыв.",readReviews:"Открыть профиль Google",writeReview:"Оставить отзыв Google",
      footerContact:"Контакты",footerHours:"Часы работы"
    }
  };
  const routeMap={
    membership:["membershipTitle","membershipLead"],coaching:["coachingTitle","coachingLead"],
    "online-coaching":["onlineTitle","onlineLead"],"group-classes":["groupTitle","groupLead"],
    "shape-bar":["barTitle","barLead"],hours:["hoursTitle","hoursLead"],
    reviews:["reviewsTitle","reviewsLead"],contact:["contactTitle","contactLead"]
  };
  function render(){
    const locale=(document.documentElement.lang||"en").split("-")[0];
    const dictionary=text[locale]||text.en;
    document.querySelectorAll("[data-lux-nav]").forEach(el=>{
      const key=el.dataset.luxNav;
      if(dictionary[key])el.textContent=dictionary[key];
    });
    const page=document.documentElement.dataset.luxPage||"home";
    const entry=routeMap[page];
    if(entry){
      const h=document.getElementById("luxRouteTitle");
      const p=document.getElementById("luxRouteLead");
      if(h)h.textContent=dictionary[entry[0]];
      if(p)p.textContent=dictionary[entry[1]];
    }
    document.querySelectorAll("[data-lux-route]").forEach(el=>{
      const key=el.dataset.luxRoute;
      if(dictionary[key])el.textContent=dictionary[key];
    });
  }
  function init(){
    const nav=document.getElementById("luxMainNav");
    if(nav){
      const current=document.documentElement.dataset.luxPage||"home";
      nav.querySelectorAll("a[data-route]").forEach(a=>{
        if(a.dataset.route===current)a.setAttribute("aria-current","page");
      });
    }
    render();
    new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();