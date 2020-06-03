const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const Dev = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'postcss-loader', options: { plugins: () => [autoprefixer({ browsers: ['last 2 versions'] })] } },
    'sass-loader'
  ]
};

const Production = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'postcss-loader', options: { plugins: () => [autoprefixer({ browsers: ['last 2 versions'] })] } },
    'sass-loader'
  ]
};

module.exports = {
    Dev: Dev,
    Production: Production
}
