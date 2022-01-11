var mongoose = require('mongoose');

var RequestSchema = mongoose.Schema({
    userIp: String,
    websiteName: String,
    websitePage: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Request', RequestSchema);
