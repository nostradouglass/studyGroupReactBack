var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {type: String, required: true},
  userPassword: {type: String, required: true},
  userPhone: { type: String}
});

module.exports = mongoose.model('User', UserSchema);