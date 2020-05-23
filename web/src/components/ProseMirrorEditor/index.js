import { schema } from "@ravern/garden-models";
import fetch from "isomorphic-unfetch";
import { useEffect, useRef } from "react";

import { buildView } from "./view";

export default function ProseMirrorEditor() {
  const editor = useRef();
  const view = useRef();

  useEffect(() => {
    fetch(process.env.COLLAB_API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (editor.current) {
          view.current = buildView(editor.current, {
            version: data.version,
            doc: schema.nodeFromJSON(data.doc),
          });
        }
      });
    return () => {
      if (view.current) {
        view.current.destroy();
      }
    };
  }, [editor, view]);

  return <article ref={editor} />;
}
