-- Dibuat oleh scripts/gen-seed.ts dari src/data/defaults.ts
begin;
do $$ begin if not exists (select 1 from public.dev_services) then
insert into public.dev_services (icon, title, description, audience, featured, sort_order) values
  ('rocket', 'Landing Page & Company Profile', 'Tampil kredibel & muncul di Google, ubah pengunjung jadi pembeli.', 'UMKM', true, 10),
  ('cart', 'Website Custom & E-Commerce', 'Jualan 24 jam tanpa bergantung marketplace.', 'UMKM · Korporasi', false, 20),
  ('phone', 'Aplikasi Mobile', 'Bisnismu ada di genggaman pelanggan (Android/iOS).', 'Semua skala', false, 30),
  ('cap', 'LMS', 'Kelas, kursus & pelatihan karyawan online, terukur.', 'Korporasi · Sekolah', false, 40),
  ('factory', 'ERP', 'Stok, keuangan, produksi, HR dalam satu sistem.', 'Korporasi', true, 50),
  ('users', 'CRM', 'Leads & pelanggan terkelola, repeat order naik.', 'Bisnis', false, 60),
  ('receipt', 'Kasir / POS & Inventory', 'Transaksi cepat, stok akurat real-time.', 'UMKM', false, 70),
  ('clock', 'HRIS & Absensi', 'Absensi, payroll, cuti otomatis.', 'Bisnis', false, 80),
  ('school', 'Sistem Sekolah / Pesantren', 'Administrasi, akademik, keuangan terintegrasi.', 'Institusi', false, 90),
  ('bot', 'AI Custom', 'Chatbot CS 24/7, otomasi kerja, insight dari data.', 'Semua skala', false, 100),
  ('plug', 'Integrasi & API', 'Hubungkan payment gateway, WhatsApp, sistem lama.', 'Bisnis', false, 110),
  ('wrench', 'Maintenance', 'Sistem tetap aman, cepat, dan berkembang.', 'Semua skala', false, 120);
end if; end $$;
do $$ begin if not exists (select 1 from public.dev_portfolio_items) then
insert into public.dev_portfolio_items (title, category, metric, mock_kind, image_url, live_url, is_dummy, sort_order) values
  ('ERP Distributor Sembako', 'Sistem Bisnis', 'Rekap stok 80% lebih cepat', 'erp', null, null, true, 10),
  ('LMS Pelatihan Karyawan', 'Web Platform', '1.200 karyawan aktif', 'lms', null, null, true, 20),
  ('CRM Klinik Kecantikan', 'Sistem Bisnis', 'Repeat order naik 35%', 'crm', null, null, true, 30),
  ('Aplikasi Kasir Coffee Shop', 'Mobile App', 'Transaksi 2x lebih cepat', 'pos', null, null, true, 40),
  ('AI Chatbot WhatsApp Toko Online', 'AI', '70% chat terjawab otomatis', 'ai', null, null, true, 50),
  ('Landing Page Properti', 'Web Platform', 'Leads naik 3x', 'landing', null, null, true, 60);
end if; end $$;
do $$ begin if not exists (select 1 from public.dev_testimonials) then
insert into public.dev_testimonials (name, role, company, quote, rating, is_dummy, sort_order) values
  ('Rina A.', 'Owner', 'Toko Kue Rinaa', 'Landing page-nya cantik dan order lewat WA naik drastis. Timnya sabar banget!', 5, true, 10),
  ('Budi S.', 'Manajer Operasional', 'CV Maju Distribusi', 'Dulu rekap stok semalaman pakai Excel. Sekarang beres dalam hitungan menit.', 5, true, 20),
  ('Dewi K.', 'HR Manager', 'PT Nusantara Retail', 'LMS custom sesuai alur training kami. Revisi cepat, komunikasi enak.', 5, true, 30),
  ('Hendra W.', 'Founder', 'Startup Kopi Kita', 'MVP jadi cepat dan rapi. Konsultasi gratisnya beneran bantu mikir produk.', 5, true, 40),
  ('Sari P.', 'Kepala Klinik', 'Klinik Sehat Sentosa', 'CRM-nya bikin pasien lama gampang di-follow up. Worth it!', 5, true, 50),
  ('Agus T.', 'Direktur', 'Yayasan Cendekia', 'Sistemnya stabil, ada garansi, dan tim responsif kapan pun dibutuhkan.', 5, true, 60);
