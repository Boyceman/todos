var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var paths = {
  pages:['src/*.html']
}
gulp.task('copy-html',function(){
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'));
})

gulp.task('default',function(){
  return browserify({
    basedir:'.',
    debug:true,
    entries:['src/main.ts'],
    cache:{},
    packageCache:{}
  })
    .plugin(tsify)
    .bundle()
    .pipe(sources('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});
