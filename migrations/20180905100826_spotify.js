
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spotify', (table) => {
    table.increments('id').primary();
    table.string('auth_code');
    table.string('refresh_token');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spotify');
};
