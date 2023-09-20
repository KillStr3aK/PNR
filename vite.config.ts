import { defineConfig as DefineConfig} from "vite";
import Path from "path";

export default DefineConfig({
    plugins: [],
    server: { host: "0.0.0.0", port: 8000 },
    clearScreen: false,

    resolve: {
        alias: {
            "@SDK": Path.resolve("./SDK")
        }
    }
})
