# PRD — Landing Page Transbara Dev

| Item | Detail |
|---|---|
| Produk | Website company/landing page Transbara Dev |
| Versi dokumen | 1.1 — 17 Nov 2026 (data owner §11 masuk) |
| Status | Draft, menunggu approval |
| Bahasa situs | Bahasa Indonesia (utama), English (fase 2) |
| Tagline / visi | **Deliver the Happiness** |
| Domain | `https://dev.transbara.my.id/` |
| Lokasi | Jl. Bandulan 6/K2 No.64, Kec. Sukun, Kota Malang, Jawa Timur (melayani seluruh Indonesia, remote) |
| Kontak | WhatsApp/Telp 0821-1958-9966 · transbaradev@gmail.com · buka 24 jam |

---

## 1. Latar Belakang

Transbara Dev adalah software house asal Malang yang membangun **website, aplikasi (web & mobile), dan solusi AI custom** untuk bisnis dari UMKM sampai korporasi. Rekam jejak: **7+ tahun**, **puluhan proyek besar** terdeliver, kepuasan client tinggi. Pembeda utama: **servis & kepuasan pelanggan**, solusi **100% custom** sesuai kebutuhan, dan **konsultasi gratis**.

Masalah yang diselesaikan landing page:
1. Calon client belum kenal Transbara Dev → butuh **bukti nyata** (portofolio, angka, testimoni, penghargaan), bukan klaim.
2. Calon client ragu soal biaya, proses, dan risiko proyek gagal → butuh **transparansi proses, garansi, dan FAQ**.
3. Calon client mencari via Google ("jasa pembuatan aplikasi Malang", "jasa ERP", dll.) → situs harus **mudah diindeks dan ranking**.

**Aturan konten:** tidak menampilkan profil/nama founder. Yang ditonjolkan adalah **tim, hasil, dan produk**.

## 2. Tujuan & Metrik Sukses

| Tujuan | KPI | Target 6 bulan pasca-launch |
|---|---|---|
| Menghasilkan lead | Klik WhatsApp + submit form konsultasi | ≥ 4% conversion rate dari total sesi |
| Lead berkualitas | % lead dengan budget & kebutuhan jelas (dari form) | ≥ 50% |
| Ditemukan di Google | Halaman terindeks di Google Search Console | 100% halaman publik terindeks ≤ 14 hari |
| Ranking | Posisi keyword lokal utama (lihat §8.2) | Top 10 untuk ≥ 5 keyword lokal Malang |
| Performa | Core Web Vitals (mobile, field data) | LCP < 2.5s, INP < 200ms, CLS < 0.1; Lighthouse ≥ 95 semua kategori |
| Engagement | Scroll depth ke section Portofolio | ≥ 60% sesi |

### Non-goals (v1)
- Tidak ada client portal/dashboard proyek.
- Tidak ada pembayaran online / checkout paket.
- Tidak ada blog CMS penuh di v1 (disiapkan strukturnya, konten di fase 2).
- Tidak menampilkan harga final per proyek (hanya "mulai dari", lihat §6.8).

### Anti-goals (gagal walau "jalan")
- Desain gen z tapi **lambat atau susah dibaca** oleh decision maker korporat.
- Klaim besar tanpa bukti (angka tanpa sumber, testimoni anonim generik).
- Konten dirender via JavaScript client-side sehingga Google tidak bisa membaca isi.
- Menampilkan founder/personal branding.

## 3. Target Pengguna (Persona)

