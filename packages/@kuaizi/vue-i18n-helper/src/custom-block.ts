import * as vscode from 'vscode';
import { replaceCustomBlock } from './utils';

interface ICustomBlock {
  context: vscode.ExtensionContext;
}

class CustomBlock implements ICustomBlock{
  public context: vscode.ExtensionContext;

  constructor (context: vscode.ExtensionContext) {
    this.context = context;
    this.generate();
  }

  private generate() {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (!editor) {
      return;
    }

    const selections: vscode.Selection[] = editor.selections;

    editor.edit(builder => {
      const textArr: string[] = selections.map((selection: vscode.Selection) => {
        return editor.document.getText(selection) || '';
      });
      const end: vscode.Position = new vscode.Position(editor.document.lineCount + 1, 0);
      const replaceContent: string = replaceCustomBlock(editor.document.getText(), textArr);
      builder.replace(new vscode.Range(new vscode.Position(0, 0), end), replaceContent);
    });

    const firstPosition: vscode.Position = new vscode.Position(0, 0);
    editor.selection = new vscode.Selection(firstPosition, firstPosition);
  }
}

export default (ctx: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand('extension.kzVueI18nBlock', () => {
    return new CustomBlock(ctx);
  });
};
