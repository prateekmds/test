var express = require('express');
var app = express();

var things = require('./things.js');
var newThings = require('./newThings.js');

app.use('/newThings', newThings);

app.use('/things', things);


 var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
    });  


