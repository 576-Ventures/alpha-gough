const assert = require('assert')

describe('Gough', () => {
  it('should drop', () => {
    const drop = true
    const expected = drop === true
    const actual = !!drop
    assert.strictEqual(actual, expected)
  })
})
