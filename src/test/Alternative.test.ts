import Alternative from '../Alternative';
import * as assert from 'assert';

suite('alternates operators', function () {
    const alternative = new Alternative();

    // Bool
    test('alternates bool just one word', () => {
      const word = 'true';
      const oppositeWord = 'false';

      assert.equal(alternative.alternate(word),'false');
      assert.equal(alternative.alternate(oppositeWord), 'true');
    });

    // Addition
    test('alternates addition only one symbol', () => {
      const word = '+';
      const oppositeWord = '-';

      assert.equal(alternative.alternate(word), '-');
      assert.equal(alternative.alternate(oppositeWord), '+');
    });

    // Multiplication
    test('alternates multiplication only one symbol', () => {
      const word = '*';
      const oppositeWord = '/';

      assert.equal(alternative.alternate(word), '/');
      assert.equal(alternative.alternate(oppositeWord), '*');
    });

    // Logical operator
    test('alternates logical only one symbol', () => {
      const word = '&&';
      const oppositeWord = '||';

      assert.equal(alternative.alternate(word), '||');
      assert.equal(alternative.alternate(oppositeWord), '&&');
    });

    // Equality operator
    test('alternates equality only one symbol', () => {
      const word = '==';
      const oppositeWord = '!=';

      assert.equal(alternative.alternate(word), '!=');
      assert.equal(alternative.alternate(oppositeWord), '==');
    });

    // Strict equality operator
    test('alternates strict equality only one symbol', () => {
      const word = '===';
      const oppositeWord = '!==';

      assert.equal(alternative.alternate(word), '!==');
      assert.equal(alternative.alternate(oppositeWord), '===');
    });

    // Greater operator
    test('alternates greater only one symbol', () => {
      const word = '>';
      const oppositeWord = '<';

      assert.equal(alternative.alternate(word), '<');
      assert.equal(alternative.alternate(oppositeWord), '>');
    });

    // Greater or equal operator
    test('alternates greater or equal only one symbol', () => {
      const word = '>=';
      const oppositeWord = '<=';

      assert.equal(alternative.alternate(word), '<=');
      assert.equal(alternative.alternate(oppositeWord), '>=');
    });

    // Increment operator
    test('alternates increment only one symbol', () => {
      const word = '++';
      const oppositeWord = '--';

      assert.equal(alternative.alternate(word), '--');
      assert.equal(alternative.alternate(oppositeWord), '++');
    });
});