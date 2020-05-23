import Alternative from '../Alternative';
import * as assert from 'assert';

suite('alternates operators', function () {

    // Bool
    test('alternates bool just one word', () => {
      const word = 'true';
      const oppositeWord = 'false';

      assert.equal(Alternative.alternate(word),'false');
      assert.equal(Alternative.alternate(oppositeWord), 'true');
    });

    // Addition
    test('alternates addition only one symbol', () => {
      const word = '+';
      const oppositeWord = '-';

      assert.equal(Alternative.alternate(word), '-');
      assert.equal(Alternative.alternate(oppositeWord), '+');
    });

    // Multiplication
    test('alternates multiplication only one symbol', () => {
      const word = '*';
      const oppositeWord = '/';

      assert.equal(Alternative.alternate(word), '/');
      assert.equal(Alternative.alternate(oppositeWord), '*');
    });

    // Logical operator
    test('alternates logical only one symbol', () => {
      const word = '&&';
      const oppositeWord = '||';

      assert.equal(Alternative.alternate(word), '||');
      assert.equal(Alternative.alternate(oppositeWord), '&&');
    });

    // Equality operator
    test('alternates equality only one symbol', () => {
      const word = '==';
      const oppositeWord = '!=';

      assert.equal(Alternative.alternate(word), '!=');
      assert.equal(Alternative.alternate(oppositeWord), '==');
    });

    // Strict equality operator
    test('alternates strict equality only one symbol', () => {
      const word = '===';
      const oppositeWord = '!==';

      assert.equal(Alternative.alternate(word), '!==');
      assert.equal(Alternative.alternate(oppositeWord), '===');
    });

    // Greater operator
    test('alternates greater only one symbol', () => {
      const word = '>';
      const oppositeWord = '<';

      assert.equal(Alternative.alternate(word), '<');
      assert.equal(Alternative.alternate(oppositeWord), '>');
    });

    // Greater or equal operator
    test('alternates greater or equal only one symbol', () => {
      const word = '>=';
      const oppositeWord = '<=';

      assert.equal(Alternative.alternate(word), '<=');
      assert.equal(Alternative.alternate(oppositeWord), '>=');
    });

    // Increment operator
    test('alternates increment only one symbol', () => {
      const word = '++';
      const oppositeWord = '--';

      assert.equal(Alternative.alternate(word), '--');
      assert.equal(Alternative.alternate(oppositeWord), '++');
    });

    // Bool Python
    test('alternates bool Python', () => {
      const word = 'True';
      const oppositeWord = 'False';

      assert.equal(Alternative.alternate(word), 'False');
      assert.equal(Alternative.alternate(oppositeWord), 'True');
    });
});