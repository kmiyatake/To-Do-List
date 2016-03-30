var gulp = require('gulp');
var tsc = require('gulp-typescript');
var clean = require('gulp-clean');
var sourcemap = require('gulp-sourcemaps');
var del = require('del');
var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');
var serverTS = ["**/*.ts", "!node_modules/**"];

gulp.task('clean', function () {
    return gulp
        .src([
            'app/**/*.js',
            '**/*.js',
            '**/*.js.map',
            '!node_modules/**',
            '!gulpfile.js',
            '!gulp.config.js',
        ], {read: false})
        .pipe(clean())
});

gulp.task('ts', ['clean'], function() {
    return gulp
        .src(serverTS, {base: './'})
        //.pipe(tsc({target: "es5", module: 'commonjs', noImplicitAny: true, experimentalDecorators:true }))
        .pipe(tsc(tsProject))
        .pipe(gulp.dest('./'));
});

gulp.task('compile-ts',['clean'], function() {

	var sourceTsFiles = [
		config.allTs,
		config.typings
	];

	var toResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemap.init())
		.pipe(tsc(tsProject));

	return toResult.js
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest(config.toOutputhPath));
});

// gulp.task('default', ['clean', 'ts-lint', 'compile-ts']);
gulp.task('default', ['ts']);