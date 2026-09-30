(function () {
  "use strict";
  const copy = {
    tr: { session: "ders", sessions: "ders", validity: "Kullanım süresi: {n} ay", single: "Tek ders", cash: "Nakit paket fiyatı", perSession: "Ders başına", bonus: "+{n} DERS HEDİYE", includedBonus: "Hediye dersler dahil", terms: "Fiyatlar nakittir. Kredi kartı ödemelerinde %20 KDV eklenir. Beslenme planı, düzenli ölçüm ve takip ile salon kullanımı paketlere dahildir; ek üyelik ücreti alınmaz." },
    en: { session: "session", sessions: "sessions", validity: "Valid for {n} months", validityOne: "Valid for 1 month", single: "Single session", cash: "Cash package price", perSession: "Per session", bonus: "+{n} SESSIONS FREE", includedBonus: "Including free sessions", terms: "Cash prices. 20% VAT is added for card payments. Packages include a nutrition plan, regular measurements and progress tracking, and gym access; no extra membership fee." },
    de: { session: "Einheit", sessions: "Einheiten", validity: "{n} Monate gültig", validityOne: "1 Monat gültig", single: "Einzeltraining", cash: "Paketpreis bei Barzahlung", perSession: "Pro Einheit", bonus: "+{n} EINHEITEN GRATIS", includedBonus: "Inklusive Gratiseinheiten", terms: "Barpreise. Bei Kartenzahlung werden 20 % MwSt. hinzugerechnet. Ernährungsplan, regelmäßige Messungen, Fortschrittskontrolle und Studiozugang sind enthalten; keine zusätzliche Mitgliedsgebühr." },
    ru: { session: "занятие", sessions: "занятий", validity: "Срок действия: {n} месяцев", validityOne: "Срок действия: 1 месяц", validityFew: "Срок действия: {n} месяца", single: "Разовое занятие", cash: "Цена пакета наличными", perSession: "За занятие", bonus: "+{n} ЗАНЯТИЯ В ПОДАРОК", includedBonus: "С учётом подарочных занятий", terms: "Цены при оплате наличными. При оплате картой добавляется НДС 20 %. Включены план питания, регулярные замеры, контроль прогресса и доступ в зал; дополнительная плата за абонемент не требуется." }
  };
  const safe = value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function membershipAmount(plan, kind, currency, lang, formatPrice) {
    const gbp = Number(plan[kind === "list" ? "cardGBP" : "cashGBP"]);
    if (currency === "GBP" && gbp > 0) return "£" + gbp;
    const main = safe(formatPrice(plan[kind] || "", lang));
    return main + (currency === "TRY" && gbp > 0 ? '<small class="price-reference">(£' + safe(gbp) + ')</small>' : "");
  }
  function memberships(plans, t, lang, currency, formatPrice) {
    return plans.filter(plan => plan.active !== false).map((plan, index) => {
      const featured = Boolean(plan.featured);
      const title = (plan.labels || {})[lang] || (plan.labels || {}).en || (t.durations || [])[index] || "";
      return '<article class="plan' + (featured ? " featured" : "") + '">' +
        (featured ? '<span class="badge">' + safe(t.best) + "</span>" : "") +
        "<h3>" + safe(title) + '</h3><div class="label">' + safe(t.listPrice) +
        '</div><div class="price">' + membershipAmount(plan, "list", currency, lang, formatPrice) +
        '</div><div class="cash"><span>' + safe(t.cash) + "</span><strong>" +
        membershipAmount(plan, "cash", currency, lang, formatPrice) + "</strong></div>" +
        (featured ? '<p class="gift">' + safe(t.gift) + "</p>" : "") + "</article>";
    }).join("");
  }
  function coaching(plans, t, lang, formatPrice) {
    const c = copy[lang] || copy.en;
    return plans.filter(plan => plan.active !== false).map(plan => {
      const months = Number(plan.validMonths) || 0;
      let validity = months ? (months === 1 && c.validityOne ? c.validityOne : lang === "ru" && months >= 2 && months <= 4 ? c.validityFew : c.validity).replace("{n}", months) : c.single;
      if (!Object.prototype.hasOwnProperty.call(plan, "validMonths") && Number(plan.perWeek) > 0) validity = plan.perWeek + " × " + t.perWeek;
      const bonus = Number(plan.bonusSessions) || 0;
      return '<article class="coach' + (plan.featured ? " featured" : "") + '">' +
        (plan.featured ? '<b class="badge">' + safe(t.popular) + "</b>" : "") +
        '<p class="coach-sessions"><strong>' + safe(plan.sessions) + "</strong> " +
        safe(Number(plan.sessions) === 1 ? c.session : c.sessions) + "</p>" +
        '<span class="coach-validity">' + safe(validity) + "</span>" +
        (bonus ? '<p class="coach-bonus">' + safe(c.bonus.replace("{n}", bonus)) + "</p>" : "") +
        '<div class="coach-price"><span class="coach-price-label">' + safe(c.cash) + "</span>" +
        safe(formatPrice(plan.price || "", lang)) + "</div>" +
        (plan.perSession ? '<div class="coach-per-session"><span>' + safe(c.perSession) + "</span><strong>" +
          (plan.perSessionApprox ? "≈ " : "") + safe(formatPrice(plan.perSession, lang)) + "</strong>" +
          (bonus ? "<small>" + safe(c.includedBonus) + "</small>" : "") + "</div>" : "") + "</article>";
    }).join("");
  }
  window.SHAPE_PRICING = { memberships, coaching, terms: lang => (copy[lang] || copy.en).terms };
})();

