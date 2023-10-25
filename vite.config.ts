import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    return defineConfig({
        plugins: [react()],
        server: {
            port: parseInt(process.env.PORT),
            open: true,
            host: '0.0.0.0',
        },
        define: {
            'process.env': process.env,
        },
        resolve: {
            alias: {
                src: `${__dirname}/src`,
                '@routes': `${__dirname}/src/routes`,
                '@views': `${__dirname}/src/views`,
                '@components': `${__dirname}/src/components`,
            },
        },
    });
};
