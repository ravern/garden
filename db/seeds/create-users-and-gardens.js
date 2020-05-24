const find = require("lodash/find");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

async function hash(password) {
  const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
  return bcrypt.hash(password, salt);
}

exports.seed = async (knex) => {
  await Promise.all([
    knex("users_gardens").del(),
    knex("users").del(),
    knex("gardens").del(),
  ]);

  const users = await knex("users")
    .insert([
      {
        username: "john",
        email: "john@example.com",
        password: await hash("123456"),
      },
      {
        username: "david",
        email: "david@acme.co",
        password: await hash("123456"),
      },
      {
        username: "sarah",
        email: "sarah@acme.co",
        password: await hash("123456"),
      },
    ])
    .returning("*");

  const gardens = await knex("gardens")
    .insert([
      {
        name: "John's Working Notes",
      },
      {
        name: "Acme's Code of Conduct",
      },
    ])
    .returning("*");

  return knex("users_gardens").insert([
    {
      garden_id: find(gardens, { name: "John's Working Notes" }).id,
      user_id: find(users, { username: "john" }).id,
    },
    {
      garden_id: find(gardens, { name: "Acme's Code of Conduct" }).id,
      user_id: find(users, { username: "david" }).id,
    },
    {
      garden_id: find(gardens, { name: "Acme's Code of Conduct" }).id,
      user_id: find(users, { username: "sarah" }).id,
    },
  ]);
};
