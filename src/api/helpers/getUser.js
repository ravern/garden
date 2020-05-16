import { parse } from "auth-header";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import db from "~/api/db";

export default async function getUser({ req }) {
  const { scheme, token } = req.headers.authorization
    ? parse(req.headers.authorization)
    : {};

  if (scheme !== "Bearer") {
    return null;
  }

  const { id } = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  return db.getUser(id);
}
