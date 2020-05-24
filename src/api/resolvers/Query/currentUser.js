import { AuthenticationError } from "apollo-server-express";

export default async function currentUser(_obj, _args, { currentUser }) {
  if (!currentUser) {
    throw new AuthenticationError("You need to be logged in");
  }
  return currentUser;
}
