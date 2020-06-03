var config = require('./webpack.config.base');
var custom = require('./webpack.custom');
var styleRule = require('./webpack.styleRule');

const BundleTracker = require('webpack-bundle-tracker');

config.module = {rules: [styleRule.Production].concat(custom.rules)};
config.output.publicPath  = process.env.WEBPACK_OUTPUT_PUBLICPATH

config.plugins = [new BundleTracker({filename: './webpack-stats-prod.json'})].concat(config.plugins,custom.plugins);

module.exports = config
