import fetch from "isomorphic-unfetch";
import { useEffect, useRef } from "react";

import schema from "./schema";
import { buildView } from "./view";

export default function ProseMirrorEditor() {
  const editor = useRef();
  const view = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/")
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