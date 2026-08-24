# Shape Training Club · Kalkan — V15

`https://shapetrainingclub.net/` için hazırlanmış, GitHub Pages üzerinde çalışan ve Supabase destekli çok dilli web sitesi.

## Canlı adresler

- Ana site: `https://shapetrainingclub.net/`
- Yönetim paneli: `https://shapetrainingclub.net/admin/`
- Site haritası: `https://shapetrainingclub.net/sitemap.xml`

## Bu sürümde tamamlananlar

- Üst bölüme, seçilen dile göre değişen ve mobilde kesintisiz kayan salon kuralları şeridi eklendi.
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
- `admin/`: Güvenli yönetim paneli
- `site-defaults.js`: İlk açılış ve bağlantı hataları için yedek içerik
- `supabase-config.js`: Tarayıcıda kullanılabilen Supabase proje bağlantısı
- `shape-hero.png`, `shape-hero-mobile.webp`: Masaüstü ve mobil kapak görselleri
- `shape-og.png`: WhatsApp ve sosyal medya paylaşım görseli
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
5. `https://shapetrainingclub.net/admin/` adresinden giriş yapın ve küçük bir metin değişikliğini kaydedip ana sayfada doğrulayın.
6. Yönetim panelindeki bölüm fotoğraflarını ve telefon kadrajlarını kontrol edin.

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
