'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.file.defaultEncoding = 'utf-8';

    grunt.initConfig({
        concat: {
            dist: {
                files: {
                    'bookmarklet.min.js': ['bookmarklet.js']
                }
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            dist   : {
                files: {
                    'bookmarklet.min.js': ['bookmarklet.min.js']
                }
            }
        }
    });

    grunt.registerTask('build', ['concat:dist', 'uglify:dist']);
};