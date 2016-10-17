var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    DEST = 'build/',
    war = require('gulp-war'),
    zip = require('gulp-zip'),
    exports = require('exports-loader'),
    expose = require('expose-loader'),
    webpackStream = require('webpack-stream'),
    BowerWebpackPlugin = require('bower-webpack-plugin'),
    webpack = require("webpack"),
    named = require('vinyl-named');

var productionJSPath = path.resolve('./production/assets/js');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var fs = require('fs');

var package = JSON.parse(fs.readFileSync('package.json'));


var jsDist = 'production/assets/js/';

var plugins = [];

var getStyleConfig = function () {
    plugins = [];
    return {
        devtool: 'eval',
        module: {
            loaders: [{
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass")
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css?minimize!sass")
            }, {
                test: /\.(jpg|woff|svg|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=img/[name].[ext]"
            }]
        },
        plugins: plugins
    };
};

gulp.task('build-style', function () {
    var config = getStyleConfig();
    config.plugins.push(new ExtractTextPlugin("style.css"));
    return gulp.src('src/config/style.js')
        .pipe(named())
        .pipe(webpackStream(config))
        .pipe(gulp.dest('production/assets/css/'));
});

gulp.task('build-app', function () {

    plugins.push(new webpack.optimize.DedupePlugin());
    return gulp.src('src/config/app.js')
        // .pipe(named())
        .pipe(webpackStream({
            cache: true,
            devtool: 'eval',
            output: {
                libraryTarget: 'umd',
                umdNamedDefine: true,
                publicPath: "assets/js/",
                filename: "app.js",
                chunkFilename: "chunk.[id].js",
                library: 'pokemon',
            },
            resolve: {
                modulesDirectories: ['vendors'],
                alias: {
                    ng: "angular/angular",
                    "angular-route": "angular-route/angular-route.min",
                    "angular-datatables": "angular-datatables/dist/angular-datatables",
                    bootstrap: "bootstrap/dist/js/bootstrap.min",
                    "bootstrap-switch": "bootstrap-switch/dist/js/bootstrap-switch.min",
                    "bootstrap-progressbar": "bootstrap-progressbar/bootstrap-progressbar",
                    cropper: "cropper/dist/cropper.min",
                    daterangepicker: "bootstrap-daterangepicker/daterangepicker",
                    "datatables.net": "datatables.net-bs/js/dataTables.bootstrap",
                    echarts: "echarts/dist/echarts.min",
                    "iCheck": "iCheck/icheck.min",
                    "ion.rangeSlider": "ion.rangeSlider/js/ion.rangeSlider.min",
                    jquery: "jquery/dist/jquery.min",
                    "jquery.blockUI": "blockUI/jquery.blockUI",
                    "jquery.tagsinput": "jquery.tagsinput/src/jquery.tagsinput",
                    "jquery-slimscroll": "jquery-slimscroll/jquery.slimscroll.min",
                    "jquery-knob": "jquery-knob/dist/jquery.knob.min",
                    "jquery.inputmask": "jquery.inputmask/dist/min/jquery.inputmask.bundle.min",
                    nprogress: "nprogress/nprogress",
                    moment: "moment/moment",
                    "mjolnic-bootstrap-colorpicker": "mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min",
                    pnotify: "pnotify/dist/pnotify",
                    "promise-finally": "promise-finally/Main",
                    skycons: "skycons/skycons",
                    select2: "select2/dist/js/select2.full.min",
                    sweetalert2: "sweetalert2/dist/sweetalert2",
                    parsleyjs: "parsleyjs/dist/parsley.min",
                    "angular-ui-grid": "angular-ui-grid/ui-grid.min"
                },
                extensions: ['', '.js']
            }, plugins: [
            ],
            module: {
                loaders: [
                    {
                        test: /pnotify.*\.js$/,
                        loader: "imports?define=>false,global=>window"
                    }
                ]
            }
        })).pipe(gulp.dest(jsDist));

});
gulp.task('build-all', ['build-app', 'build-style']);

gulp.task('build-war', function () {
    gulp.src(["./production/**"])
        .pipe(war({
            welcome: 'index.html',
            displayName: package.version, //form package.json.version
            version: package.version //form package.json.version
        }))
        .pipe(zip(package.name + '.war'))
        .pipe(gulp.dest("./dist"));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './production/demo/index.html'
    });
});

gulp.task('watch', function () {
    gulp.watch('production/demo/*.html', browserSync.reload);
    gulp.watch('src/scss/*.scss', ['sass', 'sass-minify']);
});

gulp.task('default', ['browser-sync', 'watch']);