import Alternative from './Alternative';
import * as vscode from 'vscode';

/**
 * Extract and replace operators with their alternatives.
 *
 * @class OperatorManager
 */
class OperatorManager {
  private document: vscode.TextDocument;
  private editor: vscode.TextEditor;
  private positionExtractor: any;

  constructor(
    editor: vscode.TextEditor,
    positionExtractor: any
  ) {
      this.document          = editor.document;
      this.editor            = editor;
      this.positionExtractor = positionExtractor;
  }

  /**
   * Returns a range from a given position.
   *
   * @private
   * @param {any} position
   * @param {number} lineNumber
   * @returns {vscode.Range}
   * @memberof OperatorManager
   */
  private getRange(position: any, lineNumber: number): vscode.Range {

    // Range constructed form the beginning to the end of the operator.
    return new vscode.Range(
      new vscode.Position(lineNumber, position.start),
      new vscode.Position(lineNumber, position.end)
    );
  }

  /**
   * Returns text out of a given Range.
   *
   * @private
   * @param {Range} range
   * @param {Any} document
   * @returns {string}
   * @memberof OperatorManager
   */
  private getRangeAsText(range: vscode.Range, document: vscode.TextDocument): string {
    return document.getText(range);
  }


  /**
   * Replace a operator under the cursor.
   *
   * @returns {void}
   * @memberof OperatorManager
   */
  public alternate(): void {
    const lineNumber: number     = this.editor.selection.active.line;
    const textLine: string       = this.document.lineAt(lineNumber).text;
    const cursorPosition: number = this.editor.selection.active.character;
    const position: object       = this.positionExtractor.getPositionUnderCursor(textLine, cursorPosition);
    const range: vscode.Range    = this.getRange(position, lineNumber);
    const operator: string       = this.getRangeAsText(range, this.document);

    this.editor.edit((editBuilder: vscode.TextEditorEdit) => {
      editBuilder.replace(range, Alternative.alternate(operator));
    });
  }
}

export default OperatorManager;