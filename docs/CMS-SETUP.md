# Setup Admin CMS (Supabase)

1. Buat project di https://supabase.com.
2. SQL Editor: jalankan berurutan `supabase/migrations/001_init.sql`, `supabase/migrations/002_grants.sql`, lalu `supabase/seed.sql` (isi awal situs).
3. Authentication > Users > Add user (email + password) untuk akun admin. Matikan "Allow new users to sign up" di Authentication > Sign In / Providers.
4. Jadikan akun itu admin (SQL Editor):
   ```sql
   insert into public.dev_admins (user_id) select id from auth.users where email = 'EMAIL_ADMIN';
   ```
5. Project ini berbagi database dengan transbara-web: cek dulu bahwa tidak ada objek berawalan `dev_` atau bucket `dev-media` di project itu.
5. Salin `.env.example` ke `.env`, isi URL dan anon key (Project Settings > API).
6. `npm run dev`, buka `/admin`, login.

Catatan
- Keamanan ada di Row Level Security: publik hanya bisa baca konten tayang dan mengirim lead; hanya user di tabel `admins` yang bisa menulis. Anon key aman dipublikasikan, jangan pernah memakai service_role key di proyek ini.
- Situs memakai SSR + cache 30 detik; hasil edit di admin tampil dalam ±30 detik.
- Semua objek memakai awalan `dev_` (tabel, fungsi `dev_is_admin`) agar tidak bentrok dengan transbara-web di project yang sama; gambar diunggah ke bucket publik `dev-media`.
- Deploy: adapter saat ini `@astrojs/node` (VPS/Docker: `npm run build && node dist/server/entry.mjs`). Untuk Vercel/Cloudflare ganti adapter di `astro.config.mjs`.
- Ubah konten bawaan/seed: edit `src/data/defaults.ts`, lalu `node scripts/gen-seed.ts > supabase/seed.sql`.
