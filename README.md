## Bambu-inspired redesign (draft branch)

This is an original Shape Training Club redesign inspired by the calm, photo-led editorial structure of Bambu Fitness Bali. No Bambu images, text or brand assets are copied.

- New home: large real Shape hero photo, short introduction, six experience cards, community/gallery link and visit summary.
- Light cream / sage-green palette, simple typography, spacious sections and a horizontal mobile menu.
- Separate navigable views built on the existing GitHub Pages static site: `/`, `/?page=club`, `/?page=membership`, `/?page=training`, `/?page=bar`, `/?page=visit`.
- `shape-kids/`, `gallery.html`, `admin/`, currency conversion, Supabase prices, group-training and online-coaching flags remain in place.
- The original pricing/render engine still runs even when a section is not displayed in the current view; view-only CSS controls visibility.
- CMS-managed hero and section photos are reused; the admin console's content and mobile crop controls are left unchanged.
- English, Turkish, German and Russian labels added for the new editorial areas.

### Pre-release QA

1. Open each of the six page views on phone and desktop, verifying menus, layouts and all internal links.
2. Switch EN/TR/DE/RU on each view; refresh and confirm language persists.
3. Compare membership, PT, classes and Shape Bar prices with admin/Supabase records, including TRY/EUR/USD/GBP.
4. Change a harmless hero/crop setting in admin to verify the public rendering, then restore it.
5. Test WhatsApp, maps, Google Reviews, gallery and Shape Kids links.
6. Check page speed, contrast, keyboard focus, and responsive behavior at 320, 375, 768, 1024 and 1440px.
7. Merge only after visual and functional checks; main site remains unchanged until then.

### Files in this redesign

- `bambu-redesign.css`: editorial styling and responsive layout overrides
- `bambu-redesign.js`: language strings, navigation state, metadata
- `index.html`: new informational sections and a route view switch; pricing/contact data IDs preserved

---
## V25 — Instagram landing page
- Instagram bio trafiği için `https://shapetrainingclub.net/instagram/` mobil öncelikli hızlı erişim sayfası eklendi.
- Üyelik, WhatsApp, grup dersleri, personal coaching, Shape Bar, konum ve galeri tek ekranda toplandı.
- İngilizce, Türkçe, Almanca ve Rusça dil seçenekleri eklendi.
- Instagram kaynaklı bağlantılara UTM parametreleri eklendi.
- Yeni sayfa sitemap.xml içine eklendi.

## V23 — Production hardening
- Supabase JavaScript bağımlılığı bilinen kararlı `2.111.0` sürümüne sabitlendi.
- Yerel CSS/JS cache sürümleri V23 olarak güncellendi.
- Aktif Open Graph PNG dosyası görünüm değiştirilmeden yeniden sıkıştırıldı.
- GitHub Pages için `.nojekyll` ve markalı `404.html` eklendi.
- Her push'ta çalışan yerel üretim denetimi ve günlük canlı site/TLS kontrolü eklendi.
- Domain, GitHub Pages ve Supabase için `OPERATIONS-CHECKLIST.md` eklendi.
- Supabase RLS için çalıştırılmadan önce incelenmesi gereken `supabase-rls-template.sql` eklendi.

## V22
- Google Reviews bağlantısı doğrudan Google yorum yazma ekranına yönlendirildi.
- Eski Supabase Google arama bağlantısı otomatik olarak yeni doğrudan yorum bağlantısına dönüştürülür.

# Shape Training Club · Kalkan — V19

`https://shapetrainingclub.net/` için hazırlanmış, GitHub Pages üzerinde çalışan ve Supabase destekli çok dilli web sitesi.

## Canlı adresler

- Ana site: `https://shapetrainingclub.net/`
- Fotoğraf galerisi: `https://shapetrainingclub.net/gallery.html`
- Yönetim paneli: `https://shapetrainingclub.net/admin/`
- Site haritası: `https://shapetrainingclub.net/sitemap.xml`

## Bu sürümde tamamlananlar

