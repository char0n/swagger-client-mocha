const { resolve } = require('../src/index.cjs');

describe('test', function () {
    it('test', function () {
        resolve().then(console.dir);
    });
});