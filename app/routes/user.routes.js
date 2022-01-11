module.exports = function(app) {

    var user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/user', user.create);

    // Retrieve all users
    app.get('/users', user.findAll);

    // Retrieve a single user using their IP
    app.get('/user/:userIp', user.findOne);

    // Delete a user using their IP
    app.delete('/user/:userIp', user.delete);
}
