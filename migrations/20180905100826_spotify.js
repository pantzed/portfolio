
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('auth_code');
    table.string('refresh_token');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
