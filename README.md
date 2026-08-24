# Shape Training Club · Kalkan

GitHub Pages üzerinde çalışan, Supabase destekli çok dilli web sitesi ve güvenli yönetim paneli.

## Dosyalar

- `index.html`: Ziyaretçilerin gördüğü ana site
- `admin/`: Yönetim paneli
- `site-defaults.js`: İlk açılış ve bağlantı hataları için yedek içerik
- `supabase-config.js`: Tarayıcıda kullanılabilen Supabase proje bağlantısı
- `shape-hero.png`, `shape-hero-mobile.webp` ve `shape-og.png`: Masaüstü, mobil ve sosyal paylaşım görselleri

Mobil giriş alanı tek, kısa bir başlık ve doğrudan WhatsApp'a açılan iletişim düğmesi kullanır. Kapak başlığı, açıklaması ve düğme metni yönetim panelindeki **Ana sayfa metinleri** bölümünden dört dil için ayrı ayrı değiştirilebilir.

Yönetim panelindeki **Yazı boyutları** sekmesinden mobil ve bilgisayar görünümü ayrı ayrı ayarlanabilir. Hazır Küçük, Orta ve Büyük seçeneklerinin yanında kapak başlığı, bölüm başlıkları, açıklama ve düğme yazıları için güvenli aralıklı kontroller bulunur. Uzun kapak başlıkları ekrana sığmadığında otomatik olarak küçültülür.

Kapak alanının altında mobilde 2×2 düzenlenen, vurgulu bir **Hızlı Erişim** alanı bulunur: **Çalışma saatlerimiz**, **Yeme & İçme**, **Grup dersleri** ve **Online koçluk**. Yeme & İçme kartında çatal ve bardak çizgi simgesi kullanılır ve kart doğrudan SHAPE BAR menüsüne gider. Grup dersleri bölümünde HYROX, HIIT Circuit ve Strength & Conditioning dersleri; üye ve dışarıdan katılım fiyatları; rezervasyon şartları ve hazır mesajla açılan WhatsApp kayıt düğmesi gösterilir. Yönetim panelindeki **Grup dersleri** sekmesinden bölümün görünürlüğü, ders türleri ve TL / GBP fiyatları değiştirilebilir.

**Online koçluk** bölümü kişiye özel antrenman programı, beslenme desteği, haftalık kontrol ve WhatsApp desteğini ayrı bir tanıtım alanında gösterir. Koçluk sekmesinden bölüm açılıp kapatılabilir; dört dildeki hızlı erişim, grup dersi ve online koçluk metinleri **Ana metinler** sekmesinden düzenlenir.

Üyelik, kişisel koçluk, online koçluk, grup dersleri, SHAPE BAR ve iletişim bölümlerinin tamamı fotoğraflı arka plan kullanır. Yönetim panelindeki **Bölüm fotoğrafları** sekmesinden her alan için ayrı JPG, PNG, WebP veya AVIF yüklenebilir. Görseller yükleme sırasında üst/alt veya yanlardaki büyük siyah çerçevelerden otomatik arındırılır, WebP'ye dönüştürülür ve en fazla 1800 piksele küçültülür. Her fotoğraf bölümü tamamen doldurur, tekrar etmez ve karttaki **Fotoğraf konumu** seçeneğiyle yukarı/orta/aşağı taşınabilir. Fotoğraf belirlenmeyen bölüm kapak görselini kullanır; “Kapak fotoğrafını kullan” düğmesiyle bölüm yeniden bu varsayılana döndürülebilir. Eski siyah çerçeveli iki görsel mobilde otomatik yakınlaştırılarak masaüstü görünümü değiştirmeden şeritler gizlenir. Hafif koyu filtre metinleri ve fiyatları okunur tutarken düz siyah bölüm oluşmasını engeller.

Her fotoğraf kartındaki **Telefon kadrajını ayarla** düğmesi, 9:19 oranında telefon önizlemesi açar. Fotoğraf fareyle veya parmakla sürüklenebilir, 1×–2,5× arasında yakınlaştırılabilir ve üst/orta/alt hazır konumları kullanılabilir. Kaydedilen `x`, `y` ve `zoom` değerleri yalnızca 680 piksel ve altındaki mobil görünümde uygulanır; masaüstü kadrajı değişmez. Ana kapak görseli için aynı düzenleyici **Ana görsel** sekmesinde bulunur.

## Supabase kurulumu

1. Size ayrıca verilen `supabase-setup.sql` dosyasını açın.
2. Supabase projesinde **SQL Editor → New query** yolunu izleyin.
3. SQL dosyasının tamamını yapıştırıp **Run** düğmesine basın.
4. **Authentication → Users → Add user** bölümünden SQL dosyasında yetkilendirilen e-posta ile bir kullanıcı oluşturun.
5. Güçlü bir şifre belirleyin. Bu şifreyi hiçbir site dosyasına veya GitHub'a eklemeyin.

`supabase-setup.sql` yalnızca kurulum içindir; web sitesinin GitHub deposuna yüklenmesi gerekmez.

## GitHub Pages'e yükleme

Bu klasördeki tüm site dosyalarını mevcut deponun kök dizinine yükleyin. `admin` klasörünün klasör olarak korunmasına dikkat edin. GitHub Pages dağıtımı tamamlandığında:

- Ana site: mevcut GitHub Pages adresiniz
- Yönetim paneli: mevcut adresinizin sonuna `/admin/` eklenmiş hali

Yönetim panelinden yayınlanan değişiklikler Supabase'e kaydedilir ve ana sayfada yenileme yapıldığında görünür.

## Güvenlik

`supabase-config.js` yalnızca tarayıcı kullanımı için tasarlanmış publishable anahtarı içerir. Supabase `secret` veya `service_role` anahtarlarını, veritabanı şifresini ya da yönetici şifresini hiçbir zaman bu depoya eklemeyin.
