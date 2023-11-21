const assert = require('assert');
const Rooster = require('../index');

describe('rooster', () => {
  describe('announce dawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';

      // call Rooster.announceDawn() and store result in variable
      const result = Rooster.announceDawn()

      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
    }); 
  });

  describe('time at dawn', () => {
    it('returns its argument as a string.', () => {
      const expected = '5'
      const result = Rooster.timeAtDawn(5)
      assert.strictEqual(result, expected);
    })

    it('throws an error if passed a number less than 0', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(-1);
        },
        RangeError
      );
    });

    it('throws an error if passed a number greater than 23', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(27);
        },
        RangeError
      );
    });
    
  });
});