-- Transbara Dev CMS. Jalankan di Supabase Dashboard > SQL Editor (atau supabase db push).

create table if not exists public.dev_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.dev_is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.dev_admins where user_id = auth.uid());
$$;

create or replace function public.dev_touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

-- konten ---------------------------------------------------------------
create table if not exists public.dev_services (
  id uuid primary key default gen_random_uuid(),
  icon text not null default 'spark', title text not null, description text not null default '',
  audience text not null default '', featured boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_portfolio_items (
  id uuid primary key default gen_random_uuid(),
  title text not null, category text not null default 'Web Platform', metric text not null default '',
  mock_kind text not null default 'landing', image_url text, live_url text, is_dummy boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null, role text not null default '', company text not null default '', quote text not null,
  rating int not null default 5 check (rating between 1 and 5), is_dummy boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_pricing_tiers (
  id uuid primary key default gen_random_uuid(),
  name text not null, audience text not null default '', price_prefix text not null default 'Mulai dari',
  price_label text not null, description text not null default '', features text[] not null default '{}',
  highlighted boolean not null default false,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_process_steps (
  id uuid primary key default gen_random_uuid(),
  title text not null, description text not null default '', output text not null default '',
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null, answer text not null,
  sort_order int not null default 0, published boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.dev_site_settings (
  key text primary key, value jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists public.dev_leads (
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
  foreach t in array array['dev_services','dev_portfolio_items','dev_testimonials','dev_pricing_tiers','dev_process_steps','dev_faqs','dev_site_settings'] loop
    execute format('drop trigger if exists dev_trg_touch on public.%I', t);
    execute format('create trigger dev_trg_touch before update on public.%I for each row execute function public.dev_touch_updated_at()', t);
  end loop;
end $$;

-- RLS ------------------------------------------------------------------
alter table public.dev_admins enable row level security;
create policy "admin lihat dirinya" on public.dev_admins for select to authenticated using (user_id = auth.uid());

do $$ declare t text; begin
  foreach t in array array['dev_services','dev_portfolio_items','dev_testimonials','dev_pricing_tiers','dev_process_steps','dev_faqs'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "publik baca terbit" on public.%I for select to anon, authenticated using (published or public.dev_is_admin())', t);
    execute format('create policy "admin tulis" on public.%I for all to authenticated using (public.dev_is_admin()) with check (public.dev_is_admin())', t);
  end loop;
end $$;

alter table public.dev_site_settings enable row level security;
create policy "publik baca" on public.dev_site_settings for select to anon, authenticated using (true);
create policy "admin tulis" on public.dev_site_settings for all to authenticated using (public.dev_is_admin()) with check (public.dev_is_admin());

alter table public.dev_leads enable row level security;
create policy "publik kirim lead" on public.dev_leads for insert to anon, authenticated with check (status = 'baru');
create policy "admin kelola lead" on public.dev_leads for all to authenticated using (public.dev_is_admin()) with check (public.dev_is_admin());

-- storage --------------------------------------------------------------
insert into storage.buckets (id, name, public) values ('dev-media', 'dev-media', true) on conflict (id) do nothing;
create policy "dev media publik baca" on storage.objects for select using (bucket_id = 'dev-media');
create policy "dev media admin tulis" on storage.objects for insert to authenticated with check (bucket_id = 'dev-media' and public.dev_is_admin());
create policy "dev media admin ubah" on storage.objects for update to authenticated using (bucket_id = 'dev-media' and public.dev_is_admin());
create policy "dev media admin hapus" on storage.objects for delete to authenticated using (bucket_id = 'dev-media' and public.dev_is_admin());
