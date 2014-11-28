var gulp    = require('gulp'),
    less      = require('gulp-less'),
    wrap      = require('gulp-wrap'),
    watch     = require('gulp-watch'),
    concat    = require('gulp-concat'),
    insert    = require('gulp-insert'),
    uglify    = require('gulp-uglify'),
    connect   = require('gulp-connect'),
    cssmin    = require('gulp-minify-css'),
    templates = require('gulp-angular-templates');

var vendors = [
    'src/bower_components/jquery/dist/jquery.js',
    'src/bower_components/jquery-ui/jquery-ui.js',
    'src/bower_components/underscore/underscore.js',
    'src/bower_components/bootstrap/dist/js/bootstrap.js',

    'src/bower_components/bootstrap3-typeahead/bootstrap3-typeahead.min.js',
    'src/bower_components/w2ui/dist/w2ui.min.js',

    'src/bower_components/moment/moment.js',
    'src/bower_components/bootstrap-daterangepicker/daterangepicker.js',
    'src/bower_components/raphael/raphael.js'

];
var thirdparty_styles=[
    'src/bower_components/w2ui/dist/w2ui.min.css',
    'src/bower_components/bootstrap/dist/css/bootstrap.css',
    'src/bower_components/font-awesome/css/font-awesome.css',
	'src/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'

];
var styles = [
    'src/less/dashboard/variables.less',
    'src/less/dashboard/mixins.less',
    'src/less/dashboard/main.less',
    'src/less/dashboard/loading.less',
    'src/less/dashboard/content.less',
    'src/less/dashboard/header.less',
    'src/less/dashboard/sidebar.less',
    'src/less/dashboard/widgets.less',
    'src/less/dashboard/hamburg.less',
    'src/less/reset.less',
    'src/less/index.less',
    'src/less/sb-admin-2.less',
    'src/less/top.less',
    'src/less/combo.less',
	'src/less/w2ui.less'
];

var fonts = [
    'src/fonts/**.*',
    'src/bower_components/bootstrap/dist/fonts/*.{ttf,woff,eof,svg}',
    'src/bower_components/font-awesome/fonts/*.{ttf,woff,eof,svg}'
];

var paths = {
    js: ['src/js/common-init.js','src/js/center-init.js', 'dist/js/templates.js'],
	widget:['src/widget/**/*.*'],
    files: ['src/index.html','src/index-debug.html','src/json/**/*.*'],
    images: 'src/img/**/*.*',
    templates: 'src/templates/**/*.html',
    fonts: fonts,
	thirdparty_styles:thirdparty_styles,
    styles: styles,
    vendors: vendors,
	docs:['src/docs/**/*.*']
};

// The name of the Angular module which will be injected into the templates.
var moduleName = 'Dashboard';

// Minify and copy all 3rd party libs to vendors.min.js
gulp.task('copy-vendors', function() {
    return gulp.src(paths.vendors)
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Minify and copy all dashboard widget files to dashboard-widget.min.js
gulp.task('copy-widget', function() {
    return gulp.src(paths.widget)
        //.pipe(uglify())
        .pipe(concat('dashboard-widget.min.js'))
    // .pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/widget'));
});

// Minify and copy all dashboard example script files to dashboard-init.min.js
gulp.task('copy-scripts', function() {
    return gulp.src(paths.js)
        //.pipe(uglify())
      //  .pipe(concat('dashboard-init.min.js'))
    // .pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/js'));
});

// Minify and copy all angular templates to templates.min.js
gulp.task('copy-templates', function() {
    return gulp.src(paths.templates)
        .pipe(templates({module: moduleName}))
        .pipe(uglify())
        .pipe(concat('templates.min.js'))
    //.pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/js'));
});

// Copy all static/HTML files to output directory
gulp.task('copy-files', function(){
    return gulp.src(paths.files)
        .pipe(gulp.dest('dist'));
});

// Copy all images to output directory
gulp.task('copy-images', function(){
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

// Copy all fonts to output directory
gulp.task('copy-fonts', function(){
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'));
});

// Compile third party less styles into dashboard.css
gulp.task('compile-thirdparty-less', function(){
    return gulp.src(paths.thirdparty_styles)
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('thirdpart.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Compile less styles into dashboard.css
gulp.task('compile-less', function(){
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('dashboard.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//copy the help docs
gulp.task('copy-docs', function(){
    return gulp.src(paths.docs)
        .pipe(gulp.dest('dist/docs'));
});


/**
 * Watch src
 */
gulp.task('watch', function () {
    gulp.watch(paths.vendors, ['copy-vendors']);
    gulp.watch(paths.js, ['copy-scripts']);
    gulp.watch(paths.templates, ['copy-templates']);
    gulp.watch(paths.files, ['copy-files']);
    gulp.watch(paths.images, ['copy-images']);
    gulp.watch(paths.fonts, ['copy-fonts']);
    gulp.watch(paths.styles, ['compile-less']);
	gulp.watch(paths.docs, ['copy-docs']);
});

gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});

gulp.task('livereload', function() {
    gulp.src(['dist/**/*.*'])
        .pipe(watch())
        .pipe(connect.reload());
});

gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});

gulp.task('build', ['copy-vendors','copy-widget', 'copy-scripts', 'copy-templates', 'copy-files', 'copy-images', 'copy-fonts', 'compile-thirdparty-less','compile-less', 'copy-docs']);

//gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);
gulp.task('default', ['build', 'webserver']);
