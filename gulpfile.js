var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps  = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");

/**
 * Remove dist directory.
 */
gulp.task('clean', (cb) => {
    return del(["./public/dist"], cb);
});
 
/**
 * Compile TypeScript sources and create sourcemaps in dist directory.
 */
gulp.task("compile", () => {
    var tsResult = gulp.src("./public/app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./public/dist"));
});
 
/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", () => {
    return gulp.src(["./public/app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("./public/dist"));
});
 
/**
 * Copy all required libraries into dist directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("./public/dist/lib"));
});
 
/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...");
});
