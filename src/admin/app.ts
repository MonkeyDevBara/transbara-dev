import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;
const app = document.getElementById('app')!;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector(s) as T;
const esc = (v: unknown) => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

if (!url || !key) {
  app.innerHTML = `<div class="max-w-md p-6 card"><h1 class="font-display text-2xl font-extrabold">Supabase belum dikonfigurasi</h1><p class="mt-3 muted">Isi <code>PUBLIC_SUPABASE_URL</code> dan <code>PUBLIC_SUPABASE_ANON_KEY</code> di file <code>.env</code>, lalu restart server.</p></div>`;
  throw new Error('Supabase env belum diisi');
}
const sb = createClient(url, key);

type F = { k: string; l: string; t: 'text' | 'area' | 'num' | 'bool' | 'select' | 'image' | 'lines' | 'icon'; opts?: string[]; req?: boolean; hint?: string };
type Res = { label: string; table: string; cols: [string, string][]; fields: F[]; titleKey: string; newRow: Record<string, unknown> };
const ICONS = ['rocket','cart','phone','cap','factory','users','receipt','clock','school','bot','plug','wrench','spark','chart','shield','lock','trophy','bolt','puzzle','gift','chat','mail','pin','compass','file'];
const KINDS = ['erp','lms','crm','pos','ai','landing'];

const RES: Record<string, Res> = {
  services: { label: 'Layanan', table: 'services', titleKey: 'title', cols: [['title', 'Judul'], ['audience', 'Cocok untuk']], newRow: { icon: 'spark', featured: false },
    fields: [{ k: 'title', l: 'Judul', t: 'text', req: true }, { k: 'description', l: 'Deskripsi singkat', t: 'area' }, { k: 'audience', l: 'Cocok untuk', t: 'text', hint: 'mis. UMKM · Korporasi' }, { k: 'icon', l: 'Ikon', t: 'icon' }, { k: 'featured', l: 'Kartu lebar (featured)', t: 'bool' }] },
  portfolio_items: { label: 'Portofolio', table: 'portfolio_items', titleKey: 'title', cols: [['title', 'Proyek'], ['category', 'Kategori'], ['metric', 'Hasil']], newRow: { category: 'Web Platform', mock_kind: 'landing', is_dummy: false },
    fields: [{ k: 'title', l: 'Nama proyek', t: 'text', req: true }, { k: 'category', l: 'Kategori', t: 'text', hint: 'Dipakai sebagai tab filter. mis. Web Platform, Mobile App, AI, Sistem Bisnis' }, { k: 'metric', l: 'Hasil (1 baris)', t: 'text', hint: 'mis. Leads naik 3x' }, { k: 'image_url', l: 'Gambar proyek', t: 'image', hint: 'Kosongkan untuk memakai ilustrasi bawaan' }, { k: 'mock_kind', l: 'Ilustrasi bawaan', t: 'select', opts: KINDS }, { k: 'live_url', l: 'Link proyek live (opsional)', t: 'text' }, { k: 'is_dummy', l: 'Ini data contoh (dummy)', t: 'bool' }] },
  testimonials: { label: 'Testimoni', table: 'testimonials', titleKey: 'name', cols: [['name', 'Nama'], ['company', 'Perusahaan'], ['quote', 'Kutipan']], newRow: { rating: 5, is_dummy: false },
    fields: [{ k: 'name', l: 'Nama', t: 'text', req: true }, { k: 'role', l: 'Jabatan', t: 'text' }, { k: 'company', l: 'Perusahaan', t: 'text' }, { k: 'quote', l: 'Kutipan', t: 'area', req: true }, { k: 'rating', l: 'Rating (1-5)', t: 'num' }, { k: 'is_dummy', l: 'Ini testimoni contoh (dummy)', t: 'bool' }] },
  pricing_tiers: { label: 'Paket Harga', table: 'pricing_tiers', titleKey: 'name', cols: [['name', 'Paket'], ['price_label', 'Harga'], ['audience', 'Untuk']], newRow: { price_prefix: 'Mulai dari', features: [], highlighted: false },
    fields: [{ k: 'name', l: 'Nama paket', t: 'text', req: true }, { k: 'audience', l: 'Untuk siapa', t: 'text' }, { k: 'price_prefix', l: 'Awalan harga', t: 'text', hint: 'mis. Mulai dari / Harga' }, { k: 'price_label', l: 'Harga', t: 'text', req: true, hint: 'mis. Rp500rb / Custom quote' }, { k: 'description', l: 'Deskripsi', t: 'text' }, { k: 'features', l: 'Fitur (satu per baris)', t: 'lines' }, { k: 'highlighted', l: 'Tandai "Paling laris"', t: 'bool' }] },
  process_steps: { label: 'Proses Kerja', table: 'process_steps', titleKey: 'title', cols: [['title', 'Langkah'], ['output', 'Hasil']], newRow: {},
    fields: [{ k: 'title', l: 'Judul langkah', t: 'text', req: true }, { k: 'description', l: 'Deskripsi', t: 'area' }, { k: 'output', l: 'Hasil / output', t: 'text' }] },
  faqs: { label: 'FAQ', table: 'faqs', titleKey: 'question', cols: [['question', 'Pertanyaan']], newRow: {},
    fields: [{ k: 'question', l: 'Pertanyaan', t: 'text', req: true }, { k: 'answer', l: 'Jawaban', t: 'area', req: true }] },
};

