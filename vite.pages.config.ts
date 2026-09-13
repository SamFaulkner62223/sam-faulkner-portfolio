import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
import { mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
const base='/sam-faulkner-portfolio';
export default defineConfig({
 base:base+'/',
 resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
 define:{'process.env.NEXT_PUBLIC_BASE_PATH':JSON.stringify(base)},
 css:{postcss:{plugins:[tailwindcss()]}},
 build:{outDir:'dist-pages'},
 plugins:[react(),{name:'digital-card-entry',closeBundle(){mkdirSync('dist-pages/links',{recursive:true});copyFileSync('dist-pages/index.html','dist-pages/links/index.html');writeFileSync('dist-pages/.nojekyll','');}}],
});
