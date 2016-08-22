var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
var jquery = require('./vendors/jquery/dist/jquery.min.js');
plugins.push(new BowerWebpackPlugin({
    modulesDirectories: ["vendors"],
    manifestFiles: "bower.json",
    excludes: /.*\.less/
}));
plugins.push(new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            jQuery:'jquery',
            $:'jquery'
}));

 
plugins.push(new webpack.optimize.UglifyJsPlugin({ exclude: /\.min\.js$/ , minimize: true }));

console.log();
module.exports = {
    context: __dirname ,
    entry: {"vendors":__dirname+ "/src/config/vendors.js",'style':__dirname+ "/src/config/style.js"},
    output: {
        path: "./production/js/",
        filename:  "[name].js",
        
    },
    devtool:'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
             test: /\.scss$/,
             loaders: ["style", "css", "sass"]
            },
            { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    plugins: plugins
};