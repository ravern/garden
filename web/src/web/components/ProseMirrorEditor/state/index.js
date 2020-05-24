import { schema } from "@ravern/garden-models";
import { collab } from "prosemirror-collab";
import { history } from "prosemirror-history";
import { EditorState } from "prosemirror-state";

import keymap from "../plugins/keymap";

export function buildState({ doc, version }) {
  return EditorState.create({
    doc,
    schema,
    plugins: [history(), keymap, collab({ version })],
  });
}
