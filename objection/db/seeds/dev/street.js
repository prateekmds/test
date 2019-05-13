
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('street').del()
    .then(function () {
      // Inserts seed entries
      return knex('street').insert([
        {id: 1, fullstreet: 'Malharganj',pinCode:452001 },
        {id: 2, fullstreet: 'Bada Chouck',pinCode:458001},
        {id: 3, fullstreet: 'fullstreet',pinCode:453001 }
      ]);
    });
};