end if; end $$;
do $$ begin if not exists (select 1 from public.dev_pricing_tiers) then
insert into public.dev_pricing_tiers (name, audience, price_prefix, price_label, description, features, highlighted, sort_order) values
  ('Starter', 'UMKM', 'Mulai dari', 'Rp500rb', 'Landing page / company profile', array['Desain custom responsif','SEO dasar','Tombol WhatsApp','Garansi bug 1 tahun']::text[], false, 10),
  ('Growth', 'Bisnis berkembang', 'Mulai dari', 'Rp5 juta', 'Web app, LMS, CRM, aplikasi mobile', array['Fitur sesuai alur bisnis','Dashboard admin','Integrasi payment / WhatsApp','Garansi bug 1 tahun']::text[], true, 20),
  ('Enterprise', 'Korporasi', 'Harga', 'Custom quote', 'ERP, sistem terintegrasi, AI', array['Analisis kebutuhan mendalam','Integrasi sistem lama','NDA tersedia','Garansi bug 1 tahun']::text[], false, 30);
end if; end $$;
do $$ begin if not exists (select 1 from public.dev_process_steps) then
insert into public.dev_process_steps (title, description, output, sort_order) values
  ('Konsultasi Gratis', 'Ngobrol kebutuhan & tujuan bisnismu.', 'Brief kebutuhan', 10),
  ('Analisis & Proposal', 'Scope, timeline, estimasi biaya transparan.', 'Proposal & estimasi', 20),
  ('Desain UI/UX', 'Prototype bisa diklik sebelum coding.', 'Prototype', 30),
  ('Development', 'Sprint mingguan + demo progres.', 'Demo mingguan', 40),
  ('Testing & Launch', 'QA, deploy, training user.', 'Aplikasi live', 50),
  ('After-sales & Growth', 'Garansi 1 tahun, maintenance, pengembangan lanjutan.', 'Support', 60);
end if; end $$;
do $$ begin if not exists (select 1 from public.dev_faqs) then
insert into public.dev_faqs (question, answer, sort_order) values
  ('Berapa biaya bikin website/aplikasi?', 'Landing page/company profile mulai dari Rp500.000, web app/LMS/CRM/aplikasi mobile mulai dari Rp5.000.000, dan sistem enterprise (ERP, AI, integrasi) berupa custom quote sesuai kebutuhan. Konsultasi dan proposal gratis.', 10),
  ('Berapa lama pengerjaannya?', 'Landing page umumnya hitungan hari hingga 2 minggu. Aplikasi dan sistem bisnis berkisar 1–3 bulan tergantung fitur. Timeline pasti tertulis di proposal.', 20),
  ('Apakah konsultasinya benar-benar gratis?', 'Ya. Konsultasi dan proposal gratis tanpa kewajiban order.', 30),
  ('Apakah ada garansi dan maintenance?', 'Garansi bug 1 tahun setelah launch. Maintenance dan pengembangan lanjutan tersedia terpisah.', 40),
  ('Bisa untuk UMKM dengan budget terbatas?', 'Bisa. Paket Starter mulai Rp500.000, dan sistem bisa dibangun bertahap sesuai pertumbuhan bisnis.', 50),
  ('Kantor di Malang, apakah bisa melayani luar kota?', 'Bisa. Kami melayani seluruh Indonesia secara remote lewat WhatsApp, video call, dan demo online.', 60),
  ('Apakah bisa integrasi AI, WhatsApp, atau payment gateway?', 'Bisa. Kami membangun chatbot AI, otomasi, dan integrasi API ke sistem yang sudah kamu pakai.', 70),
  ('Apakah ada NDA untuk data perusahaan?', 'Tersedia NDA untuk proyek korporasi dan data sensitif.', 80);
end if; end $$;
insert into public.dev_site_settings (key, value) values ('contact', '{"phone":"0821-1958-9966","wa":"6282119589966","email":"transbaradev@gmail.com","address":"Jl. Bandulan 6/K2 No.64, Kec. Sukun, Kota Malang, Jawa Timur","hours":"Buka 24 jam"}'::jsonb) on conflict (key) do nothing;
insert into public.dev_site_settings (key, value) values ('hero', '{"badge":"Konsultasi gratis, tanpa syarat","before":"Bisnismu butuh","highlight":"aplikasi","after":"yang bikin ia berlayar lebih jauh.","subtitle":"Kami software house di Malang. Bikin website, aplikasi, dan AI custom untuk usaha kecil sampai perusahaan besar. Sudah 7 tahun lebih dan puluhan proyek besar selesai dengan client yang puas."}'::jsonb) on conflict (key) do nothing;
insert into public.dev_site_settings (key, value) values ('stats', '[{"value":"7+","label":"tahun"},{"value":"Puluhan","label":"proyek besar"},{"value":"100+","label":"sekolah pengguna"},{"value":"1 th","label":"garansi bug"}]'::jsonb) on conflict (key) do nothing;
insert into public.dev_site_settings (key, value) values ('awards', '["1st Winner Indigo Betalist","Top 10 Hetero for Startup","Top 10 Techibition","Top 10 F+","Top 10 Hatch by 1000 Startup Digital"]'::jsonb) on conflict (key) do nothing;
commit;
