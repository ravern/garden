import userGardensByUserIDsLoader from "~/api/loaders/userGardensByUserIDs";

export default function userGardens(user, _args) {
  return userGardensByUserIDsLoader.load(user.id);
}
