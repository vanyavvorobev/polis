import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/main.tsx'],
            refresh: true,
        }),
        react()
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    resolve: {
        alias: {
        "@app": path.resolve(__dirname, "resources/app"),
        "@pages": path.resolve(__dirname, "resources/pages"),
        "@components": path.resolve(__dirname, "resources/components"),
        "@features": path.resolve(__dirname, "resources/features"),
        "@shared": path.resolve(__dirname, "resources/shared"),
        }
    }
});
