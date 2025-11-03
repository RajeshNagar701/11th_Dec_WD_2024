/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adocmedi.in',
        port: '',
        pathname: '/Frontend/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
