/**
 * Sole purpose of this class is to receive a input and return its alternative.
 *
 * @class Alternative
 */
class Alternative {

  public static alternate(operator: string): string {

    switch (operator) {
      // Addition - Subtraction
      case '+':
        return '-';
      case '-':
        return '+';

      // Multiplication - Division
      case '*':
        return '/';
      case '/':
        return '*';

      // Conjunction - Disjunction
      case '&&':
        return '||';
      case '||':
        return '&&';

      // Equal - Not Equal
      case '==':
        return '!=';
      case '!=':
        return '==';

      // Strict Equal - Strict Not Equal
      case '===':
        return '!==';
      case '!==':
        return '===';

      // Greater than - Lower than
      case '>':
        return '<';
      case '<':
        return '>';

      // Greater or equal - Lower or equal
      case '>=':
        return '<=';
      case '<=':
        return '>=';

      // Increment - Decrement
      case '--':
        return '++';
      case '++':
        return '--';

      // True - False
      case 'true':
        return 'false';
      case 'false':
        return 'true';

      //Python True - False
      case 'True':
        return 'False';
      case 'False':
        return 'True';

      default:
        return operator;
    }
  }
}

export default Alternative;