const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, '/../app/src/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/../dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/../app/index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['latest'],
        },
      }],
    }],
  },
};
