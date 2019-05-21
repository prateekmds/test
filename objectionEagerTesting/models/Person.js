'use strict';

const { Model } = require('objection');
const Address=require('./Address');
 
class Person extends Model {

    // Table name is the only required property.
    static get tableName() {
      return 'persons';
    }
  
    // Each model must have a column (or a set of columns) that uniquely
    // identifies the rows. The column(s) can be specified using the `idColumn`
    // property. `idColumn` returns `id` by default and doesn't need to be
    // specified unless the model's primary key is something else.
    static get idColumn() {
      return 'id';
    }
  
    fullName() {
      return this.fname + ' ' + this.lname;
    }
  
    static get jsonSchema () {
      return {
        type: 'object',
        required: ['fname', 'lname'],
  
        properties: {
          id: {type: 'integer'},
          fname: {type: 'string', minLength: 1, maxLength: 255},
          lname: {type: 'string', minLength: 1, maxLength: 255},
          age: {type: 'number'}
  
          }
        
      };
    }
  

  static get relationMappings() {
    return {
        address: {
        // relation: Model.HasOneRelation,
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: 'persons.id',
          to: 'address.person_id'
        }
      }
    };
  }
 }

 module.exports = Person;
