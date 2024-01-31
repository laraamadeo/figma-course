/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Añade la configuración para manejar archivos mp3
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/audio/', // Cambia la ruta de salida según tus necesidades
                    publicPath: isServer ? '../static/audio/' : '/_next/static/audio/', // Ajusta las rutas según tus necesidades
                },
            },
        });

        return config;
    },
};

export default nextConfig;
