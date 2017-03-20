const fs = require('fs');
const webshot = require('webshot');
const VERSION = '9.10.0';

const opts = {
    resolution: 2.5,
    theme: 'hopscotch',
    font: 'Monoid',
    fontSize: 20
}

/**
 * Function to check whether file is JS or JSX.
 * This is used to define the parser to prettify code.
 * Currently only JS is supported. More formats are in development.
 * @param fileName: Name of the file.
 * @returns string: '.js' or '.jsx'
 */

function checkFileExtension(fileName) {

    const ext = '';

    if (fileName.endsWith('.js')) 
        return '.js';
    
    if (fileName.endsWith('.jsx')) 
        return '.jsx'

    return ext;
}

/**
 * Prettify code based on the extension of the file.
 */

const prettify = (source, ext) => {

    switch (ext) {
        case '.js':
            {

                return prettier.format(source, {
                    printWidth: 80,
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: "none",
                    bracketSpacing: true,
                    parser: 'babylon'
                });
            }

        case '.jsx':
    }

}

/**
 * Generates HTML.
 * Step 1. Initialize.
 * Step 2. Add proper font, and fontSize using options.
 * Step 3. Add css file name using theme option.
 */

function generateHTML(sourceCode, options) {
    let htmlTag = 'html';

    let bodyTag = 'body';

    let headTag = 'head';

    let preTag = 'pre';

    let codeTag = 'code';

    let styleTag = 'style'

    let theme = `${options.theme}.min.css`;

    let cssURL = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${VERSION}/styles/${theme}`;

    let scriptURL = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${VERSION}/highlight.min.js`;

    let style = options.style || `{font-family: ${options.font}; font-size:${options.fontSize};}`

    return `
    <${html}>
    <${head}> 
    <${styleTag}>
        ${style}
    </${styleTag}> 
    <link rel="stylesheet" href="${cssURL}"/> 
    <script src=${scriptURL}> 
    </${head}>
    <${body}>
    <${pre}>
        <${code}>
            ${sourceCode}
        </${code}>
    </${pre}>
    </${body}
    </${html}>
    `;

}

/**Main function.
 * Set default arguments,
 * if options are not passed
 */

function codeSnipper(fileName, options = opts) {

    //Add extension to the options
    options['ext'] = checkFileExtension(fileName);

    // Initialize webshot's configuration, setting resolution(zoomFactor) if passed.
    var webshotConfig = {
        siteType: 'html',
        zoomFactor: options.resolution || 2.5
    }

    const imageName = fileName + '.png';

    //Read File and prettify code. Synchronous version is used for simplicity
    const sourceCode = prettify(fs.readFileSync(fileName), options.ext);

    //Generate HTML
    const htmlString = generateGenericHTML(sourceCode, options);

    //Generate Image
    webshot(sourceCode, imageName, webshotConfig, (err) => {
        if (!err) 
            console.log('Image successfully saved as %s', imageName);
        else {
            throw new Error(err)
        }
        return;
    });
}