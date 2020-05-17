import pagesByGardenIDsLoader from "~/api/loaders/pagesByGardenIDs";

export default function pages(garden, _args) {
  return pagesByGardenIDsLoader.load(garden.id);
}
