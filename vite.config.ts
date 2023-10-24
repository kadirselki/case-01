import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

    return defineConfig({
        plugins: [react()],
        server: {
            port: parseInt(process.env.PORT),
            open: true,
            host: "0.0.0.0",
        },
        resolve: {
            alias: {
                src: `${__dirname}/src`,
            },
        },
    });
};
