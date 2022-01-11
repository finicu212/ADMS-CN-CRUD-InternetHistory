var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and Save a new User
    if(!req.body.userName) {
        res.status(400).send({message: "user can not be empty"});
    }

    console.log(req.body);
    var user = new User({userName: req.body.userName, userIp: req.body.userIp});

    user.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the User."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving all users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    User.findOne({"userIp": req.params.userIp}).exec(function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with ip " + req.params.userIp});
        } else {
            res.send(data);
        }
    });
};


exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.deleteOne({"userIp": req.params.userIp}).exec(function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with ip " + req.params.id});
        } else {
            res.send({message: "user deleted successfully!"})
        }
    });
};
