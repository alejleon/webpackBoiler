const path = require('path');
// const htmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {

  entry: path.resolve(__dirname, './src/index.js'),
  // mode: 'development',
  // devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader'
        },
      },
      {
        test: /\.(svg|png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [new MiniCssExtractPlugin()],

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },

  // devServer: {
  //   static: path.resolve(__dirname, './public'),
  //   hot: true
  // },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     },
  //     {
  //       test: /\.(sa|sc|s)ss$/,
  //       use: [
  //         {
  //           loader: MiniCssExtractPlugin.loader
  //         },
  //         {
  //           loader: "css-loader"
  //         },
  //         {
  //           loader: "postcss-loader",
  //         },
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             implementation: require("sass")
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "bundle.css"
  //   }),
  //   new htmlPlugin({template: './public/index.html'})
  // ],

  // mode: 'development'
}