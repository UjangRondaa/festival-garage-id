# Festival Garage ID — Landing Page

Diler virtual mobil langka **Forza Horizon 5** #1 di Indonesia.

**Tagline:** _Dapatkan Mobil Langka Impianmu. Instan. Aman. Terpercaya._

🌐 **Live:** https://USERNAME.github.io/festival-garage-id/

---

## 📋 Tentang Project

Tugas UTS mata kuliah **Digital Business** — Universitas Amikom Yogyakarta, 2026.

**Tim:**
- Ahmad Rizal Dwi Nugraha (23.11.5396) — CEO + Marketing
- Mukti Cahyo Pamungkas (23.11.5435) — Operations + Game Operator
- Raymond Olga Saputra (23.11.5426) — Customer Service + Admin

---

## 🛠️ Stack Teknologi

- **HTML5** semantic markup
- **CSS3** vanilla (no framework) — responsive, dark theme + brand orange `#E8490F`
- **JavaScript** vanilla — FAQ accordion, smooth scroll, WhatsApp deep links
- **Google Fonts** — Inter
- **GitHub Pages** — hosting gratis publik
- Total biaya: **Rp 0**

---

## 📁 Struktur File

```
festival-garage-id/
├── index.html        # Landing page (6 section)
├── style.css         # Brand styling (dark + orange)
├── script.js         # FAQ, smooth scroll, WA deep link
├── assets/           # Foto mobil katalog (4 PNG)
│   ├── 1-porsche-gt3rs.png
│   ├── 2-nissan-z-nismo.png
│   ├── 3-toyota-camry-trd.png
│   └── 4-toyota-gr86.png
└── README.md
```

---

## ✏️ Cara Edit Konten

### Ganti nomor WhatsApp
Edit `script.js` baris 7:
```js
const WA_NUMBER = '6281234567890'; // Ganti dengan nomor admin (62 + nomor tanpa 0)
```

### Ganti foto mobil katalog
Replace 4 file PNG di folder `assets/` dengan nama yang sama:
- `1-porsche-gt3rs.png`
- `2-nissan-z-nismo.png`
- `3-toyota-camry-trd.png`
- `4-toyota-gr86.png`

### Tambah/ganti mobil di katalog
Edit `index.html`, cari `<!-- Card 1 -->` sampai `<!-- Card 4 -->`. Duplikat block `<article class="car-card">` untuk tambah mobil baru.

### Ganti link sosial media
Edit `index.html`, cari `instagram.com/festivalgarage.id` dan `tiktok.com/@festivalgarage.id` → ganti dengan username asli.

---

## 🚀 Deploy

Sudah di-deploy via **GitHub Pages**. Setiap push ke branch `main` otomatis terupdate dalam 1-2 menit.

Buka repo Settings → Pages → pastikan source = `main` branch + `/` root.

---

© 2026 Festival Garage ID. All rights reserved.
_Tidak berafiliasi dengan Microsoft / Playground Games / Forza Horizon 5._
