let mongoose = require('mongoose')
let userSchema = require('./user.schema.server')
var userModel = mongoose.model('user', userSchema)

const SUCCESS = 0;
const FAILURE = -1;

exports.createUser = function(user) {
  var newUser = new userModel(user)
  return newUser.save()
};

exports.findUserById = function(userId) {
  return userModel.findOne({_id: userId})
};

exports.findUserByUsername = function(username) {
  return userModel.findOne({username: username})
};

exports.findUserByCredentials = function(username, password) {
  return userModel.findOne({username: username, password: password})
};

exports.updateUser = function(userId, user) {
  return userModel.update({_id: userId}, user)
};

exports.deleteUser = function(userId) {
  return userModel.remove({_id: userId})
}