-- Project Supabase baru tidak lagi memberi hak akses otomatis ke tabel baru di schema public.
-- RLS tetap menjadi penjaga utama; GRANT hanya membuka pintu ke role API.
grant usage on schema public to anon, authenticated;

grant select on public.dev_services, public.dev_portfolio_items, public.dev_testimonials, public.dev_pricing_tiers,
  public.dev_process_steps, public.dev_faqs, public.dev_site_settings to anon, authenticated;
grant insert, update, delete on public.dev_services, public.dev_portfolio_items, public.dev_testimonials, public.dev_pricing_tiers,
  public.dev_process_steps, public.dev_faqs, public.dev_site_settings to authenticated;

grant insert on public.dev_leads to anon;
grant select, insert, update, delete on public.dev_leads to authenticated;

grant select on public.dev_admins to authenticated;
grant execute on function public.dev_is_admin() to anon, authenticated;
