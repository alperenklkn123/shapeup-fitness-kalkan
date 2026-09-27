(function () {
  "use strict";

  const $ = selector => document.querySelector(selector);
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  const hasRecovery = hash.get("type") === "recovery";
  const hasCallbackError = hash.has("error") || hash.has("error_code") || query.has("error") || query.has("error_code");
  const hasTokens = Boolean(hash.get("access_token") && hash.get("refresh_token"));
  const cooldownKey = "shape-password-reset-requested-at";
  let client;
  let verifiedUserId = null;
  let pending = false;
  let cooldownTimer;

  function message(text, kind) {
    $("#recoveryMessage").textContent = text;
    $("#recoveryMessage").dataset.kind = kind || "info";
  }

  function clearCallback() {
    // Never leave recovery tokens in the address bar or browser history entry.
    window.history.replaceState(null, "", window.location.pathname);
  }

  function requestView(text, kind) {
    verifiedUserId = null;
    $("#passwordForm").hidden = true;
    $("#requestForm").hidden = false;
    $("#recoveryTitle").textContent = "Şifrenizi yenileyin";
    $("#recoveryDescription").textContent = "Yönetici e-postanızı yazın. Size yeni şifre belirleyebileceğiniz bir bağlantı gönderelim.";
    message(text || "", kind);
    refreshCooldown();
  }

  function expiredView() {
    requestView("Bağlantı geçersiz, kullanılmış veya süresi dolmuş olabilir. Aşağıdan yeni bağlantı isteyin ve en son gelen e-postayı açın.", "error");
  }

  function authError(error) {
    const code = String(error && error.code || "");
    const detail = String(error && error.message || "");
    if (error && error.status === 429 || /rate_limit|over_email_send|over_request_rate/.test(code)) {
      return "E-posta gönderim sınırına ulaşıldı. Bir süre bekleyip tekrar deneyin; düğmeye art arda basmayın.";
    }
    if (code === "same_password" || /different from the old password/i.test(detail)) {
      return "Yeni şifreniz önceki şifrenizden farklı olmalıdır.";
    }
    if (code === "weak_password" || /password should|password must|password.*weak|password.*leak/i.test(detail)) {
      return "Bu şifre hesabın güvenlik şartlarını karşılamıyor. Daha uzun ve benzersiz bir şifre deneyin.";
    }
    if (/session|token|expired|refresh/.test(code) || error && error.status === 401) {
      return "Şifre yenileme oturumunuzun süresi dolmuş. Giriş ekranına dönüp yeni bağlantı isteyin.";
    }
    return "İşlem tamamlanamadı. İnternet bağlantınızı kontrol edip tekrar deneyin.";
  }

  function refreshCooldown() {
    window.clearTimeout(cooldownTimer);
    let requestedAt = 0;
    try { requestedAt = Number(sessionStorage.getItem(cooldownKey)) || 0; } catch (_) {}
    const seconds = Math.max(0, Math.ceil((requestedAt + 60000 - Date.now()) / 1000));
    $("#requestButton").disabled = pending || seconds > 0;
    $("#requestButton").textContent = seconds > 0 ? "Tekrar gönder (" + seconds + " sn)" : "Şifre yenileme bağlantısı gönder";
    if (seconds > 0) cooldownTimer = window.setTimeout(refreshCooldown, 1000);
  }

  function startCooldown() {
    try { sessionStorage.setItem(cooldownKey, String(Date.now())); } catch (_) {}
  }

  async function sendRecovery(event) {
    event.preventDefault();
    if (pending || $("#requestButton").disabled || !$("#requestForm").reportValidity()) return;
    pending = true;
    $("#requestButton").disabled = true;
    $("#requestButton").textContent = "Gönderiliyor…";
    message("");
    try {
      const redirectTo = new URL("reset-password.html", window.location.href).href;
      const { error } = await client.auth.resetPasswordForEmail($("#recoveryEmail").value.trim(), { redirectTo });
      if (error) {
        if (error.status === 429) startCooldown();
        message(authError(error), "error");
        return;
      }
      startCooldown();
      message("Bu e-posta kayıtlıysa şifre yenileme bağlantısı gönderildi. Gelen kutunuzu ve spam klasörünüzü kontrol edin.", "success");
    } catch (error) {
      message(authError(error), "error");
    } finally {
      pending = false;
      refreshCooldown();
    }
  }

  async function savePassword(event) {
    event.preventDefault();
    if (pending || !verifiedUserId || !$("#passwordForm").reportValidity()) return;
    if ($("#newPassword").value !== $("#confirmPassword").value) {
      message("İki şifre aynı olmalıdır. Lütfen tekrar kontrol edin.", "error");
      $("#confirmPassword").focus();
      return;
    }
    pending = true;
    $("#passwordFields").disabled = true;
    $("#updateButton").textContent = "Kaydediliyor…";
    message("");
    try {
      // Verify the recovery session with Auth, not just the decoded URL token.
      const { data: userData, error: userError } = await client.auth.getUser();
      if (userError || !userData.user || userData.user.id !== verifiedUserId) {
        $("#newPassword").value = "";
        $("#confirmPassword").value = "";
        expiredView();
        return;
      }
      const { data, error } = await client.auth.updateUser({ password: $("#newPassword").value });
      if (error) {
        message(authError(error), "error");
        return;
      }
      if (!data.user || data.user.id !== verifiedUserId) {
        message("Şifre değişikliği doğrulanamadı. Lütfen yeni bağlantı isteyin.", "error");
        return;
      }
      $("#newPassword").value = "";
      $("#confirmPassword").value = "";
      verifiedUserId = null;
      // This client uses memory only; never persist a recovery session.
      try { await client.auth.signOut({ scope: "local" }); } catch (_) {}
      $("#passwordForm").hidden = true;
      $("#requestForm").hidden = true;
      $("#successView").hidden = false;
      $("#backToLogin").hidden = true;
      $("#recoveryTitle").textContent = "Şifreniz güncellendi";
      $("#recoveryDescription").textContent = "Şifre yenileme işlemi tamamlandı.";
      message("");
      $("#recoveryTitle").focus();
    } catch (error) {
      message(authError(error), "error");
    } finally {
      pending = false;
      $("#passwordFields").disabled = false;
      $("#updateButton").textContent = "Yeni şifreyi kaydet";
      if (!$("#requestForm").hidden) refreshCooldown();
    }
  }

  async function init() {
    const config = window.SHAPE_SUPABASE || {};
    if (!config.url || !config.publishableKey || !window.supabase) {
      clearCallback();
      message("Şifre yenileme ekranı yüklenemedi. İnternet bağlantınızı kontrol edip sayfayı yeniden açın.", "error");
      $("#recoveryDescription").textContent = "Bağlantı kurulamadı.";
      return;
    }
    if (hasCallbackError || hasRecovery && !hasTokens) {
      clearCallback();
    }
    client = window.supabase.createClient(config.url, config.publishableKey, {
      auth: { flowType: "implicit", persistSession: false, autoRefreshToken: false, detectSessionInUrl: true, storageKey: "shape-password-recovery" }
    });
    $("#requestForm").addEventListener("submit", sendRecovery);
    $("#passwordForm").addEventListener("submit", savePassword);
    $("#showPassword").addEventListener("change", event => {
      const type = event.target.checked ? "text" : "password";
      $("#newPassword").type = type;
      $("#confirmPassword").type = type;
    });
    if (hasCallbackError || hasRecovery && !hasTokens) {
      expiredView();
      return;
    }
    if (!hasRecovery) {
      clearCallback();
      requestView();
      return;
    }
    try {
      const { data: sessionData, error: sessionError } = await client.auth.getSession();
      clearCallback();
      if (sessionError || !sessionData.session) { expiredView(); return; }
      const { data, error } = await client.auth.getUser();
      if (error || !data.user) { expiredView(); return; }
      verifiedUserId = data.user.id;
      $("#recoveryTitle").textContent = "Yeni şifrenizi belirleyin";
      $("#recoveryDescription").textContent = "Yeni şifrenizi iki kez yazıp kaydedin.";
      $("#recoveryAccount").textContent = data.user.email || "";
      $("#requestForm").hidden = true;
      $("#passwordForm").hidden = false;
      message("");
      $("#newPassword").focus();
    } catch (_) {
      clearCallback();
      expiredView();
    }
  }

  init().catch(function () {
    clearCallback();
    message("Şifre yenileme ekranı açılamadı. Giriş ekranından yeniden deneyin.", "error");
  });
})();
