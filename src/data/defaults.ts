// Konten bawaan. Dipakai sebagai seed Supabase (scripts/gen-seed.ts) dan saat Supabase belum dikonfigurasi (dev lokal).
export const SITE_URL = 'https://dev.transbara.my.id';

export const settings = {
  contact: { phone: '0821-1958-9966', wa: '6282119589966', email: 'transbaradev@gmail.com', address: 'Jl. Bandulan 6/K2 No.64, Kec. Sukun, Kota Malang, Jawa Timur', hours: 'Buka 24 jam' },
  hero: {
    badge: 'Konsultasi gratis, tanpa syarat',
    before: 'Bisnismu butuh', highlight: 'aplikasi', after: 'yang bikin ia berlayar lebih jauh.',
    subtitle: 'Kami software house di Malang. Bikin website, aplikasi, dan AI custom untuk usaha kecil sampai perusahaan besar. Sudah 7 tahun lebih dan puluhan proyek besar selesai dengan client yang puas.',
  },
  stats: [{ value: '7+', label: 'tahun' }, { value: 'Puluhan', label: 'proyek besar' }, { value: '100+', label: 'sekolah pengguna' }, { value: '1 th', label: 'garansi bug' }],
  awards: ['1st Winner Indigo Betalist', 'Top 10 Hetero for Startup', 'Top 10 Techibition', 'Top 10 F+', 'Top 10 Hatch by 1000 Startup Digital'],
};

export const services = [
  { icon: 'rocket', title: 'Landing Page & Company Profile', description: 'Tampil kredibel & muncul di Google, ubah pengunjung jadi pembeli.', audience: 'UMKM', featured: true },
  { icon: 'cart', title: 'Website Custom & E-Commerce', description: 'Jualan 24 jam tanpa bergantung marketplace.', audience: 'UMKM · Korporasi', featured: false },
  { icon: 'phone', title: 'Aplikasi Mobile', description: 'Bisnismu ada di genggaman pelanggan (Android/iOS).', audience: 'Semua skala', featured: false },
  { icon: 'cap', title: 'LMS', description: 'Kelas, kursus & pelatihan karyawan online, terukur.', audience: 'Korporasi · Sekolah', featured: false },
  { icon: 'factory', title: 'ERP', description: 'Stok, keuangan, produksi, HR dalam satu sistem.', audience: 'Korporasi', featured: true },
  { icon: 'users', title: 'CRM', description: 'Leads & pelanggan terkelola, repeat order naik.', audience: 'Bisnis', featured: false },
  { icon: 'receipt', title: 'Kasir / POS & Inventory', description: 'Transaksi cepat, stok akurat real-time.', audience: 'UMKM', featured: false },
  { icon: 'clock', title: 'HRIS & Absensi', description: 'Absensi, payroll, cuti otomatis.', audience: 'Bisnis', featured: false },
  { icon: 'school', title: 'Sistem Sekolah / Pesantren', description: 'Administrasi, akademik, keuangan terintegrasi.', audience: 'Institusi', featured: false },
  { icon: 'bot', title: 'AI Custom', description: 'Chatbot CS 24/7, otomasi kerja, insight dari data.', audience: 'Semua skala', featured: false },
  { icon: 'plug', title: 'Integrasi & API', description: 'Hubungkan payment gateway, WhatsApp, sistem lama.', audience: 'Bisnis', featured: false },
  { icon: 'wrench', title: 'Maintenance', description: 'Sistem tetap aman, cepat, dan berkembang.', audience: 'Semua skala', featured: false },
];

// CONTOH (dummy): ganti lewat admin
export const portfolio_items = [
  { title: 'ERP Distributor Sembako', category: 'Sistem Bisnis', metric: 'Rekap stok 80% lebih cepat', mock_kind: 'erp' },
  { title: 'LMS Pelatihan Karyawan', category: 'Web Platform', metric: '1.200 karyawan aktif', mock_kind: 'lms' },
  { title: 'CRM Klinik Kecantikan', category: 'Sistem Bisnis', metric: 'Repeat order naik 35%', mock_kind: 'crm' },
  { title: 'Aplikasi Kasir Coffee Shop', category: 'Mobile App', metric: 'Transaksi 2x lebih cepat', mock_kind: 'pos' },
  { title: 'AI Chatbot WhatsApp Toko Online', category: 'AI', metric: '70% chat terjawab otomatis', mock_kind: 'ai' },
  { title: 'Landing Page Properti', category: 'Web Platform', metric: 'Leads naik 3x', mock_kind: 'landing' },
].map(p => ({ ...p, image_url: null as string | null, live_url: null as string | null, is_dummy: true }));

