// node scripts/gen-seed.ts > supabase/seed.sql
import * as d from '../src/data/defaults.ts';
const q = (v: unknown): string => v === null || v === undefined ? 'null'
  : typeof v === 'boolean' || typeof v === 'number' ? String(v)
  : Array.isArray(v) ? `array[${v.map(q).join(',')}]::text[]`
  : `'${String(v).replace(/'/g, "''")}'`;
const out: string[] = ['-- Dibuat oleh scripts/gen-seed.ts dari src/data/defaults.ts', 'begin;'];
for (const t of ['services', 'portfolio_items', 'testimonials', 'pricing_tiers', 'process_steps', 'faqs'] as const) {
  const rows = (d as any)[t] as Record<string, unknown>[];
  const cols = Object.keys(rows[0]);
  out.push(`insert into public.dev_${t} (${cols.join(', ')}, sort_order) values`);
  out.push(rows.map((r, i) => `  (${cols.map(c => q(r[c])).join(', ')}, ${(i + 1) * 10})`).join(',\n') + ';');
}
for (const [k, v] of Object.entries(d.settings)) out.push(`insert into public.dev_site_settings (key, value) values ('${k}', '${JSON.stringify(v).replace(/'/g, "''")}'::jsonb) on conflict (key) do nothing;`);
out.push('commit;');
console.log(out.join('\n'));
