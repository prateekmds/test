
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {id: 1, fname: 'prateek', lname:'somani',age:19},
        {id: 2, fname: 'fname',lname:'lname',age:34},
        {id: 3,fname: 'piyu',lname:'jain',age:54}
      ]);
    });
};
