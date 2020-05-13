'use strict';
import {window, commands, ExtensionContext} from "vscode";
const {activeTextEditor}  = window;
import OperatorManager from "./OperatorManager";
import Alternative from "./Alternative";
import PositionExtractor from "./PositionExtractor";

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand('extension.alternative', async () => {

    if (!activeTextEditor) {
      window.showInformationMessage(`You need to open an editor!`);
      return;
    }

    const alternative       = new Alternative();
    const positionExtractor = new PositionExtractor();
    const operatorManager   = new OperatorManager(activeTextEditor, alternative, positionExtractor);
    operatorManager.alternate();
  });

  context.subscriptions.push(disposable);
}