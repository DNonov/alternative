class PositionExtractor {

  /**
   * Constructs position under the cursor.
   *
   * @private
   * @param {string} textLine
   * @param {number} cursorPosition
   * @returns {vscode.Range}
   * @memberof OperatorManager
   */
  public getPositionUnderCursor(textLine: string, cursorPosition: number): object {
    // Text representation of the current line, split into chars and so every
    // char is a token.
    const tokens: Array<string> = textLine.split('');
    // All upper and lower case letters and all numbers plus space and brackets.
    const alphaNumericSpaceOrBracket: RegExp = /[a-zA-Z0-9\ \)\(;]/;
    // All symbols and white space.
    const symbol: RegExp = /[$-\/:-?{-~!"^_`\[\]\ ]+/;
    // All upper and lower case letters.
    const letter: RegExp = /[a-zA-Z]/;

    if (letter.test(tokens[cursorPosition])) {
      return this.constructPosition(symbol, tokens, cursorPosition);
    } else {
      return this.constructPosition(alphaNumericSpaceOrBracket, tokens, cursorPosition);
    }
  }

  constructPosition(
    regex: RegExp,
    tokens: Array<string>,
    cursorPosition: number
  ): object  {
    // Keeps the boundaries of a operator and helps to build a Range.
    let position = {start: 0, end: 0};
    // This offset need to be added only to the start position.
    const offsetToCutRightPosition = 1;

    // Look down from the cursorPosition to the 0th index of tokens' array for
    // alpha-numeric or white space token. The first such a token it's the
    // position's start.
    for (let i = cursorPosition; i > 0; i--) {
        position.start = offsetToCutRightPosition;
      if(regex.test(tokens[i])) {
        position.start = i + offsetToCutRightPosition;
        break;
      }
    }

    // Look up from the cursorPosition to the last index of tokens' array for
    // alpha-numeric or white space token. The first such a token it's the
    // position's end.
    for (let j = cursorPosition; j < tokens.length; j++) {
      position.end = tokens.length;
      if(regex.test(tokens[j])) {
        position.end = j;
        break;
      }
    }
    return position;
  }
}

export default PositionExtractor;