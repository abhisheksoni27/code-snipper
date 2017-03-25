const tape = require('tape');

const styleNames = require('../utility/styleNames.js');

function checkIfThemeExists(themeName){
    if(styleNames.indexOf(themeName)!==-1) return true;
    return false;
}

tape('Check If Theme Exists', (test)=>{
    test.plan(7);
    test.false(checkIfThemeExists(), 'No arguments');
    test.true(checkIfThemeExists('kimbie-dark'), 'Theme name');
    test.true(checkIfThemeExists('github'), 'Theme name');
    test.false(checkIfThemeExists('', 'nice'), 'Extra Arguments');
    test.false(checkIfThemeExists('abercombie'), 'Invalid theme name');
    test.false(checkIfThemeExists('githubb'), 'Typo theme name');
    test.false(checkIfThemeExists(''), 'Empty string');
});