let view = 'dashboard';
let toastT: number;
const toast = (m: string, bad = false) => { const t = $('#toast'); t.innerHTML = `<div class="card px-4 py-2 text-sm font-bold ${bad ? '!border-red-400' : ''}">${esc(m)}</div>`; clearTimeout(toastT); toastT = window.setTimeout(() => (t.innerHTML = ''), 3500); };
const fail = (e: { message: string } | null) => { if (e) { toast(e.message, true); return true; } return false; };

// ---------- auth ----------
async function boot() {
  const { data } = await sb.auth.getSession();
  if (!data.session) return loginView();
  const { data: ok, error } = await sb.rpc('is_admin');
  if (error || !ok) { await sb.auth.signOut(); return loginView(error ? `Gagal cek hak akses: ${error.message}` : 'Akun ini bukan admin.'); }
  shell(data.session.user.email ?? '');
}
function loginView(msg = '') {
  app.className = 'min-h-screen grid place-items-center p-4';
  app.innerHTML = `<form id="lf" class="card p-7 w-full max-w-sm grid gap-4"><img src="/img/logo.webp" alt="Transbara Dev" class="h-20 mx-auto" /><h1 class="font-hand text-3xl text-center tracking-wide">Admin CMS</h1>
    <label class="a-lbl">Email<input name="e" type="email" required autocomplete="username" class="field" /></label>
    <label class="a-lbl">Password<input name="p" type="password" required autocomplete="current-password" class="field" /></label>
    <p id="le" class="text-red-400 text-sm font-bold" role="alert">${esc(msg)}</p>
    <button class="btn btn-gold">Masuk</button></form>`;
  $<HTMLFormElement>('#lf').onsubmit = async e => {
    e.preventDefault(); const f = new FormData(e.target as HTMLFormElement);
    const { error } = await sb.auth.signInWithPassword({ email: String(f.get('e')), password: String(f.get('p')) });
    if (error) { $('#le').textContent = 'Email atau password salah.'; return; }
    boot();
  };
}

