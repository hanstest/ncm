var assert = require('assert');

assert.equal(3, 3, '3 is equal to 3');
assert.equal(3, 3.0, '3 is equal to 3.0');
assert.equal('3', 3, '"3" is equal to 3');
assert.equal('abc', 'abc');

var obj = {a: 1};
assert.equal(obj, obj);