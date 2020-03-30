const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [new HtmlWebpackPlugin({ title: 'UI Splitoff'})],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  }
};