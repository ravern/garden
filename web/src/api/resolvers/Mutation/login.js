import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  if (!user) {
    return {
      error: {
        message: "Invalid credentials",
      },
    };
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return {
      error: {
        message: "Invalid credentials",
      },
    };
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  return {
    data: {
      token,
      user,
    },
  };
}
