const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users', db.updateUser)
app.delete('/users', db.deleteUser)

var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
});  