// CONTOH (dummy): ganti lewat admin
export const testimonials = [
  { name: 'Rina A.', role: 'Owner', company: 'Toko Kue Rinaa', quote: 'Landing page-nya cantik dan order lewat WA naik drastis. Timnya sabar banget!', rating: 5 },
  { name: 'Budi S.', role: 'Manajer Operasional', company: 'CV Maju Distribusi', quote: 'Dulu rekap stok semalaman pakai Excel. Sekarang beres dalam hitungan menit.', rating: 5 },
  { name: 'Dewi K.', role: 'HR Manager', company: 'PT Nusantara Retail', quote: 'LMS custom sesuai alur training kami. Revisi cepat, komunikasi enak.', rating: 5 },
  { name: 'Hendra W.', role: 'Founder', company: 'Startup Kopi Kita', quote: 'MVP jadi cepat dan rapi. Konsultasi gratisnya beneran bantu mikir produk.', rating: 5 },
  { name: 'Sari P.', role: 'Kepala Klinik', company: 'Klinik Sehat Sentosa', quote: 'CRM-nya bikin pasien lama gampang di-follow up. Worth it!', rating: 5 },
  { name: 'Agus T.', role: 'Direktur', company: 'Yayasan Cendekia', quote: 'Sistemnya stabil, ada garansi, dan tim responsif kapan pun dibutuhkan.', rating: 5 },
].map(t => ({ ...t, is_dummy: true }));

export const pricing_tiers = [
  { name: 'Starter', audience: 'UMKM', price_prefix: 'Mulai dari', price_label: 'Rp500rb', description: 'Landing page / company profile', features: ['Desain custom responsif', 'SEO dasar', 'Tombol WhatsApp', 'Garansi bug 1 tahun'], highlighted: false },
  { name: 'Growth', audience: 'Bisnis berkembang', price_prefix: 'Mulai dari', price_label: 'Rp5 juta', description: 'Web app, LMS, CRM, aplikasi mobile', features: ['Fitur sesuai alur bisnis', 'Dashboard admin', 'Integrasi payment / WhatsApp', 'Garansi bug 1 tahun'], highlighted: true },
  { name: 'Enterprise', audience: 'Korporasi', price_prefix: 'Harga', price_label: 'Custom quote', description: 'ERP, sistem terintegrasi, AI', features: ['Analisis kebutuhan mendalam', 'Integrasi sistem lama', 'NDA tersedia', 'Garansi bug 1 tahun'], highlighted: false },
];

export const process_steps = [
  { title: 'Konsultasi Gratis', description: 'Ngobrol kebutuhan & tujuan bisnismu.', output: 'Brief kebutuhan' },
  { title: 'Analisis & Proposal', description: 'Scope, timeline, estimasi biaya transparan.', output: 'Proposal & estimasi' },
  { title: 'Desain UI/UX', description: 'Prototype bisa diklik sebelum coding.', output: 'Prototype' },
  { title: 'Development', description: 'Sprint mingguan + demo progres.', output: 'Demo mingguan' },
  { title: 'Testing & Launch', description: 'QA, deploy, training user.', output: 'Aplikasi live' },
  { title: 'After-sales & Growth', description: 'Garansi 1 tahun, maintenance, pengembangan lanjutan.', output: 'Support' },
];

export const faqs = [
  { question: 'Berapa biaya bikin website/aplikasi?', answer: 'Landing page/company profile mulai dari Rp500.000, web app/LMS/CRM/aplikasi mobile mulai dari Rp5.000.000, dan sistem enterprise (ERP, AI, integrasi) berupa custom quote sesuai kebutuhan. Konsultasi dan proposal gratis.' },
  { question: 'Berapa lama pengerjaannya?', answer: 'Landing page umumnya hitungan hari hingga 2 minggu. Aplikasi dan sistem bisnis berkisar 1–3 bulan tergantung fitur. Timeline pasti tertulis di proposal.' },
  { question: 'Apakah konsultasinya benar-benar gratis?', answer: 'Ya. Konsultasi dan proposal gratis tanpa kewajiban order.' },
  { question: 'Apakah ada garansi dan maintenance?', answer: 'Garansi bug 1 tahun setelah launch. Maintenance dan pengembangan lanjutan tersedia terpisah.' },
  { question: 'Bisa untuk UMKM dengan budget terbatas?', answer: 'Bisa. Paket Starter mulai Rp500.000, dan sistem bisa dibangun bertahap sesuai pertumbuhan bisnis.' },
  { question: 'Kantor di Malang, apakah bisa melayani luar kota?', answer: 'Bisa. Kami melayani seluruh Indonesia secara remote lewat WhatsApp, video call, dan demo online.' },
  { question: 'Apakah bisa integrasi AI, WhatsApp, atau payment gateway?', answer: 'Bisa. Kami membangun chatbot AI, otomasi, dan integrasi API ke sistem yang sudah kamu pakai.' },
  { question: 'Apakah ada NDA untuk data perusahaan?', answer: 'Tersedia NDA untuk proyek korporasi dan data sensitif.' },
];
