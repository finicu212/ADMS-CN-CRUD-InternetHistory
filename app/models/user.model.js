var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  userName: {
      type: String,
      required: true
  },
  userIp: {
      type: String,
      required: true
  }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
