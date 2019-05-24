import * as vscode from 'vscode';
import pattern from './utils/pattern';

class Translate {
  ctx = {};

  constructor (ctx: vscode.ExtensionContext) {
    this.ctx = ctx;

    this.into();
  }

  public getWords (selection: vscode.Selection): string {
    const editor = this._getEditor();
    if (!editor) {
      return '';
    }
    let text = editor.document.getText(selection);
    return text || '';
  }

  private _getEditor (): any {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return null;
    }
    return editor;
  }

  public showInfoMessage (msg: string): any {
    vscode.window.showInformationMessage('hello '+ msg);
  }

  public into (): any {
    const editor = this._getEditor();
    const selections = editor.selections
    let text: String;

    if (!editor) return this.showInfoMessage('Unselected text!');

    editor.edit((editBuilder: any) => {
      selections.forEach((selection: vscode.Selection) => {
        // Get SingleLine Text
        text = this.getWords(selection);
        // Replace text
        pattern.find((p: any) => {
          const result = p.pattern.test(text);
          if (result) {
            text = text.replace(p.pattern, p.replacement);
          }
          return result
        });
        // Replace editor text
        editBuilder.replace(
          new vscode.Range(selection.start, selection.end),
          text
        );
      })
    });
  }
}

export default (ctx: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand('extension.kzVueI18n', () => {
    return new Translate(ctx);
  });
};
