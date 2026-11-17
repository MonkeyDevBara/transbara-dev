import type { APIRoute } from 'astro';
import { configured, sb } from '../../lib/content';

export const prerender = false;
const hits = new Map<string, number[]>();
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const f = await request.json().catch(() => null);
  if (!f || f.website) return json({ ok: true }); // honeypot: pura-pura sukses
  const now = Date.now(), ip = clientAddress ?? 'x';
  const recent = (hits.get(ip) ?? []).filter(t => now - t < 10 * 60_000);
  if (recent.length >= 5) return json({ error: 'Terlalu banyak percobaan, coba lagi nanti.' }, 429);
  hits.set(ip, [...recent, now]);
  const s = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n);
  const row = { name: s(f.nama, 120), whatsapp: s(f.wa, 30), business: s(f.bisnis, 160) || null, need: s(f.butuh, 160) || null, budget: s(f.budget, 60) || null, message: s(f.cerita, 2000) || null };
  if (!row.name || !/^[0-9+\-\s]{6,30}$/.test(row.whatsapp)) return json({ error: 'Data tidak valid' }, 400);
  if (!configured) return json({ ok: true, stored: false });
  const { error } = await sb().from('dev_leads').insert(row);
  if (error) { console.error('[lead]', error.message); return json({ error: 'Gagal menyimpan' }, 500); }
  return json({ ok: true, stored: true });
};