// ---------- shell ----------
const NAV: [string, string][] = [['dashboard', 'Dashboard'], ['leads', 'Leads Masuk'], ...Object.entries(RES).map(([k, r]) => [k, r.label] as [string, string]), ['settings', 'Pengaturan Situs']];
function shell(email: string) {
  app.className = 'min-h-screen grid md:grid-cols-[230px_1fr]';
  app.innerHTML = `<aside class="bg-surface p-4 md:min-h-screen md:sticky md:top-0 md:h-screen flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
      <img src="/img/logo.webp" alt="Transbara Dev" class="h-16 w-auto self-start hidden md:block mb-3" />
      ${NAV.map(([k, l]) => `<button class="a-nav" data-v="${k}">${l}</button>`).join('')}
      <div class="md:mt-auto grid gap-2 text-xs"><a href="/" target="_blank" class="a-btn justify-center">Lihat situs</a><span class="muted truncate" title="${esc(email)}">${esc(email)}</span><button id="out" class="a-btn justify-center">Keluar</button></div>
    </aside><main id="main" class="p-5 md:p-8 min-w-0"></main><dialog id="dlg"></dialog>`;
  app.onclick = onClick;
  $('#out').onclick = async () => { await sb.auth.signOut(); loginView(); };
  go(view);
}
async function go(v: string) {
  view = v;
  document.querySelectorAll('.a-nav').forEach(b => b.classList.toggle('on', (b as HTMLElement).dataset.v === v));
  const m = $('#main'); m.innerHTML = '<p class="muted">Memuat…</p>';
  try { if (v === 'dashboard') await dashboard(m); else if (v === 'leads') await leads(m); else if (v === 'settings') await settings(m); else await list(m, RES[v]); }
  catch (e) { m.innerHTML = `<p class="text-red-400 font-bold">Error: ${esc((e as Error).message)}</p>`; }
}
const head = (t: string, right = '') => `<div class="flex flex-wrap items-center justify-between gap-3 mb-6"><h1 class="font-display text-3xl font-extrabold">${t}</h1><div class="flex gap-2">${right}</div></div>`;

// ---------- dashboard ----------
async function dashboard(m: HTMLElement) {
  const tables = [...Object.values(RES).map(r => [r.label, r.table, r.table] as const), ['Leads baru', 'leads', 'leads']];
  const counts = await Promise.all(tables.map(async ([l, t]) => {
    let q = sb.from(t).select('*', { count: 'exact', head: true }); if (l === 'Leads baru') q = q.eq('status', 'baru');
    const { count, error } = await q; if (error) throw error; return [l, t, count ?? 0] as const;
  }));
  const dummy = await Promise.all(['portfolio_items', 'testimonials'].map(async t => (await sb.from(t).select('*', { count: 'exact', head: true }).eq('is_dummy', true)).count ?? 0));
  m.innerHTML = head('Dashboard') + `<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">${counts.map(([l, t, n]) => `<button data-v="${t === 'leads' ? 'leads' : t}" class="card p-5 text-left"><div class="font-hand text-5xl hl">${n}</div><div class="text-sm font-bold muted">${l}</div></button>`).join('')}</div>
  ${dummy[0] + dummy[1] ? `<div class="card p-5 mt-6 !border-yellow-400"><b>Masih ada data contoh (dummy) di situs:</b> ${dummy[0]} proyek portofolio, ${dummy[1]} testimoni. Ganti dengan data asli sebelum promosi.</div>` : ''}
  <p class="muted text-sm mt-6">Perubahan tampil di situs dalam ±30 detik (cache). Tutup tab ini dengan "Keluar" jika memakai komputer bersama.</p>`;
}

