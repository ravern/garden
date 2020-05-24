import usersByUserGardenIDsLoader from "~/api/graphql/loaders/usersByUserGardenIDs";

export default function user(userGarden, _args) {
  return usersByUserGardenIDsLoader.load(userGarden.id);
}
