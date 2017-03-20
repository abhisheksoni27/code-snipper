var utility = require('../utility.js');

var test = require('tape');

var chalk = require('chalk');

test('Provides a random number (1-5)', (assert) => {
    assert.plan(1);
    assert.equal(utility.l(),0);
});