| Persona | Siapa | Pain point | Yang dicari di halaman |
|---|---|---|---|
| **Owner UMKM** | Pemilik toko, kuliner, klinik, kursus, 25–45 th | Budget terbatas, takut ditipu vendor, gaptek | Harga mulai dari, contoh hasil, WA cepat respon, bahasa sederhana |
| **Manajer/Direktur perusahaan menengah** | Ops/IT manager, HR, Finance | Proses manual Excel, data tercecer, butuh ERP/CRM | Studi kasus berangka, proses kerja jelas, garansi & maintenance |
| **Korporasi / Institusi** | Head of IT, procurement, yayasan pendidikan | Vendor tidak scalable, keamanan data | Kapabilitas teknis, keamanan, SLA, NDA, studi kasus |
| **Founder startup / Gen Z entrepreneur** | 20–30 th | Butuh MVP cepat, AI-powered | Kecepatan, stack modern, AI, vibe brand yang relate |

## 4. Value Proposition & Pesan Utama

**Headline utama (opsi, A/B test):**
- A: "Bikin Bisnismu *Naik Level* Lewat Aplikasi Custom." 
- B: "Web, App & AI Custom yang Bikin Bisnis Tumbuh — Bukan Sekadar Jadi."
- C: "Dari UMKM sampai Korporasi: Kami Deliver Aplikasi, Kamu Dapat Happiness."

**Sub-headline:** "Software house dari Malang. 7+ tahun pengalaman, puluhan proyek besar terdeliver, konsultasi gratis tanpa syarat."

**Pilar pesan (dipakai berulang di seluruh halaman):**
1. **Hasil nyata** — angka, portofolio live yang bisa dikunjungi.
2. **100% custom** — dibangun sesuai alur bisnismu, bukan template.
3. **Servis juara** — respon cepat, pendampingan, after-sales.
4. **Mulai tanpa risiko** — konsultasi gratis, proposal & estimasi gratis.

## 5. Brand & Design System

### 5.1 Aset brand (dilampirkan)
- `Transbara Dev Anime Smoke Logo.png` — logo horizontal: buah "devil fruit" ungu dengan tangkai huruf **T** emas, asap lavender, wordmark "TRANSBARA" putih-ungu + "DEV" emas, gaya brush/anime.
- `Purple Devil Fruit with Golden T Stem.png` — logomark/ikon (untuk favicon, avatar, maskot, loader).

Deliverable aset yang harus disiapkan developer/desainer:
- Versi **transparan (PNG/WebP)** dan **SVG/vector-trace** logo & logomark (file saat ini berlatar putih).
- Favicon set (16, 32, 180 apple-touch, 192/512 PWA maskable), OG image 1200×630.
- Versi logo monokrom untuk background gelap.

### 5.2 Arah visual — "Anime x Tech, Gen Z"
Konsep: **"Makan Devil Fruit-nya, Dapat Power-nya."** Transbara Dev diposisikan sebagai sumber "kekuatan super" digital untuk bisnis. Referensi gaya: anime shōnen, sticker/manga panel, neo-brutalism ringan, bento grid, glassmorphism asap ungu.

Elemen kunci:
- **Bento grid** untuk layanan & keunggulan.
- **Manga panel / speech bubble** untuk testimoni.
- **Sticker & badge** miring (rotasi -3° s/d 4°) — "Konsultasi GRATIS!", "7+ Tahun", "Made in Malang".
- **Marquee** teks berjalan (kategori layanan, sticker keunggulan).
- **Efek asap ungu** (SVG/Lottie ringan) sebagai divider antar section.
- Outline tebal hitam-ungu (2–3px) seperti line-art logo; drop shadow keras (offset 4–6px, tanpa blur).
- Micro-interaction: hover tilt kartu, tombol "squish", cursor glow ungu (desktop).
- **Dark mode default** (latar ungu gelap) dengan toggle light mode.

### 5.3 Palet warna (diambil dari logo; finalisasi oleh desainer)

| Token | Hex (usulan) | Penggunaan |
|---|---|---|
| `--grape-900` | `#1A0B2E` | Background utama dark |
| `--grape-700` | `#4C1D95` | Section alternatif, outline |
| `--grape-500` | `#7C3AED` | Primary, tombol, link |
| `--smoke-200` | `#DDD6FE` | Asap, teks sekunder di dark |
| `--smoke-50` | `#F5F3FF` | Background light mode |
| `--gold-400` | `#FACC15` | Aksen CTA, highlight kata, badge |
| `--gold-600` | `#D97706` | Hover CTA, shading emas |
| `--ink` | `#0F0A1A` | Outline, teks di light mode |

