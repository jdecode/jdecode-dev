import { fileURLToPath, URL } from "node:url";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 1111,
    },
    plugins: [vue()],
    base: "/jdecode-dev/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})