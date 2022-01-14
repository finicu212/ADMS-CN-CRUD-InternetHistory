module.exports = function(app) {

    var user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/user', user.create);

    // Retrieve all users
    app.get('/users', user.findAll);

    // Retrieve a single user using their username
    app.get('/user/:userName', user.findOne);

    // Delete a user using their username
    app.delete('/user/:userName', user.delete);
}
