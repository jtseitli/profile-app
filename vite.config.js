import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/profile-app/',
  plugins: [react()],
  server: {
    open: '/profile-app/',
    historyApiFallback: true,
  },
});
