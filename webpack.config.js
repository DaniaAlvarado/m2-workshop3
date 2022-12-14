const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
  devServer: {
    port: 3000,
  }, // main js
  output: {
    path: path.resolve(__dirname, "build"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/app/images/[name].[ext]',
              name: 'src/app/images/desktop[name].[ext]',
              name: 'src/app/images/mobile[name].[ext]'
            }

          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};