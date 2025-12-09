import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            rollupTypes: true, // Merges types into one file
            tsconfigPath: './tsconfig.json'
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'nonk-ui': resolve(__dirname, 'src')   // ← ADD THIS
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'NonkUI',
            fileName: 'nonk-ui',
        },
        rollupOptions: {
            // Externalize Vue so we don't bundle it twice
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});