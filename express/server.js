var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var knex = require('./db/knex');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/users',function(req,res){
//res.send(users);

//knex.raw("select * from users where name='prateek'").then (function(users){
knex.select().from('users').then (function(users){

res.send(users);
})
})

app.get('/users/:id',function(req,res){
	knex.select().from('users').where('id',req.params.id).then (function(users){
	res.send(users);
})
})


app.post('/users',function(req,res){
	knex("users").insert({
	id:5,	
	name:"new name",
	email:"new mail"
	})
	.then(function(){
	knex.select().from('users').then (function(users){
	
	res.send(users);
	})
	})
})

/*app.put('/users/:id',function(req,res){
	knex('users').where('id',req.params.id).update({
	name:req.body.name,
	email:req.body.email
	}).then (function(users){
	knex.select().from('users').then (function(users){
	
	res.send(users);
	})
	})
})*/

app.delete('/users/:id',function(req,res){
	knex('users').where('id',req.params.id).del()
	.then (function(users){
	knex.select().from('users').then (function(users){
	
	res.send(users);
	})
	})
})



var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
});  

