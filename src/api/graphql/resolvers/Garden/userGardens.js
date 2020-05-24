import userGardensByGardenIDsLoader from "~/api/graphql/loaders/userGardensByGardenIDs";

export default function gardens(user, _args) {
  return userGardensByGardenIDsLoader.load(user.id);
}
