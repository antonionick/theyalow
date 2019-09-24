const fs = require('fs');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: "./dev/theyalow.js",
  },
  output: {
    filename: "theyalow.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "postcss-loader",
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: '[name].html',
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theyalow.css',
    }),
  ],
  devServer: {
    open: true,
    overlay: true,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};