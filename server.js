const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// create express app
var app = express();
app.use(cors())
app.engine('html', require('ejs').renderFile);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// use css
app.use(express.static(__dirname + "/front_end"))

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

// serve the "login" page on server start
app.get('/', function(req, res){
    res.sendFile(__dirname + '/front_end/index.html');
});

// on user login, access user.html with given username
app.post("/postForm", function (req, res) {
    var name = req.body.username;
    res.render(__dirname + "/front_end/user.html", {name:name});
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/request.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
