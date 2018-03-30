let mongoose = require('mongoose')
let userSchema = require('./user.model.server')
var userModel = mongoose.model('user', userSchema)

const SUCCESS = 0;
const FAILURE = -1;

exports.createUser = function (user) {
    var ret;
    var newUser = new userModel(user)
    newUser.save(function (error) {
        if (error) {
            ret = FAILURE
        } else {
            // return userId
            ret =  newUser._id
        }
    })
    return ret
}

exports.findUserById = function (userId) {
    var ret;
    userModel.find({ _id: userId }, function (error, docs) {
        if (error) {
            ret = ''
        } else {
            ret = docs;
        }
    })
    return ret
}

exports.findUserByUsername = function (username) {
    var ret;
    userModel.find({ username: username }, function (error, docs) {
        if (error) {
            ret = ''
        } else {
            ret = docs;
        }
    })
    return ret
}

exports.findUserByCredentials = function (username, password) {
    var ret;
    userModel.find({ username: username, password: password }, function (error, docs) {
        if (error) {
            ret = ''
        } else {
            ret = docs;
        }
    })
    return ret
}

exports.updateUser = function (userId, user) {
    var ret;
    userModel.update({ _id: userId }, user, function (error, rawResponse) {
        if (error) {
            ret = FAILURE
        } else {
            ret = SUCCESS
        }
    })
    return ret
}

exports.deleteUser = function (userId) {
    var ret;
    userModel.remove({ _id: userId }, function (error) {
        if (error) {
            ret = FAILURE
        } else {
            ret = SUCCESS
        }
    })
    return ret
}