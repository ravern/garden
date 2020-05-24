import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function register(_obj, { input }, { db }) {
  const { email, username, password } = input;

  // TODO: input validation

  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
  const passwordHash = await bcrypt.hash(password, salt);

  let user;
  try {
    [user] = await db("users")
      .insert({
        email,
        username,
        password: passwordHash,
      })
      .returning("*");
  } catch (error) {
    if (error.code === "23505") {
      if (error.constraint.endsWith("email_unique")) {
        return {
          error: {
            message: "Failed to register",
            email: "Email already exists",
          },
        };
      } else if (error.constraint.endsWith("username_unique")) {
        return {
          error: {
            message: "Failed to register",
            username: "Username already exists",
          },
        };
      }
    }
    throw error;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  return {
    data: {
      token,
      user,
    },
  };
}
