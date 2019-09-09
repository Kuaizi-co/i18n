/**
 * Replace Content
 * content {String} editor text
 */
import * as vscode from 'vscode';

// @TODO: It's develop optional page to be continue
const spacing = 2;
const lang = ['zh-CN', 'en-US'];

export const replaceCustomBlock = (content: string, selections: string[]): string => {
  const reg: RegExp = /\<i18n\>([^\<]*)\<\/i18n\>/g;
  const matchContent: any[] | null = reg.exec(content);
  const blockContent: string = matchContent && matchContent[1] ? matchContent[1] : '';
  let i18nJSON: any = {};
  if (!blockContent) {
    lang.forEach((l: string) => {
      selections.forEach((text: string) => {
        if (!i18nJSON[l]) {
          (i18nJSON[l] = {});
        }
        i18nJSON[l][text] = text;
      });
    });
    const i18nMeta = `<i18n>
${JSON.stringify(i18nJSON, null, spacing)}
</i18n>

`;
    return [i18nMeta, content].join('');
  } else {
    try {
      i18nJSON = JSON.parse(blockContent);
    } catch (e) {
      vscode.window.showWarningMessage('Exception');
      return content;
    }

    for (let language in i18nJSON) {
      selections.forEach((text: string) => {
        if (!(i18nJSON as any)[language][text]) {
          (i18nJSON as any)[language][text] = text;
        }
      });
    }

    return content.replace(reg, `<i18n>\n${JSON.stringify(i18nJSON, null, spacing)}\n</i18n>\n`);
  }
};
