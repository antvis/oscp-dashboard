import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin}  from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteExternalsPlugin({
    }),
    react(),
  ],
});
