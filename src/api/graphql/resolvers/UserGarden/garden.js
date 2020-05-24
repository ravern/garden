import gardensByUserGardenIDsLoader from "~/api/graphql/loaders/gardensByUserGardenIDs";

export default async function garden(userGarden) {
  return gardensByUserGardenIDsLoader.load(userGarden.id);
}
