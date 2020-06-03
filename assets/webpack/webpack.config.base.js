const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var entry = ['../entry.js'];

const output = {
  path: path.resolve('./assets/webpack_bundles/'),
  filename: "[name]-[hash].js"
}

var plugins = [
    new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
        chunkFilename: '[id]-[hash].css'
    })
]

module.exports = {
  context: __dirname,
  entry: entry,
  output: output,
  plugins: plugins
}
