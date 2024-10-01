/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.moody.mx',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
