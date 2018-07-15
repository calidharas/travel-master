    var gulp          = require('gulp'),
        postcss       = require('gulp-postcss'),
        cssvars       = require('postcss-simple-vars'),
        nested        = require('postcss-nested'),
        cssImport     = require('postcss-import'),
        autoprefixer  = require('autoprefixer'),
        mixins          = require('postcss-mixins');
        sass          = require('gulp-sass');
        

        function errorLog(error) {
            console.log(error.toString())
                  this.emit('end');
        }

        gulp.task('styles', function()  {


            return gulp.src('./app/assets/styles/styles.css')  
              
              .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
              .on('error', errorLog)
              .pipe(gulp.dest('./app/temp/styles'));
          });


        