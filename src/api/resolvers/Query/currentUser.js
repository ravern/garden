import { ForbiddenError } from "apollo-server-micro";

export default async function currentUser(_obj, _args, { currentUser }) {
  if (!currentUser) {
    throw new ForbiddenError("You need to be logged in");
  }
  return currentUser;
}
