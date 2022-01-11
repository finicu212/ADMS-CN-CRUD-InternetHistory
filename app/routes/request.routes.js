module.exports = function(app) {

    var requests = require('../controllers/request.controller.js');

    // Create a new Request
    app.post('/request', requests.create);

    // Retrieve all requests
    app.get('/requests', requests.findAll);

    // delete request
    app.delete('/request/:requestId', requests.delete);

    // Retrieve all requests using ip
    app.get('/request/:userIp', requests.findByIp);
}