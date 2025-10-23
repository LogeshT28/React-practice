import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

// 🧠 Force IPv4 lookup (prevents IPv6 timeout)
dns.setDefaultResultOrder('ipv4first');

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        secure: true, // can keep true for HTTPS
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
