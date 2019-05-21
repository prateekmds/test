'use strict';

const { Model } = require('objection');
const Address=require('./Address');
 
class Street extends Model {

    // Table name is the only required property.
    static get tableName() {
      return 'street';
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
        required: ['id', 'pinCode'],
  
        properties: {
          id: {type: 'integer'},
          fullstreet: {type: 'string', minLength: 1, maxLength: 255},
          pincode: {type: 'number'}
          }
        
      };
    }
  

  static get relationMappings() {
    return {
        addressStreet: {
            // relation: Model.BelongsToOneRelation,
            relation: Model.HasOneRelation,
        modelClass:  __dirname + '/Address',
        join: {
          from: 'street.address_id',
          to: 'address.id'
        }
      }
    };
  }
 }
// console.log("working");

 module.exports = Street;