// ---------- generic list/CRUD ----------
let rows: any[] = [];
async function list(m: HTMLElement, r: Res) {
  const { data, error } = await sb.from(r.table).select('*').order('sort_order').order('created_at'); if (error) throw error; rows = data ?? [];
  m.innerHTML = head(r.label, `<button class="a-btn a-pri" data-act="new">+ Tambah</button>`) +
    (rows.length ? `<div class="card overflow-x-auto"><table class="a-tbl"><thead><tr><th></th>${r.cols.map(c => `<th>${c[1]}</th>`).join('')}<th>Tayang</th><th></th></tr></thead><tbody>${rows.map((x, i) => `<tr>
      <td class="whitespace-nowrap"><button class="a-btn !px-2 !py-0.5" data-act="up" data-id="${x.id}" ${i === 0 ? 'disabled style="opacity:.3"' : ''} aria-label="Naik">↑</button> <button class="a-btn !px-2 !py-0.5" data-act="down" data-id="${x.id}" ${i === rows.length - 1 ? 'disabled style="opacity:.3"' : ''} aria-label="Turun">↓</button></td>
      ${r.cols.map(([k]) => `<td class="max-w-xs"><div class="line-clamp-2">${esc(x[k])}${k === r.titleKey && x.is_dummy ? ' <span class="pill text-yellow-400">contoh</span>' : ''}</div></td>`).join('')}
      <td><input type="checkbox" data-act="pub" data-id="${x.id}" ${x.published ? 'checked' : ''} aria-label="Tayang" /></td>
      <td class="whitespace-nowrap text-right"><button class="a-btn" data-act="edit" data-id="${x.id}">Edit</button> <button class="a-btn a-del" data-act="del" data-id="${x.id}">Hapus</button></td></tr>`).join('')}</tbody></table></div>` : '<p class="muted">Belum ada data.</p>');
}
function fieldHtml(f: F, v: any) {
  const id = `f_${f.k}`, hint = f.hint ? `<span class="font-normal opacity-60">${esc(f.hint)}</span>` : '';
  const lbl = (inner: string) => `<label class="a-lbl">${esc(f.l)}${f.req ? ' *' : ''}${inner}${hint}</label>`;
  switch (f.t) {
    case 'area': return lbl(`<textarea name="${f.k}" rows="3" class="field" ${f.req ? 'required' : ''}>${esc(v)}</textarea>`);
    case 'num': return lbl(`<input name="${f.k}" type="number" min="1" max="5" value="${esc(v ?? 5)}" class="field" />`);
    case 'bool': return `<label class="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="${f.k}" ${v ? 'checked' : ''} /> ${esc(f.l)}</label>`;
    case 'select': return lbl(`<select name="${f.k}" class="field">${f.opts!.map(o => `<option ${o === v ? 'selected' : ''}>${o}</option>`).join('')}</select>`);
    case 'icon': return lbl(`<select name="${f.k}" class="field">${ICONS.map(o => `<option ${o === v ? 'selected' : ''}>${o}</option>`).join('')}</select>`);
    case 'lines': return lbl(`<textarea name="${f.k}" rows="5" class="field">${esc((v ?? []).join('\n'))}</textarea>`);
    case 'image': return `<div class="a-lbl">${esc(f.l)}<input type="hidden" name="${f.k}" value="${esc(v)}" /><div class="flex items-center gap-3">${v ? `<img src="${esc(v)}" alt="" class="h-16 rounded border-2 border-grape-700" id="${id}_p" />` : `<span class="opacity-60 font-normal" id="${id}_p">Belum ada gambar</span>`}<input type="file" accept="image/*" data-up="${f.k}" class="text-xs" />${v ? `<button type="button" class="a-btn" data-act="clearimg" data-k="${f.k}">Hapus gambar</button>` : ''}</div>${hint}</div>`;
    default: return lbl(`<input name="${f.k}" value="${esc(v)}" class="field" ${f.req ? 'required' : ''} />`);
  }
}
function openForm(r: Res, row: any | null) {
  const d = $<HTMLDialogElement>('#dlg'); const v = row ?? r.newRow;
  d.innerHTML = `<form id="ef" class="p-6 grid gap-4"><h2 class="font-display text-2xl font-extrabold">${row ? 'Edit' : 'Tambah'} ${r.label}</h2>${r.fields.map(f => fieldHtml(f, v[f.k])).join('')}
    <div class="flex justify-end gap-2 pt-2"><button type="button" class="a-btn" data-act="close">Batal</button><button class="a-btn a-pri">Simpan</button></div></form>`;
  d.showModal();
  $<HTMLFormElement>('#ef').onsubmit = async e => {
    e.preventDefault(); const f = new FormData(e.target as HTMLFormElement); const out: Record<string, unknown> = {};
    for (const fl of r.fields) {
      const raw = f.get(fl.k);
      out[fl.k] = fl.t === 'bool' ? raw === 'on' : fl.t === 'num' ? Math.min(5, Math.max(1, Number(raw) || 5)) : fl.t === 'lines' ? String(raw ?? '').split('\n').map(s => s.trim()).filter(Boolean)
        : fl.t === 'image' || fl.k === 'live_url' ? (String(raw ?? '').trim() || null) : String(raw ?? '').trim();
    }
    const q = row ? sb.from(r.table).update(out).eq('id', row.id) : sb.from(r.table).insert({ ...out, sort_order: Math.max(0, ...rows.map(x => x.sort_order)) + 10 });
    const { error } = await q; if (fail(error)) return;
    d.close(); toast('Tersimpan'); go(view);
  };
  d.querySelectorAll<HTMLInputElement>('input[type=file][data-up]').forEach(inp => inp.onchange = async () => {
    const file = inp.files?.[0]; if (!file) return;
    if (file.size > 5 * 1024 * 1024) return toast('Maksimal 5 MB', true);
    const path = `${r.table}/${Date.now()}-${file.name.replace(/[^a-z0-9._-]/gi, '_')}`;
    const { error } = await sb.storage.from('media').upload(path, file, { contentType: file.type }); if (fail(error)) return;
    const pub = sb.storage.from('media').getPublicUrl(path).data.publicUrl;
    (d.querySelector(`input[name=${inp.dataset.up}]`) as HTMLInputElement).value = pub;
    const p = $(`#f_${inp.dataset.up}_p`); p.outerHTML = `<img src="${esc(pub)}" alt="" class="h-16 rounded border-2 border-grape-700" id="f_${inp.dataset.up}_p" />`; toast('Gambar diunggah (klik Simpan)');
  });
}

