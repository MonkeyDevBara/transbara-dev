-- Transbara Dev CMS. Jalankan di Supabase Dashboard > SQL Editor (atau supabase db push).

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

-- konten ---------------------------------------------------------------
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  icon text not null default 'spark', title text not null, description text not null default '',
  audience text not null default '', featured boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  title text not null, category text not null default 'Web Platform', metric text not null default '',
  mock_kind text not null default 'landing', image_url text, live_url text, is_dummy boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null, role text not null default '', company text not null default '', quote text not null,
  rating int not null default 5 check (rating between 1 and 5), is_dummy boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.pricing_tiers (
  id uuid primary key default gen_random_uuid(),
  name text not null, audience text not null default '', price_prefix text not null default 'Mulai dari',
  price_label text not null, description text not null default '', features text[] not null default '{}',
  highlighted boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.process_steps (
  id uuid primary key default gen_random_uuid(),
  title text not null, description text not null default '', output text not null default '',
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null, answer text not null,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.site_settings (
  key text primary key, value jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  whatsapp text not null check (char_length(whatsapp) between 6 and 30),
  business text check (char_length(business) <= 160),
  need text check (char_length(need) <= 160),
  budget text check (char_length(budget) <= 60),
  message text check (char_length(message) <= 2000),
  status text not null default 'baru' check (status in ('baru','dihubungi','closing','batal')),
  created_at timestamptz not null default now()
);

do $$ declare t text; begin
  foreach t in array array['services','portfolio_items','testimonials','pricing_tiers','process_steps','faqs','site_settings'] loop
    execute format('drop trigger if exists trg_touch on public.%I', t);
    execute format('create trigger trg_touch before update on public.%I for each row execute function public.touch_updated_at()', t);
  end loop;
end $$;

-- RLS ------------------------------------------------------------------
alter table public.admins enable row level security;
create policy "admin lihat dirinya" on public.admins for select to authenticated using (user_id = auth.uid());

do $$ declare t text; begin
  foreach t in array array['services','portfolio_items','testimonials','pricing_tiers','process_steps','faqs'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "publik baca terbit" on public.%I for select to anon, authenticated using (published or public.is_admin())', t);
    execute format('create policy "admin tulis" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t);
  end loop;
end $$;

alter table public.site_settings enable row level security;
create policy "publik baca" on public.site_settings for select to anon, authenticated using (true);
create policy "admin tulis" on public.site_settings for all to authenticated using (public.is_admin()) with check (public.is_admin());

alter table public.leads enable row level security;
create policy "publik kirim lead" on public.leads for insert to anon, authenticated with check (status = 'baru');
create policy "admin kelola lead" on public.leads for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- storage --------------------------------------------------------------
insert into storage.buckets (id, name, public) values ('media', 'media', true) on conflict (id) do nothing;
create policy "media publik baca" on storage.objects for select using (bucket_id = 'media');
create policy "media admin tulis" on storage.objects for insert to authenticated with check (bucket_id = 'media' and public.is_admin());
create policy "media admin ubah" on storage.objects for update to authenticated using (bucket_id = 'media' and public.is_admin());
create policy "media admin hapus" on storage.objects for delete to authenticated using (bucket_id = 'media' and public.is_admin());
