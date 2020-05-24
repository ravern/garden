exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable("gardens", (t) => {
      t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      t.text("name").notNullable();
    }),
    knex.schema.createTable("users_gardens", (t) => {
      t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      t.uuid("user_id").references("users.id").notNullable();
      t.uuid("garden_id").references("gardens.id").notNullable();
    }),
  ]);
};

exports.down = (knex) => {
  return knex.schema.dropTable("gardens");
};
