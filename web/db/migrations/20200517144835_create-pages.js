exports.up = (knex) => {
  return knex.schema.createTable("pages", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.text("title").notNullable();
    t.json("content").notNullable();
    t.uuid("garden_id").references("gardens.id").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("pages");
};
