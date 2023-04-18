const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash].js",
    assetModuleFilename: "assets/[name]_[hash:4][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
              }
            }
          },
          "sass-loader"
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash].css"
    }),
    new DotEnv({path:"./prod.env"})
  ],
  optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ["gifsicle", { interlaced: true, colors: 16 }],
                  // ["jpegtran", { progressive: true }],
                  ["mozjpeg", { progressive: true, quality:95 }],
                  ["optipng", { optimizationLevel: 8 }],
                  [
                    "svgo",
                    {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ], 
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `vendor/${packageName.replace("@", "")}`;
          },
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
})