Kontras wajib lulus **WCAG 2.2 AA** (4.5:1 teks normal). Teks body tidak boleh di atas kuning.

### 5.4 Tipografi
- Display/heading: font berkarakter brush/bold (mis. **Bricolage Grotesque** atau **Clash Display**; aksen brush seperti logo hanya untuk 1–2 kata highlight).
- Body: **Plus Jakarta Sans** / **Inter** (keterbacaan untuk audiens korporat).
- Self-host, `font-display: swap`, subset latin, maksimal 2 family.

### 5.5 Tone of voice
Santai, percaya diri, "kamu"-based, sedikit humor & istilah gen z yang tetap profesional ("naik level", "auto-scale", "no drama"). Hindari slang berlebihan di section yang dibaca korporat (Proses, Keamanan, FAQ).

## 6. Struktur Halaman & Kebutuhan Fungsional

### 6.0 Sitemap (dirancang untuk SEO, lihat §8)

```
/                                  Landing page utama (semua section)
/layanan/                          Index layanan
/layanan/jasa-pembuatan-website/
/layanan/jasa-pembuatan-landing-page/
/layanan/jasa-pembuatan-aplikasi-mobile/
/layanan/jasa-pembuatan-lms/
/layanan/jasa-pembuatan-erp/
/layanan/jasa-pembuatan-crm/
/layanan/jasa-pembuatan-sistem-kasir-pos/
/layanan/jasa-pembuatan-company-profile/
/layanan/jasa-pembuatan-ai-chatbot/
/layanan/jasa-integrasi-ai-otomasi-bisnis/
/portofolio/                       Index studi kasus
/portofolio/[slug]/                Detail studi kasus
/konsultasi/                       Form konsultasi gratis (+ thank-you page /konsultasi/terima-kasih/)
/kebijakan-privasi/
/sitemap.xml, /robots.txt
```

Landing page `/` adalah halaman konversi utama; halaman `/layanan/*` adalah halaman SEO per keyword yang mengarahkan ke CTA yang sama.

### 6.1 Navbar (sticky)
- Logo horizontal (kiri), menu: Layanan (dropdown mega-menu ber-ikon), Portofolio, Proses, Testimoni, FAQ.
- CTA kanan: **"Konsultasi Gratis"** (gold) → scroll ke form / WhatsApp.
- Mobile: hamburger full-screen overlay dengan animasi asap.
- Navbar mengecil & blur background saat scroll.

### 6.2 Hero
- Headline (§4) dengan 1 kata highlight brush emas, sub-headline, 2 CTA:
  - Primary: **"Konsultasi Gratis via WhatsApp"** (pesan pre-filled).
  - Secondary: **"Lihat Hasil Kerja Kami"** → scroll ke Portofolio.
- Visual: logomark devil fruit 3D/ilustrasi dengan asap animasi + floating mockup layar aplikasi (dashboard ERP, app mobile, chat AI).
- Trust bar di bawah CTA: "⭐ 7+ Tahun · Puluhan Proyek Besar · 100+ Sekolah Pengguna · Garansi 1 Tahun · Konsultasi Gratis". Tidak memakai angka proyek/client yang spesifik (owner tidak menyediakan angka final).
- Hero image adalah **LCP element**: wajib di-preload, WebP/AVIF, tanpa animasi yang menunda render.

### 6.3 Highlight Bar — "Kenapa banyak yang balik lagi"
- **Tanpa logo client/partner** (keputusan owner).
- Marquee teks kategori layanan (Landing Page · LMS · ERP · CRM · Mobile App · AI Chatbot · …) diselingi sticker "Konsultasi Gratis", "Garansi 1 Tahun", "Made in Malang".
- Badge penghargaan produk: 1st Winner Indigo Betalist; Top 10 Startup Hetero for Startup, Techibition, F+, Hatch by 1000 Startup Digital.

