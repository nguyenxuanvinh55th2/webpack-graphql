var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String
});

const User = mongoose.model('users', usersSchema);
module.exports = User
