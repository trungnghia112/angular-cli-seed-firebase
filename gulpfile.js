const path = {
  assets: './src/assets',
  assets_temp: './src/assets_temp',
  dist: './dist',
  npm: 'node_modules'
};
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
  gulp.src(path.assets_temp + '/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(path.assets))
);
