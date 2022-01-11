const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// create express app
var app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
	useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to web history managing application. CN project for RSA"});
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/request.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