### 6.4 Problem → Solution ("Masih begini?")
- 3–4 kartu pain point relatable dengan gaya meme/sticker: "Data masih di Excel beda-beda versi", "Admin lembur rekap manual", "Customer chat nggak kebales", "Web jadul, nggak muncul di Google".
- Tiap kartu flip/transition ke solusi Transbara Dev.

### 6.5 Layanan (Bento Grid)
Kategori minimal (tiap kartu: ikon, judul, 1 kalimat manfaat bisnis, tag "Cocok untuk: UMKM / Korporasi", link ke `/layanan/*`):

| Kategori | Manfaat bisnis (copy) |
|---|---|
| Landing Page & Company Profile | Tampil kredibel & muncul di Google, ubah pengunjung jadi pembeli |
| Website Custom & E-Commerce | Jualan 24 jam tanpa bergantung marketplace |
| Aplikasi Mobile (Android/iOS) | Bisnismu ada di genggaman pelanggan |
| LMS (Learning Management System) | Kelas, kursus & pelatihan karyawan online, terukur |
| ERP | Stok, keuangan, produksi, HR dalam satu sistem |
| CRM | Leads & pelanggan terkelola, repeat order naik |
| Sistem Kasir / POS & Inventory | Transaksi cepat, stok akurat real-time |
| HRIS & Absensi | Absensi, payroll, cuti otomatis |
| Sistem Sekolah / Pesantren | Administrasi, akademik, keuangan sekolah terintegrasi |
| AI Custom (Chatbot, Otomasi, Analitik) | CS 24/7, otomasi kerja berulang, insight dari data |
| Integrasi & API | Hubungkan payment gateway, WhatsApp, sistem lama |
| Maintenance & Pengembangan Lanjutan | Sistem tetap aman, cepat, dan berkembang |

Kartu "**Nggak nemu yang kamu butuh? Kita bikinin custom.**" → CTA konsultasi.

### 6.6 Keunggulan / Kenapa Transbara Dev
Bento grid 6 poin:
1. **7+ tahun pengalaman** & puluhan proyek besar terdeliver.
2. **100% custom** — mengikuti alur bisnismu.
3. **Konsultasi & proposal gratis** — tanpa kewajiban order.
4. **Servis excellent** — respon cepat, satu PIC, update progres rutin.
5. **Garansi 1 tahun & after-sales** — bug fixing gratis selama 1 tahun setelah launch.
6. **Tech modern & aman** — scalable, siap integrasi AI.

Plus **counter animasi** (angka naik saat masuk viewport): **7+** Tahun pengalaman · **100+** Sekolah pengguna sistem kami · **12** Kategori layanan · **1 Tahun** Garansi. Tidak ada counter "jumlah proyek" atau "rating kepuasan" sampai owner punya angka pasti.

### 6.7 Portofolio / Hasil Nyata (section terpenting)
- Filter tab: Semua · Web Platform · Mobile App · AI · Sistem Bisnis.
- Kartu: thumbnail mockup, nama proyek, kategori, **1 metrik hasil** (mis. "dipakai 100+ sekolah"), tombol "Kunjungi Live" (jika publik) & "Studi Kasus".
- **Konten v1: data dummy** yang nanti diedit sendiri oleh owner. Developer menyiapkan 6 entri dummy di `src/content/portfolio/*.md` (1 file = 1 proyek) yang mencakup tiap filter, contoh:
  - "ERP Distributor Sembako" (Sistem Bisnis) — "waktu rekap stok turun 80%"
  - "LMS Pelatihan Karyawan" (Web Platform) — "1.200 karyawan aktif"
  - "CRM Klinik Kecantikan" (Sistem Bisnis) — "repeat order naik 35%"
  - "Aplikasi Kasir Coffee Shop" (Mobile App) — "transaksi 2x lebih cepat"
  - "AI Chatbot WhatsApp Toko Online" (AI) — "70% chat terjawab otomatis"
  - "Landing Page Properti" (Web Platform) — "leads naik 3x"
