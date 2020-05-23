'use strict';
import {window, commands, ExtensionContext} from "vscode";
const {activeTextEditor}  = window;
import OperatorManager from "./OperatorManager";

export function activate(context: ExtensionContext) {
  let disposable = commands.registerCommand('extension.alternative', async () => {

    if (!activeTextEditor) {
      window.showInformationMessage(`You need to open an editor!`);
      return;
    }

    const operatorManager = new OperatorManager(activeTextEditor);
    operatorManager.alternate();
  });

  context.subscriptions.push(disposable);
}