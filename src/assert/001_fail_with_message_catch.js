var assert = require('assert');

try {
    assert.fail(1, 2, '1 is not equal to 2');
} catch (e) {
    console.log(e.message);
}
