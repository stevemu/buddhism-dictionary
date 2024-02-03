/**
 * next.config.js
 * NextJS is "zero-config" but this optional file lets us extend it, e.g. via plugins.
 * This config file is NOT transformed by babel (so lang features depend on local node version).
 * Also, for now, next.config.js is limited to CJS (vs ESM), hence `require` and `module.exports`.
 * see https://github.com/vercel/next.js/issues/9607
 *
 * If this issue ^ hasn't been resolved, and there's a pressing need for an ESM-only module,
 * take a look at https://github.com/martpie/next-transpile-modules as a potential workaround.
 */

// `next-compose-plugins` is a much nicer way to config plugins (vs nested HOCs)
// https://github.com/cyrilwanner/next-compose-plugins
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// FYI, these consts are helpful for more advanced config
// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_PRODUCTION_SERVER,
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_EXPORT,
// } = require('next/constants');

// Convention: alphabetized top-level nextConfig properties
const nextConfig = {
  // Default value is `.next`; setting it explicitly bc serverless-nextjs component requires it
  distDir: '.next',

  images: {
    domains: [],
  },

  // highlight unsafe lifecycles, legacy API usage, etc. (in dev-mode only)
  reactStrictMode: true,

  // target: 'server' // <- default for nextjs
  // target: 'serverless' // <- default for @sls-next/serverless-component; highly problematic (TUX-1423)
  // target: 'experimental-serverless-trace' // <- default for vercel deployments, recommended for other sls hosts
  // sls-next/serverless-component overrides the target via serverless.yml `useServerlessTraceTarget: true`

  // This webpack fn is exec'd 2x (server + client); can use "isServer" property if nec.
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Important: return the modified config
    return config;
  },
};

// to make env variables available in the app
const envVariables = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    // add other env variables here
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    envVariables,
    // your other plugins here
  ],
  nextConfig
);
