exports.up = (knex) => {
  return knex.schema.createTable("page_links", (t) => {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.uuid("from_node_id").references("nodes.id").notNullable();
    t.uuid("to_page_id").references("pages.id").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("page_links");
};
