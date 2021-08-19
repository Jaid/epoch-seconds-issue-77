import {merge} from "webpack-merge"
import path from "node:path"
import {CleanWebpackPlugin} from "clean-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import PkgBannerPlugin from "pkg-banner-webpack-plugin"

const entryFolder = "P:/Git/epoch-seconds-issue-77/src"

const options = {
  development: false,
  packageRoot: "P:/Git/epoch-seconds-issue-77",
  outDir: "P:/Git/epoch-seconds-issue-77/dist/testOutput"
}

/**
 * @type {import("webpack").Configuration}
 */
const baseConfig = {
  context: path.resolve(options.packageRoot),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".yml"],
  },
  mode: options.development ? "development" : "production",
  devtool: options.development ? "eval-source-map" : "source-map",
  optimization: {},
  module: {
    // TODO file-loader, url-loader and raw-loader are deprecated, replace with Webpack Asset Modules, see https://webpack.js.org/guides/asset-modules and https://dev.to/smelukov/webpack-5-asset-modules-2o3h
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        oneOf: [
          {
            resourceQuery: /\?aot$/,
            use: [
              "aot-loader",
              "babel-loader",
            ],
          },
          {
            include: entryFolder,
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(hbs|handlebars)$/,
        oneOf: [
          {
            resourceQuery: /\?html/,
            loader: "handlebars-loader",
          },
          {
            loader: "handlebars-loader",
            options: {
              precompileOptions: {
                noEscape: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin,
    // new webpack.LoaderOptionsPlugin({
    //   debug: options.development,
    //   minimize: !options.development,
    // }),
    new CopyWebpackPlugin({
      patterns: [{
        from: "license.txt",
        noErrorOnMissing: true
      }]
    }),
    new PkgBannerPlugin
  ],
  output: {
    path: options.outDir,
    filename: "index.js",
  },
  // stats: {
  //   all: false,
  //   assets: true,
  //   assetsSort: "!size",
  //   excludeAssets: /.(map|d.ts)$/,
  //   colors: true,
  //   warnings: true,
  //   errors: true,
  //   errorDetails: true,
  // },
  performance: {
    maxEntrypointSize: 4 * 1000 * 1000, // 4 MB
    maxAssetSize: 4 * 1000 * 1000, // 4 MB
  },
}

/**
 * @type {import("webpack").Configuration}
 */
const typeConfig = {
  experiments: {
    outputModule: true
  },
  output: {
    // TODO libraryTarget should be “module” as soon as it's better supported by Webpack. “outputModule” is currently only an experiment, see https://webpack.js.org/configuration/experiments/
    libraryTarget: "module",
    // globalObject: "this",
    // library: "epochSecondsIssue77"
  }
}

/**
 * @type {import("webpack").Configuration}
 */
const extraConfig = {
  target: "web",
  output: {
    chunkFormat: "module",
  },
}

export default merge([baseConfig, typeConfig, extraConfig])