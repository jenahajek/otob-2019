// -------------------------------------
//   Config
// -------------------------------------
//  1 - Source root
//  2 - Distribution root
//  3 - set paths of assets
//  4 - set names for generated assets

var src  = './src/';  // 1
var dist = './docs/'; // 2

module.exports = {
  paths : { // 3
    styles : {
      src        : src + 'scss/**/*.scss',
      dest       : dist + 'css'
    },
    scripts : {
      src        : src + 'js/**/*.js',
      dest       : dist + 'js',
    },
    images : {
      src        : src + 'img/**/*',
      dest       : dist + 'img'
    },
    video : {
      src        : src + 'video/**/*',
      dest       : dist + 'video'
    },
    favicon : {
      src        : src + 'favicon/**/*',
      dest       : dist + 'favicon'
    },
    svg : {
      src        : src + 'svg/*.svg',
      dest       : dist + 'svg'
    },
    markup : {
      templates  : src + 'index.html',
      src        : src + 'index.html',
      dest       : dist
    },
    dist         : dist // used by clean task
  },
  names : { // 4
    css          : 'style.css',
    js : {
      app        : 'app.js'
    },
    svgSprite    : 'svgSprite.svg'
  }
};

