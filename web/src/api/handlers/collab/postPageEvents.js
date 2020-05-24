import { schema } from "@ravern/garden-models";
import { Step } from "prosemirror-transform";

import store from "~/api/store";

export default async function postPageEvents(req, res) {
  const { pageID } = req.params;
  const { version, steps, clientID } = req.body;

  const instance = store.getInstance(pageID);
  if (!instance) {
    res.status(404).json({ message: "Could not find page." });
    return;
  }

  const result = instance.postEvents(
    version,
    steps.map((step) => Step.fromJSON(schema, step)),
    clientID
  );
  if (result === false) {
    res.status(400).json({ message: "Version is too old." });
    return;
  }

  res.json({});
}
