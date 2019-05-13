
exports.up = function(knex, Promise) {

    return knex.schema.createTable('street',function(table){
    
    table.increments('id').primary();
    table.string('fullstreet').notNullable();
    table.integer('pinCode').notNullable();
    table.integer('address_id').unsigned()
    .references('id')
    .inTable('address')
    .onDelete('CASCADE')
    .index();
 
    })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable('street');
    };
    