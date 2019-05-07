
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'prateek', email:'prateekmds23@gmail.com'},
        {id: 2, name: 'abc', email:'abc@gmail.com'},
        {id: 3, name: 'piyush', email:'piyush@gmail.com'}
      ]);
    });
};
