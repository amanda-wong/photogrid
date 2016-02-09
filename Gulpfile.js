var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    gulpsass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

//
gulp.task('uglify', function(){//creating a function for what the var uglify should do
  gulp.src('./js/main.js') // where is the file you want to apply this uglify function to?
        .pipe(plumber({errorHandler: notify.onError("Error:<%= error.message %>")}))//Pipe step 1: when error is made, notify error message
        .pipe(uglify()) // call the uglify function and apply it to the main.js file located in the js folder
        .pipe(rename({extname: '.min.js'})) //rename the file within the main.js file to main.min.js and then ..
        .pipe(gulp.dest('./build/js')); // put it in the build folder
});

gulp.task('gulpsass', function() {
   gulp.src('./scss/*.scss')
      .pipe(gulpsass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build/css'))
      .pipe(minifyCSS())
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function(){ // creating a function for what the var watch should do
  gulp.watch(['./js/main.js'], ['uglify']); //watch the main.js file (located in the js folder) for changes, then uglify!
  gulp.watch(['scss/*.scss'], ['gulpsass']); //watch all files with the extension .scss (located in the sass file) for changes, then apply sass! (css preprocessor)
  gulp.watch(['./build/main.min.js', 'index.html', './build/css/style.min.css']).on('change', browserSync.reload); //watch the main.js file (located in the build folder) and index.html file for changes and show browser reload automatically
  browserSync.init({ //the broswerSync method takes in a few objects
    server: {
      baseDir: './'
    }
});
});

gulp.task('default', ['gulpsass', 'watch']);
