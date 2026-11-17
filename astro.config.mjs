import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: 'https://dev.transbara.my.id', vite: { plugins: [tailwindcss()] } });
