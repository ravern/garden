import { schema } from "@ravern/garden-models";
import fetch from "isomorphic-unfetch";
import { useEffect, useRef } from "react";

import { buildView } from "./view";

export default function ProseMirrorEditor() {
  const editor = useRef();
  const view = useRef();

  useEffect(() => {
    fetch("/api/collab/bdaa940f-0ac7-45c7-acb7-d40e580bde21")
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
