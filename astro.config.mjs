import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// INSTRUCCIÓN PARA MIXTLI:
// Cambia 'Montserrat' por la fuente del sector del cliente
// (tabla en references/design-system.md §4)
// Default seguro: Montserrat. El build funciona sin reemplazarlo.

export default defineConfig({
  output: 'static',

  security: {
    csp: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-heading',
      weights: [400, 600, 700],
      subsets: ['latin', 'latin-ext'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
    },
  ],
});
