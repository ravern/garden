import { useEffect, useRef } from "react";

import { buildView } from "./view";

export default function ProseMirrorEditor({ value, onChange }) {
  const editor = useRef();

  useEffect(() => {
    if (editor.current) {
      const view = buildView(editor.current, value, onChange);
      return () => {
        view.destroy();
      };
    }
  }, [editor]);

  return <article ref={editor} />;
}