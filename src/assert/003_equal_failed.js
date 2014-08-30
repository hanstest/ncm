var assert = require('assert');

assert.equal(3, 2, '3 is equal to 2');
assert.equal({a: 1}, {a: 1}); /*@\label{line_equal_failed}@*/