- Field tiap entri: `title`, `slug`, `category`, `client`, `metric`, `thumbnail`, `liveUrl?`, `challenge`, `solution`, `features[]`, `results[]`, `dummy: true`.
- Referensi karya nyata yang bisa owner pakai untuk mengganti dummy (dari transbara.my.id, **tanpa narasi founder**): ekosistem aplikasi sekolah (Murid, Wali Murid, Guru, CBT, SMS, LMS + 8 modul) yang dipakai 100+ sekolah; Marboot, NS Daily, Money Bos, Ngajio, Dietsis.
- Halaman `/portofolio/[slug]` format studi kasus: Tantangan → Solusi → Fitur → Hasil (angka) → Testimoni → CTA.

### 6.8 Paket & Estimasi Harga
- 3 tier kartu (harga dari owner):
  - **Starter** (UMKM): Landing page / company profile — **mulai dari Rp500.000**.
  - **Growth** (bisnis berkembang): Web app / LMS / CRM / aplikasi mobile — **mulai dari Rp5.000.000**.
  - **Enterprise** (korporasi): ERP / sistem terintegrasi / AI — "Custom quote".
- Semua kartu CTA "Konsultasi Gratis". Tier tengah diberi sticker "Paling Laris".
- Opsional fase 2: **kalkulator estimasi** (pilih jenis, fitur, platform → range harga → kirim ke WA).

### 6.9 Proses Kerja (timeline)
1. **Konsultasi Gratis** — ngobrol kebutuhan & tujuan bisnis.
2. **Analisis & Proposal** — scope, timeline, estimasi biaya transparan.
3. **Desain UI/UX** — prototype bisa diklik sebelum coding.
4. **Development** — sprint mingguan + demo progres.
5. **Testing & Launch** — QA, deploy, training user.
6. **After-sales & Growth** — garansi, maintenance, pengembangan lanjutan.

Tiap step: ikon, durasi indikatif, output yang client terima. Visual: jalur berliku dengan asap/"jejak" devil fruit.

### 6.10 Testimoni
- Format manga speech bubble/carousel: avatar/logo, nama, jabatan, institusi, rating bintang, kutipan berisi **hasil konkret**.
- **Konten v1: 6 testimoni dummy** di `src/content/testimonials/*.md` (field: `name`, `role`, `company`, `avatar`, `rating`, `quote`, `project`, `dummy: true`), owner mengedit sendiri.
- Avatar dummy pakai ilustrasi/inisial, **bukan foto orang asli dari stock** (supaya tidak terlihat seperti testimoni palsu).
- Video testimoni: fase 2, jika owner punya.

### 6.11 Garansi / Risk Reversal
Banner: "Konsultasi gratis. Proposal gratis. Revisi desain sampai cocok. **Garansi bug 1 tahun.**" + NDA tersedia untuk korporasi.

### 6.12 FAQ (accordion, + schema FAQPage)
Minimal 10 pertanyaan, contoh:
- Berapa biaya bikin website/aplikasi?
- Berapa lama pengerjaannya?
- Apakah konsultasinya benar-benar gratis?
- Apakah source code jadi milik saya?
- Apakah ada garansi dan maintenance?
- Bisa untuk UMKM dengan budget terbatas?
- Kantor di Malang, apakah bisa melayani luar kota?
- Bagaimana sistem pembayarannya (termin)?
- Apakah bisa integrasi AI / WhatsApp / payment gateway?
- Bagaimana keamanan data kami?

Konten FAQ harus dirender di HTML (bukan dimuat via JS) agar terbaca crawler.

