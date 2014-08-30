assert.equal = function equal(actual, expected, message) {
    if (actual != expected) {
        fail(actual, expected, message, '==', assert.equal);
    }
};