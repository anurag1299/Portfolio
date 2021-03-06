const isprod = (process.env.NODE_ENV || "production") === "production";

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: "file-loader",
      options: {
        limit: 1024,
        name: "[name].[ext]",
        publicPath: "dist/assets/",
        outputPath: "dist/assets/",
      },
    });
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: "file-loader",
    });
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
  distDir: "build",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
  assetPrefix: isprod ? "./" : "",

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
