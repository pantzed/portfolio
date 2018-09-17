
exports.up = function(knex, Promise) {
  return knex.schema.createTable('experience', (table) => {
    table.increments('ID');
    table.text('title').notNullable();
    table.text('company').notNullable();
    table.text('start').notNullable();
    table.text('end').notNullable();
    table.string('imageURL').notNullable();
    table.text('point_1');
    table.text('point_2');
    table.text('point_3');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('experience');
};
