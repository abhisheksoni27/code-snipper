//#!usr/bin/env node
const cli = require('yargs');

var arguments = cli
    .usage('Usage: code-snipper <file-name> [options]')
    .help('h')
    .describe('r', 'Change resolution(1-5)')
    .describe('t', 'Change syntax theme. Supports all themes available in highlight.js')
    .describe('f', 'Change font. See documentation for more details.')
    .describe('fontSize', 'Adjust font-size')
    .alias('h', 'help')
    .alias('r', 'resolution')
    .alias('t', 'theme')
    .alias('f', 'font')
    .example('code-snipper index.js', 'Prints index.js with default config')
    .epilog('© 2017')
    .argv;

//initialize an empty object

const options = {};

//delete optional options
for (key in arguments) {
    //if value is not undefined/false/null, add it to options Object
    if (arguments[key]) {
        options[key] = arguments[key]
    }
}

//codeSnipper(fileName, options)

//fileName: argv._[0]