### 6.13 CTA Akhir + Form Konsultasi Gratis
- Headline: "Siap Deliver Happiness ke Bisnismu?"
- Form (≤ 6 field agar conversion tinggi): Nama*, No. WhatsApp*, Nama Bisnis/Perusahaan, Jenis kebutuhan* (dropdown kategori §6.5), Range budget (dropdown), Ceritakan kebutuhanmu.
- Validasi client + server, honeypot + rate-limit (anti-spam, tanpa CAPTCHA yang mengganggu; Cloudflare Turnstile jika spam tinggi).
- Submit → kirim ke **transbaradev@gmail.com** + simpan ke Google Sheets/DB + redirect ke `/konsultasi/terima-kasih/` (untuk tracking konversi) yang menawarkan lanjut chat WA ke 0821-1958-9966.
- Alternatif: tombol WhatsApp langsung & email.

### 6.14 Footer
- Logo, tagline "Deliver the Happiness", alamat Jl. Bandulan 6/K2 No.64, Kec. Sukun, Kota Malang (NAP identik dengan Google Business Profile), "Buka 24 jam", email transbaradev@gmail.com, WhatsApp 0821-1958-9966.
- Tidak ada ikon sosial media (belum ada akun).
- Link layanan (internal linking SEO), portofolio, kebijakan privasi.
- Embed peta ringan (static map image link ke Google Maps, bukan iframe berat).

### 6.15 Elemen global
- **Floating WhatsApp button** (semua halaman, mobile & desktop), pesan pre-filled berisi halaman asal: "Halo Transbara Dev, saya tertarik dengan [layanan]…".
- Toggle dark/light, tersimpan di `localStorage`, menghormati `prefers-color-scheme`.
- `prefers-reduced-motion`: matikan animasi asap, marquee, counter.

## 7. Kebutuhan Non-Fungsional

| Area | Requirement |
|---|---|
| Performa | Total JS halaman `/` ≤ 100 KB gzip; gambar WebP/AVIF responsif (`srcset`), lazy-load di bawah fold; animasi asap via CSS/SVG/Lottie ≤ 50 KB |
| Responsif | Mobile-first; breakpoint 360, 768, 1024, 1440. ≥ 70% traffic diasumsikan mobile |
| Aksesibilitas | WCAG 2.2 AA: alt text, fokus keyboard terlihat, kontras, label form, landmark HTML semantik |
| Browser | 2 versi terakhir Chrome, Safari (iOS), Firefox, Edge, Samsung Internet |
| Keamanan | HTTPS + HSTS, security headers (CSP, X-Frame-Options, Referrer-Policy), sanitasi input form, secret di env server |
| Privasi | Kebijakan privasi sesuai UU PDP No. 27/2022; consent untuk data form |
| Uptime | ≥ 99.9% (hosting static/edge) |
| Maintainability | Konten layanan, portofolio, testimoni, FAQ di file data (Markdown/JSON) atau headless CMS → bisa ditambah tanpa ubah kode |

## 8. SEO (Google-friendly)

### 8.1 Teknis
- **Rendering statis (SSG)**: semua konten ada di HTML awal. Rekomendasi stack: **Astro** (zero-JS default, island untuk interaksi) atau Next.js dengan SSG penuh.
- Satu `<h1>` per halaman, hierarki H2/H3 rapi, HTML semantik (`header`, `main`, `section`, `footer`).
- `<title>` ≤ 60 karakter & `meta description` ≤ 155 karakter unik per halaman.
- `canonical`, `hreflang` (saat versi EN tersedia), `lang="id"`.
- Open Graph + Twitter Card per halaman (OG image bertema brand).
- `sitemap.xml` otomatis, `robots.txt`, submit ke **Google Search Console** & Bing Webmaster.
- URL bersih, huruf kecil, berbahasa Indonesia dengan keyword (`/layanan/jasa-pembuatan-erp/`).
- Gambar: nama file deskriptif, `alt` berkeyword natural, `width/height` eksplisit (cegah CLS).
- Internal linking: hero/layanan → `/layanan/*`, tiap halaman layanan → portofolio relevan → `/konsultasi/`.
- Breadcrumb di halaman turunan.
- Redirect 301 `www` ↔ non-`www` dan `http` → `https` konsisten; halaman 404 custom bertema (devil fruit "nyasar").

