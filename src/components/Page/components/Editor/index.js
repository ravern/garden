import { useState } from "react";

import ProseMirrorEditor from "~/components/ProseMirrorEditor";
import tempAuthority from "~/components/ProseMirrorEditor/tempAuthority";

export default function Editor() {
  const [doc, setDoc] = useState(tempAuthority.doc);

  return <ProseMirrorEditor value={doc} onChange={setDoc} />;
}
