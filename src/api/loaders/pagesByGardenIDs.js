import DataLoader from "dataloader";
import filter from "lodash/filter";

import db from "~/api/db";

const pagesByGardenIDs = new DataLoader(async (ids) => {
  const gardens = await db
    .select("pages.*", "gardens.id AS gardens_id")
    .from("pages")
    .leftJoin("gardens", "pages.garden_id", "=", "gardens.id")
    .whereIn("gardens.id", ids);

  return ids.map((id) => filter(gardens, { gardens_id: id }));
});

export default pagesByGardenIDs;
