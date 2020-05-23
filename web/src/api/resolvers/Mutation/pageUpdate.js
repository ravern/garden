import { schema } from "@ravern/garden-models";
import { AuthenticationError } from "apollo-server-micro";

function getTitleFromContent(content) {
  return content.content[0].content.map(({ text }) => text).join("");
}

export default async function pageUpdate(
  _obj,
  { input },
  { db, currentUser, currentCollabServer }
) {
  if (!currentCollabServer && !currentUser) {
    throw new AuthenticationError("You need to be logged in");
  }

  const { pageID, content, version } = input;

  // Verify that contents is in the correct format.
  try {
    schema.nodeFromJSON(content).check();
  } catch {
    return {
      error: {
        message: "Invalid content provided",
      },
    };
  }

  const title = getTitleFromContent(content);

  const [page] = await db("pages")
    .where({ id: pageID })
    .update({
      title,
      version,
      content,
    })
    .returning("*");

  return {
    data: page,
  };
}
