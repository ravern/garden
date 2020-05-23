import { page as queryPage } from "../api";
import store from "../store";

export default async function getPage(req, res) {
  const { pageID } = req.params;

  const page = await queryPage(pageID);
  if (!page) {
    res.status(404).json({ message: "Could not find page." });
    return;
  }

  store.createInstance(page);

  res.json(page);
}
