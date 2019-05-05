var express = require('express');
var app = express();

app.get('/:name1/:name2', function(req, res) {
   res.send('name1: ' + req.params.name1 + ' and name2: ' + req.params.name2);
});
var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
    });  

