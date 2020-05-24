import { AuthenticationError } from "apollo-server-express";

export default async function page(_obj, { id }, { db, currentUser }) {
  if (!currentUser) {
    throw new AuthenticationError("You need to be logged in");
  }

  // TODO: check whether user has authorization for this page.

  return await db.select("*").from("pages").where({ id }).first();
}
