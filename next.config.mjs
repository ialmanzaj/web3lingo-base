/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "app.aprendiendodefi.com",
          },
        ],
        permanent: false,
        destination: "/learn",
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.aprendiendodefi.com",
          },
        ],
        permanent: false,
        destination: "https://aprendiendodefi.framer.ai/",
      },
      /* {
        source: '/',
        destination: 'https://aprendiendodefi.framer.ai/',
        permanent: true,
      }, */
    ];
  },
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.unsplash.com",],
  },
};
export default config;