async function onClick(e: Event) {
  const t = (e.target as HTMLElement).closest('[data-v],[data-act]') as HTMLElement | null; if (!t) return;
  if (t.dataset.v) return go(t.dataset.v);
  const act = t.dataset.act!, id = t.dataset.id, r = RES[view];
  if (act === 'close') return $<HTMLDialogElement>('#dlg').close();
  if (act === 'clearimg') { (document.querySelector(`#ef input[name=${t.dataset.k}]`) as HTMLInputElement).value = ''; t.parentElement!.querySelector('img')?.remove(); t.remove(); return; }
  if (act === 'new') return openForm(r, null);
  if (act === 'edit') return openForm(r, rows.find(x => x.id === id));
  if (act === 'pub') { const { error } = await sb.from(r.table).update({ published: (t as HTMLInputElement).checked }).eq('id', id!); if (fail(error)) go(view); return; }
  if (act === 'del') { const x = rows.find(y => y.id === id); if (!confirm(`Hapus "${x[r.titleKey]}"? Tidak bisa dibatalkan.`)) return; const { error } = await sb.from(r.table).delete().eq('id', id!); if (!fail(error)) { toast('Dihapus'); go(view); } return; }
  if (act === 'up' || act === 'down') {
    const i = rows.findIndex(x => x.id === id), j = act === 'up' ? i - 1 : i + 1; if (j < 0 || j >= rows.length) return;
    // tulis ulang urutan 10,20,30... agar tidak bentrok bila sort_order sama
    const order = rows.map(x => x.id); [order[i], order[j]] = [order[j], order[i]];
    const res = await Promise.all(order.map((oid, n) => sb.from(r.table).update({ sort_order: (n + 1) * 10 }).eq('id', oid)));
    if (res.some(x => fail(x.error))) return; go(view); return;
  }
  if (act === 'lead-del') { if (!confirm('Hapus lead ini?')) return; const { error } = await sb.from('leads').delete().eq('id', id!); if (!fail(error)) go('leads'); return; }
  if (act === 'csv') return exportCsv();
  if (act === 'stat-add') { const box = $('#stats'); box.insertAdjacentHTML('beforeend', statRow('', '')); return; }
  if (act === 'stat-del') return t.closest('.stat')!.remove();
}
app.addEventListener('change', async e => {
  const t = e.target as HTMLSelectElement;
  if (t.dataset.lead) { const { error } = await sb.from('leads').update({ status: t.value }).eq('id', t.dataset.lead); if (!fail(error)) toast('Status diubah'); }
  if (t.id === 'lf-filter') leadFilter = t.value, go('leads');
});

