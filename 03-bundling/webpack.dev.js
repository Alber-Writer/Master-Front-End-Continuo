const common = require("./webpack.common.js");
const {merge} = require("webpack-merge");
const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode:"development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
        {
          loader: "css-loader",
          options: { 
            modules: {
              localIdentContext: path.resolve(__dirname, "src"),
              exportLocalsConvention: "camelCase",
              localIdentName: "[path][name]__[local]--[hash:base64:4]"
            }
          }
        },
        "sass-loader"
        ],
      },
    ]
  },
  devServer: {
    port: 8080,
    devMiddleware: { stats: "errors-only" },
    watchFiles: ["src/*.html"],//x defecto NO recarga html
    hot: true,//x defecto NO recarga html
  },
  devtool: "eval-source-map",
  plugins: [
    new DotEnv({path:"./dev.env"})
  ]
})