### 8.2 Keyword target (riset volume final dengan GSC/Ahrefs/Ubersuggest)

| Halaman | Keyword primer | Keyword sekunder |
|---|---|---|
| `/` | software house Malang | jasa pembuatan aplikasi Malang, jasa pembuatan website Malang, jasa IT Malang |
| website | jasa pembuatan website | jasa pembuatan website profesional, jasa web custom |
| landing page | jasa pembuatan landing page | landing page jualan, landing page UMKM |
| mobile | jasa pembuatan aplikasi android | jasa pembuatan aplikasi mobile, jasa aplikasi iOS |
| LMS | jasa pembuatan LMS | aplikasi e-learning custom, LMS perusahaan |
| ERP | jasa pembuatan ERP | software ERP custom, ERP untuk UMKM |
| CRM | jasa pembuatan CRM | aplikasi CRM custom |
| POS | jasa pembuatan aplikasi kasir | sistem POS custom, aplikasi inventory |
| AI chatbot | jasa pembuatan chatbot AI | chatbot WhatsApp AI, AI customer service |
| AI otomasi | jasa integrasi AI untuk bisnis | otomasi bisnis AI, AI custom perusahaan |

Setiap halaman layanan: ≥ 800 kata konten unik (masalah, solusi, fitur, contoh proyek, proses, harga mulai dari, FAQ khusus), bukan duplikasi antarhalaman.

