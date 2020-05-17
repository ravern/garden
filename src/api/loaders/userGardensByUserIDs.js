import DataLoader from "dataloader";
import filter from "lodash/filter";

import db from "~/api/db";

const userGardensByUserIDsLoader = new DataLoader(async (ids) => {
  const userGardens = await db
    .select("users_gardens.*", "users.id AS users_id")
    .from("users_gardens")
    .leftJoin("users", "users_gardens.user_id", "=", "users.id")
    .whereIn("users.id", ids);

  return ids.map((id) => filter(userGardens, { users_id: id }));
});

export default userGardensByUserIDsLoader;
