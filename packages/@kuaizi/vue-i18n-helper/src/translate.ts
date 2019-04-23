import * as vscode from 'vscode';
import pattern from './utils/pattern';

class Translate {
  ctx = {};

  constructor (ctx: vscode.ExtensionContext) {
    this.ctx = ctx;

    this.into();
  }

  public getWords (): string {
    const editor = this._getEditor();
    if (!editor) {
      return '';
    }
    let selection = editor.selection;
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

  public showInfoMessge (msg: string): any {
    vscode.window.showInformationMessage('hello '+ msg);
  }

  public into (): any {
    const editor = this._getEditor();
    let text = this.getWords();

    if (!editor) {
      this.showInfoMessge('未选中文字！');
    }
    
    pattern.find(p => {
      const result = p.pattern.test(text);
      if (result) {
        text = text.replace(p.pattern, p.replacement);
      }
      return result;
    });

    editor.edit((editBuilder: any) => {
      editBuilder.replace(
        new vscode.Range(editor.selection.start, editor.selection.end),
        text
      );
    });
  }
}

export default (ctx: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand('extension.kzVueI18n', () => {
    return new Translate(ctx);
  });
};
