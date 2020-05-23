import { parse } from "auth-header";
import parseBasicAuth from "basic-auth";

export default async function getCollabServer({ req }) {
  const { scheme } = req.headers.authorization
    ? parse(req.headers.authorization)
    : {};

  if (scheme?.toUpperCase() !== "BASIC") {
    return null;
  }

  const result = parseBasicAuth(req);
  if (!result) {
    return null;
  }

  const { name, pass } = result;

  return pass === process.env.COLLAB_API_KEY ? name : null;
}
