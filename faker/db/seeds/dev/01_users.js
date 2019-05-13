const faker=require("faker");

const createFakeUser = () =>({

  fname : faker.name.firstName(),
  lname : faker.name.lastName(),
  email : faker.internet.email(),

});



exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  

  const fakeUsers = [];
  const desiredFakeUsers = 2;

  for (let i=0;i < desiredFakeUsers;i++){
    fakeUsers.push(createFakeUser());
  }

  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakeUsers);}
    );
    

  /*const fakeUsers = [];
  const desiredFakeUsers = 2;

  for (let i=0;i < desiredFakeUsers;i++){
    fakeUsers.push(createFakeUser());
  }

  return knex('users').del().insert(fakeUsers);
  */
  /*return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });*/
};
