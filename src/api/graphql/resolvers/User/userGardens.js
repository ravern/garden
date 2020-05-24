import userGardensByUserIDsLoader from "~/api/graphql/loaders/userGardensByUserIDs";

export default function userGardens(user, _args) {
  return userGardensByUserIDsLoader.load(user.id);
}
