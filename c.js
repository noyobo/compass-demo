'use strict';

var spawn = require('child_process').spawn;
var which = require('which').sync

var options = [
  'compile',
  'C:/E/github/compass-demo',
  'C:/E/github/compass-demo/sass/screen.scss',
  '--time',
  '--force',
  '--css-dir', 'css'
]

var compassExecutable = 'compass'
try {
  compassExecutable = which(compassExecutable);
} catch (err) {
  throw new Error(err)
}

var child = spawn(compassExecutable, options, {
  cwd: process.cwd()
});
var stdout = '';
var stderr = '';

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
  stdout += data
  console.log('stdout: ' + data);
});

child.stderr.setEncoding('utf8');
child.stderr.on('data', function(data) {
  stderr += data
  console.log('stderr: ' + data);
});

child.on('close', function(code) {
  console.log(code, stdout, stderr)
});
