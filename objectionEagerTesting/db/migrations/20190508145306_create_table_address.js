/*get markdown*/

exports.up = function(knex, Promise) {

    return knex.schema.createTable('address',function(table){
    
    table.increments('id').primary();
    table.string('street').notNullable();
    table.string('city').notNullable();
    table.string('state');
    table.integer('person_id').unsigned()
    .references('id')
    .inTable('persons')
    .onDelete('CASCADE')
    .index();
 
    })
    };
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable('address');
    };
    