// @ts-check
import { defineConfig } from 'astro/config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
    site: 'https://AldoRodriguez28.github.io',
    base: '/ServiciosPortafolio/',
  });

