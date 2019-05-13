var enviornment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[enviornment];
module.exports = require('knex')(config);
