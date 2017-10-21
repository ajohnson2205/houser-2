//external modules and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();


//getting express and such up and moving
const app = express();
app.use( bodyParser.json() );
app.use( cors() );


//getting the database connected
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );


//my internal dependencies
const userController = require('./controllers/userController.js')
const propertyController = require('./controllers/propertyController.js')
const testController = require('./controllers/testController.js')
const createInitialSession = require('./middlewares/sessions.js')

//the actual program or something
const port = process.env.PORT || 1337;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );



//middlewares
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000000 }
}));

app.use((req, res, next) => createInitialSession(req, res, next));

app.use(express.static('../front/build'))




//endpoints

//test endpoints
app.get('/sayHello', testController.sayHello)
app.get('/', testController.home)
app.get('/api/cats', testController.getCats)


//user endpoints

app.post('/api/auth/login', userController.login)
app.post('/api/auth/user', userController.register)
app.post('/api/auth/logout', userController.logout)


//property endpoints

app.get('/api/properties', propertyController.getAllProperties)
app.get('/api/properties/filter', propertyController.getFilteredProperties)
app.post('/api/properties', propertyController.createNewProperty)
app.delete('/api/properties/:id', propertyController.deleteProperty)



// Authorization Endpoints
//
// POST - /api/auth/login - Sets the user information on the session.
// On success return a status of 200 and the user object.
// A user object should have the following properties:
// id - This is the UserId you are using for your database.
// username - This is the username associated with the UserId.
// On failure return a status of 500.
// POST - /api/auth/register - Registers a user to the database. Sets the user information on the session.
// On success return a status of 200 and the user object.
// A user object should have the following properties:
// id - This is the UserId you are using for your database.
// username - This is the username associated with the UserId.
// On failure return a status of 500.
// POST - /api/auth/logout - Destroys the session. Sends a status of 200.
// Properties Endpoints
//
// POST - /api/properties - Creates a new property. Returns all the properties associated with the logged in user.
// GET - /api/properties - Returns all properties associated with the logged in user.
// DELETE - /api/properties/:id - Deletes a property. Returns all the properties associated with the logged in user.
// GET - /api/properties/filter - Filters all properties by "desired rent". Returns all the filter properties associated with the logged in user.
