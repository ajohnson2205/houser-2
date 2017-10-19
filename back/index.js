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

//the actual program or something
const port = process.env.PORT || 1337;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );





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
app.get('/api/properties/filter', propertyController.getFilteredProperties
app.post('/api/properties', propertyController.createNewProperty)
app.delete('/api/properties/:id', propertyController.deleteProperty)
