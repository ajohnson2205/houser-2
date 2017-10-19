In my index.js on the backend:
// //DB SETUP//
var dbSetup = require('./services/dbSetup'); //Q. Is this dbSetup file necessary any time you have a database? A. It's a good idea to include it when you have SQL databases.
dbSetup.run();



dbSetup.js  --- living with index.js or in service folder


// APP AND CONFIG REQUIRE //
var db = app.get('db');
// INITIALIZE FUNCTION //
module.exports = {
  run: function() {
    console.log('Initializing database');
    db.initialize.tables_initialize(function(err, table) {
      if (err) {
        console.log('Some tables failed to create');
      } else {
        console.log('Tables successfully initialized');
      }
    });
  }
};
