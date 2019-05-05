var express = require('express');
var router = express.Router();

router.all('/', function(req, res){
   res.send('all of newThings.');
});

//export router to use in route.js
module.exports = router;
