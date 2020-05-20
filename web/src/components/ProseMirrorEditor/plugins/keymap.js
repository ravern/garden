import { baseKeymap, toggleMark } from "prosemirror-commands";
import { redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";

import schema from "../schema";

export default keymap({
  ...baseKeymap,

  "Mod-y": redo,
  "Mod-Shift-z": redo,
  "Mod-z": undo,

  "Mod-b": toggleMark(schema.marks.strong),
  "Mod-B": toggleMark(schema.marks.strong),
  "Mod-i": toggleMark(schema.marks.em),
  "Mod-I": toggleMark(schema.marks.em),
});
