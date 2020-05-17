import gardensByUserGardenIDsLoader from "~/api/loaders/gardensByUserGardenIDs";

export default async function garden(userGarden) {
  return gardensByUserGardenIDsLoader.load(userGarden.id);
}
