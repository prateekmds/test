// const temp = require('./migration');
const Knex = require('knex');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knexConfig = require('./knexfile');

const { Model } = require('objection');
//var knex = require('./db/knex');
const Person = require('./models/Person');
const Address = require('./models/Address');
const Street = require('./models/Street');


const knex = Knex(knexConfig.development);
Model.knex(knex);

var migrate = knex.migrate;

// Force unlock in case of a bad state
migrate.forceFreeMigrationsLock()

// Get completed migrations
//.then(function(){
  //return migrate._listCompleted();
//})

// Rollback migrations
.then(function(completedMigrations){
  return migrate._waterfallBatch(0, completedMigrations, 'down');
})

// Migrate to the latest
.then(function(){
  return migrate.latest();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
   /*app.use(bodyParser.json())
  .use(morgan('dev'))
  .use(router)
  .set('json spaces', 2);*/

  app.use((err, req, res, next) => {
    if (err) {
      res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
    } else {
      next();
    }
  });


  /*const person = await Person.query().findById(1);
  console.log(person.firstName)
  console.log(person instanceof Person);
  */

 /*app.get('/persons/get', async (req, res) => {
  const persons = await Person.query().select().from('persons').then (function(persons){
 
  res.send(persons);
  })
});*/


app.get('/persons/get', async (req, res) => {
  
  const persons = await Person.query().select().from('persons')
  .eager('address.street')
  /*joinRelation('[persons]',
   {
    aliases: {
      persons: 'pr',
    }
  })*/
  .then (function(persons){
    
  res.send(persons);
  })
});

  app.delete('/persons/delete/:id', async (req, res) => {
    const persons = await Person.query()
    .deleteById(req.params.id)
    .then (async(person) => {
      const per = await Person.query().select().from('persons')
      .then (function(per){
 
        res.send(per);
        })
        })
  });

  app.post('/persons/post', async (req, res) => {
    
    const persons = await Person.query()
          .insert({
            id : req.body.id,
            fname : req.body.fname,
            lname : req.body.fname,
            age : req.body.age
        }).then (async(person) => {
          const per = await Person.query().select().from('persons')
          .then (function(per){
     
            res.send(per);
            })
            })
  });
 
app.put('/persons/put/:id',async (req,res) => {
  
  const persons = await Person.query().
  update({
    id : req.body.newid,
    fname : req.body.fname,
    lname : req.body.fname,
    age : req.body.age
    }).
    where('id',req.body.id) 
    .then (async(person) => {
      const per = await Person.query().select().from('persons')
      .then (function(per){
 
        res.send(per);
        })
        })
});

  var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
});  