- Kayan duyuru şeridi yalnızca dört dilde “More than a gym. A community in motion.” topluluk mesajını gösterir; görünürlük ve kontrast güçlendirildi.
- Yeni topluluk mesajı yönetim panelindeki dört dil metin alanlarından değiştirilebilir hâle getirildi.
- Kayan şerit daha güçlü kontrast, parlak sınır, vurgulu ikon ve topluluk mesajına özel altın-mavi kart görünümüyle belirginleştirildi.
- WhatsApp ve sosyal medya bağlantı önizlemesi, gerçek salon fotoğrafı ve yeni marka metinleriyle yenilendi.
- Paylaşım başlığı “Where Performance Meets Community | Shape Training Club Kalkan” olarak güncellendi.
- Paylaşım açıklaması “Premium training, personal coaching and a welcoming community in central Kalkan.” olarak güncellendi.
- Hızlı Erişim bölümüne, Google Reviews düğmesiyle orantılı yeni “Fotoğraf galerisi” düğmesi eklendi.
- Ayrı, mobil öncelikli ve dört dilde çalışan `gallery.html` sayfası eklendi.
- Galeriye başlangıç olarak Kadınlar tuvaleti, Erkekler tuvaleti, HYROX alanı, Serbest ağırlık alanı ve Koşu bandı alanı kategorileri eklendi.
- Yönetim paneline kategori ekleme, kaldırma, dört dilde adlandırma, yayından kaldırma ve çoklu fotoğraf yükleme araçları eklendi.
- Galeri fotoğrafları yükleme sırasında WebP biçimine ve mobil kullanıma uygun boyuta otomatik olarak hazırlanır.
- Galeri fotoğrafları büyütülebilir; önceki/sonraki fotoğraf geçişi ve klavye kontrolü bulunur.
- Üst logoya küçük “TRAINING CLUB” ibaresi eklendi; mobil başlık düzeni korunuyor.
- Fotoğraf üzerindeki küçük açıklamalar, kur bilgileri ve ikincil metinler boyutları değiştirilmeden daha okunaklı hâle getirildi.
- Hızlı Erişim bölümüne dört dilde çalışan, yönetim panelindeki Google yorum bağlantısını kullanan tam genişlikte Google Reviews düğmesi eklendi.
- Üst bölüme, seçilen dile göre değişen ve mobilde kesintisiz kayan salon kuralları şeridi eklendi; iki uyarı yönetim panelinden istenildiği zaman değiştirilebilir.
- Resmî alan adı tüm sosyal paylaşım ve arama motoru bilgilerinde kullanıldı.
- `CNAME` dosyası eklendi; GitHub Pages alan adı ayarı depoda korunuyor.
- `robots.txt` ve `sitemap.xml` eklendi.
- Yönetim paneli arama motorlarından gizlendi.
- Open Graph, Twitter kartı, canonical adres ve işletme yapılandırılmış verileri güncellendi.
- Mobil ve masaüstü fotoğraf kadrajları yönetim panelinden ayrı ayrı ayarlanabilir.
- Üyelik, kişisel koçluk, online koçluk, grup dersleri ve Shape Bar içerikleri dört dilde yönetilebilir.
- TL / EUR / USD / GBP fiyat gösterimi ve bağlantı kesildiğinde güvenli TL yedeği korunur.

## Dosyalar

- `index.html`: Ziyaretçilerin gördüğü ana site
- `gallery.html`: Kategorili ve çok dilli fotoğraf galerisi
- `admin/`: Güvenli yönetim paneli
- `site-defaults.js`: İlk açılış ve bağlantı hataları için yedek içerik
- `supabase-config.js`: Tarayıcıda kullanılabilen Supabase proje bağlantısı
- `shape-hero.png`, `shape-hero-mobile.webp`: Masaüstü ve mobil kapak görselleri
- `shape-og-v2.png`: Güncel WhatsApp ve sosyal medya paylaşım görseli
- `shape-og.png`: Önceki paylaşım görseli; güvenli yedek olarak korunur
- `shape-icon.svg`: Tarayıcı sekmesi simgesi
- `CNAME`: GitHub Pages özel alan adı kaydı
- `robots.txt`, `sitemap.xml`: Arama motoru yayın dosyaları