// ---------- leads ----------
let leadFilter = 'semua'; let leadRows: any[] = [];
const STATUS = ['baru', 'dihubungi', 'closing', 'batal'];
async function leads(m: HTMLElement) {
  let q = sb.from('leads').select('*').order('created_at', { ascending: false }).limit(500); if (leadFilter !== 'semua') q = q.eq('status', leadFilter);
  const { data, error } = await q; if (error) throw error; leadRows = data ?? [];
  m.innerHTML = head('Leads Masuk', `<select id="lf-filter" class="field !w-auto !py-1.5 !border-2">${['semua', ...STATUS].map(s => `<option ${s === leadFilter ? 'selected' : ''}>${s}</option>`).join('')}</select><button class="a-btn" data-act="csv">Ekspor CSV</button>`) +
    (leadRows.length ? `<div class="grid gap-4">${leadRows.map(l => `<article class="card p-5"><div class="flex flex-wrap justify-between gap-3"><div><b class="text-lg">${esc(l.name)}</b>${l.business ? ` <span class="muted">· ${esc(l.business)}</span>` : ''}<div class="text-xs muted">${new Date(l.created_at).toLocaleString('id-ID')}</div></div>
      <div class="flex items-center gap-2"><select data-lead="${l.id}" class="field !w-auto !py-1 !border-2">${STATUS.map(s => `<option ${s === l.status ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <a class="a-btn a-pri" target="_blank" rel="noopener" href="https://wa.me/${esc(waNum(l.whatsapp))}">WhatsApp</a><button class="a-btn a-del" data-act="lead-del" data-id="${l.id}">Hapus</button></div></div>
      <p class="mt-3 text-sm"><b>${esc(l.need ?? '-')}</b> · Budget: ${esc(l.budget ?? '-')} · ${esc(l.whatsapp)}</p>${l.message ? `<p class="mt-2 text-sm muted whitespace-pre-wrap">${esc(l.message)}</p>` : ''}</article>`).join('')}</div>` : '<p class="muted">Belum ada lead.</p>');
}
const waNum = (n: string) => { const d = n.replace(/\D/g, ''); return d.startsWith('0') ? '62' + d.slice(1) : d; };
function exportCsv() {
  const cols = ['created_at', 'name', 'whatsapp', 'business', 'need', 'budget', 'message', 'status'];
  const csv = [cols.join(','), ...leadRows.map(r => cols.map(c => `"${String(r[c] ?? '').replace(/"/g, '""')}"`).join(','))].join('\n');
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })), download: `leads-${new Date().toISOString().slice(0, 10)}.csv` }); a.click();
}

