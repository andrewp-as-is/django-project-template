var config = require('./webpack.config.base');
var custom = require('./webpack.custom');
var styleRule = require('./webpack.styleRule');

const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

const public = (process.env.NGROK_WEBPACK_TUNNEL) ? process.env.NGROK_WEBPACK_TUNNEL : 'localhost:3000';
const publicPath = (process.env.NGROK_WEBPACK_TUNNEL) ? public+'/' : 'http://'+public+'/';

console.log(publicPath);
config.entry = config.entry.concat([
  'webpack-dev-server/client?'+publicPath, // WebpackDevServer host and port
  'webpack/hot/only-dev-server'         // "only" prevents reload on syntax errors];
])

config.module = {rules: [styleRule.Dev].concat(custom.rules)};
config.output.publicPath  = publicPath

config.plugins = [new BundleTracker({filename: './webpack-stats.json'})].concat(
  config.plugins,custom.plugins,[
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]);

config.devServer = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  disableHostCheck: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  host: '0.0.0.0',
  port: 3000,
  public: public
}

module.exports = config
