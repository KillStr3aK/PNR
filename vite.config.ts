import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    plugins: [],
    server: { host: "0.0.0.0", port: 8000 },
    clearScreen: false,

    resolve: {
        alias: {
            "@SDK": path.resolve("./SDK")
        }
    }
})
