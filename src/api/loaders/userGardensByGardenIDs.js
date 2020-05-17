import DataLoader from "dataloader";
import filter from "lodash/filter";

import db from "~/api/db";

const userGardensByGardenIDsLoader = new DataLoader(async (ids) => {
  const userGardens = await db
    .select("users_gardens.*", "gardens.id AS gardens_id")
    .from("users_gardens")
    .leftJoin("gardens", "users_gardens.garden_id", "=", "gardens.id")
    .whereIn("gardens.id", ids);

  return ids.map((id) => filter(userGardens, { gardens_id: id }));
});

export default userGardensByGardenIDsLoader;
