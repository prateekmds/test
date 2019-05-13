const knex = require('knex');

var migrate = knex.migrate;

// Force unlock in case of a bad state
migrate.forceFreeMigrationsLock()

// Get completed migrations
.then(function(){
  return migrate._listCompleted();
})

// Rollback migrations
.then(function(completedMigrations){
  return migrate._waterfallBatch(0, completedMigrations, 'down');
})

// Migrate to the latest
.then(function(){
  return migrate.latest();
});
