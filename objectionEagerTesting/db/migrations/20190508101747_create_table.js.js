
exports.up = function(knex, Promise) {

return knex.schema.createTable('persons',function(table){

table.increments('id').primary();
table.string('fname').notNullable();
table.string('lname').notNullable();
table.integer('age');
});
  
};

exports.down = function(knex, Promise) {
  
return knex.schema.dropTable('persons');
};
