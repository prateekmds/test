
exports.up = function(knex, Promise) {

return knex.schema.createTable('users',function(table){

table.increments();
table.string('name').notNullable();
table.string('email');
table.timestamp('created_at').defaultTo(knex.fn.now());
});
  
};

exports.down = function(knex, Promise) {
  
return knex.schema.dropTable('users');
};
