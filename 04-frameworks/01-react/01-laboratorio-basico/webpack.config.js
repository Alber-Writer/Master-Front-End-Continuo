const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsConfigPathsPlugin()]
  },
  entry: {
    app: ["./index.tsx", "./global-css/styles.css"],
  },
  devtool: "eval-source-map",
  stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        include: /global-css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /global-css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules:{
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:3]",
                localIdentContext: path.resolve(basePath, "src"),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
  ],
};
