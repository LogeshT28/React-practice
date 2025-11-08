import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('error', (err) => {
            console.log('🔴 Proxy Error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('➡️ Requesting:', proxyReq.path);
          });
        },
      },
    },
  },
});