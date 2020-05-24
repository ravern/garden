import DataLoader from "dataloader";
import find from "lodash/find";

import db from "~/api/db";

const gardensByUserGardenIDsLoader = new DataLoader(async (ids) => {
  const gardens = await db
    .select("gardens.*", "users_gardens.id AS users_gardens_id")
    .from("gardens")
    .leftJoin("users_gardens", "users_gardens.garden_id", "=", "gardens.id")
    .whereIn("users_gardens.id", ids);

  return ids.map((id) => find(gardens, { users_gardens_id: id }));
});

export default gardensByUserGardenIDsLoader;
