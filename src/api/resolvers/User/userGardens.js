import userGardensByUserIDsLoader from "~/api/loaders/userGardensByUserIDs";

export default function users(user, _args) {
  return userGardensByUserIDsLoader.load(user.id);
}