### 8.3 Structured data (JSON-LD)
- `Organization` + `ProfessionalService` (nama "Transbara Dev", `url` https://dev.transbara.my.id/, logo, `address` Jl. Bandulan 6/K2 No.64, Sukun, Malang, Jawa Timur, ID; `telephone` +62-821-1958-9966; `email` transbaradev@gmail.com; `openingHoursSpecification` Senin–Minggu 00:00–23:59; `areaServed: Indonesia`; `priceRange` "Rp500.000+"). Tanpa `sameAs` sampai ada akun sosial media.
- `WebSite` di beranda.
- `Service` per halaman layanan (`provider`, `areaServed`, `offers` mulai dari).
- `FAQPage` di beranda & halaman layanan.
- `BreadcrumbList` di halaman turunan.
- `CreativeWork`/`Article` untuk studi kasus.
- `Review`/`AggregateRating`: **tidak dipasang** selama testimoni masih dummy (melanggar guideline Google, risiko manual action). Aktifkan hanya setelah testimoni asli.
- Validasi dengan Rich Results Test sebelum launch.

### 8.4 SEO lokal
- Buat & verifikasi **Google Business Profile** "Transbara Dev — Software House Malang", kategori "Software company"/"Website designer".
- NAP (Nama, Alamat, Telepon) identik di situs, GBP, dan direktori (Clutch, Sortlist, direktori bisnis lokal).
- Minta client lama memberi ulasan di GBP.

### 8.5 Konten fase 2
Blog `/blog/` dengan artikel edukasi long-tail ("Berapa biaya membuat aplikasi ERP 2027?", "ERP vs Excel untuk UMKM", "Contoh chatbot AI untuk toko online") untuk menarik traffic organik & memperkuat topical authority.

## 9. Analitik & Tracking
- **Google Analytics 4** + **Google Search Console** (+ Microsoft Clarity untuk heatmap, opsional).
- Dimuat setelah interaksi/idle agar tidak merusak performa (Partytown atau defer).
- Event konversi: `click_whatsapp` (dengan parameter lokasi tombol), `submit_consultation`, `click_portfolio_live`, `view_pricing`, `scroll_75`.
- UTM untuk link di Instagram/TikTok/ads.
- Meta Pixel / Google Ads tag disiapkan (aktif saat ada iklan).

## 10. Rekomendasi Teknis (keputusan dapat diubah developer)
- Framework: **Astro + Tailwind CSS**, komponen interaktif kecil dengan Preact/vanilla.
- Animasi: CSS + Motion One/GSAP minimal, Lottie hanya untuk asap hero.
- Form backend: serverless function (Cloudflare Workers/Vercel) → email (Resend) + Google Sheets/Supabase.
- Hosting: **Cloudflare Pages** atau Vercel (CDN edge, HTTPS otomatis).
- Konten: Markdown/MDX collections (fase 1), headless CMS opsional (fase 2).

## 11. Data dari Owner

| # | Data | Status / Nilai |
|---|---|---|
| 1 | Domain | ✅ `dev.transbara.my.id` |
| 2 | Kontak | ✅ WA 0821-1958-9966 (`https://wa.me/6282119589966`), Jl. Bandulan 6/K2 No.64 Kec. Sukun Kota Malang, transbaradev@gmail.com, buka 24 jam |
| 3 | Angka statistik | ⏭️ Skip — pakai "7+ tahun", "puluhan proyek", "100+ sekolah" saja |
| 4 | Portofolio | 🧪 Dummy (§6.7), diedit owner |
| 5 | Logo partner | ⏭️ Skip — section logo dihapus (§6.3) |
| 6 | Testimoni | 🧪 Dummy (§6.10), diedit owner |
| 7 | Harga | ✅ Starter mulai Rp500rb · Growth mulai Rp5 juta · Enterprise custom |
| 8 | Garansi | ✅ 1 tahun |
| 9 | Sosial media | ❌ Belum ada — tidak ditampilkan |
| 10 | Legalitas | ❌ Tidak ditampilkan |

Domain adalah subdomain: daftarkan **properti terpisah** `dev.transbara.my.id` di Google Search Console, dan pasang link dari transbara.my.id ke dev.transbara.my.id untuk mempercepat indexing.

## 12. Rilis & Milestone

| Fase | Isi | Estimasi |
|---|---|---|
| 0. Persiapan | Vector logo transparan, copywriting final, isi data dummy | 3–5 hari |
| 1. Desain | Wireframe → hi-fi Figma (mobile & desktop, dark & light) | 1–2 minggu |
| 2. Build v1 | Landing `/`, 10 halaman layanan, 3+ studi kasus, form, SEO teknis, analitik | 2–3 minggu |
| 3. QA & Launch | Lighthouse, Rich Results Test, cross-browser, submit GSC, GBP | 3–5 hari |
| 4. Fase 2 | Blog, kalkulator estimasi, versi English, A/B test headline | Berkelanjutan |

## 13. Acceptance Criteria (Definition of Done v1)
- [ ] Semua section §6.1–§6.15 tampil sesuai desain di mobile 360px dan desktop 1440px.
- [ ] Tidak ada penyebutan founder di seluruh halaman.
- [ ] Lighthouse mobile ≥ 95 (Performance, Accessibility, Best Practices, SEO) di halaman `/`.
- [ ] Konten seluruh section terlihat di "View Source" (tanpa JS).
- [ ] Rich Results Test valid untuk Organization/LocalBusiness, FAQPage, BreadcrumbList, Service.
- [ ] `sitemap.xml` & `robots.txt` valid, tersubmit di Search Console.
- [ ] Form konsultasi: data masuk ke email & penyimpanan, redirect ke halaman terima kasih, event GA4 tercatat.
- [ ] Semua tombol WhatsApp membuka chat dengan pesan pre-filled yang sesuai halaman asal.
- [ ] Semua entri dengan `dummy: true` terdaftar di README; build menampilkan warning jumlah entri dummy yang masih tayang.
- [ ] `prefers-reduced-motion` dan navigasi keyboard berfungsi.
