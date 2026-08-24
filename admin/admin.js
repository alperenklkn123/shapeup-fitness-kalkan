(function () {
  "use strict";

  const LANGUAGES = [
    { code: "en", name: "İngilizce" },
    { code: "tr", name: "Türkçe" },
    { code: "de", name: "Almanca" },
    { code: "ru", name: "Rusça" }
  ];
  const BACKGROUND_SECTIONS = [
    { key: "membership", label: "Üyelik" },
    { key: "coaching", label: "Kişisel Koçluk" },
    { key: "onlineCoaching", label: "Online Koçluk" },
    { key: "groupClasses", label: "Grup Dersleri" },
    { key: "menu", label: "Yeme & İçme" },
    { key: "contact", label: "İletişim" }
  ];
  const TEXT_FIELDS = [
    { key: "navMembership", label: "Menü — Üyelik", rows: 1 },
    { key: "navCoaching", label: "Menü — Koçluk", rows: 1 },
    { key: "navMenu", label: "Menü — Menü", rows: 1 },
    { key: "navContact", label: "Menü — İletişim", rows: 1 },
    { key: "heroTitle", label: "Kapak başlığı", rows: 1 },
    { key: "heroIntro", label: "Kapak açıklaması", rows: 3 },
    { key: "heroWhatsappCta", label: "WhatsApp düğmesi", rows: 1 },
    { key: "quickHours", label: "Hızlı bağlantı — Çalışma saatleri", rows: 1 },
    { key: "quickMenu", label: "Hızlı bağlantı — Yeme & İçme", rows: 1 },
    { key: "quickGroup", label: "Hızlı bağlantı — Grup dersleri", rows: 1 },
    { key: "quickKicker", label: "Hızlı erişim — Üst etiket", rows: 1 },
    { key: "quickIntro", label: "Hızlı erişim — Açıklama", rows: 2 },
    { key: "quickOnline", label: "Hızlı bağlantı — Online koçluk", rows: 1 },
    { key: "directions", label: "Yol tarifi düğmesi", rows: 1 },
    { key: "membershipKicker", label: "Üyelik üst etiketi", rows: 1 },
    { key: "membershipTitle", label: "Üyelik başlığı", rows: 2 },
    { key: "membershipIntro", label: "Üyelik açıklaması", rows: 3 },
    { key: "listPrice", label: "Liste fiyatı etiketi", rows: 1 },
    { key: "cash", label: "Nakit etiketi", rows: 1 },
    { key: "best", label: "Öne çıkan plan etiketi", rows: 1 },
    { key: "gift", label: "Hediye etiketi", rows: 1 },
    { key: "coachingKicker", label: "Koçluk üst etiketi", rows: 1 },
    { key: "coachingTitle", label: "Koçluk başlığı", rows: 2 },
    { key: "coachingIntro", label: "Koçluk açıklaması", rows: 3 },
    { key: "sessions", label: "Ders etiketi", rows: 1 },
    { key: "perWeek", label: "Haftalık sıklık etiketi", rows: 1 },
    { key: "popular", label: "Popüler paket etiketi", rows: 1 },
    { key: "features", label: "Koçluk özellikleri — her satıra bir özellik", rows: 5, array: true },
    { key: "onlineKicker", label: "Online koçluk — Üst etiket", rows: 1 },
    { key: "onlineTitle", label: "Online koçluk — Başlık", rows: 2 },
    { key: "onlineIntro", label: "Online koçluk — Açıklama", rows: 3 },
    { key: "onlineFeatures", label: "Online koçluk — Özellikler, her satıra bir özellik", rows: 5, array: true },
    { key: "onlineCta", label: "Online koçluk — WhatsApp düğmesi", rows: 1 },
    { key: "onlineWhatsappMessage", label: "Online koçluk — Hazır WhatsApp mesajı", rows: 2 },
    { key: "groupKicker", label: "Grup dersi üst etiketi", rows: 1 },
    { key: "groupTitle", label: "Grup dersi başlığı", rows: 2 },
    { key: "groupIntro", label: "Grup dersi açıklaması", rows: 3 },
    { key: "groupMember", label: "Grup dersi — Üye etiketi", rows: 1 },
    { key: "groupMemberNote", label: "Grup dersi — Üye açıklaması", rows: 1 },
    { key: "groupNonMember", label: "Grup dersi — Dışarıdan katılım etiketi", rows: 1 },
    { key: "groupNonMemberNote", label: "Grup dersi — Dışarıdan katılım açıklaması", rows: 1 },
    { key: "groupDropIn", label: "Grup dersi — Tek ders etiketi", rows: 1 },
    { key: "groupReservation", label: "Grup dersi — Rezervasyon notu", rows: 1 },
    { key: "groupPayment", label: "Grup dersi — Ödeme notu", rows: 2 },
    { key: "groupLevels", label: "Grup dersi — Seviye notu", rows: 1 },
    { key: "groupBook", label: "Grup dersi WhatsApp düğmesi", rows: 1 },
    { key: "groupSchedule", label: "Grup dersi program notu", rows: 2 },
    { key: "groupWhatsappMessage", label: "Grup dersi hazır WhatsApp mesajı", rows: 2 },
    { key: "menuTitle", label: "Menü başlığı", rows: 2 },
    { key: "menuIntro", label: "Menü açıklaması", rows: 3 },
    { key: "visitKicker", label: "İletişim üst etiketi", rows: 1 },
    { key: "visitTitle", label: "İletişim başlığı", rows: 2 },
    { key: "visitIntro", label: "İletişim açıklaması", rows: 3 },
    { key: "call", label: "Ara düğmesi", rows: 1 },
    { key: "addressLabel", label: "Adres etiketi", rows: 1 },
    { key: "hoursLabel", label: "Çalışma saatleri etiketi", rows: 1 },
    { key: "weekdays", label: "Hafta içi etiketi", rows: 1 },
    { key: "saturday", label: "Cumartesi etiketi", rows: 1 },
    { key: "sunday", label: "Pazar etiketi", rows: 1 },
    { key: "contactLabel", label: "İletişim kartı etiketi", rows: 1 },
    { key: "reviews", label: "Google yorumları etiketi", rows: 1 },
    { key: "footer", label: "Alt bilgi sloganı", rows: 2 },
    { key: "legal", label: "Alt bilgi fiyat notu", rows: 2 }
  ];
  const TYPOGRAPHY_FIELDS = [
    { key: "heroTitleMobile", device: "mobile", label: "Kapak başlığı", min: 32, max: 60 },
    { key: "sectionTitleMobile", device: "mobile", label: "Bölüm başlıkları", min: 28, max: 48 },
    { key: "bodyMobile", device: "mobile", label: "Açıklama metinleri", min: 12, max: 18 },
    { key: "buttonMobile", device: "mobile", label: "Düğme yazıları", min: 9, max: 16 },
    { key: "heroTitleDesktop", device: "desktop", label: "Kapak başlığı", min: 52, max: 112 },
    { key: "sectionTitleDesktop", device: "desktop", label: "Bölüm başlıkları", min: 36, max: 76 },
    { key: "bodyDesktop", device: "desktop", label: "Açıklama metinleri", min: 13, max: 21 },
    { key: "buttonDesktop", device: "desktop", label: "Düğme yazıları", min: 9, max: 16 }
  ];
  const TYPOGRAPHY_PRESETS = {
    small: { heroTitleMobile: 38, sectionTitleMobile: 32, bodyMobile: 13, buttonMobile: 10, heroTitleDesktop: 64, sectionTitleDesktop: 44, bodyDesktop: 14, buttonDesktop: 10 },
    medium: { heroTitleMobile: 49, sectionTitleMobile: 40, bodyMobile: 14, buttonMobile: 12, heroTitleDesktop: 96, sectionTitleDesktop: 66, bodyDesktop: 16, buttonDesktop: 11 },
    large: { heroTitleMobile: 56, sectionTitleMobile: 46, bodyMobile: 17, buttonMobile: 14, heroTitleDesktop: 108, sectionTitleDesktop: 74, bodyDesktop: 20, buttonDesktop: 14 }
  };

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
  const clone = value => JSON.parse(JSON.stringify(value));
  const safe = value => String(value == null ? "" : value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const id = prefix => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const defaults = clone(window.SHAPE_DEFAULTS || {});
  const config = window.SHAPE_SUPABASE || {};
  let client = null;
  let state = clone(defaults);
  let currentUser = null;
  let dirty = false;
  let saving = false;

  function mergeConfig(base, custom) {
    const source = custom && typeof custom === "object" ? custom : {};
    const merged = Object.assign({}, clone(base), clone(source));
    merged.membership = Array.isArray(source.membership) ? clone(source.membership) : clone(base.membership || []);
    merged.coaching = Array.isArray(source.coaching) ? clone(source.coaching) : clone(base.coaching || []);
    merged.onlineCoaching = Object.assign({}, clone(base.onlineCoaching || {}), clone(source.onlineCoaching || {}));
    merged.backgrounds = Object.assign({}, clone(base.backgrounds || {}), clone(source.backgrounds || {}));
    merged.groupTraining = Object.assign({}, clone(base.groupTraining || {}), clone(source.groupTraining || {}));
    merged.groupTraining.classTypes = Array.isArray((source.groupTraining || {}).classTypes) ? clone(source.groupTraining.classTypes) : clone((base.groupTraining || {}).classTypes || []);
    merged.menu = Array.isArray(source.menu) ? clone(source.menu) : clone(base.menu || []);
    merged.hero = Object.assign({}, clone(base.hero || {}), clone(source.hero || {}));
    merged.design = Object.assign({}, clone(base.design || {}), clone(source.design || {}));
    merged.design.typography = Object.assign({}, clone(((base.design || {}).typography) || {}), clone(((source.design || {}).typography) || {}));
    merged.contact = Object.assign({}, clone(base.contact || {}), clone(source.contact || {}));
    merged.contact.addresses = Object.assign({}, clone((base.contact || {}).addresses || {}), clone((source.contact || {}).addresses || {}));
    merged.contact.hours = Object.assign({}, clone((base.contact || {}).hours || {}), clone((source.contact || {}).hours || {}));
    merged.translations = {};
    LANGUAGES.forEach(language => {
      merged.translations[language.code] = Object.assign(
        {},
        clone((base.translations || {})[language.code] || {}),
        clone((source.translations || {})[language.code] || {})
      );
    });
    const legacyQuickMenu = { en: "Menu", tr: "Menü", de: "Menü", ru: "Меню" };
    LANGUAGES.forEach(language => {
      const savedValue = (((source.translations || {})[language.code] || {}).quickMenu);
      if (savedValue === legacyQuickMenu[language.code]) {
        merged.translations[language.code].quickMenu = (((base.translations || {})[language.code] || {}).quickMenu) || savedValue;
      }
    });
    return merged;
  }

  function setLoginMessage(message, type) {
    const el = $("#loginMessage");
    el.textContent = message || "";
    el.style.color = type === "success" ? "var(--good)" : "var(--bad)";
  }

  function setStatus(message, type, savedAt) {
    $("#statusMessage").textContent = message;
    const dot = $("#statusDot");
    dot.className = `status-dot ${type || ""}`.trim();
    if (savedAt) {
      const date = new Date(savedAt);
      $("#lastSaved").textContent = Number.isNaN(date.getTime()) ? "" : `Son kayıt: ${date.toLocaleString("tr-TR")}`;
    }
  }

  function markDirty() {
    dirty = true;
    setStatus("Yayınlanmamış değişiklikler var.", "dirty");
  }

  function toggleBusy(isBusy) {
    saving = isBusy;
    [$("#saveButton"), $("#mobileSaveButton")].forEach(button => {
      button.disabled = isBusy;
      button.textContent = isBusy ? "Yayınlanıyor…" : "Değişiklikleri yayınla";
    });
    $("#workspace").classList.toggle("loading", isBusy);
  }

  function languageFields(kind, index, field, values, extra) {
    return `<div class="field-grid four wide">${LANGUAGES.map(language => `<label class="field"><span>${language.name}</span><input type="text" data-kind="${kind}" data-index="${index}" data-field="${field}" data-lang="${language.code}" ${extra || ""} value="${safe((values || {})[language.code])}"></label>`).join("")}</div>`;
  }

  function renderMembership() {
    $("#membershipEditor").innerHTML = (state.membership || []).map((plan, index) => `
      <article class="edit-card">
        <div class="edit-card-head">
          <h3>${safe((plan.labels || {}).tr || `Plan ${index + 1}`)}</h3>
          <div class="switches">
            <label class="check"><input type="checkbox" data-kind="membership" data-index="${index}" data-field="active" ${plan.active !== false ? "checked" : ""}> Yayında</label>
            <label class="check"><input type="checkbox" data-kind="membership" data-index="${index}" data-field="featured" ${plan.featured ? "checked" : ""}> Öne çıkar</label>
          </div>
        </div>
        <div class="field-grid">
          <label class="field"><span>Liste fiyatı</span><input type="text" data-kind="membership" data-index="${index}" data-field="list" value="${safe(plan.list)}" placeholder="₺0"></label>
          <label class="field"><span>Nakit fiyatı</span><input type="text" data-kind="membership" data-index="${index}" data-field="cash" value="${safe(plan.cash)}" placeholder="₺0"></label>
          ${languageFields("membership", index, "labels", plan.labels)}
        </div>
      </article>`).join("");
  }

  function renderCoaching() {
    $("#coachingEditor").innerHTML = (state.coaching || []).map((plan, index) => `
      <article class="edit-card">
        <div class="edit-card-head">
          <h3>${safe(plan.sessions)} derslik paket</h3>
          <div class="switches">
            <label class="check"><input type="checkbox" data-kind="coaching" data-index="${index}" data-field="active" ${plan.active !== false ? "checked" : ""}> Yayında</label>
            <label class="check"><input type="checkbox" data-kind="coaching" data-index="${index}" data-field="featured" ${plan.featured ? "checked" : ""}> Öne çıkar</label>
            <button class="mini-button danger" type="button" data-action="delete-coaching" data-index="${index}">Sil</button>
          </div>
        </div>
        <div class="field-grid">
          <label class="field"><span>Ders sayısı</span><input type="number" min="1" data-kind="coaching" data-index="${index}" data-field="sessions" value="${safe(plan.sessions)}"></label>
          <label class="field"><span>Haftada kaç gün</span><input type="number" min="1" max="7" data-kind="coaching" data-index="${index}" data-field="perWeek" value="${safe(plan.perWeek)}"></label>
          <label class="field wide"><span>Fiyat</span><input type="text" data-kind="coaching" data-index="${index}" data-field="price" value="${safe(plan.price)}" placeholder="₺0"></label>
        </div>
      </article>`).join("") || `<p>Henüz koçluk paketi yok.</p>`;
  }

  function renderOnlineCoaching() {
    const online = state.onlineCoaching || {};
    $("#onlineCoachingEditor").innerHTML = `
      <section class="form-section"><h3>Online koçluk bölümü</h3><div class="field-grid">
        <label class="check wide"><input type="checkbox" data-kind="online-coaching" data-field="active" ${online.active !== false ? "checked" : ""}> Online koçluk bölümü ve hızlı bağlantısı yayında</label>
      </div></section>
      <p class="upload-message">Başlık, açıklama, özellikler, düğme ve hazır WhatsApp mesajı “Ana metinler” sekmesinden dört dil için ayrı ayrı değiştirilebilir.</p>`;
  }

  function renderGroupTraining() {
    const group = state.groupTraining || {};
    const classTypes = Array.isArray(group.classTypes) ? group.classTypes.join("\n") : "";
    $("#groupTrainingEditor").innerHTML = `
      <section class="form-section"><h3>Yayın durumu ve ders türleri</h3><div class="field-grid">
        <label class="check wide"><input type="checkbox" data-kind="group-training" data-field="active" ${group.active !== false ? "checked" : ""}> Grup dersleri bölümü ve hızlı bağlantısı yayında</label>
        <label class="field wide"><span>Ders türleri — her satıra bir ders</span><textarea rows="4" data-kind="group-training" data-field="classTypes" data-array="true">${safe(classTypes)}</textarea></label>
      </div></section>
      <section class="form-section"><h3>Üye fiyatı</h3><div class="field-grid">
        <label class="field"><span>TL fiyatı</span><input type="text" data-kind="group-training" data-field="memberTry" value="${safe(group.memberTry)}" placeholder="₺600"></label>
        <label class="field"><span>GBP fiyatı</span><input type="text" data-kind="group-training" data-field="memberGbp" value="${safe(group.memberGbp)}" placeholder="£10"></label>
      </div></section>
      <section class="form-section"><h3>Dışarıdan katılım fiyatı</h3><div class="field-grid">
        <label class="field"><span>TL fiyatı</span><input type="text" data-kind="group-training" data-field="nonMemberTry" value="${safe(group.nonMemberTry)}" placeholder="₺1.200"></label>
        <label class="field"><span>GBP fiyatı</span><input type="text" data-kind="group-training" data-field="nonMemberGbp" value="${safe(group.nonMemberGbp)}" placeholder="£20"></label>
      </div></section>
      <p class="upload-message">Bölüm başlığı, açıklamalar ve WhatsApp mesajı “Ana metinler” sekmesinden dört dil için ayrı ayrı değiştirilebilir.</p>`;
  }

  function renderMenu() {
    $("#menuEditor").innerHTML = (state.menu || []).map((category, categoryIndex) => `
      <details class="category-card" open>
        <summary class="category-summary"><span class="menu-symbol">${safe(category.icon || "•")}</span><h3>${safe((category.names || {}).tr || `Kategori ${categoryIndex + 1}`)}</h3><span>${(category.items || []).length} ürün</span></summary>
        <div class="category-body">
          <div class="category-fields field-grid">
            <label class="field"><span>Simge</span><input type="text" maxlength="3" data-kind="menu-category" data-category="${categoryIndex}" data-field="icon" value="${safe(category.icon)}"></label>
            <label class="check"><input type="checkbox" data-kind="menu-category" data-category="${categoryIndex}" data-field="active" ${category.active !== false ? "checked" : ""}> Kategori yayında</label>
            ${LANGUAGES.map(language => `<label class="field"><span>Kategori · ${language.name}</span><input type="text" data-kind="menu-category" data-category="${categoryIndex}" data-field="names" data-lang="${language.code}" value="${safe((category.names || {})[language.code])}"></label>`).join("")}
            ${LANGUAGES.map(language => `<label class="field"><span>Alt başlık · ${language.name}</span><input type="text" data-kind="menu-category" data-category="${categoryIndex}" data-field="subtitles" data-lang="${language.code}" value="${safe((category.subtitles || {})[language.code])}"></label>`).join("")}
          </div>
          <div class="items-editor">${(category.items || []).map((item, itemIndex) => `
            <article class="menu-item">
              <div class="item-head"><h4>${safe((item.names || {}).tr || `Ürün ${itemIndex + 1}`)}</h4><div class="item-actions"><label class="check"><input type="checkbox" data-kind="menu-item" data-category="${categoryIndex}" data-item="${itemIndex}" data-field="active" ${item.active !== false ? "checked" : ""}> Yayında</label><button class="mini-button danger" type="button" data-action="delete-item" data-category="${categoryIndex}" data-item="${itemIndex}">Sil</button></div></div>
              <div class="field-grid">
                <label class="field"><span>Fiyat</span><input type="text" data-kind="menu-item" data-category="${categoryIndex}" data-item="${itemIndex}" data-field="price" value="${safe(item.price)}" placeholder="₺0"></label>
                ${LANGUAGES.map(language => `<label class="field"><span>Ürün adı · ${language.name}</span><input type="text" data-kind="menu-item" data-category="${categoryIndex}" data-item="${itemIndex}" data-field="names" data-lang="${language.code}" value="${safe((item.names || {})[language.code])}"></label>`).join("")}
              </div>
            </article>`).join("")}</div>
          <div class="add-row"><button class="button secondary" type="button" data-action="add-item" data-category="${categoryIndex}">+ Ürün ekle</button> <button class="button danger" type="button" data-action="delete-category" data-category="${categoryIndex}">Kategoriyi sil</button></div>
        </div>
      </details>`).join("") || `<p>Henüz menü kategorisi yok.</p>`;
  }

  function renderContact() {
    const contact = state.contact || {};
    $("#contactEditor").innerHTML = `
      <section class="form-section"><h3>Telefon ve e-posta</h3><div class="field-grid">
        <label class="field"><span>Görünen telefon</span><input data-kind="contact" data-field="phoneDisplay" type="text" value="${safe(contact.phoneDisplay)}"></label>
        <label class="field"><span>Arama bağlantısı</span><input data-kind="contact" data-field="phoneLink" type="text" value="${safe(contact.phoneLink)}" placeholder="+905…"></label>
        <label class="field"><span>WhatsApp numarası</span><input data-kind="contact" data-field="whatsapp" type="text" value="${safe(contact.whatsapp)}" placeholder="905…"></label>
        <label class="field"><span>E-posta</span><input data-kind="contact" data-field="email" type="email" value="${safe(contact.email)}"></label>
      </div></section>
      <section class="form-section"><h3>Bağlantılar</h3><div class="field-grid">
        <label class="field wide"><span>Instagram</span><input data-kind="contact" data-field="instagramUrl" type="url" value="${safe(contact.instagramUrl)}"></label>
        <label class="field wide"><span>Google Maps</span><input data-kind="contact" data-field="mapsUrl" type="url" value="${safe(contact.mapsUrl)}"></label>
        <label class="field wide"><span>Google yorumları</span><input data-kind="contact" data-field="reviewsUrl" type="url" value="${safe(contact.reviewsUrl)}"></label>
      </div></section>
      <section class="form-section"><h3>Adresler</h3><div class="field-grid">${LANGUAGES.map(language => `<label class="field"><span>${language.name}</span><textarea rows="2" data-kind="contact-address" data-lang="${language.code}">${safe((contact.addresses || {})[language.code])}</textarea></label>`).join("")}</div></section>
      <section class="form-section"><h3>Çalışma saatleri</h3><div class="field-grid">
        <label class="field"><span>Pazartesi – Cuma</span><input data-kind="contact-hours" data-field="weekdays" type="text" value="${safe((contact.hours || {}).weekdays)}"></label>
        <label class="field"><span>Cumartesi</span><input data-kind="contact-hours" data-field="saturday" type="text" value="${safe((contact.hours || {}).saturday)}"></label>
        <label class="field"><span>Pazar</span><input data-kind="contact-hours" data-field="sunday" type="text" value="${safe((contact.hours || {}).sunday)}"></label>
      </div></section>`;
  }

  function renderTexts() {
    $("#textsEditor").innerHTML = LANGUAGES.map(language => `
      <article class="language-card"><h3>${language.name}</h3><div class="field-grid">
        ${TEXT_FIELDS.map(field => {
          const stored = ((state.translations || {})[language.code] || {})[field.key];
          const value = field.array && Array.isArray(stored) ? stored.join("\n") : stored;
          return `<label class="field ${field.rows > 1 ? "wide" : ""}"><span>${field.label}</span>${field.rows > 1 ? `<textarea rows="${field.rows}" data-kind="translation" data-lang="${language.code}" data-field="${field.key}" ${field.array ? "data-array=\"true\"" : ""}>${safe(value)}</textarea>` : `<input type="text" data-kind="translation" data-lang="${language.code}" data-field="${field.key}" value="${safe(value)}">`}</label>`;
        }).join("")}
      </div></article>`).join("");
  }

  function normaliseTypographyValue(field, value) {
    const fallback = TYPOGRAPHY_PRESETS.medium[field.key];
    const number = Number(value);
    return Math.round(Math.min(field.max, Math.max(field.min, Number.isFinite(number) ? number : fallback)));
  }

  function renderTypography() {
    const typography = ((state.design || {}).typography) || {};
    const groups = [
      { device: "mobile", title: "Mobil ekran", description: "Telefonlarda görünen yazı boyutları" },
      { device: "desktop", title: "Bilgisayar ekranı", description: "Tablet ve geniş ekranlarda görünen yazı boyutları" }
    ];
    $("#typographyEditor").innerHTML = groups.map(group => `
      <article class="typography-card">
        <h3>${group.title}</h3>
        <p>${group.description}</p>
        <div class="size-controls">${TYPOGRAPHY_FIELDS.filter(field => field.device === group.device).map(field => {
          const value = normaliseTypographyValue(field, typography[field.key]);
          return `<label class="size-control"><span class="size-control-head"><span>${field.label}</span><output class="size-value" data-size-output="${field.key}">${value} px</output></span><input type="range" min="${field.min}" max="${field.max}" step="1" value="${value}" data-kind="typography" data-field="${field.key}" aria-label="${field.label}"><small>${field.min}–${field.max} px güvenli aralık</small></label>`;
        }).join("")}</div>
      </article>`).join("");
  }

  function renderHero() {
    const url = (state.hero || {}).imageUrl || "shape-hero.png";
    $("#heroUrl").value = url;
    $("#heroPreview").src = resolveHeroUrl(url);
  }

  function resolveBackgroundUrl(value) {
    return resolveHeroUrl(value || (state.hero || {}).imageUrl || "shape-hero.png");
  }

  function renderBackgrounds() {
    const backgrounds = state.backgrounds || {};
    $("#backgroundsEditor").innerHTML = BACKGROUND_SECTIONS.map(section => {
      const customImage = String(backgrounds[section.key] || "").trim();
      return `<article class="background-edit-card">
        <div class="background-preview"><img src="${safe(resolveBackgroundUrl(customImage))}" alt="${safe(section.label)} arka plan önizlemesi"></div>
        <div class="background-edit-body">
          <div><p class="eyebrow">BÖLÜM FOTOĞRAFI</p><h3>${safe(section.label)}</h3><small>${customImage ? "Bu bölüm için özel fotoğraf kullanılıyor." : "Kapak fotoğrafı kullanılıyor."}</small></div>
          <label class="button primary background-upload">Fotoğraf seç<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" data-background-file data-section="${section.key}"></label>
          <button class="button secondary" type="button" data-action="reset-background" data-section="${section.key}" ${customImage ? "" : "disabled"}>Kapak fotoğrafını kullan</button>
          <p class="upload-message" data-background-message="${section.key}" aria-live="polite"></p>
        </div>
      </article>`;
    }).join("");
  }

  function resolveHeroUrl(url) {
    if (/^https?:\/\//i.test(url || "")) return url;
    return new URL(`../${String(url || "shape-hero.png").replace(/^\.\//, "")}`, window.location.href).href;
  }

  function renderAll() {
    renderMembership();
    renderCoaching();
    renderOnlineCoaching();
    renderGroupTraining();
    renderMenu();
    renderContact();
    renderTexts();
    renderTypography();
    renderHero();
    renderBackgrounds();
  }

  function setNestedInput(target) {
    const kind = target.dataset.kind;
    if (!kind) return;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const index = Number(target.dataset.index);
    const categoryIndex = Number(target.dataset.category);
    const itemIndex = Number(target.dataset.item);
    const field = target.dataset.field;
    const language = target.dataset.lang;

    if (kind === "membership" && state.membership[index]) {
      if (field === "labels") state.membership[index].labels[language] = value;
      else state.membership[index][field] = value;
    } else if (kind === "coaching" && state.coaching[index]) {
      state.coaching[index][field] = ["sessions", "perWeek"].includes(field) ? Math.max(0, Number(value) || 0) : value;
    } else if (kind === "online-coaching") {
      state.onlineCoaching = state.onlineCoaching || {};
      state.onlineCoaching[field] = value;
    } else if (kind === "group-training") {
      state.groupTraining = state.groupTraining || {};
      state.groupTraining[field] = target.dataset.array === "true" ? String(value).split("\n").map(line => line.trim()).filter(Boolean) : value;
    } else if (kind === "menu-category" && state.menu[categoryIndex]) {
      if (["names", "subtitles"].includes(field)) state.menu[categoryIndex][field][language] = value;
      else state.menu[categoryIndex][field] = value;
    } else if (kind === "menu-item" && state.menu[categoryIndex] && state.menu[categoryIndex].items[itemIndex]) {
      if (field === "names") state.menu[categoryIndex].items[itemIndex].names[language] = value;
      else state.menu[categoryIndex].items[itemIndex][field] = value;
    } else if (kind === "contact") {
      state.contact[field] = value;
    } else if (kind === "contact-address") {
      state.contact.addresses[language] = value;
    } else if (kind === "contact-hours") {
      state.contact.hours[field] = value;
    } else if (kind === "translation") {
      state.translations[language][field] = target.dataset.array === "true" ? String(value).split("\n").map(line => line.trim()).filter(Boolean) : value;
    } else if (kind === "typography") {
      const definition = TYPOGRAPHY_FIELDS.find(item => item.key === field);
      if (!definition) return;
      state.design = state.design || {};
      state.design.typography = state.design.typography || {};
      const nextValue = normaliseTypographyValue(definition, value);
      state.design.typography[field] = nextValue;
      target.value = String(nextValue);
      const output = $(`[data-size-output="${field}"]`);
      if (output) output.textContent = `${nextValue} px`;
    } else if (kind === "hero") {
      state.hero.imageUrl = value;
      $("#heroPreview").src = resolveHeroUrl(value);
    } else return;
    markDirty();
  }

  function handleAction(button) {
    const action = button.dataset.action;
    if (!action) return;
    if (action === "typography-preset" && TYPOGRAPHY_PRESETS[button.dataset.preset]) {
      state.design = state.design || {};
      state.design.typography = clone(TYPOGRAPHY_PRESETS[button.dataset.preset]);
      renderTypography();
    }
    if (action === "reset-typography") {
      state.design = state.design || {};
      state.design.typography = clone(((defaults.design || {}).typography) || TYPOGRAPHY_PRESETS.medium);
      renderTypography();
    }
    if (action === "add-coaching") {
      state.coaching.push({ id: id("coaching"), active: true, featured: false, sessions: 8, perWeek: 2, price: "₺0" });
      renderCoaching();
    }
    if (action === "delete-coaching" && window.confirm("Bu koçluk paketi silinsin mi?")) {
      state.coaching.splice(Number(button.dataset.index), 1);
      renderCoaching();
    }
    if (action === "add-category") {
      state.menu.push({ id: id("category"), icon: "•", active: true, names: { en: "NEW CATEGORY", tr: "YENİ KATEGORİ", de: "NEUE KATEGORIE", ru: "НОВАЯ КАТЕГОРИЯ" }, subtitles: { en: "", tr: "", de: "", ru: "" }, items: [] });
      renderMenu();
    }
    if (action === "delete-category" && window.confirm("Bu kategori ve içindeki tüm ürünler silinsin mi?")) {
      state.menu.splice(Number(button.dataset.category), 1);
      renderMenu();
    }
    if (action === "add-item") {
      const category = state.menu[Number(button.dataset.category)];
      category.items.push({ id: id("item"), active: true, price: "₺0", names: { en: "New product", tr: "Yeni ürün", de: "Neues Produkt", ru: "Новый продукт" } });
      renderMenu();
    }
    if (action === "delete-item" && window.confirm("Bu ürün silinsin mi?")) {
      state.menu[Number(button.dataset.category)].items.splice(Number(button.dataset.item), 1);
      renderMenu();
    }
    if (action === "reset-background") {
      state.backgrounds = state.backgrounds || {};
      state.backgrounds[button.dataset.section] = "";
      renderBackgrounds();
    }
    markDirty();
  }

  async function saveConfig() {
    if (saving || !client || !currentUser) return;
    toggleBusy(true);
    setStatus("Değişiklikler yayınlanıyor…", "dirty");
    const payload = { id: 1, content: state, updated_by: currentUser.id };
    const { data, error } = await client.from("site_config").upsert(payload, { onConflict: "id" }).select("updated_at").single();
    toggleBusy(false);
    if (error) {
      console.error(error);
      setStatus(`Yayınlama başarısız: ${error.message}`, "error");
      return;
    }
    dirty = false;
    setStatus("Tüm değişiklikler yayında.", "ready", data && data.updated_at);
  }

  async function uploadHero(file) {
    const message = $("#uploadMessage");
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|avif)$/.test(file.type)) {
      message.textContent = "Lütfen JPG, PNG, WebP veya AVIF seçin.";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      message.textContent = "Görsel 5 MB'dan büyük olamaz.";
      return;
    }
    message.style.color = "var(--muted)";
    message.textContent = "Görsel yükleniyor…";
    const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
    const path = `hero/shape-${Date.now()}.${extension}`;
    const { error } = await client.storage.from("site-assets").upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
    if (error) {
      console.error(error);
      message.style.color = "var(--bad)";
      message.textContent = `Yükleme başarısız: ${error.message}`;
      return;
    }
    const result = client.storage.from("site-assets").getPublicUrl(path);
    state.hero.imageUrl = result.data.publicUrl;
    renderHero();
    markDirty();
    message.style.color = "var(--good)";
    message.textContent = "Görsel yüklendi. Değişiklikler yayınlanıyor…";
    await saveConfig();
    message.textContent = dirty ? "Görsel yüklendi; yayınlama sırasında hata oluştu." : "Yeni kapak görseli yayında.";
  }

  function setBackgroundMessage(section, message, type) {
    const element = $(`[data-background-message="${section}"]`);
    if (!element) return;
    element.textContent = message || "";
    element.style.color = type === "success" ? "var(--good)" : type === "error" ? "var(--bad)" : "var(--muted)";
  }

  async function uploadBackground(file, section) {
    if (!file || !BACKGROUND_SECTIONS.some(item => item.key === section)) return;
    if (!/^image\/(jpeg|png|webp|avif)$/.test(file.type)) {
      setBackgroundMessage(section, "Lütfen JPG, PNG, WebP veya AVIF seçin.", "error");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setBackgroundMessage(section, "Görsel 5 MB'dan büyük olamaz.", "error");
      return;
    }
    setBackgroundMessage(section, "Fotoğraf yükleniyor…");
    const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
    const path = `backgrounds/${section}-${Date.now()}.${extension}`;
    const { error } = await client.storage.from("site-assets").upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
    if (error) {
      console.error(error);
      setBackgroundMessage(section, `Yükleme başarısız: ${error.message}`, "error");
      return;
    }
    const result = client.storage.from("site-assets").getPublicUrl(path);
    state.backgrounds = state.backgrounds || {};
    state.backgrounds[section] = result.data.publicUrl;
    renderBackgrounds();
    markDirty();
    setBackgroundMessage(section, "Fotoğraf yüklendi. Değişiklikler yayınlanıyor…");
    await saveConfig();
    setBackgroundMessage(section, dirty ? "Fotoğraf yüklendi; yayınlama sırasında hata oluştu." : "Yeni bölüm fotoğrafı yayında.", dirty ? "error" : "success");
  }

  async function loadAdmin(user) {
    const { data: adminRow, error: roleError } = await client.from("admin_users").select("user_id,email").eq("user_id", user.id).maybeSingle();
    if (roleError || !adminRow) {
      await client.auth.signOut();
      setLoginMessage("Bu hesap yönetici olarak yetkilendirilmemiş.");
      return;
    }
    currentUser = user;
    $("#adminIdentity").textContent = adminRow.email;
    const { data, error } = await client.from("site_config").select("content,updated_at").eq("id", 1).single();
    if (error) {
      setLoginMessage(`Site verileri alınamadı: ${error.message}`);
      await client.auth.signOut();
      return;
    }
    state = mergeConfig(defaults, data.content || {});
    dirty = false;
    renderAll();
    $("#loginView").hidden = true;
    $("#adminView").hidden = false;
    setStatus("Panel hazır. Değişikliklerinizi yapabilirsiniz.", "ready", data.updated_at);
  }

  async function handleLogin(event) {
    event.preventDefault();
    setLoginMessage("");
    const button = $("#loginButton");
    button.disabled = true;
    button.textContent = "Kontrol ediliyor…";
    const email = $("#loginEmail").value.trim();
    const password = $("#loginPassword").value;
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    button.disabled = false;
    button.textContent = "Giriş yap";
    if (error) {
      setLoginMessage("E-posta veya şifre hatalı.");
      return;
    }
    await loadAdmin(data.user);
  }

  async function logout() {
    if (dirty && !window.confirm("Yayınlanmamış değişiklikler var. Yine de çıkış yapılsın mı?")) return;
    await client.auth.signOut();
    currentUser = null;
    state = clone(defaults);
    $("#adminView").hidden = true;
    $("#loginView").hidden = false;
    $("#loginPassword").value = "";
    setLoginMessage("Çıkış yapıldı.", "success");
  }

  function activateTab(name) {
    $$(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === name));
    $$("[data-panel]").forEach(panel => {
      const active = panel.dataset.panel === name;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    try { localStorage.setItem("shape-admin-tab", name); } catch (error) {}
  }

  async function init() {
    if (!config.url || !config.publishableKey || !window.supabase) {
      setLoginMessage("Supabase bağlantı ayarları bulunamadı.");
      return;
    }
    client = window.supabase.createClient(config.url, config.publishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
    });

    $("#loginForm").addEventListener("submit", handleLogin);
    $("#logoutButton").addEventListener("click", logout);
    $("#saveButton").addEventListener("click", saveConfig);
    $("#mobileSaveButton").addEventListener("click", saveConfig);
    $("#workspace").addEventListener("input", event => setNestedInput(event.target));
    $("#workspace").addEventListener("click", event => {
      const button = event.target.closest("[data-action]");
      if (button) handleAction(button);
    });
    $("#workspace").addEventListener("change", event => {
      const input = event.target.closest("[data-background-file]");
      if (input) uploadBackground(input.files[0], input.dataset.section);
    });
    $$(".tab").forEach(tab => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
    $("#heroFile").addEventListener("change", event => uploadHero(event.target.files[0]));
    $("#restoreHeroButton").addEventListener("click", () => {
      state.hero.imageUrl = "shape-hero.png";
      renderHero();
      markDirty();
      $("#uploadMessage").textContent = "Orijinal görsel seçildi. Yayınlamak için kaydedin.";
    });
    window.addEventListener("beforeunload", event => {
      if (!dirty) return;
      event.preventDefault();
      event.returnValue = "";
    });

    try {
      const savedTab = localStorage.getItem("shape-admin-tab");
      if (savedTab && $(`[data-panel="${savedTab}"]`)) activateTab(savedTab);
    } catch (error) {}

    const { data } = await client.auth.getSession();
    if (data.session && data.session.user) await loadAdmin(data.session.user);
  }

  init().catch(error => {
    console.error(error);
    setLoginMessage("Panel başlatılamadı. Sayfayı yenileyip tekrar deneyin.");
  });
})();
