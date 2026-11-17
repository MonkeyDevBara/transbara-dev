import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
// SSR: konten dari Supabase tampil langsung (HTML penuh untuk Google). Ganti adapter jika deploy ke Vercel/Cloudflare.
export default defineConfig({ site: 'https://dev.transbara.my.id', output: 'server', adapter: node({ mode: 'standalone' }), vite: { plugins: [tailwindcss()] } });
