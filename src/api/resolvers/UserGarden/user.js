import usersByUserGardenIDsLoader from "~/api/loaders/usersByUserGardenIDs";

export default function user(userGarden, _args) {
  return usersByUserGardenIDsLoader.load(userGarden.id);
}
