var express = require('express')

var app = express()

var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// See the README about ordering of middleware
// Load the routes ("controllers" -ish)
// Setup routes here
app.use('/api', require('app/customers/router'))
app.use('/api', require('app/users/router'))

// FINALLY, use any error handlers
app.use(require('app/errors/not-found'))

// Export the app instance for unit testing via supertest
module.exports = app
