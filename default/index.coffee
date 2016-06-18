path = require 'path'

gulp = require 'gulp'
inquirer = require 'inquirer'
conflict = require 'gulp-conflict'
template = require 'gulp-template'
rename = require 'gulp-rename'
Promise = require 'bluebird'

gulp.task 'default', ->

  new Promise (resolve, reject) ->
    inquirer.prompt [
      type: 'input'
      name: 'name'
      message: 'App name'
      default: -> path.basename process.cwd()
    ,
      type: 'confirm'
      name: 'moveon'
      message: 'Continue?'
    ],
      resolve

  .then (answers) ->
    return Promise.reject 'Cancel' unless answers.moveon

    answers.repo or= "#{answers.name}/#{answers.name}"

    new Promise (resolve, reject) ->
      gulp.src __dirname + '/templates/**', {dot: true}
      .pipe template answers,
        interpolate:  /<%=([\s\S]+?)%>/g
      .pipe rename (path) ->
        path.basename = path.basename.replace /^__/, ''
        path
      .pipe conflict '.'
      .pipe gulp.dest '.'
      .on 'end', resolve

  .catch console.error

