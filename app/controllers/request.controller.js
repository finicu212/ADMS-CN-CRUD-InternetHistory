var Request = require('../models/request.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.userIp) {
        res.status(400).send({message: "user IP is empty!"});
    }

    var request = new Request({userIp: req.body.userIp, websiteName: req.body.websiteName || "Unnamed Webpage", websitePage: req.body.websitePage || "No Title"});

    request.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the internet request visit."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all history requests from the database.
    Request.find(function(err, requests){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving all requests."});
        } else {
            res.send(requests);
        }
    });
};

exports.delete = function(req, res) {
    Request.remove({_id: req.params.requestId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete webpage from history with id " + req.params.id});
        } else {
            res.send({message: "Selected webpage from history deleted successfully!"})
        }
    });
};

//User.findOne({"userIp": req.params.userIp}).exec(function(err, data)

var User = require('../models/user.model.js');

exports.findByUser = function(req, res) {
    var queriedName = req.params.userName;
    var foundIp = "";
    console.log("Looking for all requests by " + queriedName)

    User.findOne({"userName": queriedName}).exec(function(err, data) {
        if(err) {
            foundIp = "";
            console.log("error");
        } else {
            foundIp = data.userIp;
            console.log("Found ip by query: " + foundIp)
        }
    });

    foundIp = foundIp.replace('.', '\\.'); // escape the dots in found user's IP addres

    Request.find({"userIp": "86\.120\.19\.176"}).exec(function (err, docs) {
        if(err) {
            res.status(500).send({message: "Could not find requests from " + req.params.userName});
        } else {
            console.log(docs);
            res.send(docs);
        }
    });
};