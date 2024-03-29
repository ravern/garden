import schema from "~/models/schema";

import store from "~/api/store";

async function queryPage(db, pageID) {
  return db.select("*").from("pages").where({ id: pageID }).first();
}

export default async function getPage(req, res) {
  const { pageID } = req.params;

  const instance = store.getInstance(pageID);
  if (instance) {
    res.json({
      version: instance.getVersion(),
      doc: instance.doc,
    });
    return;
  }

  const page = await queryPage(req.app.locals.db, pageID);
  if (!page) {
    res.status(404).json({ message: "Could not find page." });
    return;
  }

  const { version, id, content } = page;
  const doc = schema.nodeFromJSON(content);
  store.createInstance(id, version, doc);

  res.json({
    version,
    doc,
  });
}
