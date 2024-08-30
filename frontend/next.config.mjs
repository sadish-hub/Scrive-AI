const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['img.freepik.com', 'veterinaire-tour-hassan.com'],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
