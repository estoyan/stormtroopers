var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps  = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");

/**
 * Remove dist directory.
 */
gulp.task('clean', (cb) => {
    return del(["./dist"], cb);
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
        .pipe(gulp.dest("./dist"));
});
 
/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", () => {
    return gulp.src(["./public/**/*", "!**/*.ts"])
        .pipe(gulp.dest("./dist"));
});

/**
 * Copy all required libraries into dist directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'systemjs/dist/system.src.js',
            'rxjs/**/*',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js',
            '@angular/**/*',
            'core-js/client/*.min.js',
            'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            'moment/moment.js',
            'zone.js/dist/zone.min.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("./dist/lib"));
});
 
/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...");
});
