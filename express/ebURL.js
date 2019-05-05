var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
   res.render('content', {
      name: "Enginner Babu", 
      url:"https://www.engineerbabu.com"
   });
});

var server = app.listen(8080, function () {  
      var host = server.address().address;  
      var port = server.address().port;  
      console.log('Listening at http://%s:%s', host, port);  
});  

