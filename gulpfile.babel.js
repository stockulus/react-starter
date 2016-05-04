'use strict'

import process from 'process'

import browserify from 'browserify'
import browserSync from 'browser-sync'
import gulp from 'gulp'
import clean from 'gulp-clean'
import sourcemaps from 'gulp-sourcemaps'
import util from 'gulp-util'
import assign from 'lodash.assign'
import runSequence from 'run-sequence'
import buffer from 'vinyl-buffer'
import sourceStream from 'vinyl-source-stream'
import watchify from 'watchify'

const options = assign({}, watchify.args, {
  entries: './source/js/',
  debug: true
})
const useWatchify = process.argv.length === 2 || (
  process.argv.length > 2 && process.argv[2].slice(0, 5) === 'watch')
const bundler = useWatchify ? watchify(browserify(options)) : browserify(options)
bundler.transform('babelify', {presets: ['es2015', 'react']})
bundler.on('log', util.log)

const bundle = () => bundler.bundle()
                     .on('error', util.log.bind(util, 'Browserify Error'))
                     .pipe(sourceStream('index.js'))
                     .pipe(buffer())
                     .pipe(sourcemaps.init({loadMaps: true}))
                     .pipe(sourcemaps.write('./'))
                     .pipe(gulp.dest('./build/js'))

gulp.task('clean', () => gulp.src('./build/**/*.*').pipe(clean()))

gulp.task('root', () => gulp.src('./source/*.*').pipe(gulp.dest('./build/')))
gulp.task('watch_root', ['root'], () => gulp.watch('./source/*.*', ['root']))

gulp.task('js', bundle)
gulp.task('watch_js', ['js'], () => bundler.on('update', bundle))

gulp.task('default', ['watch_root', 'watch_js'], () => {
  const browser = browserSync.create()
  browser.init({server: {baseDir: './build'}})

  gulp.watch(['./build/**/*.*', '!./build/js/*.js.map'], browser.reload)
})

gulp.task('build', (callback) => runSequence('clean', 'root', 'js', callback))
