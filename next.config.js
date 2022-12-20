/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    // Descomentar para fazer push para o servidor | Comentar para teste local
    basePath: "/indicadores",
};

module.exports = nextConfig
