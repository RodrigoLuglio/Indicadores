/** @type {import('next').NextConfig} */

const basepath = (process.env.NODE_ENV == 'development') ? "" : "/indicadores/api/auth";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    basePath: basepath,
};

module.exports = nextConfig

