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
	'src/bower_components/bootstrap/dist/js/bootstrap.js',
	//'src/bower_components/html5shiv/dist/html5shiv.js',
	//'src/bower_components/respond/dest/respond.min',
    //'src/bower_components/underscore/underscore.js',
	//'src/bower_components/backbone/backbone.js',
	
	'src/bower_components/raphael/raphael.js',
	//'src/bower_components/highstock/highstock.js',
	//'src/bower_components/highcharts/highcharts-all.js',
	//'src/bower_components/highstock/modules/exporting.js',
    //'src/bower_components/highstock/modules/drilldown.js',
    //'src/bower_components/highstock/modules/data.js',
	'src/bower_components/w2ui/dist/w2ui.min.js',
	
	'src/bower_components/blockUI/jquery.blockUI.js',
	'src/bower_components/datatables/media/js/jquery.dataTables.js',
	'src/bower_components/jquery-treetable/jquery.treetable.js',  
	'src/bower_components/moment/moment.js',
    'src/bower_components/bootstrap-daterangepicker/daterangepicker.js',
    'src/bower_components/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js',
	'src/bower_components/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.zh-CN.js',
    'src/bower_components/bootstrap3-typeahead/bootstrap3-typeahead.min.js',
	'src/bower_components/bootstrap-select/js/bootstrap-select.js', 
	'src/bower_components/metisMenu/dist/metisMenu.js',
	'src/bower_components/iframe-resizer/src/iframeResizer.contentWindow.js',
    'src/bower_components/iframe-resizer/src/iframeResizer.js',
	'src/bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
	'src/bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
	'src/bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.extensions.js',
	'src/bower_components/aterrien/jQuery-Knob/js/jquery.knob.js',
	'src/bower_components/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js',
	'src/bower_components/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.zh-CN.js',
	
	'src/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.js',
	
	'src/js/third-party/datatablebootstrap/dataTables.bootstrap.js',
	'src/js/third-party/sparkline/jquery.sparkline.js',

];

var thirdparty_styles=[
    'src/bower_components/w2ui/dist/w2ui.min.css',
    'src/bower_components/bootstrap/dist/css/bootstrap.css',
    'src/bower_components/font-awesome/css/font-awesome.css',
	'src/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css',
	'src/bower_components/jquery-ui-bootstrap/css/custom-theme/jquery-ui-1.10.0.custom.css',
	'src/bower_components/jquery-treetable/css/jquery.treetable.css',
	'src/bower_components/jquery-treetable/css/jquery.treetable.theme.default.css',
	//'src/bower_components/datatables/media/css/jquery.dataTables.css',
	'src/bower_components/metisMenu/dist/metisMenu.css',
	'src/bower_components/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css',
	'src/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.css',
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
	
	'src/less/combo/combo.less',
    'src/less/reset.less',
    'src/less/index.less',
    'src/less/sb-admin-2.less',
    'src/less/top.less',
	'src/less/demandDegree/demandTable.less'
   
];

var fonts = [
    'src/fonts/**.*',
    'src/bower_components/bootstrap/dist/fonts/*.{ttf,woff,eof,svg}',
    'src/bower_components/font-awesome/fonts/*.{ttf,woff,eof,svg}'
];
var widget=[

	 'src/js/sone-widget/jquery.sone.combomenu.js',
	 'src/js/sone-widget/jquery.sone.demandgraph.js',
	 'src/js/sone-widget/jquery.sone.provincepicker.js',
	 'src/js/sone-widget/jquery.sone.demandTable.js'

];

var ui=[
    'src/js/sone-ui/jquery.sone.menu.js',
    'src/js/sone-ui/jquery.sone.header.js'
];

var example=[
    'src/js/sone-example/common-init.js',
	'src/js/sone-example/center-init.js'
];

var additionalJs=[
   // 'src/bower_components/iframe-resizer/src/iframeResizer.contentWindow.js',
    //'src/bower_components/iframe-resizer/src/iframeResizer.js'
];
var paths = {
	widget:widget,
    files: ['src/index.html','src/index-debug.html'],
	json:['src/json/**/*.*'],
    images: 'src/img/**/*.*',
    templates: 'src/templates/**/*.html',
    fonts: fonts,
	thirdparty_styles:thirdparty_styles,
    styles: styles,
    vendors: vendors,
	docs:['src/docs/**/*.*'],
	html5Patch:['src/bower_components/html5shiv/dist/html5shiv.js','src/bower_components/respond/src/respond.js']
};

// The name of the Angular module which will be injected into the templates.
var moduleName = 'Dashboard';

// Minify and copy all 3rd party libs to vendors.min.js
gulp.task('copy-vendors', function() {
    return gulp.src(paths.vendors)
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('dist/js/third-party'));
});

// Minify and copy all sone ui files to js/sone-ui/sone-ui.min.js
gulp.task('copy-soneui', function() {
    return gulp.src(ui)
        //.pipe(uglify())
        .pipe(concat('sone-ui.min.js'))
    // .pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/js/sone-ui'));
});

// Minify and copy all dashboard widget files to js/sone-widget/sone-widget.min.js
gulp.task('copy-widget', function() {
    return gulp.src(paths.widget)
        //.pipe(uglify())
        .pipe(concat('sone-widget.min.js'))
    // .pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/js/sone-widget'));
});

//copy all dashboard example script files to js/example
gulp.task('copy-example', function() {
    return gulp.src(example)
        //.pipe(uglify())
      //  .pipe(concat('dashboard-init.min.js'))
    // .pipe(insert.prepend('\'use strict\';'))
        .pipe(gulp.dest('dist/js/sone-example'));
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

// Copy all static/json files to output directory
gulp.task('copy-json', function(){
    return gulp.src(paths.json)
        .pipe(gulp.dest('dist/json'));
		
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
        .pipe(concat('third-party.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Compile less styles into dashboard.css
gulp.task('compile-less', function(){
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('sone-ui.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//copy the help docs
gulp.task('copy-docs', function(){
    return gulp.src(paths.docs)
        .pipe(gulp.dest('dist/docs'));
});

//copy the html5 patch
gulp.task('copy-html5', function(){
    return gulp.src(paths.html5Patch)
        .pipe(gulp.dest('dist/js/third-party/html5patch'));
});
//copy the additional Js 
gulp.task('copy-additionaljs', function(){
    return gulp.src(additionalJs)
        .pipe(gulp.dest('dist/js/third-party'));
});

/**
 * Watch src
 */
gulp.task('watch', function () {
    gulp.watch(paths.vendors, ['copy-vendors']);
    gulp.watch(paths.js, ['copy-soneui']);
	gulp.watch(paths.js, ['copy-example']);
    gulp.watch(paths.templates, ['copy-templates']);
    gulp.watch(paths.files, ['copy-files']);
    gulp.watch(paths.images, ['copy-images']);
    gulp.watch(paths.fonts, ['copy-fonts']);
    gulp.watch(paths.styles, ['compile-less']);
	gulp.watch(paths.docs, ['copy-docs']);
	gulp.watch(paths.docs, ['copy-html5']);
	gulp.watch(paths.docs, ['copy-additionaljs']);
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

gulp.task('build', ['copy-vendors','copy-soneui', 'copy-widget', 'copy-example', 'copy-templates', 'copy-files','copy-json', 
    'copy-images', 'copy-fonts', 'compile-thirdparty-less','compile-less', 'copy-docs', 'copy-html5']);

//gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);
 gulp.task('default', ['build', 'webserver']);
