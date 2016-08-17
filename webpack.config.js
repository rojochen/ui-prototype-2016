var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
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

if(minimize){
    plugins.push(new webpack.optimize.UglifyJsPlugin({      include: /\.min\.js$/ , minimize: true }));
}



module.exports = {
    entry: "./src/vendors.js",
    output: {
        path: "./production/js/",
        filename: minimize ?"vendors.min.js": "vendors.js"
    },
        devtool:'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    plugins: plugins
};