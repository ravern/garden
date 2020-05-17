import DataLoader from "dataloader";
import find from "lodash/find";

import db from "~/api/db";

const usersByUserGardenIDsLoader = new DataLoader(async (ids) => {
  const gardens = await db
    .select("users.*", "users_gardens.id AS users_gardens_id")
    .from("users")
    .leftJoin("users_gardens", "users_gardens.user_id", "=", "users.id")
    .whereIn("users_gardens.id", ids);

  return ids.map((id) => find(gardens, { users_gardens_id: id }));
});

export default usersByUserGardenIDsLoader;
