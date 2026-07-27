# Khansa Nur Khalisah — Static Portfolio

Versi ini menggunakan HTML, CSS, dan JavaScript murni sehingga mudah dibuka di Kiro, VS Code, atau di-deploy ke Vercel.

## Struktur folder

```text
khansa-portfolio-static/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── khansa-photo.jpeg
    ├── CV_KhansaNurKhalisah.pdf
    ├── projects/
    └── certificates/
```

## Menjalankan website

Pilihan paling sederhana:

1. Buka folder ini di Kiro.
2. Gunakan ekstensi Live Server dan jalankan `index.html`.

Atau gunakan terminal:

```bash
python -m http.server 5500
```

Kemudian buka `http://localhost:5500`.

## Flow kode

- `index.html`: struktur seluruh bagian portofolio dan placeholder konten dinamis.
- `styles.css`: warna, typography, layout responsif, animasi, card, modal, dan carousel.
- `script.js`: data project/experience/skill/sertifikat dan seluruh interaksi.
- Project card membuka modal case study.
- Experience dapat difilter per kategori.
- Skills mendukung panah, dot, dan swipe.
- Certificates bergeser otomatis setiap 5 detik, serta mendukung panah, dot, dan swipe.
- Menu mobile terbuka melalui tombol hamburger.

## Deploy ke Vercel

1. Upload folder ini ke repository GitHub.
2. Import repository ke Vercel.
3. Framework preset: `Other`.
4. Build command: kosong.
5. Output directory: `.`
6. Klik Deploy.

## Bagian yang paling sering diedit

- Project: array `projects` pada `script.js`.
- Experience: array `experiences` pada `script.js`.
- Skill: array `skillGroups` pada `script.js`.
- Sertifikat: array `certificates` pada `script.js`.
- Warna utama: variabel pada bagian `:root` di `styles.css`.
- Tautan sosial dan kontak: bagian `contact` serta `socials` di `index.html`.
