const gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
//const uglify = require('gulp-uglify');
//const obfuscate = require('gulp-obfuscate');

//comprimir codigo java script
//function compressJs() {
//    return gulp.src('./src/scripts/*js')
//        .pipe(uglify())
//        .pipe(obfuscate())
//        .pipe(gulp.dest('./build/scripts'));    
//}

function compilesSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilesSass));
    //gulp.watch('./src/scripts/*js', {ignoreInitial: false}, gulp.series(compressJs));
}