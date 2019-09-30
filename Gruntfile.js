/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const sass = require('node-sass')

module.exports = function (grunt) {
    'use strict';
    grunt.util.linefeed = '\n';
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            sass: {
                dev: {
                    options: {
                        implementation: sass,
                        sourceMap: true,
                        outputStyle: 'compressed',
                    },
                    files: {
                        'rabbit.min.css': 'scss/main.scss'
                    }
                },
                dist: {
                    options: {
                        implementation: sass,
                        sourceMap: true,
                        outputStyle: 'compressed',
                    },
                    files: {
                        'dist/<%= pkg.name %>-<%= pkg.version %>.min.css': 'scss/main.scss',
                        'dist/<%= pkg.name %>.min.css': 'scss/main.scss'
                    }
                },
                uncompressed: {
                    options: {
                        implementation: sass,
                        sourcemap: false,
                        outputStyle: 'expanded',
                    },
                    files: {
                        'dist/<%= pkg.name %>-<%= pkg.version %>.css': 'scss/main.scss'
                    }
                }
            },
            watch: {
                sass: {
                    files: 'scss/{,*/}*.scss',
                    tasks: ['sass:dev']
                }
            },
            sasslint: {
                target: ['scss/*.scss'],
            },
        }
    );
    require('load-grunt-tasks') (grunt, { scope: 'devDependencies' });
    grunt.registerTask('default', ['sasslint', 'sass:dist']);
    grunt.registerTask('rultor', ['sasslint', 'sass:dist', 'sass:uncompressed']);
    grunt.registerTask('dev', ['sasslint', 'sass:dev', 'watch']);
}

