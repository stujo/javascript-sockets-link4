var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(cb) {
    
  var started = false;
  
  return nodemon({
    script: 'src/server/main.js'
  }).on('start', function () {

    console.log('NODEMON ' + started);

    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

