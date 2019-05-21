
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {id: 1, street: 'MG Road',city: 'Indore',state:'MP'},
        {id: 2, street: 'Jankupura',city:'Mandsaur',state:'MP'},
        {id: 3, street: 'street',city:'Bhopal',state:'MP'}
      ]);
    });
};
