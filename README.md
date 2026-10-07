# NOVA — Noutbuk savdo sayti

Zamonaviy noutbuk do'koni uchun bir sahifali web-ilova: **qizil va oq** rang palitrasi, **tun/kun rejimi**, **3 tilda interfeys** (o'zbek, rus, ingliz), **Liquid Glass** va **Soft UI** dizayn uslubida.

## Texnologiyalar

- **React 18** + **Vite 6**
- **lucide-react** — ikonkalar
- **@fontsource** — Manrope + DM Sans (oflayn shriftlar, CDN'siz)
- Sof CSS (CSS variables orqali tun/kun mavzusi, glassmorphism effektlari)

## Ishga tushirish

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # ishlab chiqarish uchun build
npm run preview   # build natijasini ko'rish
```

## Imkoniyatlar

- **Tun / kun rejimi** — yuqori o'ng burchakdagi tugma; tanlov `localStorage`da saqlanadi va birinchi ochilishda tizim sozlamasiga moslashadi.
- **3 til** — UZ / RU / EN selektori. Barcha matnlar, kategoriyalar, narx formati va sana/narx ko'rinishi tarjima qilinadi (narxlar `Intl.NumberFormat` orqali).
- **Katalog va filtrlar** — "Ish va o'qish / Gaming / Ijod uchun" filtrlari va jonli qidiruv (nom, seriya, xarakteristikalar bo'yicha).
- **Savatcha** — mahsulot qo'shish, sonini o'zgartirish, o'chirish, jami summa; savatcha `localStorage`da saqlanadi.
- **Buyurtma oynasi** — ism va telefon raqami bilan oddiy buyurtma formasi, yuborilgach tasdiq xabari.
- **Sevimlilar** — yurakcha tugmasi orqali tanlangan modellarni belgilash.
- **Liquid Glass + Soft UI** — shishasimon sirtlar (`backdrop-filter`), yumshoq soyalar, katta radiusli kartalar, yumaloq tugmalar, nozik gradientlar.
- **Responsiv** — 1180, 1100, 920, 660 va 380 px breakpointlari; mobil uchun hamburger menyu.

## Mahsulot rasmlari

`public/images/` papkasida 4 ta noutbuk rasmi:

| Fayl | Model | Kategoriya |
| --- | --- | --- |
| `ultrabook-air.png` | Aster Air 14 | Ish va o'qish |
| `gaming-pro.png` | Volt G15 | Gaming |
| `business-elite.png` | Orbit Pro 14 | Ish va o'qish |
| `studio-creator.png` | Studio X16 | Ijod uchun |

## Tuzilma

```
index.html          # HTML qobig'i
src/main.jsx        # React kirish nuqtasi
src/App.jsx         # Butun interfeys: tarjimalar, mahsulotlar, komponentlar
src/styles.css      # Dizayn tizimi va barcha uslublar
public/images/*     # Mahsulot rasmlari
vite.config.js      # Vite + React konfiguratsiyasi
```
