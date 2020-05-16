import { Editor } from 'slate';

export function toggleMark(editor, mark) {
  if (isMarkActive(editor, mark)) {
    Editor.removeMark(editor, mark);
  } else {
    Editor.addMark(editor, mark, true);
  }
}

export function isMarkActive(editor, mark) {
  const marks = Editor.marks(editor);
  return marks ? marks[mark] === true : false;
}
