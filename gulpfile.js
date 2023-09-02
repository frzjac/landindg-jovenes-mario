const gulp = require('gulp');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const livereload = require('gulp-livereload');
const browserSync = require('browser-sync').create();
// gulp.task('connect', () => {
//   connect.server({
//     root: './',
//     livereload: true,
//     port: 8080 // Puedes cambiar el puerto según tus preferencias
//   });
// });

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 3000, // Puedes cambiar el puerto según tus preferencias
  });
});

// Compila archivos Pug a HTML
gulp.task('pug', () => {
  return gulp.src('pug/*.pug')
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});


// Tarea para observar cambios en archivos Pug, CSS y JS
gulp.task('watch', () => {
  //livereload.listen();
  gulp.watch('pug/*.pug', gulp.series('pug'));
  gulp.watch('css/*.css').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
});


// Tarea predeterminada
gulp.task('default', gulp.parallel('watch','browser-sync'));