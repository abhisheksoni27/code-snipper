#!/usr/bin/env node

const cli = require('yargs');
const codeSnipper = require(__dirname + '/../code-snipper.js');

var passedArguments = cli
    .usage('Usage: code-snipper <file-name> [options]')
    .help('h')
    .version()
    .describe('o', 'Set output file')
    .describe('r', 'Change resolution(1-5)')
    .describe('t', 'Change syntax theme. Supports all themes available in highlight.js')
    .describe('f', 'Change font. See documentation for more details.')
    .describe('fontSize', 'Adjust font-size')
    .alias('h', 'help')
    .alias('o', 'output')
    .alias('r', 'resolution')
    .alias('t', 'theme')
    .alias('f', 'font')
    .alias('v', 'version')
    .example('copper index.js', 'Prints index.js with default config')
    .epilog('© 2017')
    .argv;

const options = {};

//delete optional options
for (key in passedArguments) {
    //if value is not undefined/false/null, add it to options Object
    if (passedArguments[key]) {
        options[key] = passedArguments[key]
    }
}

const fileName = passedArguments._[0];

if (fileName !== undefined) {
    codeSnipper(fileName, options);
}