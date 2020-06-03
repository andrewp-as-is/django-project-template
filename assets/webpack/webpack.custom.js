var plugins = [];
var rules = [{
    test: /\.s[ac]ss$/i,
    use: [{
        loader: "sass-loader"
    }]
}];

module.exports = {
    plugins: plugins,
    rules: rules,
}
