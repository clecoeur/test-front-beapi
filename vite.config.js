const { defineConfig } = require('vite');
const { resolve } = require('path');
const url = require('@rollup/plugin-url');

module.exports = defineConfig({
    root: resolve(__dirname, './src'),
    build: {
        rollupOptions: {
            plugins: [
                url({
                    include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
                    limit: 8192,
                    fileName: '[name]-[hash][extname]',
                    destDir: resolve(__dirname, './dist/assets/img')
                })
            ],
            emptyOutDir: true,
            output: {
                dir: resolve(__dirname, './dist'),
                entryFileNames: 'js/main.min.js',
                assetFileNames: 'css/app.min.css',
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
