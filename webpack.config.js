var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
var jquery = require('./vendors/jquery/dist/jquery.min.js');
var css = process.argv.indexOf('--css') === -1;
var vendors = process.argv.indexOf('--vendors') === -1;
var joe = process.argv.indexOf('--joe') === -1;
var louis = process.argv.indexOf('--louse') === -1;

plugins.push(new BowerWebpackPlugin({
    modulesDirectories: ["vendors"],
    manifestFiles: "bower.json",
    excludes: /.*\.less/
}));
plugins.push(new webpack.ProvidePlugin({
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    jQuery: 'jquery',
    $: 'jquery'
}));


plugins.push(new webpack.optimize.UglifyJsPlugin({ exclude: /\.min\.js$/, minimize: true }));

var entry = {};
if (!css) {
    //"js/vendors":__dirname+ "/src/config/vendors.js",'css/style':__dirname+ "/src/config/style.js"

    entry["css/style"] = __dirname + "/src/config/style.js";
}
if (!vendors) {
    entry["js/vendors"] = __dirname + "/src/config/vendors.js";
}

if (!joe) {
    // {"js/joe":__dirname+ "/src/config/joe.js" ,"js/louis":__dirname+ "/src/config/louis.js"};
    entry["js/joe"] = __dirname + "/src/config/joe.js";
}
if (!louis) {
    entry["js/louis"] = __dirname + "/src/config/louis.js";
}
module.exports = {
    context: __dirname,
    entry: entry,
    output: {
        path: "./production/assets/",
        filename: "[name].js",
        publicPath: './assets/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, loader: "style!css" }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.(png|jpg|woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=img/[name].[ext]" }
        ]
    },
    plugins: plugins

};