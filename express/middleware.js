var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   res.write("A request for things received at " + Date.now()+ " \n");
   next();
});

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things  at use 2vreceived at " + Date.now());
   res.write("A request for things at use 2 received at " + Date.now()+ " \n");
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.write('Things');
	res.end();
});



var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
});  

