export const site = {
  name: 'Transbara Dev',
  url: 'https://dev.transbara.my.id',
  phone: '0821-1958-9966',
  wa: '6282119589966',
  email: 'transbaradev@gmail.com',
  address: 'Jl. Bandulan 6/K2 No.64, Kec. Sukun, Kota Malang, Jawa Timur',
  tagline: 'Deliver the Happiness',
};
export const waLink = (msg = 'Halo Transbara Dev, saya mau konsultasi gratis untuk pembuatan aplikasi/website.') =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(msg)}`;

export const services = [
  { icon: '🚀', title: 'Landing Page & Company Profile', desc: 'Tampil kredibel & muncul di Google, ubah pengunjung jadi pembeli.', tag: 'UMKM', big: true },
  { icon: '🛒', title: 'Website Custom & E-Commerce', desc: 'Jualan 24 jam tanpa bergantung marketplace.', tag: 'UMKM · Korporasi' },
  { icon: '📱', title: 'Aplikasi Mobile', desc: 'Bisnismu ada di genggaman pelanggan (Android/iOS).', tag: 'Semua skala' },
  { icon: '🎓', title: 'LMS', desc: 'Kelas, kursus & pelatihan karyawan online, terukur.', tag: 'Korporasi · Sekolah' },
  { icon: '🏭', title: 'ERP', desc: 'Stok, keuangan, produksi, HR dalam satu sistem.', tag: 'Korporasi', big: true },
  { icon: '🤝', title: 'CRM', desc: 'Leads & pelanggan terkelola, repeat order naik.', tag: 'Bisnis' },
  { icon: '🧾', title: 'Kasir / POS & Inventory', desc: 'Transaksi cepat, stok akurat real-time.', tag: 'UMKM' },
  { icon: '🕒', title: 'HRIS & Absensi', desc: 'Absensi, payroll, cuti otomatis.', tag: 'Bisnis' },
  { icon: '🏫', title: 'Sistem Sekolah / Pesantren', desc: 'Administrasi, akademik, keuangan terintegrasi.', tag: 'Institusi' },
  { icon: '🤖', title: 'AI Custom', desc: 'Chatbot CS 24/7, otomasi kerja, insight dari data.', tag: 'Semua skala', big: true },
  { icon: '🔌', title: 'Integrasi & API', desc: 'Hubungkan payment gateway, WhatsApp, sistem lama.', tag: 'Bisnis' },
  { icon: '🛠️', title: 'Maintenance', desc: 'Sistem tetap aman, cepat, dan berkembang.', tag: 'Semua skala' },
];

// DUMMY — edit sendiri
export const portfolio = [
  { title: 'ERP Distributor Sembako', cat: 'Sistem Bisnis', metric: 'Rekap stok 80% lebih cepat', emoji: '🏭', c: 'from-violet-600 to-fuchsia-500' },
  { title: 'LMS Pelatihan Karyawan', cat: 'Web Platform', metric: '1.200 karyawan aktif', emoji: '🎓', c: 'from-indigo-600 to-sky-500' },
  { title: 'CRM Klinik Kecantikan', cat: 'Sistem Bisnis', metric: 'Repeat order naik 35%', emoji: '💄', c: 'from-pink-600 to-orange-400' },
  { title: 'Aplikasi Kasir Coffee Shop', cat: 'Mobile App', metric: 'Transaksi 2x lebih cepat', emoji: '☕', c: 'from-amber-500 to-red-500' },
  { title: 'AI Chatbot WhatsApp Toko Online', cat: 'AI', metric: '70% chat terjawab otomatis', emoji: '🤖', c: 'from-emerald-500 to-cyan-500' },
  { title: 'Landing Page Properti', cat: 'Web Platform', metric: 'Leads naik 3x', emoji: '🏡', c: 'from-purple-600 to-yellow-400' },
];

// DUMMY — edit sendiri
export const testimonials = [
  { name: 'Rina A.', role: 'Owner', co: 'Toko Kue Rinaa', q: 'Landing page-nya cantik dan order lewat WA naik drastis. Timnya sabar banget!', s: 5 },
  { name: 'Budi S.', role: 'Manajer Operasional', co: 'CV Maju Distribusi', q: 'Dulu rekap stok semalaman pakai Excel. Sekarang beres dalam hitungan menit.', s: 5 },
  { name: 'Dewi K.', role: 'HR Manager', co: 'PT Nusantara Retail', q: 'LMS custom sesuai alur training kami. Revisi cepat, komunikasi enak.', s: 5 },
  { name: 'Hendra W.', role: 'Founder', co: 'Startup Kopi Kita', q: 'MVP jadi cepat dan rapi. Konsultasi gratisnya beneran bantu mikir produk.', s: 5 },
  { name: 'Sari P.', role: 'Kepala Klinik', co: 'Klinik Sehat Sentosa', q: 'CRM-nya bikin pasien lama gampang di-follow up. Worth it!', s: 5 },
  { name: 'Agus T.', role: 'Direktur', co: 'Yayasan Cendekia', q: 'Sistemnya stabil, ada garansi, dan tim responsif kapan pun dibutuhkan.', s: 5 },
];

export const process = [
  ['Konsultasi Gratis', 'Ngobrol kebutuhan & tujuan bisnismu.', 'Brief kebutuhan'],
  ['Analisis & Proposal', 'Scope, timeline, estimasi biaya transparan.', 'Proposal & estimasi'],
  ['Desain UI/UX', 'Prototype bisa diklik sebelum coding.', 'Prototype'],
  ['Development', 'Sprint mingguan + demo progres.', 'Demo mingguan'],
  ['Testing & Launch', 'QA, deploy, training user.', 'Aplikasi live'],
  ['After-sales & Growth', 'Garansi 1 tahun, maintenance, pengembangan lanjutan.', 'Support'],
];

export const faqs = [
  ['Berapa biaya bikin website/aplikasi?', 'Landing page/company profile mulai dari Rp500.000, web app/LMS/CRM/aplikasi mobile mulai dari Rp5.000.000, dan sistem enterprise (ERP, AI, integrasi) berupa custom quote sesuai kebutuhan. Konsultasi dan proposal gratis.'],
  ['Berapa lama pengerjaannya?', 'Landing page umumnya hitungan hari hingga 2 minggu. Aplikasi dan sistem bisnis berkisar 1–3 bulan tergantung fitur. Timeline pasti tertulis di proposal.'],
  ['Apakah konsultasinya benar-benar gratis?', 'Ya. Konsultasi dan proposal gratis tanpa kewajiban order.'],
  ['Apakah ada garansi dan maintenance?', 'Garansi bug 1 tahun setelah launch. Maintenance dan pengembangan lanjutan tersedia terpisah.'],
  ['Bisa untuk UMKM dengan budget terbatas?', 'Bisa. Paket Starter mulai Rp500.000, dan sistem bisa dibangun bertahap sesuai pertumbuhan bisnis.'],
  ['Kantor di Malang, apakah bisa melayani luar kota?', 'Bisa. Kami melayani seluruh Indonesia secara remote lewat WhatsApp, video call, dan demo online.'],
  ['Apakah bisa integrasi AI, WhatsApp, atau payment gateway?', 'Bisa. Kami membangun chatbot AI, otomasi, dan integrasi API ke sistem yang sudah kamu pakai.'],
  ['Apakah ada NDA untuk data perusahaan?', 'Tersedia NDA untuk proyek korporasi dan data sensitif.'],
];
