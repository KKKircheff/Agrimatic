import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(({command, mode}) => {
    const paths = ['varieties', 'contact'];
    const dynamicRoutes = paths.map((path) => `/${path}`);

    return {
        plugins: [
            react(),
            Sitemap({
                dynamicRoutes,
                hostname: 'https://agrimatic.bg',
                robots: [
                    {
                        userAgent: '*',
                        allow: '/',
                    },
                ],
            }),
        ],
        build: {
            minify: mode === 'production' ? 'terser' : false,
            sourcemap: mode === 'development', // disable sourcemap for production
            manifest: true,

            rollupOptions: {
                output: {
                    manualChunks(id: string) {
                        if (id.includes('@open-ish') || id.includes('tslib')) {
                            return '@open-ish';
                        }
                        if (
                            id.includes('react-router-dom') ||
                            id.includes('@remix-run') ||
                            id.includes('react-router')
                        ) {
                            return '@react-router';
                        }
                    },
                },
            },
        },
    };
});
