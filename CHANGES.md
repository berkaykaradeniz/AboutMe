# Değişiklik Günlüğü (CHANGES.md)

## 2026-11-21

### Node.js Sürüm Güncellemesi
- `.node-version` ve `.nvmrc` dosyaları Node.js `24` (Active LTS) sürümüne yükseltildi.
- `package.json` içindeki `engines.node` alanı `>=22.0.0` olarak güncellendi.

### Referanslar (Portföy)
- `lojistigo.com`, `arsadanyapi.com` ve `depoio.com` projeleri canlı bağlantıları, açıklamaları ve ekran görüntüleriyle (`assets/img/lojistigo.com.png`, `assets/img/arsadanyapi.com.png`, `assets/img/depoio.com.png`) `index.html` içerisindeki Referanslarım bölümüne en başa eklendi.

### React, Laravel & Yeni İş Odaklı SEO İyileştirmeleri
- `index.html` genelinde **React**, **Laravel** ve **SEO ile siteleri hızlıca üst sıralara çıkarma** vurgusu Hero, Hakkımda, Yetenekler ve Hizmetlerim bölümlerine entegre edildi.
- Yeni iş ve müşteri kazanımına yönelik `<title>`, `<meta name="description">`, `<meta name="keywords">`, Open Graph, Twitter Card ve `Person` + `Service` (JSON-LD) yapısal veri şemaları eklendi.
- Arama motoru taraması ve indeksleme için proje kök dizinine `robots.txt` ve `sitemap.xml` dosyaları oluşturuldu.
- Mobil menü bağlantıları Türkçe ve güncel bölümlerle uyumlu hale getirildi, görsellere `loading="lazy"` ve açıklayıcı `alt` metinleri eklendi.

### İş Deneyimleri Güncellemesi
- `Junior Php Developer` kaydı kaldırılarak tarih aralığı `Middle PHP Developer` içine birleştirildi (`Haziran 2021 - Ocak 2026 (4 Yıl 7 Ay)`).
- `Ocak 2026 - Devam Ediyor` tarihli **Senior Developer** pozisyonu eklendi ve çalışma süresini dinamik hesaplayan JavaScript kodu 1 Ocak 2026 başlangıç tarihine göre doğru takvim hesabı yapacak şekilde güncellendi.

### Performans, Modernizasyon & Arayüz Yenileme
- **Görsel Optimizasyonu (WebP):** Kullanılan tüm portföy, hero, profil ve firma görselleri yeniden boyutlandırılarak `assets/img/optimized/*.webp` formatına dönüştürüldü (~90%+ boyut kazanımı).
- **Sıfır Harici JS/İkon Bağımlılığı:** Alpine.js, Alpine Toolkit ve Boxicons harici CDN yükleri tamamen kaldırıldı; yerine `assets/js/main.js` içine hafif vanilla JS (mobil menü, sticky header, dinamik Senior çalışma süresi) ve satır içi SVG ikonlar eklendi.
- **Core Web Vitals & Caching:** LCP hero görseli için `preload` + `fetchpriority="high"`, tüm görsellere açık `width`/`height` (CLS = 0) ve ekran altı görsellere `loading="lazy" decoding="async"` eklendi.
- **Modern Arayüz & Dönüşüm Odaklı Yapı:** Sticky glassmorphism navigasyon, müsaitlik rozeti, özet metrikler, teklif alma CTA bandı ve boş `??` telefon alanı kaldırılarak temiz 3'lü iletişim kartları (E-Posta, LinkedIn, Konum) eklendi.
- **Build & Netlify Yapılandırması:** `tailwind.config.js` yalnızca aktif dosyaları tarayacak ve kullanılmayan eklentileri hariç tutacak şekilde sadeleştirildi, `postcss.config.js` Windows/Linux üretim ortamlarında tutarlı minifikasyon yapacak şekilde güncellendi ve uzun süreli cache/güvenlik başlıkları içeren `netlify.toml` eklendi.

### Değiştirilen / Eklenen Dosyalar
- `.node-version`
- `.nvmrc`
- `.gitignore`
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `netlify.toml`
- `index.html`
- `assets/js/main.js`
- `assets/styles/main.css`
- `assets/styles/main.min.css`
- `assets/img/lojistigo.com.png`
- `assets/img/arsadanyapi.com.png`
- `assets/img/depoio.com.png`
- `assets/img/optimized/*.webp`
- `robots.txt`
- `sitemap.xml`
- `CHANGES.md`
