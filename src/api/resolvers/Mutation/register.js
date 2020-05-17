import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function register(_obj, { input }, { db }) {
  const { email, username, password } = input;

  // TODO: input validation

  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
  const passwordHash = await bcrypt.hash(password, salt);

  const [user] = await db("users")
    .insert({
      email,
      username,
      password: passwordHash,
    })
    .returning("*");

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  return {
    token,
    user,
  };
}
