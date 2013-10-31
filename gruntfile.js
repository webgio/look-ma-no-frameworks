module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          src: {
            files: {
              'public/app.js': ['app.js'],
              'specs/bundle.js': ['specs/*Specs.js']
            },
            options: {
              transform: ['hbsfy'],
              debug: true
            }
          }
        },
        shell: {
            httpserver: {
                command: 'http-server'
            }
        },
        watch: {
          browserify: {
            files: ["./*.js", "./*.hbs", "specs/*Specs.js"],
            tasks: ['browserify']
          }
        },
        concurrent: {
            target1: ['watch','shell'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['concurrent:target1']);

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
}
