import EditorValue from 'gillespie59-react-rte/lib/lib/EditorValue';
import { EditorState } from 'draft-js';
import decorators from '../decorators/rich-textarea-decorators';

import stateFromMarkdownVtl from '../lib/state-from-markdown-vtl';
import stateToMarkdownVtl from '../lib/state-to-markdown-vtl';

export function removeVtlFromMarkdow(markdownVtl) {
  return markdownVtl.replace(/##{"label": "(.+?)".+#end/g, '$1');
}

export function createFromMarkdownVtl(markdownVtl, format, decorator) {
  const contentState = stateFromMarkdownVtl(markdownVtl);
  const editorState = EditorState.createWithContent(contentState, decorator);
  return new EditorValue(editorState, { [format]: markdownVtl });
}

export function contentStateToString(contentState) {
  return stateToMarkdownVtl(contentState).replace(/^\n+|\n+$/, '');
}

export function getEditorValue(markdownVtl) {
  return markdownVtl ? createFromMarkdownVtl(markdownVtl, 'markdown', decorators) : EditorValue.createEmpty(decorators);
}

export function markdownVtlToHtml(markdownVtl) {
  const markdown = removeVtlFromMarkdow(markdownVtl);
  return createFromMarkdownVtl(markdown, 'markdown', decorators).toString('html');
}

export function markdownVtlToString(markdownVtl) {
  const markdown = removeVtlFromMarkdow(markdownVtl);
  const raw = createFromMarkdownVtl(markdown, 'markdown', decorators).toString('raw');
  return JSON.parse(raw).blocks[0].text;
}

export function formatURL(url) {
  if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
    return { url };
  }
  return { url: '.', title: url };
}
