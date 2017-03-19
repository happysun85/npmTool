#!/usr/bin/env node
var program = require('commander')

var chalk = require('chalk')
var fs = require('fs');
var path = require('path');
require('shelljs/global');

var log = function(txt) {
  console.log(chalk.magenta.bold(txt))
};

var createProject = require('./create');

program
    .version('0.0.1')

    .option('-r --resume', 'my total resume', function() {
      log('我是一名node初学者')
    })

program
    .command('create <name>')
    .action(function(name) {
      createProject(name, 'angular')
    });

log('模块工作目录' + __dirname)
//npm config set registry http://registry.npmjs.org
program.parse(process.argv);
