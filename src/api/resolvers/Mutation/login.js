import bcrypt from "bcryptjs";
import isNil from "lodash/isNil";

export default async function login(_obj, { input }, { db }) {
  const { emailOrUsername, password } = input;

  const user = await db.getUserByEmailOrUsername(emailOrUsername);

  if (isNil(user)) {
    throw new Error("invalid credentials");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("invalid credentials");
  }

  return {
    user
  };
}
