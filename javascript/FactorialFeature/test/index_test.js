var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output of 5! is equal to 120', () => {
      const expected = 120
      const inputNumber = 5
      const result = Calculate.factorial(inputNumber)
      assert.strictEqual(result, expected);
    });

    it('output of 3! is equal to 6', () => {
      const expected = 6
      const inputNumber = 3
      const result = Calculate.factorial(inputNumber)
      assert.strictEqual(result, expected);
    });

    it('output of 0! is equal to 1', () => {
      const expected = 1
      const inputNumber = 0
      const result = Calculate.factorial(inputNumber)
      assert.strictEqual(result, expected);
    });
  });
});