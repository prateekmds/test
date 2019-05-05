var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/:id([0-9]{4})', function(req, res,next) {
	console.log("A new request received at " + Date.now()+" by 8080/"+ req.params.id);

   res.write('ID enetered is: ' + req.params.id +"\n");
   res.write('ID enetered to get break: '+ req.params.id );
   res.end();
});

app.get('*', function(req, res){
   res.send('SORRY, this is an invalid URL...');
});
var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
    });  

