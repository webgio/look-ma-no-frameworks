module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          src: {
            files: {
              'public/app.js': ['app.js'],
              'specs_bundle.js': ['specs/*Specs.js']
            },
            options: {
              transform: ['hbsfy'],
              debug: true
            }
          }
        },
        watch: {
          browserify: {
            files: ["./*.js", "./*.hbs", "specs/*Specs.js"],
            tasks: ['browserify']
          }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
}
