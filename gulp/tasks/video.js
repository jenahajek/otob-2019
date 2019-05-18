// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp     : The streaming build system
// plumber  : Prevent pipe breaking
// imagemin : Minify PNG, JPEG, GIF and SVG images
// pngquant : imagemin plugin for compressing PNG
// webp     : converts PNG, JPEG, TIFF to WebP
//
// -------------------------------------
var gulp     = require('gulp');
var plumber  = require('gulp-plumber');

// Relative path to config file
var config   = require('../config');



// -------------------------------------
//   images
// -------------------------------------
//  Takes images from `frontend-src` folder, compress them and outputs to
//  frontend-dist folder.
//
gulp.task('video', function(){
    return gulp.src(config.paths.video.src)
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.video.dest));
});
