import { useState } from "react";

import ProseMirrorEditor from "~/components/ProseMirrorEditor";
import schema from "~/components/ProseMirrorEditor/schema";

export default function Editor() {
  const [doc, setDoc] = useState(
    schema.node("doc", null, [
      schema.node("heading", null, [schema.text("One.")]),
      schema.node("paragraph", null, [schema.text("Two!")]),
    ])
  );

  return <ProseMirrorEditor value={doc} onChange={setDoc} />;
}
