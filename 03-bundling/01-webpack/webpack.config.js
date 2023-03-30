const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/students.js",
    // appStyles: "./src/styles.css",
    // vendorStyles: ['./node_modules/bootstrap/dist/css/bootstrap.css']
  },
  output: {
    filename:"[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,//
        exclude: /node_modules/,//
        use: ["style-loader","css-loader","sass-loader"],//3 pasos, de ultimo a primero para dev, a pelo
        // use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],//Igual, con miniCss para produccion
      }
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      //hash: true,//No necesario, hemos incluido "chunkhash" en el output{} de más arriba.
    }),
    new MiniCssExtractPlugin(),
  ],
};