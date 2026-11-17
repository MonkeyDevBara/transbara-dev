import { createClient } from '@supabase/supabase-js';
import * as defaults from '../data/defaults';

export type Settings = typeof defaults.settings;
export type Content = {
  settings: Settings;
  services: typeof defaults.services;
  portfolio_items: typeof defaults.portfolio_items;
  testimonials: typeof defaults.testimonials;
  pricing_tiers: typeof defaults.pricing_tiers;
  process_steps: typeof defaults.process_steps;
  faqs: typeof defaults.faqs;
};

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
export const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
export const configured = Boolean(supabaseUrl && supabaseKey);
export const sb = () => createClient(supabaseUrl!, supabaseKey!, { auth: { persistSession: false } });

const TTL = 30_000;
let cache: { at: number; data: Content } | null = null;
let inflight: Promise<Content> | null = null;

async function fetchAll(): Promise<Content> {
  const c = sb();
  const list = (t: string) => c.from(t).select('*').eq('published', true).order('sort_order').then(r => { if (r.error) throw new Error(`${t}: ${r.error.message}`); return r.data as any[]; });
  const [services, portfolio_items, testimonials, pricing_tiers, process_steps, faqs, st] = await Promise.all([
    list('services'), list('portfolio_items'), list('testimonials'), list('pricing_tiers'), list('process_steps'), list('faqs'),
    c.from('site_settings').select('key,value').then(r => { if (r.error) throw new Error(`site_settings: ${r.error.message}`); return r.data as { key: string; value: any }[]; }),
  ]);
  const settings = { ...defaults.settings } as any;
  for (const { key, value } of st) settings[key] = Array.isArray(value) ? value : { ...(settings[key] ?? {}), ...value };
  return { settings, services, portfolio_items, testimonials, pricing_tiers, process_steps, faqs } as Content;
}

/** Supabase belum dikonfigurasi -> konten bawaan (dev lokal). Sudah dikonfigurasi tapi gagal -> pakai cache lama, kalau tidak ada: error. */
export async function loadContent(): Promise<Content> {
  if (!configured) return defaults as unknown as Content;
  if (cache && Date.now() - cache.at < TTL) return cache.data;
  inflight ??= fetchAll().finally(() => { inflight = null; });
  try { const data = await inflight; cache = { at: Date.now(), data }; return data; }
  catch (e) { if (cache) { console.error('[content] pakai cache lama:', e); return cache.data; } throw e; }
}

export const waLink = (wa: string, msg = 'Halo Transbara Dev, saya mau konsultasi gratis untuk pembuatan aplikasi/website.') =>
  `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