## GitHub'a yükleme

1. Bu paketi bilgisayarda açın.
2. GitHub deposunda **Add file → Upload files** seçeneğine girin.
3. Paketin içindeki bütün dosya ve klasörleri depo köküne yükleyin. Dıştaki paket klasörünü tek klasör olarak yüklemeyin.
4. Aynı isimli dosyaların değiştirilmesine izin verin; `admin` klasör yapısını koruyun.
5. **Commit changes** düğmesine basın.
6. **Actions** ve **Settings → Pages** bölümlerinde yayın işleminin tamamlanmasını bekleyin.

Önemli: `CNAME` dosyasını silmeyin veya adını değiştirmeyin. İçeriği yalnızca `shapetrainingclub.net` olmalıdır.

## Yükleme sonrası kontrol

1. `https://shapetrainingclub.net/` adresini telefonda gizli sekmede açın.
2. İngilizce, Türkçe, Almanca ve Rusça dil düğmelerini deneyin.
3. TL, EUR, USD ve GBP seçimlerini kontrol edin.
4. WhatsApp, telefon, Instagram, harita ve Google yorum bağlantılarını deneyin.
5. Hızlı Erişim içindeki “Fotoğraf galerisi” düğmesini açın ve beş kategorinin dört dilde değiştiğini kontrol edin.
6. `https://shapetrainingclub.net/admin/` adresinden giriş yapın, galeriye bir deneme fotoğrafı yükleyin ve galeri sayfasında doğrulayın.
7. Yönetim panelindeki bölüm fotoğraflarını ve telefon kadrajlarını kontrol edin.

## Supabase alan adı ayarı

Supabase panelinde **Authentication → URL Configuration** bölümünde:

- Site URL: `https://shapetrainingclub.net`
- Redirect URL: `https://shapetrainingclub.net/admin/**`

Bu ayar, gelecekte şifre yenileme veya e-posta bağlantısı kullanıldığında doğru alan adına dönülmesini sağlar.

## DNS yedeği

Cloudflare kayıtlarının **DNS only** olması gerekir:

- `A` — `@` → `185.199.108.153`
- `A` — `@` → `185.199.109.153`
- `A` — `@` → `185.199.110.153`
- `A` — `@` → `185.199.111.153`
- `CNAME` — `www` → `alperenklkn123.github.io`

GitHub doğrulama için eklenen `_github-pages-challenge-alperenklkn123` TXT kaydını da silmeyin.

## Güvenlik

- GitHub hesabında benzersiz ve güçlü bir parola kullanın; kırmızı parola uyarısını kapatmadan önce parolayı değiştirin.
- GitHub ve Cloudflare hesaplarında iki aşamalı doğrulamayı açın.
- Cloudflare otomatik yenilemeyi açık tutun ve ödeme kartının süresini yılda bir kontrol edin.
- `supabase-config.js` yalnızca tarayıcı için tasarlanmış publishable anahtarı içerir. Supabase `secret`, `service_role`, veritabanı şifresi veya yönetici şifresini GitHub'a yüklemeyin.

## Sonraki adım

Canlı mobil kontrol tamamlandıktan sonra masa üstü QR tabelası yalnızca `https://shapetrainingclub.net/` adresine göre hazırlanmalıdır.


## V25 CLS + Performance Fix

- Hero title no longer changes font size after first paint.
- Async FX updates no longer rebuild the entire page.
- Public pages fetch `site_config` through Supabase REST instead of loading the full Supabase JS SDK.
- Site config and hero URL are cached locally to reduce repeat-visit layout shifts and late hero loading.
- Hero assets are preloaded with high priority.
- Remote config updates rebuild layout only when layout/content data actually changed; media-only updates are applied without reconstructing page sections.
- Hero/contact action and quick-access text slots have reserved space to reduce CLS.
- Cloudflare Web Analytics stays enabled and its script is placed inside the document body.

After deployment, compare Cloudflare Web Analytics over new traffic; old CLS samples remain in the selected historical window until they age out.
