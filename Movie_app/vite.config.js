// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                // Target is the TMDB base URL
                target: 'https://api.themoviedb.org/3',
                // Must be true to change the host header to the target host
                changeOrigin: true, 
                // Setting secure to false can sometimes help with https targets
                secure: false, 
                // CRUCIAL: Rewrites '/api/movie/...' to '/movie/...' for the TMDB server
                rewrite: (path) => path.replace(/^\/api/, ''), 
            },
        },
    },
});