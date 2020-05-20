exports.up = (knex) => {
  return knex.schema.createTable("nodes", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.json("content").notNullable();
    t.uuid("page_id").references("pages.id").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("nodes");
};
