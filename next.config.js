module.exports = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      zlib: false,
      os: false,
      path: false,
      crypto: false,
      stream: false,
      http: false,
      net: false,
      dns: false,
      tls: false,
      "pg-native":false,
    };

    return config;
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    domains: [
      "picsum.photos",
      "loremflickr.com",
      "placeimg.com",
      "source.unsplash.com",
    ],
  },
};