// ---------- settings ----------
const statRow = (v: string, l: string) => `<div class="stat flex gap-2"><input class="field !border-2 !border-grape-700" data-sv placeholder="Angka, mis. 7+" value="${esc(v)}" /><input class="field !border-2 !border-grape-700" data-sl placeholder="Label, mis. tahun" value="${esc(l)}" /><button type="button" class="a-btn a-del" data-act="stat-del">×</button></div>`;
async function settings(m: HTMLElement) {
  const { data, error } = await sb.from('site_settings').select('*'); if (error) throw error;
  const s: any = Object.fromEntries((data ?? []).map(x => [x.key, x.value]));
  const c = s.contact ?? {}, h = s.hero ?? {};
  const inp = (g: string, k: string, l: string, v: unknown, area = false, hint = '') => `<label class="a-lbl">${l}${area ? `<textarea name="${g}.${k}" rows="3" class="field">${esc(v)}</textarea>` : `<input name="${g}.${k}" value="${esc(v)}" class="field" />`}${hint ? `<span class="font-normal opacity-60">${hint}</span>` : ''}</label>`;
  m.innerHTML = head('Pengaturan Situs') + `<form id="sf" class="grid gap-6 max-w-3xl">
    <section class="card p-6 grid gap-4"><h2 class="font-extrabold text-lg">Kontak</h2>${inp('contact', 'phone', 'Nomor tampil', c.phone)}${inp('contact', 'wa', 'Nomor WhatsApp (format 62…)', c.wa, false, 'Dipakai untuk semua tombol WhatsApp. Contoh: 6282119589966')}${inp('contact', 'email', 'Email', c.email)}${inp('contact', 'address', 'Alamat', c.address, true)}${inp('contact', 'hours', 'Jam operasional', c.hours)}</section>
    <section class="card p-6 grid gap-4"><h2 class="font-extrabold text-lg">Hero (bagian paling atas)</h2>${inp('hero', 'badge', 'Stiker kecil', h.badge)}
      <div class="grid sm:grid-cols-3 gap-3">${inp('hero', 'before', 'Judul: awal', h.before)}${inp('hero', 'highlight', 'Judul: kata sorotan (emas)', h.highlight)}${inp('hero', 'after', 'Judul: akhir', h.after)}</div>${inp('hero', 'subtitle', 'Sub-judul', h.subtitle, true)}</section>
    <section class="card p-6 grid gap-3"><h2 class="font-extrabold text-lg">Angka pencapaian (di hero)</h2><div id="stats" class="grid gap-2">${(s.stats ?? []).map((x: any) => statRow(x.value, x.label)).join('')}</div><button type="button" class="a-btn w-fit" data-act="stat-add">+ Tambah angka</button></section>
    <section class="card p-6 grid gap-3"><h2 class="font-extrabold text-lg">Penghargaan</h2><label class="a-lbl">Satu per baris<textarea name="awards" rows="5" class="field">${esc((s.awards ?? []).join('\n'))}</textarea></label></section>
    <div><button class="a-btn a-pri">Simpan pengaturan</button></div></form>`;
  $<HTMLFormElement>('#sf').onsubmit = async e => {
    e.preventDefault(); const f = new FormData(e.target as HTMLFormElement);
    const g = (grp: string, ks: string[]) => Object.fromEntries(ks.map(k => [k, String(f.get(`${grp}.${k}`) ?? '').trim()]));
    const waVal = String(f.get('contact.wa') ?? '').replace(/\D/g, '');
    if (waVal.length < 9) return toast('Nomor WhatsApp tidak valid', true);
    const stats = [...document.querySelectorAll('#stats .stat')].map(r => ({ value: (r.querySelector('[data-sv]') as HTMLInputElement).value.trim(), label: (r.querySelector('[data-sl]') as HTMLInputElement).value.trim() })).filter(x => x.value);
    const payload = [
      { key: 'contact', value: { ...g('contact', ['phone', 'email', 'address', 'hours']), wa: waVal } },
      { key: 'hero', value: g('hero', ['badge', 'before', 'highlight', 'after', 'subtitle']) },
      { key: 'stats', value: stats },
      { key: 'awards', value: String(f.get('awards') ?? '').split('\n').map(x => x.trim()).filter(Boolean) },
    ];
    const { error } = await sb.from('site_settings').upsert(payload); if (!fail(error)) toast('Pengaturan tersimpan');
  };
}

sb.auth.onAuthStateChange(ev => { if (ev === 'SIGNED_OUT') loginView(); });
boot();
