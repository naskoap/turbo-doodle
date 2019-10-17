const assert = require('assert')
const operations = require('../main/promises.js')

it('resolves a promise', () => {
    assert.strictEqual(operations.askMom());
})
