import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import isNil from "lodash/isNil";

export default async function login(_obj, { input }, { db }) {
  const { emailOrUsername, password } = input;

  const user = await db
    .select("*")
    .from("users")
    .where({
      username: emailOrUsername,
    })
    .orWhere({
      email: emailOrUsername,
    })
    .first();

  if (isNil(user)) {
    throw new Error("invalid credentials");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return {
    token,
    user,
  };
}
