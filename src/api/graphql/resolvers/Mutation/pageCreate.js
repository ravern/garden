import schema from "~/models/schema";
import { AuthenticationError } from "apollo-server-express";

function buildInitialContent(title) {
  return schema.node("doc", null, [
    schema.node("title", null, [schema.text(title)]),
    schema.node("paragraph", null, []),
  ]);
}

export default async function pageCreate(
  _obj,
  { input },
  { db, currentUser, currentCollabServer }
) {
  if (!currentCollabServer && !currentUser) {
    throw new AuthenticationError("You need to be logged in");
  }

  const { gardenID, title } = input;

  const content = buildInitialContent(title);

  const [page] = await db("pages")
    .insert({
      garden_id: gardenID,
      title,
      version: 0,
      content: content.toJSON(),
    })
    .returning("*");

  return {
    data: page,
  };
}
