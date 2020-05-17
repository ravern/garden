import bcrypt from "bcryptjs";
import isNil from "lodash/isNil";

export default async function register(_obj, { input }, { db }) {
  const { email, username, password } = input;

  const emailUser = await db.getUserByEmailOrUsername(email);
  if (!isNil(emailUser)) {
    throw new Error("email already exists");
  }
  const usernameUser = await db.getUserByEmailOrUsername(username);
  if (!isNil(usernameUser)) {
    throw new Error("username already exists");
  }

  // TODO: input validation

  const passwordHash = await bcrypt.hash(
    password,
    await bcrypt.genSalt(process.env.BCRYPT_SALT_ROUNDS)
  );

  const user = {
    email,
    username,
    password: passwordHash,
  };

  return user;
}
