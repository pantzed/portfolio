
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable;
    table.string('description').notNullable();
    table.string('img').notNullable();
    table.string('url').notNullable();
    table.string('git').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
