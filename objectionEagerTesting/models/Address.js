'use strict';

const { Model } = require('objection');

class Address extends Model {

    // Table name is the only required property.
    static get tableName() {
      return 'address';
    }
  
    // Each model must have a column (or a set of columns) that uniquely
    // identifies the rows. The column(s) can be specified using the `idColumn`
    // property. `idColumn` returns `id` by default and doesn't need to be
    // specified unless the model's primary key is something else.
    static get idColumn() {
      return 'id';
    }
  
  
    static get jsonSchema () {
      return {
        type: 'object',
        required: ['name'],

        properties: {
          id: {type: 'integer'},
          street: {type: 'string', minLength: 1, maxLength: 255},
          city: {type: 'string', minLength: 1, maxLength: 255},
          state: {type: 'string', minLength: 1, maxLength: 255}
          
          }
        
      };
    }

    static get relationMappings() {
        return {
       
          street: {
            relation: Model.HasManyRelation,
            modelClass: __dirname + '/Street',
            join: {
              from: 'address.id',
              to: 'street.address_id'
            }
          },
          
          persons: {
            relation: Model.BelongsToOneRelation,
        modelClass:  __dirname + '/Person',
        join: {
          from: 'address.person_id',
          to: 'persons.id'
        }
      }
      };
    }
  }
  
  module.exports = Address;
