var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

var DEST = 'build/';

gulp.task('scripts', function() {
    return gulp.src([
        'src/js/helpers/*.js',
        'src/js/*.js',
      ])
      .pipe(concat('custom.js'))
      .pipe(gulp.dest(DEST+'/js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(DEST+'/js'))
      .pipe(browserSync.stream());
});

// TODO: Maybe we can simplify how sass compile the minify and unminify version
var compileSASS = function (filename, options) {
  return sass('src/scss/*.scss', options)
        .pipe(autoprefixer('last 2 versions', '> 5%'))
        .pipe(concat(filename))
        .pipe(gulp.dest(DEST+'/css'))
        .pipe(browserSync.stream());
};

gulp.task('sass', function() {
    return compileSASS('custom.css', {});
});

gulp.task('sass-minify', function() {
    return compileSASS('custom.min.css', {style: 'compressed'});
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './production/index.html'
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('production/*.html', browserSync.reload);
  // Watch .js files
  //gulp.watch('src/js/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass', 'sass-minify']);
});

// Default Task
gulp.task('default', ['browser-sync', 'watch'  ]);
var webpackStream = require('webpack-stream');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var minimize = process.argv.indexOf('--minimize') !== -1;
var plugins = [];
var webpack = require("webpack");
 var named = require('vinyl-named');


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


 


gulp.task('build-style', function() {
    plugins.push(new webpack.optimize.UglifyJsPlugin({    compress: {
        warnings: true
    }, exclude: /css|png|jpg|gif｜\.min\.js$/, minimize: true }));
plugins.push(new webpack.optimize.DedupePlugin());
  return gulp.src('src/config/style.js')
    .pipe(named())
    .pipe(webpackStream({
        devtool: 'source-map',
        module: {
            loaders: [
                // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000' },
                { test: /\.css$/, loader: "style!css" }, {
                    test: /\.scss$/,
                    loaders: ["style", "css", "sass"]
                },
                { test: /\.(png|jpg|woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=img/[name].[ext]" }
            ]
        },
        plugins: plugins
    }))
    .pipe(gulp.dest('production/assets/css/'));
});

gulp.task('build-vendors', function() {
  return gulp.src('src/config/vendors.js')
      .pipe(named())
    .pipe(webpackStream({
        devtool: 'source-map',
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }, {
                    test: /\.scss$/,
                    loaders: ["style", "css", "sass"]
                }
            ]
        },
        plugins: plugins
    }))
    .pipe(gulp.dest('production/assets/js/'));
});